/**
 * Browser-independent production smoke checks for the bilingual civic tracker.
 * Runs on a locally built Next.js server in GitHub CI; does not use real
 * politician correspondence, authenticate anywhere, or modify production.
 */
import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { setTimeout as delay } from "node:timers/promises";

const PORT = 34567;
const base = `http://127.0.0.1:${PORT}`;
const child = spawn(process.execPath, ["node_modules/next/dist/bin/next", "start", "-p", String(PORT), "-H", "127.0.0.1"], {
  env: { ...process.env, NODE_ENV: "production", NEXT_TELEMETRY_DISABLED: "1" },
  stdio: ["ignore", "pipe", "pipe"],
});
let serverOutput = "";
child.stdout.on("data", (data) => { serverOutput += data.toString(); });
child.stderr.on("data", (data) => { serverOutput += data.toString(); });

async function request(path, timeout = 10000) {
  const t = performance.now();
  const response = await fetch(base + path, { signal: AbortSignal.timeout(timeout) });
  const body = await response.text();
  return { response, body, ms: Math.round(performance.now() - t), bytes: Buffer.byteLength(body, "utf8") };
}

async function ready() {
  for (let i = 0; i < 50; i++) {
    if (child.exitCode !== null) throw new Error("Server exited early: " + serverOutput);
    try { const res = await request("/projects/chickens-no-cages", 2000); if (res.response.ok) return; }
    catch {}
    await delay(300);
  }
  throw new Error("Server not ready: " + serverOutput);
}

async function main() {
  await ready();
  const routes = [
    "/projects/chickens-no-cages",
    "/zh-tw/projects/chickens-no-cages",
    "/projects/chickens-no-cages/rights",
    "/zh-tw/projects/chickens-no-cages/rights",
  ];
  const results = [];
  for (const path of routes) {
    const { response, body, ms, bytes } = await request(path);
    assert.equal(response.status, 200, path + " status");
    assert.match(body, /<main\b/, path + " landmark");
    assert.match(body, /<h1\b/, path + " primary heading");
    assert.equal(response.headers.get("x-content-type-options"), "nosniff", path + " MIME hardening");
    assert.equal(response.headers.get("x-frame-options"), "DENY", path + " anti-framing");
    assert.equal(response.headers.get("referrer-policy"), "strict-origin-when-cross-origin", path + " privacy");
    assert.match(response.headers.get("content-security-policy")||"", /object-src 'none'/, path + " CSP");
    assert(!body.includes("thumb.wikimedia.org"), path + " no outdated portrait host");
    if (path.endsWith("/rights")) {
      assert(body.includes("hello@proxysociety.org"), path + " rights contact");
    } else {
      const rows = (body.match(/<details\b/g) || []).length;
      assert.equal(rows, 12, path + " limited initial directory entries");
      assert(body.includes("101"), path + " documented coverage");
      assert(body.includes("upload.wikimedia.org"), path + " correct Commons image host");
      assert((body.match(/loading="lazy"/g) || []).length >= 3, path + " lazily loaded portraits");
    }
    results.push({ path, ms, bytes });
  }

  // Warm one first-party optimized image through the local Next image endpoint.
  // This detects broken remote hostnames and forbidden remote patterns.
  const source = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Urmas_Kruuse.jpg/330px-Urmas_Kruuse.jpg";
  const path = "/_next/image?url=" + encodeURIComponent(source) + "&w=128&q=60";
  let success = false, last = "";
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const t = performance.now();
      const response = await fetch(base + path, { signal: AbortSignal.timeout(25000) });
      const data = Buffer.from(await response.arrayBuffer());
      const type = response.headers.get("content-type")||"";
      last = "status=" + response.status + " type=" + type + " bytes=" + data.length;
      if (response.ok && type.startsWith("image/") && data.length > 1000 && data.length < 100000) {
        results.push({ path: "/_next/image (Kruuse, 128px)", ms: Math.round(performance.now() - t), bytes: data.length });
        success = true;
        break;
      }
    } catch (error) { last = String(error); }
    await delay(500);
  }
  assert(success, "First-party Commons image optimization failed: " + last);
  for (const item of results) console.log(JSON.stringify(item));
  console.log("Smoke checks passed: bilingual routes, bounded initial DOM, image proxy, key security headers.");
}

try { await main(); }
finally {
  child.kill("SIGTERM");
  await delay(300);
  if (child.exitCode === null) child.kill("SIGKILL");
}
