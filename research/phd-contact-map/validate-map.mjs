import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import assert from "node:assert/strict";

const root = dirname(fileURLToPath(import.meta.url));
const read = name => readFileSync(join(root, name), "utf8");
const contacts = JSON.parse(read("contacts.json"));
const funding = JSON.parse(read("funding-routes.json"));

function parseCSV(text) {
  const rows = [];
  let row = [], field = "", quoted = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (ch === '"') {
      if (quoted && text[i + 1] === '"') { field += '"'; i++; }
      else quoted = !quoted;
    } else if (ch === "," && !quoted) { row.push(field); field = ""; }
    else if (ch === "\n" && !quoted) {
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else if (ch !== "\r" || quoted) field += ch;
  }
  assert.equal(quoted, false, "Unterminated CSV quoted field");
  if (field || row.length) { row.push(field); rows.push(row); }
  return rows;
}

function checkMirror(file, records, sources) {
  const [headers, ...rows] = parseCSV(read(file));
  assert.equal(new Set(headers).size, headers.length, file + " duplicate columns");
  assert.equal(rows.length, records.length, file + " record count");
  rows.forEach((row, i) => {
    assert.equal(row.length, headers.length, file + " column count, row " + i);
    headers.forEach((key, col) => {
      const record = records[i];
      const value = key === "source_urls"
        ? record.source_ids.map(id => sources[id].url).join(" | ")
        : Array.isArray(record[key]) ? record[key].join(" | ") : String(record[key] ?? "");
      assert.equal(row[col], value, file + " " + record.id + "." + key);
    });
  });
}

function checkSources(records, sources) {
  const ids = new Set();
  for (const record of records) {
    assert.ok(record.id && !ids.has(record.id), "Missing/duplicate ID " + record.id);
    ids.add(record.id);
    assert.match(record.checked_on, /^\d{4}-\d{2}-\d{2}$/);
    assert.ok(record.source_ids.length, "No evidence sources " + record.id);
    for (const id of record.source_ids) {
      assert.ok(sources[id], "Unresolved source " + id);
      const url = new URL(sources[id].url);
      assert.ok(["http:", "https:"].includes(url.protocol), "Non-web evidence source " + id);
    }
  }
  return ids;
}

function reportBlock(text, id) {
  const lines = text.split("\n");
  const start = lines.findIndex(line => line.startsWith("### ") && line.includes("(\x60" + id + "\x60)"));
  assert.notEqual(start, -1, "Missing report section " + id);
  let end = lines.findIndex((line, i) => i > start && line.startsWith("### "));
  if (end === -1) end = lines.length;
  return lines.slice(start, end).join("\n");
}

const ids = checkSources(contacts.contacts, contacts.sources);
checkSources(funding.routes, funding.sources);
checkMirror("contacts.csv", contacts.contacts, contacts.sources);
checkMirror("funding-routes.csv", funding.routes, funding.sources);

const coverage = contacts.metadata.current_coverage;
assert.equal(coverage.total_leads, contacts.contacts.length);
const geographies = [...new Set(contacts.contacts.flatMap(c => (c.geography || "").split(/\s*\/\s*/)).filter(Boolean))].sort();
assert.deepEqual(coverage.search_geographies, geographies);
assert.equal(coverage.search_geography_count, geographies.length);
assert.equal(coverage.university_and_architecture_school_organizations, new Set(coverage.university_and_architecture_school_network).size);
assert.equal(funding.metadata.route_count, funding.routes.length);
assert.equal(coverage.funding_routes, funding.routes.length);

const continuation = contacts.metadata.continuation;
assert.equal(continuation.new_leads, continuation.lead_ids.length);
assert.equal(continuation.retained_leads + continuation.new_leads, contacts.contacts.length);
const leadReport = read("continuation.md");
for (const id of continuation.lead_ids) {
  assert.ok(ids.has(id), "Unknown continuation lead " + id);
  const record = contacts.contacts.find(c => c.id === id);
  const block = reportBlock(leadReport, id);
  for (const key of ["name", "institution", "role", "location", "geography", "provider_type", "category", "priority", "evidence", "possible_contribution", "first_ask", "supervision_evidence", "unknowns", "contact_route_status", "contact_url", "checked_on"]) {
    assert.ok(block.includes(record[key]), "Lead report differs: " + id + "." + key);
  }
  if (record.email) assert.ok(block.includes(record.email), "Missing published email " + id);
  for (const source of record.source_ids) assert.ok(block.includes(contacts.sources[source].url), "Missing lead source " + source);
}
const routeReport = read("funding-and-recruitment.md");
for (const route of funding.routes) {
  for (const id of route.contact_ids) assert.ok(ids.has(id), "Unknown route contact " + id);
  if (route.deadline) {
    assert.match(route.deadline, /^\d{4}-\d{2}-\d{2}$/);
    assert.ok(route.deadline >= route.checked_on, "Past date in current primary deadline " + route.id);
  }
  const block = reportBlock(routeReport, route.id);
  for (const key of ["programme", "institution", "geography", "route_type", "status", "priority", "intake", "deadline_stage", "secondary_deadlines", "recruitment_evidence", "funding_evidence", "eligibility_caveats", "fit_assessment", "next_action", "unknowns", "deadline", "deadline_time", "deadline_timezone", "checked_on"]) {
    if (route[key]) assert.ok(block.includes(route[key]), "Funding report differs: " + route.id + "." + key);
  }
  assert.ok(block.includes(route.contact_ids.join(" | ")), "Missing route contact IDs " + route.id);
  for (const source of route.source_ids) assert.ok(block.includes(funding.sources[source].url), "Missing funding source " + source);
}

console.log(JSON.stringify({
  result: "PASS",
  leads: contacts.contacts.length,
  funding_routes: funding.routes.length,
  university_school_organizations: coverage.university_and_architecture_school_organizations,
  search_geographies: geographies.length,
  checks: ["CSV/JSON mirrors", "unique IDs", "source resolution", "route-to-contact links", "coverage counts", "report fields", "primary deadlines"]
}, null, 2));
