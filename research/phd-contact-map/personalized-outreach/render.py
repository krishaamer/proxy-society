#!/usr/bin/env python3
"""Render and validate research notes and unsent emails from records.json."""
import argparse
import csv
import io
import json
import re
from collections import Counter
from pathlib import Path
from urllib.parse import urlsplit

HERE = Path(__file__).resolve().parent
ROOT = HERE.parents[2]
CSV_FIELDS = (
    'lead_id', 'recipient', 'institution', 'published_role', 'contact_kind',
    'geographies', 'priority', 'email', 'contact_url', 'subject', 'status',
    'prepared_on', 'research_review', 'published_basis', 'basis_checked_on',
    'additional_source_findings', 'fit_assessment', 'supervision_evidence',
    'open_questions', 'route_review_notes', 'shared_route_lead_ids',
    'source_urls', 'source_review_methods', 'existing_relationship',
    'delivery_status', 'response', 'profile_path', 'draft_path',
    'body_word_count', 'body_character_count', 'compact_form_character_count',
    'personalized_opening', 'personalized_ask', 'body', 'compact_form_body',
)


def safe(value):
    return str(value).replace('|', '\\|').replace('\n', ' ')


def validate(data):
    records = data['records']
    contacts = json.loads((HERE.parent / 'contacts.json').read_text())['contacts']
    by_id = {c['id']: c for c in contacts}
    assert len(records) == len(contacts) == 303
    assert {r['lead_id'] for r in records} == set(by_id)
    for field in ('lead_id', 'body', 'personalized_opening', 'personalized_ask'):
        assert len({r[field] for r in records}) == len(records), 'Duplicate ' + field
    assert len({g for r in records for g in r['geographies']}) == 201
    for r in records:
        c = by_id[r['lead_id']]
        assert r['email'] == c['email'] and r['contact_url'] == c['contact_url'], r['lead_id']
        assert r['geographies'] == c['coverage_geographies'], r['lead_id']
        assert r['delivery_status'] == 'Not sent' and not r['response']
        assert c['outreach_in_this_task'] == 'None' and not c['response']
        assert r['published_basis'] and r['fit_assessment'] and r['supervision_evidence']
        assert r['sources'] and r['body'].startswith(r['salutation'])
        assert r['body_word_count'] == len(r['body'].split())
        assert r['body_character_count'] == len(r['body'])
        assert r['personalized_opening'] in r['body'] and r['personalized_ask'] in r['body']
        assert not re.search(r'\[(?:name|recipient|office|insert|your name)\]', r['body'], re.I)
        assert not re.search(r'\b(?:I hold|I have a|my degree|my MA|I am enrolled|I’m enrolled|as we discussed)\b', r['body'], re.I)
        for s in r['sources']:
            assert urlsplit(s['url']).scheme in ('http', 'https')
            assert not any(t in s['url'].lower() for t in ('awsaccesskeyid', 'signature=', 'security-token'))
        assert all(p in by_id and p != r['lead_id'] for p in r['shared_route_lead_ids'])
        if not r['email']:
            assert any('No verified email' in n for n in r['route_review_notes'])
        if r['compact_form_body']:
            assert r['compact_form_character_count'] == len(r['compact_form_body']) <= 1000
    by_record = {r['lead_id']: r for r in records}
    assert 'Admissions-process hold' in ' '.join(by_record['tsukamoto']['route_review_notes'])
    assert all(by_record[lid]['salutation'] == 'Dear Usman and Ling,' for lid in ('haque', 'tan'))
    assert by_record['world_north_korea']['salutation'] == 'Dear UIA Secretariat,'
    assert by_record['world_holy_see_vatican_city']['email'] == 'archiviofsp@fsp.va'


def render(data):
    validate(data)
    records = data['records']
    metadata = data['metadata']
    outputs = {}
    csv_buffer = io.StringIO(newline='')
    writer = csv.DictWriter(csv_buffer, fieldnames=CSV_FIELDS, lineterminator='\n')
    writer.writeheader()
    for r in records:
        row = {**r, 'source_urls': [s['url'] for s in r['sources']],
               'source_review_methods': [s['review_method'] for s in r['sources']]}
        writer.writerow({key: ' | '.join(row[key]) if isinstance(row.get(key), list) else row.get(key, '') for key in CSV_FIELDS})
    outputs[HERE / 'records.csv'] = csv_buffer.getvalue()
    common = [
        'Prepared **9 October 2026 (Asia/Manila)**. All **303 lead records** have a source-linked first-contact research note and an individually tailored English draft: 153 named people and 150 institutional, practice, team and government referral routes. **No messages were sent.**', '',
        'The drafts share a concise description of the proposed library/community-centre threshold comparison. Each has its own subject, published-work or office-role connection, and concrete ask. Referral offices are asked for an appropriate person; they are not presented as proven research collaborators or supervisors.', '',
        '## Research scope and remaining checks', '',
        f"The refresh attempted {metadata['direct_urls_attempted']} distinct existing public source/contact URLs. Source availability for the records is reported below. HTTP success establishes retrieved text, not the currency of every earlier fact. The notes preserve earlier check dates, distinguish indexed text and failed refreshes, and flag known redirects and role discrepancies. PDFs were sampled up to their first 30 pages. This is focused first-contact preparation, not a complete review of every publication or a full current-role audit.", '',
        '| Source review | Records |', '| --- | ---: |',
    ]
    for label, count in Counter(r['research_review'] for r in records).items():
        common.append(f'| {label} | {count} |')
    common += ['', 'Capacity, qualifying-degree eligibility, programme operation, funding terms, appointment status and contact delivery remain separate questions. The emails assert no degree, enrolment, prior relationship, agreed partner or field site. Country coverage retains the four indirect/external gaps from the world map.', '',
               '## Using a draft', '',
               'Review the recipient’s note and its route constraints, select a small first group, and confirm the current published channel. English is a working language; check recipient language and any translation. For methods and practice contacts, the first ask is advice or a conversation. A doctoral title or roster does not establish an available place.', '',
               'HAQUE TAN has two individually tailored alternatives for one joint message to Usman Haque and Ling Tan; choose or combine one. Shared mailbox/page groups are listed per note. Stagger approaches within the same department. Tsukamoto’s draft is held for the published general admissions process, because the lab does not respond individually to admissions email/phone requests. ELEMENTAL has a compact version within its published 1,000-character form limit. The Holy See route is the Fabbrica historical archive’s researcher email. North Korea’s version addresses the UIA secretariat in Paris for a referral.', '',
               'Every message remains an unsent draft for human review. Recording a draft does not authorize sending. No response, delivery, admission, funding offer or advisory agreement is recorded.', '']
    research_index = ['# Personalized architecture research and outreach', '', *common,
                      '## Provenance and maintenance', '',
                      f"Independent correspondence based on the [current research brief](../../../writing/proposals/architecture-of-delegated-presence.md), whose website source revision is `{metadata['brief_source_revision']}`, and contact-map snapshot `{metadata['contact_snapshot_revision']}`, plus the dated public-source review. The shared contact map contains the limited source-backed email/mentor corrections from this pass. Website route/content modules were not changed.", '',
                      '[Canonical records](records.json) · [CSV](records.csv) · [Email index](../../../writing/outreach/personalized/README.md) · [Contact map](../README.md) · [World coverage](../world-map.md)', '',
                      'Edit `records.json` for the draft and note content; edit the shared contact JSON for contact details. Keep these aligned, then run `python3 research/phd-contact-map/personalized-outreach/render.py`. Use `--check` to validate all IDs, coverage, text uniqueness, source URLs, constraints and generated exports. The existing contact-map renderer checks the shared map.', '',
                      '## Complete contact index', '',
                      '| Geography | Recipient | Research review | Research note | Email draft |',
                      '| --- | --- | --- | --- | --- |']
    writing_index = ['# Personalized architecture emails', '', *common,
                     '## Provenance', '',
                     f"Current independent English correspondence drafts based on the [Architecture of Delegated Presence brief](../../proposals/architecture-of-delegated-presence.md) and its source revision `{metadata['brief_source_revision']}`. They do not replace rendered website copy or the earlier reusable templates. [Research notes and evidence](../../../research/phd-contact-map/personalized-outreach/README.md) · [Canonical JSON](../../../research/phd-contact-map/personalized-outreach/records.json) · [CSV](../../../research/phd-contact-map/personalized-outreach/records.csv).", '',
                     '## Complete draft index', '', '| Geography | Recipient | Subject | Draft |', '| --- | --- | --- | --- |']
    for r in records:
        lid = r['lead_id']
        geography = ' · '.join(r['geographies'])
        research_index.append(f"| {safe(geography)} | {safe(r['recipient'])} | {safe(r['research_review'])} | [Note](profiles/{lid}.md) | [Draft](../../../{r['draft_path']}) |")
        writing_index.append(f"| {safe(geography)} | {safe(r['recipient'])} | {safe(r['subject'])} | [Draft]({lid}.md) |")
        profile = [f"# {r['recipient']} — research for first contact", '',
                   f"**Lead:** `{lid}`. **Reviewed:** {r['prepared_on']} (Asia/Manila). **Status:** {r['status']}.", '',
                   f"**Published affiliation:** {r['institution']}. **Recorded role:** {r['published_role']}.", '',
                   f"**Type:** {r['contact_kind']}. **Search geographies:** {geography}. **Priority:** {r['priority']}.", '',
                   '## Published evidence', '', r['published_basis'], '',
                   f"The underlying contact record was checked on **{r['basis_checked_on']}**. Source review this pass: **{r['research_review']}**. Availability is not confirmation that all role, programme or project claims remain current.", '']
        if r['additional_source_findings']:
            profile += [r['additional_source_findings'], '']
        profile += ['## Proposed fit and contribution', '', r['fit_assessment'], '',
                    '**Draft connection (assessment):** ' + r['personalized_opening'], '',
                    '**Concrete first ask (proposed):** ' + r['personalized_ask'], '',
                    '## Supervision and open questions', '', r['supervision_evidence'], '',
                    r['open_questions'], '',
                    'No current capacity, funding offer, admission, site permission or advisory agreement has been confirmed. Earlier relationships remain unknown; a first-contact draft does not imply that no earlier contact ever occurred.', '',
                    '## Contact route and review notes', '',
                    f"**Published email:** {r['email'] or 'No verified email recorded'}. **Public route:** [Published page]({r['contact_url']}). Delivery has not been tested.", '']
        profile += ['- ' + note for note in r['route_review_notes']] or ['No additional route constraint recorded; recheck the published channel before use.']
        profile += ['', '## Public sources', '']
        for n, s in enumerate(r['sources'], 1):
            profile += [f"{n}. [{s['title']}]({s['url']}) — reviewed {s['reviewed_on']}; {s['review_method']}. Underlying evidence date: {s['basis_record_checked_on']}. {s['retrieval_scope']}"]
        profile += ['', '## Prepared correspondence', '',
                    f"[Personalized email](../../../../{r['draft_path']}) · [Full index](../README.md) · [Structured record](../records.json).", '',
                    f"**Delivery:** {r['delivery_status']}. **Response:** None recorded. **Relationship:** {r['existing_relationship']}. No email, form or social message was sent.", '']
        outputs[ROOT / r['profile_path']] = '\n'.join(profile)
        draft = [f"# Email draft — {r['recipient']}", '',
                 f"**Status:** {r['status']}. **Prepared:** {r['prepared_on']} (Asia/Manila). **Lead ID:** `{lid}`.", '',
                 f"**Recipient:** {r['recipient']} — {r['institution']}.", '',
                 f"**Published email:** {r['email'] or 'No verified email recorded; use the published route to identify a channel'}. **Route:** [Published contact page]({r['contact_url']}).", '',
                 f"**Subject:** {r['subject']}", '',
                 f"**Research:** [Recipient note](../../../{r['profile_path']}). Sources and fit judgments are outside the message.", '',
                 '## Review notes', '']
        draft += ['- ' + note for note in r['route_review_notes']] or ['Recheck the published channel, research fit and preferred language before use.']
        draft += ['', '## Message', '', r['body'], '']
        if r['compact_form_body']:
            draft += [f"## Compact contact-form version — {r['compact_form_character_count']} characters", '', r['compact_form_body'], '']
        draft += ['## Provenance and delivery', '',
                  f"Independent correspondence draft based on the [current brief](../../proposals/architecture-of-delegated-presence.md), website source revision `{metadata['brief_source_revision']}`, contact snapshot `{metadata['contact_snapshot_revision']}` and the linked dated research note. Website copy is unchanged. No applicant credentials, existing relationship, partner, site or funding are asserted.", '',
                  f"Body: {r['body_word_count']} words. **Delivery: Not sent.** No reply, agreement or commitment recorded. Preparation does not authorize sending.", '']
        outputs[ROOT / r['draft_path']] = '\n'.join(draft)
    outputs[HERE / 'README.md'] = '\n'.join(research_index) + '\n'
    outputs[ROOT / 'writing/outreach/personalized/README.md'] = '\n'.join(writing_index) + '\n'
    # Check that every repository-local link in generated files resolves to an existing
    # artifact or another generated artifact. External sources remain public URLs.
    for path, content in outputs.items():
        for target in re.findall(r'\]\(([^)]+)\)', content):
            if target.startswith(('http://', 'https://', 'mailto:')):
                continue
            resolved = (path.parent / target.split('#')[0]).resolve()
            assert resolved in outputs or resolved.is_file(), f'Broken local link: {path}: {target}'
    return outputs


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--check', action='store_true', help='Validate without writing')
    args = parser.parse_args()
    data = json.loads((HERE / 'records.json').read_text())
    outputs = render(data)
    mismatches = []
    for path, content in outputs.items():
        if args.check:
            if not path.is_file() or path.read_text() != content:
                mismatches.append(str(path.relative_to(ROOT)))
        else:
            path.parent.mkdir(parents=True, exist_ok=True)
            path.write_text(content)
    if mismatches:
        raise SystemExit('Out-of-date exports: ' + ', '.join(mismatches))
    print(('Verified' if args.check else 'Rendered') + f' {len(outputs)} artifacts for all 303 research notes and drafts; 201 geographies; no sending.')


if __name__ == '__main__':
    main()
