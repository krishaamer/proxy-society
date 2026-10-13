#!/usr/bin/env python3
"""Render source-linked Busan contact records and unsent writing; --check verifies parity."""
import argparse
import csv
import io
import json
import re
from pathlib import Path
from urllib.parse import urlsplit

HERE = Path(__file__).resolve().parent
ROOT = HERE.parents[2]
WRITING = ROOT / 'writing/outreach/busan'


def markdown(lines):
    return '\n'.join(str(line).rstrip() for line in lines).rstrip() + '\n'


def safe(text):
    return str(text).replace('|', '\\|').replace('\n', ' ')


def counts(data):
    people, referrals = data['people'], data['referrals']
    return {
        'named_people': len(people),
        'institutional_referrals': len(referrals),
        'prepared_texts': len(people) + len(referrals),
        'email_drafts': sum(p['draft']['kind'] == 'Email' for p in people + referrals),
        'telephone_scripts': sum(p['draft']['kind'] == 'Telephone routing script' for p in people + referrals),
        'sources': len(data['sources']),
        'published_person_record_emails': sum(bool(p['email']) for p in people),
        'unique_named_record_mailboxes': len({p['email'] for p in people if p['email']}),
        'named_record_holds': sum(p['route_status'].startswith('Hold') for p in people),
        'referral_holds': sum(p['route_status'].startswith('Hold') for p in referrals),
        'programme_screens': len(data['programmes']),
        'earlier_korea_people': sum(bool(p['earlier_korea_id']) for p in people),
    }


def validate(data):
    sources = {s['id']: s for s in data['sources']}
    records = data['people'] + data['referrals']
    ids = {p['id'] for p in records}
    korea = {p['id'] for p in json.loads((HERE.parent / 'korea/contacts.json').read_text())['people']}
    assert len(ids) == len(records), 'Duplicate recipient'
    assert len(sources) == len(data['sources'])
    assert len({s['url'] for s in sources.values()}) == len(sources)
    assert data['metadata']['counts'] == counts(data), 'Count mismatch'
    for s in sources.values():
        assert urlsplit(s['url']).scheme in ('http', 'https')
        assert s['checked_on'] == data['metadata']['checked_on']
        assert all(s[f] for f in ('label', 'finding', 'review_method', 'limitations'))
    for p in records:
        assert p['city'] == 'Busan' and p['geography'] == 'South Korea'
        assert p['source_ids'] and set(p['source_ids']) <= sources.keys()
        assert p['contact_source_id'] in p['source_ids']
        assert p['contact_url'] and urlsplit(p['contact_url']).scheme in ('http', 'https')
        assert p['contact_source_id'] in sources
        assert p['checked_on'] == data['metadata']['checked_on']
        assert p['evidence'] and all(e['source_id'] in p['source_ids'] and e['text'] for e in p['evidence'])
        assert all(p[f] for f in ('published_role', 'institution', 'base', 'contribution', 'first_ask', 'supervision_evidence', 'route_scope', 'route_status', 'open_questions', 'caveats'))
        assert p['delivery_status'] == 'Not sent' and p['existing_relationship'] == 'Unknown'
        assert p['response'] == ''
        if p['email']:
            assert re.fullmatch(r'[^@\s]+@[^@\s]+\.[^@\s]+', p['email'])
        else:
            assert p['route_status'].startswith('Hold') or 'telephone' in p['route_scope'].lower() or 'form' in p['route_scope'].lower()
        d = p['draft']
        assert d['kind'] in ('Email', 'Telephone routing script')
        assert d['status'] == 'Unsent; human review required'
        assert d['prepared_on'] == data['metadata']['checked_on']
        assert d['body_word_count'] == len(d['body'].split())
        assert p['project_case'] == d['project_case'] and p['project_case'] in d['body']
        assert p['first_ask'] == d['personalized_ask'] and p['first_ask'] in d['body']
        assert d['anchor_source_id'] in p['source_ids']
        assert sources[d['anchor_source_id']]['url'] in d['body']
        assert 'Kris Haamer' in d['body'] and 'Proxy Society' in d['body']
        assert 'https://proxysociety.org/architecture' in d['body']
        assert re.search(r'\b(?:AI|robot|robots)\b', d['body'])
        assert not re.search(r'\b(?:we met|as we discussed|I attended|I hold|I am enrolled|attached is|I.ll be in Busan|I am visiting Busan)\b', d['body'], re.I)
        assert (ROOT / d['path']).parent == WRITING
        assert d['subject'] and p['first_ask']
    for p in data['people']:
        if p['earlier_korea_id']:
            assert p['earlier_korea_id'] in korea
        assert p['category'] != 'Institutional referral'
        assert (ROOT / p['profile_path']).parent == HERE / 'profiles'
    assert all(p['category'] == 'Institutional referral' and not p['earlier_korea_id'] for p in data['referrals'])
    assert all((ROOT / p['profile_path']).parent == HERE / 'referrals' for p in data['referrals'])
    for f in ('subject', 'body'):
        assert len({p['draft'][f] for p in records}) == len(records), 'Duplicate ' + f
    assert len({p['project_case'] for p in data['people']}) == len(data['people']), 'Repeated spatial case'
    for group in data['coordination_groups']:
        assert set(group['people']) <= ids and group['instruction']
    for programme in data['programmes']:
        assert set(programme['source_ids']) <= sources.keys() and programme['questions']


def render(data):
    validate(data)
    sources = {s['id']: s for s in data['sources']}
    people = sorted(data['people'], key=lambda p: (p['priority_rank'], p['name']))
    referrals = data['referrals']
    by_id = {p['id']: p for p in people + referrals}
    c = counts(data)
    phone_label = 'telephone routing script' + ('s' if c['telephone_scripts'] != 1 else '')
    output = {}
    date = data['metadata']['checked_on']
    readme = ['# Busan architecture and PhD contacts', '',
        f"Checked **{date}, Asia/Taipei**. **{c['named_people']} named people**, plus **{c['institutional_referrals']} separately counted institutional referral routes**. {c['sources']} primary source records; {c['programme_screens']} programme/process screens. All {c['prepared_texts']} prepared texts are **unsent**: {c['email_drafts']} email drafts and {c['telephone_scripts']} {phone_label}.", '',
        f"{c['published_person_record_emails']} named records have published professional emails across {c['unique_named_record_mailboxes']} mailboxes, including shared offices. {c['named_record_holds']} named routing holds and {c['referral_holds']} institutional holds are explicit. Published email is not proof of delivery, personal access or willingness.", '',
        '[Canonical JSON](contacts.json) · [People CSV](contacts.csv) · [Referral CSV](referrals.csv) · [Source audit](sources.md) · [Conversation and programme notes](conversation-notes.md) · [Prepared writing](../../../writing/outreach/busan/README.md).', '',
        data['metadata']['scope'], '', data['metadata']['travel_status'], '',
        'This is the current Busan-specific first-contact wording. The [Korea cohort](../korea/README.md) remains a 10 October snapshot; existing Busan people are cross-referenced rather than counted as new people there. The [global map](../README.md) retains its historical 303-record counts.', '',
        '## First conversations', '',
        'Priority and possible contribution are assessments. Academic employment, graduate teaching and a programme listing do not establish individual supervision approval, capacity or funding.', '',
        '| Person | Published affiliation | Specific contribution | Professional route |',
        '| --- | --- | --- | --- |']
    for p in people[:8]:
        readme.append(f"| [{safe(p['name'])}](profiles/{p['id']}.md) | {safe(p['institution'])} | {safe(p['contribution'])} | {safe(p['email'] or p['route_status'])} |")
    readme += ['', '## Full named roster', '', '| Person | Published role | Base / district | Proposed role | Route |', '| --- | --- | --- | --- | --- |']
    for p in people:
        route = p['email'] or p['route_status']
        if p['route_status'].startswith('Hold') and p['email']:
            route += ' (hold)'
        readme.append(f"| [{safe(p['name'])}](profiles/{p['id']}.md) | {safe(p['published_role'])}; {safe(p['institution'])} | {safe(p['base'])} | {safe(p['category'])} | {safe(route)} |")
    readme += ['', '## Local introduction routes', '', 'Institutional referrals are counted separately from named people. A general office can route a question; it does not establish access to a named architect or a university place.', '', '| Organisation | Useful request | Route / scope |', '| --- | --- | --- |']
    for r in referrals:
        readme.append(f"| [{safe(r['name'])}](referrals/{r['id']}.md) | {safe(r['contribution'])} | {safe(r['email'] or r.get('telephone') or r['route_status'])}; {safe(r['route_scope'])} |")
    readme += ['', '## Coordinate the approaches', '']
    for g in data['coordination_groups']:
        readme.append('- **' + ', '.join(by_id[i]['name'] for i in g['people']) + ':** ' + g['instruction'])
    readme += ['', '## Evidence limits and remaining work', '']
    readme += ['- ' + note for note in data['limitations']]
    readme += ['', '## Maintain the records', '', 'Edit contacts.json, then regenerate and check:', '', '```sh', 'python3 research/phd-contact-map/busan/render.py', 'python3 research/phd-contact-map/busan/render.py --check', '```', '', 'Private replies stay outside this public repository. No correspondence, meeting, application, site access, funding or advisor commitment is recorded.']
    output[HERE / 'README.md'] = markdown(readme)

    writing = ['# Busan — specific unsent correspondence', '',
        f"Prepared {date}, Asia/Taipei. **{c['named_people']} individual drafts and {c['institutional_referrals']} institutional referral drafts; {c['prepared_texts']} texts, all unsent.** Includes {c['email_drafts']} emails and {c['telephone_scripts']} {phone_label}; no calls made.", '',
        data['metadata']['provenance'], '',
        '[Recipient research](../../../research/phd-contact-map/busan/README.md) · [Conversation notes](../../../research/phd-contact-map/busan/conversation-notes.md) · [Canonical source and full text](../../../research/phd-contact-map/busan/contacts.json).', '',
        'Use this wording for the Busan-specific first approach. The earlier Korea drafts for Paek, Woo and Kim remain historical alternatives. Check any route hold and select one distinct question per shared institution before use.', '',
        '| Recipient | Specific draft | Channel / status |', '| --- | --- | --- |']
    for p in people + referrals:
        writing.append(f"| {safe(p['name'])} | [{safe(p['draft']['subject'])}]({p['id']}.md) | {safe(p['draft']['kind'])}; {safe(p['route_status'])} |")
        profile = [f"# {p['name']}" + (f" / {p['korean_name']}" if p['korean_name'] else ''), '',
            f"**Published role:** {p['published_role']}; {p['institution']}. **Base:** {p['base']}. **Geography:** Busan, South Korea.", '',
            f"Checked {p['checked_on']}. **Proposed role:** {p['category']}; priority {p['priority_rank']} is an assessment. **Delivery:** Not sent; prior relationship unknown.", '',
            '## Published evidence', '']
        for finding in p['evidence']:
            profile.append(f"- {finding['text']} [Source]({sources[finding['source_id']]['url']}).")
        profile += ['', '**Source and affiliation caution:** ' + p['caveats'], '',
            '## Proposed contribution and specific question', '', p['contribution'], '',
            '**Spatial case (proposal):** ' + p['project_case'], '', '**First ask:** ' + p['first_ask'], '',
            '## Supervision evidence', '', p['supervision_evidence'], '',
            '## Published professional route', '',
            '**Email:** ' + (p['email'] or 'No published professional email established'), '',
            '**Telephone:** ' + (p.get('telephone') or 'No telephone route recorded'), '',
            f"[Published contact source]({sources[p['contact_source_id']]['url']}) · [Public route]({p['contact_url']}).", '',
            '**Scope:** ' + p['route_scope'], '', '**Status:** ' + p['route_status'], '',
            '## Open questions', '']
        profile += ['- ' + q for q in p['open_questions']]
        if p['earlier_korea_id']:
            profile += ['', f"[Earlier Korea record](../../korea/profiles/{p['earlier_korea_id']}.md); the new Busan check and wording are current for this city focus."]
        profile += ['', f"[Specific unsent draft](../../../../writing/outreach/busan/{p['id']}.md) · [Busan index](../README.md).", '', '## Source review limits', '']
        for sid in p['source_ids']:
            s = sources[sid]
            profile.append(f"- [{s['label']}]({s['url']}) — {s['checked_on']}; {s['review_method']}. {s['limitations']}")
        output[ROOT / p['profile_path']] = markdown(profile)
        d = p['draft']
        draft = [f"# {d['kind']} — {p['name']}", '',
            f"**Status:** {d['status']}. Prepared {d['prepared_on']}; version 1. **Delivery:** Not sent.", '',
            '**To / channel:** ' + (p['email'] or p.get('telephone') or p['contact_url']), '',
            '**Route status:** ' + p['route_status'], '', '**Subject:** ' + d['subject'], '',
            '## Prepared text', '', d['body'], '', '## Provenance and use', '',
            data['metadata']['provenance'], '', '**Channel scope:** ' + p['route_scope'], '',
            '**Supervision evidence:** ' + p['supervision_evidence'], '',
            f"[Recipient research](../../../{p['profile_path']}) · [Busan writing index](README.md).", '',
            'Review the route, intended request and any real applicant materials before use. A recorded draft does not authorize sending, submitting a form or booking a meeting.']
        output[ROOT / d['path']] = markdown(draft)
    writing += ['', 'No message or form has been sent, no meeting booked and no doctoral application submitted.']
    output[WRITING / 'README.md'] = markdown(writing)

    audit = ['# Busan primary sources and retrieval audit', '', f"Checked {date}, Asia/Taipei. Evidence is paraphrased. Read limits and historical dates remain explicit; a check date does not prove current availability or mailbox deliverability.", '']
    for s in data['sources']:
        audit += [f"## {s['id']} — {s['label']}", '', f"[Source]({s['url']}) · Checked {s['checked_on']}", '', '**Review:** ' + s['review_method'], '', '**Finding:** ' + s['finding'], '', '**Limits:** ' + s['limitations'], '']
    output[HERE / 'sources.md'] = markdown(audit)
    notes = ['# Busan conversation and doctoral preparation', '', f"Prepared {date}, Asia/Taipei. Published locations support conversation clusters, not a booked visit or a person's present whereabouts.", '',
        '## Published bases', '', '| Cluster | Contacts / institutions |', '| --- | --- |']
    for cluster in data['clusters']:
        notes.append(f"| {safe(cluster['area'])} | {safe(cluster['description'])} |")
    notes += ['', '## Programme and procedure screens', '']
    for p in data['programmes']:
        notes += ['### ' + p['institution'], '', p['finding'], '', p['caution'], '']
        notes += ['- ' + q for q in p['questions']]
        notes += ['', ' · '.join(f"[{sources[sid]['label']}]({sources[sid]['url']})" for sid in p['source_ids']), '']
    notes += ['## Prepare a concrete conversation', '',
        'Bring a short research question, one plan/section and a bounded comparison. Keep the task constant across ordinary booking, fixed automation, human assistance and a staged AI/robot condition. Show delegated scope, expiry, revocation and human handoff; compare access, waiting, detours, comprehension, encounter and staff work.', '',
        'A site suggestion is a request for advice, not operator consent. Confirm the applicant’s actual qualifications, portfolio, language, funding needs and target degree before using programme-specific wording. No CV, attachment, trip dates or past meeting is assumed.', '',
        '## Routing holds', '']
    held = [p for p in people + referrals if p['route_status'].startswith('Hold')]
    notes += ['- **' + p['name'] + ':** ' + p['route_status'] for p in held] or ['No explicit routing holds; all routes still need action-time review.']
    notes += ['', '[People and evidence](README.md) · [Unsent writing](../../../writing/outreach/busan/README.md).']
    output[HERE / 'conversation-notes.md'] = markdown(notes)
    for filename, records in [('contacts.csv', people), ('referrals.csv', referrals)]:
        columns = ['id', 'name', 'korean_name', 'institution', 'published_role', 'base', 'category', 'priority_rank', 'checked_on', 'email', 'telephone', 'contact_url', 'route_scope', 'route_status', 'contribution', 'project_case', 'first_ask', 'supervision_evidence', 'caveats', 'open_questions', 'source_urls', 'earlier_korea_id', 'delivery_status', 'draft_kind', 'draft_subject', 'draft_body', 'draft_path', 'profile_path']
        stream = io.StringIO(newline='')
        writer = csv.DictWriter(stream, fieldnames=columns, lineterminator='\n')
        writer.writeheader()
        for p in records:
            row = {f: p.get(f, '') for f in columns}
            row['open_questions'] = ' | '.join(p['open_questions'])
            row['source_urls'] = ' | '.join(sources[sid]['url'] for sid in p['source_ids'])
            row.update(draft_kind=p['draft']['kind'], draft_subject=p['draft']['subject'], draft_body=p['draft']['body'], draft_path=p['draft']['path'])
            writer.writerow(row)
        output[HERE / filename] = stream.getvalue()
    return output


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--check', action='store_true')
    args = parser.parse_args()
    data = json.loads((HERE / 'contacts.json').read_text())
    output = render(data)
    mismatches = []
    for path, body in output.items():
        if args.check:
            if not path.exists() or path.read_text() != body:
                mismatches.append(str(path.relative_to(ROOT)))
        else:
            path.parent.mkdir(parents=True, exist_ok=True)
            path.write_text(body)
    if mismatches:
        raise SystemExit('Out-of-date exports: ' + ', '.join(mismatches))
    c = counts(data)
    print(f"{'Verified' if args.check else 'Rendered'} {len(output)} exports; {c['named_people']} named people, {c['institutional_referrals']} distinct institutional routes; all writing unsent.")


if __name__ == '__main__':
    main()
