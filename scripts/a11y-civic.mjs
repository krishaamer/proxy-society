/**
 * WCAG browser-level regression scan of public civic routes.
 * Requires the production Next build and Playwright Chromium.
 * This is automated detection, not a full accessibility certification.
 */
import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { setTimeout as delay } from "node:timers/promises";
import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";

const port = 34569;
const base = "http://127.0.0.1:" + port;
const child = spawn(process.execPath, ["node_modules/next/dist/bin/next","start","-p",String(port),"-H","127.0.0.1"], {
  env: { ...process.env, NODE_ENV: "production", NEXT_TELEMETRY_DISABLED: "1" },
  stdio: ["ignore", "pipe", "pipe"]
});
let diagnostics = "";
child.stdout.on("data", (data) => { diagnostics += data.toString(); });
child.stderr.on("data", (data) => { diagnostics += data.toString(); });
let browser;

async function start() {
  for (let i = 0; i < 60; i++) {
    if (child.exitCode !== null) throw new Error("Next server stopped: " + diagnostics);
    try {
      const r = await fetch(base + "/projects/chickens-no-cages", { signal: AbortSignal.timeout(2000) });
      if (r.ok) return;
    } catch {}
    await delay(250);
  }
  throw new Error("Next server startup timeout: " + diagnostics);
}

async function main() {
  await start();
  browser = await chromium.launch({ headless: true });
  const routes = [
    "/projects/chickens-no-cages",
    "/zh-tw/projects/chickens-no-cages",
    "/projects/chickens-no-cages/rights",
    "/zh-tw/projects/chickens-no-cages/rights",
  ];
  const tags = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"];
  let failed = 0;
  for (const viewport of [{ width: 1280, height: 900 }, { width: 390, height: 844 }]) {
    const page = await browser.newPage({ viewport });
    for (const path of routes) {
      await page.goto(base + path, { waitUntil: "load" });
      assert.equal(await page.locator("h1").count(), 1, "One primary heading on " + path);
      if (!path.endsWith("/rights")) {
        assert.equal(await page.locator("details").count(), 12, "12 entry initial paging");
        const field = page.getByRole("searchbox");
        await field.fill("Kruuse");
        assert.equal(await page.locator("details").count(), 1, "Search filters all 101 records");
        await field.fill("");
        await page.locator("details summary").first().click();
      }
      const result = await new AxeBuilder({ page }).withTags(tags).analyze();
      if (result.violations.length) {
        failed += result.violations.length;
        console.error(JSON.stringify({
          path, viewport, violations: result.violations.map(v => ({
            id: v.id, impact: v.impact, description: v.help, nodes: v.nodes.slice(0, 10).map(n => ({ target: n.target, summary: n.failureSummary }))
          }))
        }, null, 2));
      } else {
        console.log(JSON.stringify({ path, viewport, axeViolations: 0, scanned: result.passes.length }));
      }
    }
    await page.close();
  }
  assert.equal(failed, 0, "Axe reported WCAG A/AA violations. See log for failed selectors.");
  console.log("Automated WCAG browser scans passed on 4 routes at 2 viewport sizes.");
}

try { await main(); }
finally {
  if (browser) await browser.close();
  child.kill("SIGTERM");
  await delay(200);
  if (child.exitCode === null) child.kill("SIGKILL");
}
