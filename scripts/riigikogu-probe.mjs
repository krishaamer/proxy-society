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
