/**
 * Maintenance-only helper. Run on a trusted CI runner to produce reproducible,
 * tiny, technically resized licensed Commons images for first-party hosting.
 * No secret material is included; see app/chicken-portrait-rights.ts for credits.
 */
import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { setTimeout as delay } from "node:timers/promises";
const images = [
  {
    "name": "arvo-aller.webp",
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Arvo_Aller_2023_%28cropped%29.jpg/250px-Arvo_Aller_2023_%28cropped%29.jpg"
  },
  {
    "name": "urmas-kruuse.webp",
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Urmas_Kruuse.jpg/330px-Urmas_Kruuse.jpg"
  },
  {
    "name": "zuleyxa-izmailova.webp",
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Z%C3%BCleyxa_Izmailova_2021._aasta_Arvamusfestivalil.jpg/330px-Z%C3%BCleyxa_Izmailova_2021._aasta_Arvamusfestivalil.jpg"
  }
];
const port = 34568;
const base = "http://127.0.0.1:" + port;
const child=spawn(process.execPath,["node_modules/next/dist/bin/next","start","-p",String(port),"-H","127.0.0.1"],{
  env:{...process.env,NODE_ENV:"production",NEXT_TELEMETRY_DISABLED:"1"},stdio:["ignore","pipe","pipe"]
});
let output="";
child.stderr.on("data",d=>{output+=d.toString()});
child.stdout.on("data",d=>{output+=d.toString()});
try {
  let ready=false;
  for(let attempt=0;attempt<40;attempt++) {
    if(child.exitCode!==null)throw Error("Server exited early: "+output);
    try{const r=await fetch(base+"/", {signal:AbortSignal.timeout(1800)});if(r.ok){ready=true;break}}catch{}
    await delay(300);
  }
  assert(ready,"Next test server did not start: "+output);
  for(const asset of images) {
    const url=base+"/_next/image?url="+encodeURIComponent(asset.url)+"&w=256&q=60";
    const r=await fetch(url,{signal:AbortSignal.timeout(40000),headers:{Accept:"image/webp"}});
    if (!r.ok) throw new Error(asset.name+" optimizer HTTP "+r.status+": "+(await r.text()).slice(0,140));
    const mime=r.headers.get("content-type")||"";
    const bytes=Buffer.from(await r.arrayBuffer());
    assert(mime.startsWith("image/webp"),asset.name+" invalid type "+mime);
    assert(bytes.length>800 && bytes.length<40000,asset.name+" unexpectedly large "+bytes.length);
    console.log("CIVIC_BASE64_ASSET:"+asset.name+":"+bytes.toString("base64"));
    console.log("CIVIC_ASSET_BYTES:"+asset.name+":"+bytes.length+":"+mime);
  }
} finally {
  child.kill("SIGTERM");
  await delay(250);
  if(child.exitCode===null)child.kill("SIGKILL");
}
