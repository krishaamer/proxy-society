#!/usr/bin/env python3
"""Validate and render the source-linked Anthology cohort and unsent correspondence."""
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
WRITING = ROOT / 'writing/outreach/anthology-manila'


def safe(value):
    return str(value).replace('|', '\\|').replace('\n', ' ')


def validate(data):
    people = data['people']
    ids = {p['id'] for p in people}
    sources = {s['id']: s for s in data['sources']}
    sessions = {s['id']: s for s in data['sessions']}
    counts = data['metadata']['counts']
    assert len(ids) == len(people) == counts['people']
    assert len(sources) == len(data['sources']) == counts['sources']
    assert len(sessions) == len(data['sessions']) == counts['sessions_and_associated_records']
    assert counts['published_email_routes'] == sum(bool(p['contact_email']) for p in people)
    assert counts['additional_individual_or_practice_evidence'] == sum(bool(p['professional_findings']) for p in people)
    assert sum(p['group'] == 'programme' for p in people) == 87
    for s in sources.values():
        assert s['checked_on'] == '2026-10-10'
        assert urlsplit(s['url']).scheme in ('https', 'http')
        assert s['finding'] and s['review_method']
    for s in sessions.values():
        assert set(s['participant_ids'] + s['moderator_ids']) <= ids
        assert s['source_id'] in sources
    for field in ('subject', 'project_case', 'personalized_ask', 'body'):
        assert len({p['draft'][field] for p in people}) == len(people), 'Duplicate ' + field
    global_ids = {p['id'] for p in json.loads((HERE.parent / 'contacts.json').read_text())['contacts']}
    for p in people:
        assert p['checked_on'] == '2026-10-10' and p['delivery_status'] == 'Not sent'
        assert not p['response'] and p['source_ids'] and set(p['source_ids']) <= sources.keys()
        expected_sessions = {s['id'] for s in sessions.values() if p['id'] in s['participant_ids'] + s['moderator_ids']}
        assert set(p['session_ids']) == expected_sessions, p['id']
        assert set(e['session_id'] for e in p['event_evidence']) == expected_sessions
        for e in p['event_evidence']:
            assert e['title'] == sessions[e['session_id']]['title']
            assert e['source_id'] == sessions[e['session_id']]['source_id']
        if p['global_lead_id']:
            assert p['global_lead_id'] in global_ids
        if p['contact_email']:
            assert any(r['email'] == p['contact_email'] and r['url'] == p['contact_url'] for r in p['published_routes'])
            assert re.fullmatch(r'[^@\s]+@[^@\s]+\.[^@\s]+', p['contact_email'])
        else:
            assert 'hold' in p['route_status'].lower()
        d = p['draft']
        assert d['status'].startswith('Unsent') and d['prepared_on'] == p['checked_on']
        assert d['body_word_count'] == len(d['body'].split())
        assert d['anchor_source_id'] in p['source_ids']
        assert sources[d['anchor_source_id']]['url'] in d['personalized_opening']
        assert d['body'].startswith(d['salutation'])
        assert all(d[f] in d['body'] for f in ('personalized_opening', 'project_case', 'personalized_ask'))
        assert re.search(r'\b(?:AI|robot|agent)\b', d['body'])
        assert not re.search(r'\b(?:we met|I attended|I heard your|as we discussed|I hold|my degree)\b', d['body'], re.I)
        assert p['fit_assessment'] and p['supervision_evidence'] and p['open_questions']
    by = {p['id']: p for p in people}
    assert any(e['title'] == 'Negotiated Belonging' for e in by['kozo_kadowaki']['event_evidence'])
    assert not any(e['title'] == 'Temporal Ground' for e in by['kozo_kadowaki']['event_evidence'])
    assert 'doctoral supervision' in by['kozo_kadowaki']['supervision_evidence']
    assert 'PhD student' in by['alakesh_dutta']['supervision_evidence']
    for group in data['coordination_groups']:
        assert set(group['people']) <= ids and group['instruction']
        assert all(group['id'] in by[i]['coordination_groups'] for i in group['people'])
    assert data['organiser_enquiry']['delivery_status'] == 'Not sent'


def render(data):
    validate(data)
    people = sorted(data['people'], key=lambda p: (p['priority_rank'], p['name']))
    sources = {s['id']: s for s in data['sources']}
    sessions = {s['id']: s for s in data['sessions']}
    output = {}
    counts = data['metadata']['counts']
    header = ['# Anthology Manila architecture and PhD contact cohort', '',
              'Status: researched leads and **unsent** writing. Checked 10 October 2026, Asia/Manila.', '',
              'Focus: **Anthology ASEAN Architecture Festival 2026**, Intramuros, Manila, 2–4 October; theme **Shared Ground: Architecture of Care, Culture, and Collective Futures**. [Official event](https://www.anthologyfest.com/) · [Programme links](https://www.anthologyfest.com/program2026).', '',
              f"**{counts['people']} named people, 102 individual drafts, {counts['sources']} sources, and one organiser enquiry.** {counts['additional_individual_or_practice_evidence']} people have additional individual, institutional or practice evidence; 41 have event-role/documentation research only. {counts['published_email_routes']} records have published professional email routes, including shared mailboxes. These are reviewable drafts, not 102 independently routed messages ready for a bulk send.", '',
              'The source-linked [JSON](contacts.json) owns the roster, sessions, evidence, fit, route checks and draft text. [CSV](contacts.csv) · [Source/version audit](sources.md) · [Session network](sessions.md) · [Writing index](../../../writing/outreach/anthology-manila/README.md).', '',
              'This focused cohort extends the project research alongside the [303-lead global tracker](../README.md). Andra Matin and Abelardo Tolentino retain links to their existing global IDs; those global records and the 201-geography coverage counts are unchanged. The Anthology-specific drafts are the current wording for this event approach; select them instead of sending the older general-map drafts to the same people.', '',
              '## Who to approach first', '',
              'Priority is a research-fit assessment. It does not establish availability, funding or consent. Start with one doctoral conversation and one local methods/site conversation, then use referrals to refine the next approach.', '',
              '| Person | Proposed contribution | Evidence and remaining check | Draft |', '| --- | --- | --- | --- |']
    for p in people:
        if p['priority_rank'] > 20:
            continue
        header.append(f"| [{safe(p['name'])}](profiles/{p['id']}.md) | {safe(p['contribution_summary'])} | {safe(p['supervision_evidence'])} | [Email](../../../{p['draft']['path']}) |")
    header += ['', '## What is covered', '',
               '- 87 unique names in the main linked programme, across talks/keynotes, Shelter Dialogues, Anthology RAW critiques and Ground Works.',
               '- Mybelle Aragon-GoBio appears only in the footer-linked programme variant; her participation needs confirmation.',
               '- Su Chang is named as a HKU Ground Works workshop lead alongside Eunice Seng.',
               '- Jose Marie Tan and Jose Pedro Recio are additional publicly named media-preview participants.',
               '- Five additional Medallion Tower project-team members and the report author Ith Sochetra are named by ReEdge; three bylined preview/report authors, an opening-report author and one opening-event guest are retained as documentation/referral contacts.', '',
               'The published marketing total is **128 speakers**. It cannot be reconciled to 128 unique people from the located sources; it may reflect additional presenters or other programme counting. A missing-person count is not inferred. Unnamed RAW presenters, workshop students, curators, production staff and attendees remain a verification gap. The [organiser enquiry](../../../writing/outreach/anthology-manila/organiser-roster-enquiry.md) requests a final public roster, credits and recordings. It does not request private attendee information.', '',
               '## Source distinctions that affect outreach', '',
               '- The two official PDFs differ. The main download supplies the working session assignments; no date establishes which PDF is newer.',
               '- Visual layout places Kozo Kadowaki with Alexander Furunes and Yuta Shimoda in **Negotiated Belonging**. Temporal Ground pairs Buck Sia with Marianne Amores-Dutta and Alakesh Dutta. Text extraction can mix these adjacent columns.',
               '- HKU identifies Eunice Seng as Head/Associate Professor and former PhD Programme Director (2015–2024). NTNU currently identifies Furunes as Researcher; a festival Meiji label and a historical visit do not establish a current Meiji professorship.',
               '- Meiji explicitly marks Kadowaki for doctoral supervision. NUS identifies Alakesh Dutta as a practitioner/tutor and its design lab also identifies him as a Research Associate/PhD student; he is a peer/methods contact.',
               '- Programme topics are evidence of advertised roles, not evidence of personal views or what was said. Drafts never claim a meeting, attendance or prior relationship.',
               '- The official site also carries speakers from 2016–2021; those historical lists are outside this 2026 cohort.', '',
               '## Full named roster', '',
               '| Person | Advertised / separately checked affiliation | Proposed role | Research depth | Route | Draft |', '| --- | --- | --- | --- | --- | --- |']
    for p in people:
        route = p['contact_email'] or 'Routing hold'
        header.append(f"| [{safe(p['name'])}](profiles/{p['id']}.md) | {safe(p['published_affiliation'])} | {safe(p['proposed_role'])} | {'Added professional evidence' if p['professional_findings'] else 'Event evidence; profile pending'} | {safe(route)} | [Draft](../../../{p['draft']['path']}) |")
    header += ['', '## Coordinating shared connections', '']
    by = {p['id']: p for p in people}
    for g in data['coordination_groups']:
        header.append('- **' + ', '.join(by[i]['name'] for i in g['people']) + ':** ' + g['instruction'])
    header += ['', '## Maintaining the record', '',
               'Edit `contacts.json`, then run `python3 research/phd-contact-map/anthology-manila/render.py`. Run it with `--check` to verify JSON/CSV/research notes/writing parity. Record actual communication only when evidenced, in the appropriate private correspondence storage; do not place private replies in this public repository.', '']
    output[HERE / 'README.md'] = '\n'.join(header)
    session_text = ['# Anthology 2026 session and people network', '', 'Checked 10 October 2026. Session membership is advertised programme evidence unless the status explicitly says credited/report evidence. None establishes user attendance.', '']
    for s in data['sessions']:
        source = sources[s['source_id']]
        session_text += [f"## {s['title']}", '', f"**Kind:** {s['kind']}. **Date:** {s['date']}. **Venue:** {s['venue'] or 'See official programme; not separately transcribed'}. **Status:** {s['participation_status']}.", '',
                        '**People:** ' + ', '.join(f"[{by[i]['name']}](profiles/{i}.md)" for i in s['participant_ids']) + '.', '',
                        '**Moderators / critics:** ' + (', '.join(f"[{by[i]['name']}](profiles/{i}.md)" for i in s['moderator_ids']) or 'None separately listed') + '.', '',
                        f"**Source:** [{source['label']}]({source['url']}).", '']
    output[HERE / 'sessions.md'] = '\n'.join(session_text)
    audit = ['# Anthology source and version audit', '', 'Checked 10 October 2026, Asia/Manila. Professional facts, advertised participation and proposed fit remain separate in each record.', '',
             '## Programme versions', '', 'Both PDFs were linked by the official programme page on the check date. Each is a single-page programme. Files were retrieved through HTTPS and checked through both text extraction and rendered visual layout. Raw full PDFs are not committed; the URL and SHA-256 identify the reviewed source.', '',
             '**Main-only names:** ' + ', '.join(by[i]['name'] for i in data['metadata']['programme_version_differences']['main_only_names']) + '.', '',
             '**Footer-only name:** Mybelle V. Aragon-GoBio, listed in Whose Culture Gets Built?. No final participation is inferred.', '',
             '**Layout:** ' + data['metadata']['programme_version_differences']['layout_note'], '',
             '## Review limits', '']
    audit += ['- ' + s for s in data['metadata']['source_limitations']]
    audit += ['', 'The HKU workshop endpoint returned an events listing through the web reader and 403 through direct HTTP. The indexed official workshop-category text was reviewed for the lead names and workshop method; that access limit is retained rather than implying a full successful direct read.', '', '## Source ledger', '']
    for s in data['sources']:
        audit += [f"### {s['id']}: {s['label']}", '', f"[{s['label']}]({s['url']})", '', f"**Checked:** {s['checked_on']}. **Method:** {s['review_method']}.", '', '**Evidence scope:** ' + s['finding'], '']
        if s.get('sha256'):
            audit += ['**SHA-256:** `' + s['sha256'] + '`.', '']
    output[HERE / 'sources.md'] = '\n'.join(audit)
    index = ['# Anthology Manila: prepared correspondence', '', 'Status: **102 individual unsent drafts and one unsent organiser enquiry**. Prepared 10 October 2026, Asia/Manila. These are independent first-contact writings based on the [current architecture brief](../../proposals/architecture-of-delegated-presence.md), source revision `8b621c9effe179a9f91463c32e10b6183004d13b`, and the [event research cohort](../../../research/phd-contact-map/anthology-manila/README.md).', '',
             'Each draft proposes a different spatial case or source/referral question and a bounded contribution. Published sessions establish the reason for enquiry; they do not establish the recipient’s position. No draft claims that Kris attended, met the recipient or heard the talk. Nothing has been sent.', '',
             'These are the current event-specific approaches. For Andra Matin and Abelardo Tolentino, select these instead of the existing general-map drafts if making an Anthology approach. Shared studios and institutional connections require selecting or combining drafts before contact. Thirty-seven records have published professional email routes; 65 require routing verification. Two published media routes also need a channel-scope check. All drafts require human review.', '',
             '[Organiser enquiry: final roster, public recordings and contact routes](organiser-roster-enquiry.md)', '',
             '| Recipient | Subject / draft | Proposed contribution | Route status |', '| --- | --- | --- | --- |']
    for p in people:
        d = p['draft']
        index.append(f"| [{safe(p['name'])}](../../../{p['profile_path']}) | [{safe(d['subject'])}]({p['id']}.md) | {safe(p['proposed_role'])} | {safe(p['route_status'])} |")
        facts = ['# ' + p['name'], '', '**Status:** researched lead; correspondence unsent. **Checked:** ' + p['checked_on'] + ' (Asia/Manila).', '',
                 '**Group:** ' + p['group'] + '. **Research depth:** ' + p['research_depth'] + '.', '',
                 '**Published affiliation:** ' + p['published_affiliation'] + '. ' + p['affiliation_note'], '',
                 '**Geography connections:** ' + ', '.join(p['geographies']) + ' (not a nationality statement).', '', '## Published evidence', '']
        for e in p['event_evidence']:
            s = sources[e['source_id']]
            facts.append(f"- {e['role']}: **{e['title']}**. {e['status']}. [{s['label']}]({s['url']}).")
        facts += ['', '## Individual / practice findings', '']
        if not p['professional_findings']:
            facts += ['No additional individual/practice profile verified in this pass. The published role is the basis of the focused enquiry; the profile and correct recipient must be checked before contact.']
        for f in p['professional_findings']:
            s = sources[f['source_id']]
            facts.append(f"- {f['evidence']} [{s['label']}]({s['url']}).")
        facts += ['', '## Research-fit assessment', '', '**Proposed role:** ' + p['proposed_role'] + '.', '', p['fit_assessment'], '',
                  '**First ask:** ' + p['first_ask'], '', '**Supervision evidence:** ' + p['supervision_evidence'], '', '## Contact and open points', '',
                  '**Selected email:** ' + (p['contact_email'] or 'None verified') + '. **Route:** [' + p['contact_scope'] + '](' + p['contact_url'] + ').', '',
                  '**Route status:** ' + p['route_status'] + '.', '', '**Existing relationship:** ' + p['existing_relationship'] + '. **Delivery:** Not sent. **Reply:** None recorded.', '']
        if p['published_routes']:
            facts += ['**Published route evidence:**', '']
            for r in p['published_routes']:
                facts.append(f"- {r['email']} — {r['scope']}. [Source]({r['url']}); checked {r['verified_on']}.")
        if p['coordination_groups']:
            facts += ['', '**Coordination:** ' + ', '.join(p['coordination_groups']) + '; see cohort README before selecting a draft.', '']
        facts += ['**Open questions:**', ''] + ['- ' + q for q in p['open_questions']]
        facts += ['', '[Unsent personalised email](../../../../' + d['path'] + ') · [Cohort index](../README.md)', '']
        if p['global_lead_id']:
            facts += ['**Existing global-map lead ID:** `' + p['global_lead_id'] + '`; Anthology writing is an additional event-specific version.', '']
        output[ROOT / p['profile_path']] = '\n'.join(facts)
        draft = ['# ' + d['subject'], '', '**Recipient:** ' + p['name'] + '.', '', '**Status:** ' + d['status'] + '. **Delivery:** Not sent. **Prepared:** ' + d['prepared_on'] + ', Asia/Manila. **Version:** 1, current event-specific wording.', '',
                 '**Email route:** ' + (p['contact_email'] or 'Unverified; routing hold') + '. **Scope:** ' + p['contact_scope'] + '.', '',
                 '**Review:** ' + p['route_status'] + '.', '', '**Provenance:** ' + d['provenance'], '',
                 '[Research, evidence and open questions](../../../' + p['profile_path'] + ') · [Writing index](README.md)', '',
                 '## Email', '', '**Subject:** ' + d['subject'], '', d['body'], '']
        output[ROOT / d['path']] = '\n'.join(draft)
    output[WRITING / 'README.md'] = '\n'.join(index) + '\n'
    o = data['organiser_enquiry']
    output[ROOT / o['path']] = '\n'.join(['# ' + o['subject'], '', '**Status:** Unsent draft; human review required. **Delivery:** Not sent. **Prepared:** ' + o['prepared_on'] + ', Asia/Manila.', '',
                                           '**Recipient:** ' + o['recipient'] + '. **Published general route:** ' + o['email'] + '; [official homepage](https://www.anthologyfest.com/).', '',
                                           '**Provenance:** Independent source/referral enquiry based on the linked programme comparison; requests public professional records only.', '',
                                           '## Email', '', '**Subject:** ' + o['subject'], '', o['body'], ''])
    fields = ['id', 'name', 'group', 'priority_rank', 'published_affiliation', 'geographies', 'proposed_role', 'contribution_summary', 'research_depth', 'checked_on', 'contact_email', 'contact_url', 'contact_scope', 'route_status', 'session_ids', 'event_evidence', 'professional_findings', 'fit_assessment', 'supervision_evidence', 'open_questions', 'coordination_groups', 'source_urls', 'source_review_methods', 'global_lead_id', 'subject', 'body', 'body_word_count', 'prepared_on', 'writing_status', 'draft_path', 'profile_path', 'existing_relationship', 'delivery_status', 'response']
    buffer = io.StringIO(newline='')
    writer = csv.DictWriter(buffer, fieldnames=fields, lineterminator='\n')
    writer.writeheader()
    for p in people:
        row = {f: p.get(f, '') for f in fields}
        for f in ('geographies', 'session_ids', 'open_questions', 'coordination_groups'):
            row[f] = ' | '.join(p[f])
        for f in ('event_evidence', 'professional_findings'):
            row[f] = json.dumps(p[f], ensure_ascii=False)
        row.update(subject=p['draft']['subject'], body=p['draft']['body'], body_word_count=p['draft']['body_word_count'], prepared_on=p['draft']['prepared_on'], writing_status=p['draft']['status'], draft_path=p['draft']['path'], source_urls=' | '.join(sources[i]['url'] for i in p['source_ids']), source_review_methods=' | '.join(sources[i]['review_method'] for i in p['source_ids']))
        writer.writerow(row)
    output[HERE / 'contacts.csv'] = buffer.getvalue()
    # Verify local relative links across the full generated set before writing/checking.
    for path, content in output.items():
        if path.suffix != '.md':
            continue
        for target in re.findall(r'\]\(([^)]+)\)', content):
            if target.startswith(('https://', 'http://', '#')):
                continue
            resolved = (path.parent / target.split('#')[0]).resolve()
            assert resolved in output or resolved.is_file(), f'Broken link in {path}: {target}'
    return output


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--check', action='store_true')
    args = parser.parse_args()
    data = json.loads((HERE / 'contacts.json').read_text())
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
    print(('Verified' if args.check else 'Rendered') + f' {len(outputs)} artifacts for 102 named contacts, 102 individual drafts and one organiser enquiry; no sending.')


if __name__ == '__main__':
    main()
