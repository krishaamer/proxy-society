/**
 * Collect short *candidates*, never automatically verified political positions,
 * from the official Riigikogu plenary Open Data API. 2026-01-01..2026-10-22.
 * Output is a public, attributed research audit; no private email data.
 * Individual excerpts must be reviewed before featured quotation status.
 */
import fs from "node:fs/promises";

const BASE = "https://api.riigikogu.ee/api";
const delay = (ms) => new Promise((r) => setTimeout(r, ms));
const months = Array.from({length:10},(_,i)=>String(i+1).padStart(2,"0"));
const clean = (text) => String(text??"").replace(/<[^>]+>/g," ").replace(/&nbsp;/g," ").replace(/&amp;/g,"&").replace(/\s+/g," ").trim();
const norm = (s) => clean(s).toLocaleLowerCase("et-EE");
const strongCage = /(munakan|puurikan|kanade puur|kanu puuri|kanade (pidam|heaolu)|kanapuuri)/i;
const welfare = /(loomade heaolu|loomakait|loomaheaolu|loomade õiguste|loomade kaitse|lindude heaolu)/i;
const farming = /(põllumajandu|põllumajandus|munatootja|toidutootmi|toidujulgeolek|talupidaj|loomakasvatu)/i;
const generalRelevant = new RegExp([strongCage.source,welfare.source,farming.source].join("|"),"i");
const stripPrefix = (v) => v.replace(/^(?:Aseesimees|Esimees|Juhataja|Riigikogu aseesimees|Minister)\s+/i,"").trim();

async function json(url, maxMs = 80000) {
  let err;
  for (let attempt=0;attempt<3;attempt++){
    try{
      const r=await fetch(url,{signal:AbortSignal.timeout(maxMs),headers:{Accept:"application/json"}});
      if(!r.ok)throw Error(r.status+" "+(await r.text()).slice(0,170));
      return await r.json();
    }catch(e){err=e;await delay(1500+attempt*2500)}
  }
  throw Error(url+" "+String(err));
}

function classification(speech, itemTitle) {
  if (/828 SE|970 SE/.test(itemTitle)&&/(loomakait|puurispidam)/i.test(itemTitle)) return "cage_bill_debate";
  if (strongCage.test(speech)) return "laying_hen_cages";
  if (welfare.test(speech)) return "animal_welfare";
  if (farming.test(speech)) return "agriculture_and_food";
  return "other_parliamentary_speech";
}

function excerpt(body, cls) {
  const s=clean(body);
  const fragments = s.match(/[^.!?]+[.!?]+|[^.!?]+$/g)||[s];
  const words = (x)=>x.trim().split(/\s+/).filter(Boolean).length;
  const relevant = cls==="cage_bill_debate"||cls==="laying_hen_cages" ? strongCage:
    cls==="animal_welfare" ? welfare:
    cls==="agriculture_and_food" ? farming : null;
  const bySubstance = fragments.map(x=>x.trim()).filter(x=>words(x)>6);
  const chosen=(relevant&&bySubstance.find(x=>relevant.test(x)))||
    bySubstance.find(x=>generalRelevant.test(x))||
    bySubstance.find(x=>words(x)>=11)||bySubstance[0]||s;
  const ws=chosen.trim().split(/\s+/).filter(Boolean);
  // Do not start with opening salutations even if a sentence carries policy words.
  if(ws.length<=24) return chosen;
  const slice=ws.slice(0,24).join(" ");
  return slice+" …";
}

const rawMembers=await json(BASE+"/plenary-members?lang=ET");
const members=rawMembers.filter(m=>m.active && m.plenaryMembership?.membershipNumber===15);
if(members.length!==101)throw Error("Unexpected active XV roster size "+members.length);
const byName=new Map(members.map(m=>[norm(m.fullName),m]));
const speeches=new Map(members.map(m=>[m.fullName,[]]));
const years={};
for(let i=0;i<months.length;i++){
  const month=months[i],y="2026-"+month;
  const end=month==="10"?"22":String(new Date(Date.UTC(2026,i+1,0)).getUTCDate()).padStart(2,"0");
  const url=BASE+"/steno/verbatims?startDate="+y+"-01&endDate="+y+"-"+end+"&lang=ET";
  let sittings=[];
  try{sittings=await json(url,100000)}catch(e){console.log("FETCH_ERROR",y,String(e));years[y]={error:String(e)};continue}
  let found=0;
  for(const sitting of sittings)for(const item of sitting.agendaItems||[]){
    const topic=clean(item.title);
    for(const event of item.events||[]){
      if(event.type!=="SPEECH"||!clean(event.text))continue;
      const member=byName.get(norm(stripPrefix(event.speaker||"")));
      if(!member)continue;
      const body=clean(event.text),category=classification(body,topic);
      let result={
        date:(event.date||sitting.date||"").slice(0,10),
        speaker:member.fullName,
        excerpt:excerpt(body,category),
        topic,
        category,
        source:sitting.link,
        wordCount:body.split(/\s+/).length
      };
      speeches.get(member.fullName).push(result);
      found++;
    }
  }
  years[y]={sittings:sittings.length,memberInterventions:found,withInterventions:[...speeches].filter(([_,v])=>v.length>0).length};
  console.log("COLLECTED",y,JSON.stringify(years[y]));
  await delay(1150);
}
const order={cage_bill_debate:4,laying_hen_cages:3,animal_welfare:2,agriculture_and_food:1,other_parliamentary_speech:0};
const sort=(a,b)=>order[b.category]-order[a.category]||b.date.localeCompare(a.date)||b.wordCount-a.wordCount;
const people=members.map(member=>{
  let all=speeches.get(member.fullName)||[];
  const distinct=[...new Map(all.map(x=>[x.date+"|"+x.excerpt,x])).values()];
  const ranked=distinct.sort(sort);
  let related=ranked.filter(x=>order[x.category]>0).slice(0,4);
  let topic=ranked.find(x=>order[x.category]>=2)||null;
  const other=ranked.find(x=>x.category==="other_parliamentary_speech"&&x.wordCount>=20)||
    ranked.find(x=>x.category==="agriculture_and_food")||null;
  return {
    name:member.fullName,
    uuid:member.uuid,
    officialSource:"https://api.riigikogu.ee/api/plenary-members?lang=ET",
    activeMemberAsOf:"2026-10-23",
    parliamentaryInterventions:all.length,
    highestRelevant:topic,
    topicCandidates:related,
    otherParliamentaryExcerpt:other,
    quoteStatus:topic?"topic_candidate_unverified":other?"unrelated_quote_candidate_unverified":"no_2026_quote_found"
  };
});
const summary={
  asOf:"2026-10-23",
  queryWindow:"2026-01-01 to 2026-10-22",
  source:"https://api.riigikogu.ee/api/steno/verbatims",
  rosterSource:"https://api.riigikogu.ee/api/plenary-members?lang=ET",
  caveat:"Machine-extracted short verbatim excerpts are candidates only, not vetted expressions of a policy position. Some are questions or procedural remarks; context must be checked.",
  months:years,
  counts:{
    members:people.length,
    withAny2026Speech:people.filter(p=>p.parliamentaryInterventions>0).length,
    withCageOrWelfareCandidate:people.filter(p=>p.highestRelevant).length,
    withOtherSpeechFallback:people.filter(p=>p.otherParliamentaryExcerpt).length,
    withNo2026Speech:people.filter(p=>p.parliamentaryInterventions===0).length
  }
};
const directory="research/chickens-no-cages";
await fs.mkdir(directory,{recursive:true});
await fs.writeFile(directory+"/official-2026-speech-audit.json",JSON.stringify({summary,people},null,2)+"\n");
console.log("SUMMARY_JSON",JSON.stringify(summary));
for(const p of people.filter(p=>p.highestRelevant))console.log("RELEVANT",JSON.stringify({name:p.name,category:p.highestRelevant.category,excerpt:p.highestRelevant.excerpt,url:p.highestRelevant.source,topic:p.highestRelevant.topic}).slice(0,1000));
