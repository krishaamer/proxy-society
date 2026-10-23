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
    "/et/projects/chickens-no-cages",
    "/et/projects/chickens-no-cages/rights",
  ];
  const results = [];
  for (const path of routes) {
    const { response, body, ms, bytes } = await request(path);
    assert.equal(response.status, 200, path + " status");
    assert.match(body, /<main\b/, path + " landmark");
    assert.match(body, /<h1\b/, path + " primary heading");
    if (path.startsWith("/et/")) {
      assert.match(body, /<main[^>]+lang="et"/, path + " Estonian content language");
      assert(body.includes("Kanad ilma puurideta") || body.includes("Allikad, isikuandmed"), path + " translated content");
    }
    if (path === "/projects/chickens-no-cages" || path === "/zh-tw/projects/chickens-no-cages") {
      assert(body.includes("/et/projects/chickens-no-cages"), path + " Estonian language switch");
    }
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
      assert(body.includes("/portraits/urmas-kruuse.webp"), path + " first-party cached portrait");
      assert((body.match(/loading="lazy"/g) || []).length >= 3, path + " lazily loaded portraits");
    }
    results.push({ path, ms, bytes });
  }

  // All three CC-licensed photos must be small, locally served WebP files.
  const portraits = [
    ["arvo-aller.webp", 12244],
    ["urmas-kruuse.webp", 2230],
    ["zuleyxa-izmailova.webp", 5148],
  ];
  let totalPhotoBytes = 0;
  for (const [name, expectedSize] of portraits) {
    const t = performance.now();
    const response = await fetch(base + "/portraits/" + name, { signal: AbortSignal.timeout(10000) });
    const bytes = Buffer.from(await response.arrayBuffer());
    assert.equal(response.status, 200, name + " HTTP");
    assert.match(response.headers.get("content-type") || "", /image\/webp/, name + " MIME");
    assert.equal(bytes.slice(0, 4).toString("ascii"), "RIFF", name + " RIFF");
    assert.equal(bytes.slice(8, 12).toString("ascii"), "WEBP", name + " WebP magic");
    assert.equal(bytes.length, expectedSize, name + " source file unexpectedly changed");
    assert(bytes.length < 20000, name + " file budget");
    totalPhotoBytes += bytes.length;
    results.push({ path: "/portraits/" + name, ms: Math.round(performance.now() - t), bytes: bytes.length });
  }
  assert(totalPhotoBytes < 30000, "Civic portrait payload exceeds 30 KB");
  const remote = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Urmas_Kruuse.jpg/330px-Urmas_Kruuse.jpg";
  const blocked = await fetch(base + "/_next/image?url=" + encodeURIComponent(remote) + "&w=256&q=75");
  assert.equal(blocked.status, 400, "Remote image proxy should reject all external URLs");
  for (const item of results) console.log(JSON.stringify(item));
  console.log("Smoke checks passed: bilingual routes, bounded initial DOM, local licensed images, blocked remote proxy, key security headers.");
}

try { await main(); }
finally {
  child.kill("SIGTERM");
  await delay(300);
  if (child.exitCode === null) child.kill("SIGKILL");
}
