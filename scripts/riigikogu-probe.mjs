// Temporary diagnostic for Riigikogu open-data JSON, no names/correspondence added.
const urls = [
  "https://api.riigikogu.ee/api/steno/verbatims?startDate=2026-04-22&endDate=2026-04-22&lang=ET",
  "https://api.riigikogu.ee/api/plenary-members?lang=ET",
  "https://api.riigikogu.ee/api/steno/speeches/last?lang=ET"
];
for (const url of urls) {
  try {
    const response = await fetch(url, { signal: AbortSignal.timeout(30000), headers: { Accept: "application/json" } });
    const raw=await response.text();
    console.log("PROBE",url,"status",response.status,"bytes",raw.length,"type",response.headers.get("content-type"));
    let j=JSON.parse(raw);
    console.log("DATA_TYPE",Array.isArray(j)?"array":typeof j,"keys",Object.keys(j).slice(0,24));
    if(Array.isArray(j))console.log("ITEM",JSON.stringify(j[0]).slice(0,1800));
    else console.log("BODY",JSON.stringify(j).slice(0,1800));
  } catch(e){console.log("ERROR",url,String(e))}
  await new Promise(r=>setTimeout(r,1100));
}

const membersResponse = await fetch("https://api.riigikogu.ee/api/plenary-members?lang=ET", {signal: AbortSignal.timeout(30000)});
const members = await membersResponse.json();
const active=members.filter(m=>m.active && m.plenaryMembership?.membershipNumber===15);
console.log("ACTIVE XV",active.length,active.map(x=>x.fullName).join(" | "));
const all=members.filter(m=>m.plenaryMembership?.membershipNumber===15);
console.log("ALL XV",all.length);
await new Promise(r=>setTimeout(r,1150));
let a=active.find(x=>x.fullName==="Tiit Maran")||active[0];
const last=await fetch("https://api.riigikogu.ee/api/steno/speeches/last?userUuid="+encodeURIComponent(a.uuid)+"&lang=ET",{signal: AbortSignal.timeout(30000)});
console.log("SPEECH/LAST",a.fullName,last.status,JSON.stringify(await last.json()).slice(0,2000));
await new Promise(r=>setTimeout(r,1150));
const verbal=await(await fetch("https://api.riigikogu.ee/api/steno/verbatims?startDate=2026-04-22&endDate=2026-04-22&lang=ET",{signal:AbortSignal.timeout(30000)})).json();
for (let v of verbal) {
  console.log("VERBATIM_META",v.date,v.title,v.link,"ITEMS",v.agendaItems?.length);
  for(let item of v.agendaItems||[]){
    if(item.title?.includes("Loomakait")||item.title?.includes("828"))
       console.log("CAGE_ITEM",JSON.stringify({date:item.date,title:item.title,agendaItemUuid:item.agendaItemUuid,speakers:(item.events||[]).filter(x=>x.type==="SPEECH").map(x=>({speaker:x.speaker,date:x.date,text:x.text?.slice(0,150),link:x.link}))}).slice(0,11000));
  }
}
