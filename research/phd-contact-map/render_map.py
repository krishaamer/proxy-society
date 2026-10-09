#!/usr/bin/env python3
"""Render the research map's CSV and readable world reports from its JSON records."""
import argparse
import csv
import io
import json
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parent
REGIONS = ('Africa', 'Americas', 'Asia', 'Europe', 'Oceania')
CONTACT_FIELDS = (
    'id', 'name', 'institution', 'role', 'location', 'geography', 'category', 'priority',
    'strands', 'email', 'contact_url', 'evidence', 'possible_contribution', 'first_ask',
    'supervision_evidence', 'unknowns', 'source_urls', 'checked_on', 'existing_relationship',
    'outreach_in_this_task', 'response', 'next_follow_up', 'contact_kind',
    'coverage_geographies', 'coverage_basis', 'verification', 'research_batch',
    'provider_type', 'region', 'contact_route_status', 'source_batch',
)
COVERAGE_FIELDS = (
    'geography', 'un_name', 'region', 'scope', 'status', 'lead_ids', 'contact_kind', 'local_contact_gap',
    'provisional_route', 'checked_on', 'coverage_reviewed_on', 'research_method',
    'searches', 'source_urls', 'open_questions',
)

def csv_text(rows, fields):
    out = io.StringIO(newline='')
    writer = csv.DictWriter(out, fieldnames=fields, lineterminator='\n')
    writer.writeheader()
    for row in rows:
        writer.writerow({k: ' | '.join(row[k]) if isinstance(row.get(k), list) else row.get(k, '') for k in fields})
    return out.getvalue()

def safe(text):
    return str(text).replace('|', '\\|').replace('\n', ' ')

def render():
    data = json.loads((ROOT / 'contacts.json').read_text())
    coverage = json.loads((ROOT / 'world-coverage.json').read_text())
    people = data['contacts']
    countries = coverage['countries']
    by_id = {p['id']: p for p in people}
    assert len(by_id) == len(people), 'Duplicate contact ID'
    assert len({c['geography'] for c in countries}) == coverage['summary']['search_geographies'], 'Duplicate or missing search geography'
    assert Counter(c['scope'] for c in countries) == {'UN member state': 193, 'UN observer state': 2, 'Additional search geography': 6}
    for p in people:
        assert p['source_ids'], p['id']
        assert all(sid in data['sources'] for sid in p['source_ids']), p['id']
        assert p['coverage_geographies'], p['id']
        assert p['evidence'] and p['possible_contribution'] and p['supervision_evidence'] and p['unknowns'], p['id']
        if p['outreach_in_this_task'] == 'None':
            assert not p['response'], p['id']
    for c in countries:
        expected = [p['id'] for p in people if c['geography'] in p['coverage_geographies']]
        assert c['lead_ids'] == expected and expected, c['geography']
        urls = list(dict.fromkeys(data['sources'][sid]['url'] for lid in expected for sid in by_id[lid]['source_ids']))
        assert c['source_urls'] == urls, c['geography']
    summary = coverage['summary']
    assert summary['total_leads'] == len(people)
    assert summary['named_people'] == sum('named' in p['contact_kind'].lower() for p in people)
    assert summary['referral_contacts'] == len(people) - summary['named_people']
    assert summary['local_country_connected_route'] == sum(not c['local_contact_gap'] for c in countries)
    assert summary['provisional_routes'] == sum(c['provisional_route'] for c in countries)
    assert summary['geographies_with_named_lead'] == sum(any('named' in by_id[lid]['contact_kind'].lower() for lid in c['lead_ids']) for c in countries)

    rows = [{**p, 'source_urls': [data['sources'][sid]['url'] for sid in p['source_ids']]} for p in people]
    output = {'contacts.csv': csv_text(rows, CONTACT_FIELDS), 'world-coverage.csv': csv_text(countries, COVERAGE_FIELDS)}
    lines = [
        '# Proxy Society — world architecture contact map', '',
        'Country coverage reviewed **9 October 2026 (Asia/Manila)**. This is a first research pass for the [Architecture of Delegated Presence](../../writing/proposals/architecture-of-delegated-presence.md). It maps potential conversations and referral routes; no outreach was performed.', '',
        f"The tracker contains **{summary['total_leads']} leads: {summary['named_people']} named people and {summary['referral_contacts']} institutional/practice referral contacts**. There are named people connected to {summary['geographies_with_named_lead']} search geographies. A named practitioner or methods academic is not automatically an architecture professor or doctoral supervisor.", '',
        '## Scope and evidence', '',
        'The baseline is the 193 UN member states plus the two observer states, Palestine and the Holy See. Taiwan, Kosovo, the Cook Islands, Niue and Western Sahara are additional explicit search geographies. Hong Kong is retained separately from the earlier global map: **201 rows in total**. The baseline was compared with the current UN list and has no missing member states. Readable short country names are used; the coverage data also records the UN names, including Naoero for Nauru. Inclusion is a research convention, not a sovereignty claim. Regions are navigation groups. [UN members](https://research.un.org/en/unmembers/currentmembers) · [UN observer states](https://research.un.org/en/unmembers/observers).', '',
        'China, Taiwan, South Korea and Japan retain the four initial named leads each in the [East Asia report](east-asia.md). The prior global and regional additions are retained in the [global report](global-expansion.md) and [continuation](continuation.md), alongside the [18-route funding screen](funding-and-recruitment.md). The existing 118 leads are preserved; the world sweep adds 185 after reconciling duplicate records for Achim Menges and Christian Kühn. Their existing detailed records remain canonical. Country completeness does not change advisory priorities or refresh the earlier funding findings.', '',
        '| Coverage result | Search geographies | Meaning |',
        '| --- | ---: | --- |',
        f"| Published country-connected route | {summary['local_country_connected_route']} | Named professional, architecture unit/body, practice office, or an explicitly adjacent government building-design office. |",
        '| External connection only | 3 | Marshall Islands, Niue and Western Sahara: a practitioner based elsewhere with documented work or research. |',
        '| Indirect referral only | 1 | North Korea: UIA identifies the Korean Architects Union; a local contact route remains unresolved. |', '',
        f"**{summary['provisional_routes']} routes are flagged for extra verification** because evidence is dated, directory-sourced or access-limited. Dates checked refer to reviewing the published evidence, not confirmation that an appointment or mailbox remains active. Website/contact-form routes are acceptable; emails stay blank when not verified. Delivery has not been tested.", '',
        'Evidence and proposed contribution are separate fields. Generic country referrals establish access to an architecture network, not demonstrated expertise in delegated presence. Formal PhD eligibility, current supervision capacity, funding and programme operation require a separate pass. Earlier relationships and outreach are unknown.', '',
        '## Open coverage gaps and verification queue', '',
        '| Geography | Current route | Remaining work |',
        '| --- | --- | --- |',
    ]
    for c in countries:
        if c['local_contact_gap'] or c['provisional_route']:
            names = ' · '.join(by_id[lid]['name'] for lid in c['lead_ids'])
            reason = 'Find a locally based architect or academic with a direct route.' if c['local_contact_gap'] else 'Reconfirm the dated, directory-sourced or access-limited route before use.'
            lines.append(f"| {safe(c['geography'])} | {safe(names)} | {reason} |")
    lines += ['', '## Country index', '', 'Each lead links to its readable evidence and fit note. The CSV/JSON files retain the contact, source links, checked date, open questions and research method for every row.', '']
    for region in REGIONS:
        lines += ['### ' + region, '', '| Geography | Lead / referral | Type | Coverage |', '| --- | --- | --- | --- |']
        for c in countries:
            if c['region'] != region:
                continue
            labels = []
            for lid in c['lead_ids']:
                p = by_id[lid]
                if p['research_batch'] == 'World expansion':
                    target = f'world-leads/{region.lower()}.md#{lid}'
                elif p['id'] in data['metadata']['regional_expansion']['lead_ids']:
                    target = 'east-asia.md'
                elif p['id'] in data['metadata']['global_expansion']['lead_ids']:
                    target = 'global-expansion.md'
                elif p['id'] in data['metadata']['continuation']['lead_ids']:
                    target = 'continuation.md'
                else:
                    target = 'README.md'
                labels.append(f"[{safe(p['name'])}]({target})")
            status = c['status'] + ('; provisional route' if c['provisional_route'] else '')
            lines.append(f"| {safe(c['geography'])} | {' · '.join(labels)} | {safe(c['contact_kind'])} | {safe(status)} |")
        lines.append('')
    lines += ['## Working from the map', '',
              'Qualify fit before preparing a personal approach: read a relevant work, identify a precise architectural question, and check the intended contribution. For a referral office, ask for a named researcher or architect first. For a potential supervisor, establish eligibility, programme route, availability and funding separately.', '',
              'Use the [current introduction](../../writing/outreach/architecture-research-introduction.md) for named contacts and the [world referral wording](../../writing/outreach/world-architecture-referral.md) for offices and associations. Both are unsent drafts. No reply, availability, admission or advisor agreement is recorded.', '',
              '## Data and maintenance', '',
              '- [All contacts — JSON](contacts.json) · [CSV](contacts.csv).',
              '- [World coverage — JSON](world-coverage.json) · [CSV](world-coverage.csv), including search queries/method and explicit gaps.',
              '- [Renderer](render_map.py): edit the canonical JSON records, update both coverage and contact entries when needed, then run `python3 research/phd-contact-map/render_map.py`. Use `--check` to detect inconsistent exports.', '',
              'UIA and Commonwealth Association directories were discovery sources. Stale links that redirected to unrelated commercial/gambling pages were excluded, including directory targets encountered for Pakistan, Botswana and Chad. Replacement country sources are recorded. Search results for South Korea, Kinshasa, foreign universities or people whose names resembled a country were not used to establish the wrong country connection.', '']
    output['world-map.md'] = '\n'.join(lines)
    for region in REGIONS:
        notes = ['# World architecture leads — ' + region, '', '[World coverage and limitations](../world-map.md) · [Full contact tracker](../contacts.csv)', '',
                 'New records checked 9 October 2026 (Asia/Manila). Existing priority and East Asia records remain in their earlier reports. Evidence below is published information; possible contribution and first ask are proposed research judgments. No outreach was performed.', '']
        for c in countries:
            if c['region'] != region:
                continue
            for lid in c['lead_ids']:
                p = by_id[lid]
                if p['research_batch'] != 'World expansion':
                    continue
                sources = ' · '.join(f"[Published source {i}]({data['sources'][sid]['url']})" for i, sid in enumerate(p['source_ids'], 1))
                notes += [f'<a id="{lid}"></a>', '', f"## {c['geography']} — {p['name']}", '',
                          f"**Type:** {p['contact_kind']}. **Affiliation:** {p['institution']}. **Published role:** {p['role']}.", '',
                          f"**Location / connection:** {p['location']}. **Coverage basis:** {p['coverage_basis']}.", '',
                          f"**Published contact:** {p['email'] or 'No verified direct email recorded'} · [Public route]({p['contact_url']}). **Checked:** {p['checked_on']}. **Verification:** {p['verification']}.", '',
                          f"**Evidence:** {p['evidence']} {sources}", '',
                          f"**Possible contribution (assessment):** {p['possible_contribution']}", '',
                          f"**First ask (proposed):** {p['first_ask']}", '',
                          f"**Supervision evidence:** {p['supervision_evidence']}", '',
                          f"**Open questions:** {p['unknowns']}", '',
                          f"**Status:** {p['priority']}. Existing relationship: {p['existing_relationship']}. Outreach in this task: {p['outreach_in_this_task']}. Response: {p['response'] or 'None recorded'}. Next follow-up: {p['next_follow_up'] or 'None recorded'}.", '']
        output[f'world-leads/{region.lower()}.md'] = '\n'.join(notes)
    return output

def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--check', action='store_true', help='Check exports without writing')
    args = parser.parse_args()
    output = render()
    mismatches = []
    for name, content in output.items():
        path = ROOT / name
        if args.check:
            if not path.exists() or path.read_text() != content:
                mismatches.append(name)
        else:
            path.parent.mkdir(parents=True, exist_ok=True)
            path.write_text(content)
    if mismatches:
        raise SystemExit('Out-of-date exports: ' + ', '.join(mismatches))
    print(('Verified' if args.check else 'Rendered') + f' {len(output)} CSV/report exports from canonical JSON records.')

if __name__ == '__main__':
    main()
