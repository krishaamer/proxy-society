/**
 * Reproducible integrity audit for the published, source-linked MP table.
 * Public speech excerpts are not themselves claims about support or opposition.
 */
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
const source=readFileSync("app/chicken-outreach-data.ts","utf8");
const marker="export const chickenMembers: ChickenMember[] = ";
const offset=source.indexOf(marker);
assert(offset>=0,"typed member array exists");
const members=JSON.parse(source.slice(offset+marker.length).trim().replace(/;\s*$/,""));
const audit=JSON.parse(readFileSync("research/chickens-no-cages/official-2026-speech-audit.json","utf8"));
assert.equal(members.length,101,"101 official current MPs");
assert.equal(audit.people.length,101,"101 official roster source entries");
assert.equal(new Set(members.map(x=>x.name)).size,101,"member names unique");
const official=new Map(audit.people.map(x=>[x.name,x]));
const isSafe=(url)=>{let u=new URL(url);return u.protocol==="https:"&&(/(^|\.)riigikogu\.ee$|(^|\.)err\.ee$|(^|\.)valitsus\.ee$|(^|\.)sotsid\.ee$/).test(u.hostname)};
let withExcerpt=0,withQuoted=0,issueExcerpt=0,nonIssue=0,additionalExternal=0;
for(const member of members){
 const x=official.get(member.name);
 assert(x,"official name must match "+member.name);
 assert.equal(member.parliamentarySource?.officialMemberUuid,x.uuid,"official member id "+member.name);
 assert.equal(member.parliamentarySource?.recordedSpeechesIn2026,x.parliamentaryInterventions);
 assert(isSafe(member.parliamentarySource.officialRoster),"official roster source");
 const research=member.publicResearch;
 assert(research&&research.excerpt&&research.source&&research.sourceTitle&&research.date,"attributable speech record "+member.name);
 assert(isSafe(research.source),"approved research source host "+member.name);
 assert(research.excerpt.length < 420,"short non-wholesale research excerpt "+member.name);
 assert(!research.excerpt.includes("<script"),"no HTML markup in public snippet");
 if(x.parliamentaryInterventions>0){
  const candidates=[x.highestRelevant,x.otherParliamentaryExcerpt,...x.topicCandidates].filter(Boolean);
  assert(candidates.some(y=>y.excerpt===research.excerpt && y.source===research.source && y.date===research.date),"research matches an official speech event "+member.name);
  assert.equal(research.verifiedAttribution,"official_named_public_speech");
 } else{
  additionalExternal++;
  assert.equal(research.verifiedAttribution,"official_published_individual_statement");
  assert(["Hanno Pevkur","Andres Sutt"].includes(member.name),"only expected special cited individuals");
 }
 withExcerpt++;
 if(member.quote){
  withQuoted++;
  assert(isSafe(member.quote.source),"reviewed quote source host "+member.name);
  assert(member.quote.text.length>20,"substantive named quote "+member.name);
  assert(member.quote.date,"date included");
  if(member.quote.source.includes("stenogrammid.riigikogu.ee")){
   assert(x.topicCandidates.some(c=>c.excerpt===member.quote.text&&c.date===member.quote.date&&c.source===member.quote.source),"checked official transcript quote "+member.name);
  }
 }
 if(["cage_bill_debate","laying_hen_cages"].includes(research.category))issueExcerpt++;
 else nonIssue++;
 assert.equal(member.outreach.status,"not_contacted","No outreach may be inferred from a draft");
 assert(member.outreach.contactedAt===null&&member.outreach.repliedAt===null,"No speculative correspondence");
}
assert.equal(withExcerpt,101);
assert.equal(additionalExternal,2);
assert.equal(withQuoted,20);
assert.equal(issueExcerpt+nonIssue,101);
const summary={members:members.length,individualPublicExcerpts:withExcerpt,sourceCheckedQuoted:withQuoted,topicRelatedSpeechExcerpts:issueExcerpt,otherSpeechExcerpts:nonIssue,fallbackExternalStatements:additionalExternal,uncontacted:members.filter(m=>m.outreach.status==="not_contacted").length};
console.log("PUBLIC_RESEARCH_VALIDATION",JSON.stringify(summary));
