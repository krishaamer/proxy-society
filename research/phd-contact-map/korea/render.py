#!/usr/bin/env python3
"""Keep Korea evidence, CSVs, profiles and unsent writing consistent."""
import argparse
import csv
import io
import json
import re
from pathlib import Path
from urllib.parse import urlsplit

HERE = Path(__file__).resolve().parent
ROOT = HERE.parents[2]
WRITING = ROOT / 'writing/outreach/korea'


def md(lines):
    return '\n'.join(line.rstrip() for line in lines).rstrip() + '\n'


def safe(value):
    return str(value).replace('|', '\\|').replace('\n', ' ')


def validate(data):
    people, routes = data['people'], data['referral_routes']
    by = {p['id']: p for p in people}
    sources = {s['id']: s for s in data['sources']}
    counts = data['metadata']['counts']
    assert len(people) == len(by) == counts['people'] == counts['individual_drafts']
    assert len(routes) == counts['institutional_referrals']
    assert len(people) + len(routes) == counts['total_prepared_texts']
    assert len(sources) == len(data['sources']) == counts['sources']
    assert len({s['url'] for s in sources.values()}) == counts['unique_source_urls']
    assert counts['emails'] == sum(p['draft']['kind'] == 'Email' for p in people)
    assert counts['expression_of_interest_statements'] == sum(p['draft']['kind'] == 'Expression-of-interest statement' for p in people)
    assert counts['published_email_records'] == sum(bool(p['contact_email']) for p in people)
    assert counts['unique_email_routes'] == len({p['contact_email'] for p in people if p['contact_email']})
    assert counts['published_form_records'] == sum(bool(p.get('contact_form_url')) for p in people)
    assert counts['holds'] == sum(p['route_status'].startswith('Hold') for p in people)
    assert counts['programme_screens'] == len(data['programme_routes'])
    global_ids = {p['id'] for p in json.loads((HERE.parent / 'contacts.json').read_text())['contacts']}
    groups = {g['id']: g for g in data['coordination_groups']}
    for field in ('subject', 'project_case', 'personalized_ask', 'body'):
        assert len({p['draft'][field] for p in people}) == len(people), 'Duplicate ' + field
    for s in sources.values():
        assert s['checked_on'] == data['metadata']['checked_on']
        assert urlsplit(s['url']).scheme in ('http', 'https')
        assert all(s[f] for f in ('finding', 'review_method', 'limitations'))
    for p in people:
        assert p['geography'] == 'South Korea'
        assert p['source_ids'] and set(p['source_ids']) <= sources.keys()
        assert p['contact_source_id'] in p['source_ids']
        assert p['contact_url'] == sources[p['contact_source_id']]['url']
        assert set(p['programme_source_ids']) <= set(p['source_ids'])
        assert all(p[f] for f in ('published_role', 'supervision_evidence', 'route_scope', 'first_ask', 'fit_assessment', 'open_questions'))
        assert p['checked_on'] == data['metadata']['checked_on']
        assert p['delivery_status'] == 'Not sent' and p['existing_relationship'] == 'Unknown' and p['response'] == ''
        if p['contact_email']:
            assert re.fullmatch(r'[^@\s]+@[^@\s]+\.[^@\s]+', p['contact_email'])
        else:
            assert p['route_status'].startswith('Hold')
        if p['global_lead_id']:
            assert p['global_lead_id'] in global_ids
        assert set(p['coordination_groups']) == {gid for gid, g in groups.items() if p['id'] in g['people']}
        for finding in p['professional_findings']:
            assert finding['source_id'] in p['source_ids'] and finding['evidence']
        d = p['draft']
        assert d['anchor_source_id'] in p['source_ids']
        assert sources[d['anchor_source_id']]['url'] in d['personalized_opening']
        assert d['status'].startswith('Unsent') and d['prepared_on'] == p['checked_on']
        assert d['body_word_count'] == len(d['body'].split())
        assert d['body'].startswith(d['salutation'])
        assert all(d[f] in d['body'] for f in ('personalized_opening', 'project_case', 'personalized_ask'))
        assert re.search(r'\b(?:AI|robot)\b', d['body'])
        assert not re.search(r'\b(?:we met|as we discussed|I attended|I hold|my degree|I am enrolled|I.ll be in Korea|I.am visiting Korea|attached is)\b', d['body'], re.I)
        assert (ROOT / p['profile_path']).parent == HERE / 'profiles'
        assert (ROOT / d['path']).parent == WRITING
    for r in routes:
        assert set(r['source_ids']) <= sources.keys()
        assert r['global_lead_id'] in global_ids
        assert r['delivery_status'] == 'Not sent' and r['existing_relationship'] == 'Unknown' and r['response'] == ''
        assert r['draft']['status'].startswith('Unsent')
        assert (ROOT / r['draft']['path']).parent == WRITING
    for g in groups.values():
        assert g['instruction'] and set(g['people']) <= by.keys()
    for r in data['programme_routes']:
        assert r['source_id'] in sources and r['suggested_first_contact'] in by
        assert r['questions']
        if r['office_email']:
            assert r['office_source_id'] in sources
    assert by['andrea_bianchi']['draft']['kind'] == 'Expression-of-interest statement'
    assert 'form' in by['andrea_bianchi']['route_scope']
    assert by['sang_ho_yoon']['draft']['subject'].startswith('Application PhD')
    assert by['sang_ho_yoon']['route_status'].startswith('Hold')
    assert by['sohyun_park']['kind'] == 'External mentor / referral'
    assert 'March 2026' in by['young_woo_park']['published_role']
    assert not by['jong_yoon_baek']['contact_email']


def render(data):
    validate(data)
    people = sorted(data['people'], key=lambda p: (p['priority_rank'], p['name']))
    by = {p['id']: p for p in people}
    sources = {s['id']: s for s in data['sources']}
    counts = data['metadata']['counts']
    output = {}
    readme = ['# Korea architecture and PhD contact network', '',
        'Status: researched leads and **unsent** prepared writing. Checked **10 October 2026, Asia/Manila**.', '',
        f"**{counts['people']} named South Korea contacts:** {counts['emails']} recipient-specific email drafts and {counts['expression_of_interest_statements']} Make Lab expression-of-interest statement. One **separately counted external North Korea institutional referral** brings the total to {counts['total_prepared_texts']} prepared texts. {counts['sources']} primary source records and {counts['programme_screens']} programme/process screens include unresolved degree-route gaps.", '',
        f"{counts['published_email_records']} named-person records contain a published email across {counts['unique_email_routes']} mailboxes; this includes shared practice offices and held routes. Two records link forms: Make Lab’s published PhD-interest route and NAVER’s business-proposal form with unresolved research scope. **{counts['holds']} named-person records are on hold**, plus the separate UIA referral. Email availability and holds overlap. No message, form, meeting, application, funding or advisor agreement is recorded.", '',
        '[Canonical JSON](contacts.json) · [Named-contact CSV](contacts.csv) · [Referral CSV](referrals.csv) · [Source audit](sources.md) · [Programme preparation](programme-notes.md) · [Prepared correspondence](../../../writing/outreach/korea/README.md).', '',
        'No Korea trip or itinerary is assumed. Bases identify published institutions/practices, not a person’s present whereabouts. This is a substantial first cohort, with explicit [remaining discovery](#remaining-discovery).', '',
        'This supplements the [303-lead global snapshot](../README.md). Use this Korea wording for Cha, Ji-Hyun Lee, Lim and Cho when a Korea-focused first approach is intended. Baek is now a named industry lead with a shared organisational routing gap; the older NAVER record was a team route. The UIA record remains an external referral. Historical global counts remain unchanged.', '',
        '## First conversations', '',
        'Priority is a fit assessment. An architecture-led dissertation needs a clear spatial contribution and an appropriate degree home; an interaction specialist, architect or centre is not automatically an approved supervisor.', '',
        '| Contact | Specific starting question | Route |', '| --- | --- | --- |']
    for p in people[:12]:
        readme.append(f"| [{safe(p['name'])}](profiles/{p['id']}.md) — {safe(p['institution'])} | {safe(p['draft']['subject'])} | {safe(p['route_status'])}; [prepared text](../../../{p['draft']['path']}) |")
    readme += ['', '## Degree and process distinctions', '', '| Institution | Published evidence and unresolved distinction | First contact option |', '| --- | --- | --- |']
    for r in data['programme_routes']:
        readme.append(f"| {safe(r['institution'])} | [{safe(r['distinction'])}]({sources[r['source_id']]['url']}) | [{by[r['suggested_first_contact']]['name']}](profiles/{r['suggested_first_contact']}.md) |")
    readme += ['', '## Full named roster', '', '| Contact | Published role / institution | Base | Proposed role | Professional channel |', '| --- | --- | --- | --- | --- |']
    for p in people:
        channel = p['contact_email'] or 'Email absent; routing hold'
        if p['id'] == 'andrea_bianchi':
            channel = 'Expression-of-interest form; email not for places/funding'
        if p['route_status'].startswith('Hold'):
            channel += ' (hold)'
        readme.append(f"| [{safe(p['name'])}](profiles/{p['id']}.md) | {safe(p['published_role'])}; {safe(p['institution'])} | {p['city']} | {safe(p['kind'])} | {safe(channel)} |")
    readme += ['', '## North Korea — separate referral', '',
        '[Korean Architects Union via UIA](referral-north-korea.md): UIA’s member page names KAU, but no named local architect, personal professional email or doctoral route was verified. UIA is based in Paris. Its older general email is on current-contact refresh hold. [Unsent institutional wording](../../../writing/outreach/korea/north_korea_uia.md).', '',
        'Inha Jung’s published North Korea architectural-history research provides a South Korea-based scholarly connection; it does not establish local access or a North Korean contact.', '',
        '## Coordinate the approaches', '']
    for g in data['coordination_groups']:
        readme.append('- **' + ', '.join(by[i]['name'] for i in g['people']) + ':** ' + g['instruction'])
    readme += ['', '## Material source cautions', '',
        '- FACT is a centre, with students participating through faculty labs. Its research grants/planned appointments do not establish a funded applicant place.',
        '- Make Lab directs doctoral interest to a form and declines direct places/funding email. Its published English/funding conditions are lab statements; admission remains centralised and no applicant place is confirmed.',
        '- Yoon’s Spring 2027 route requires a completed Summer 2026 internship, and his enquiry format asks for CV and undergraduate transcript/GPA. Applicant history and materials are unknown.',
        '- SNU’s August Park interview describes a farewell lecture and impending retirement; subsequent formal status is unverified. Her draft asks for occasional methods advice/referral. Kang’s indexed rank and Kang/Choi/Park email routes need refresh.',
        '- Lim’s current lab and faculty heading support Associate Professor, despite an older career paragraph. Park at UNIST is Professor from March 2026 in HCD+T; the 2025 Design guide is earlier evidence.',
        '- Yonsei’s English dissertation requirement does not prove English teaching or fieldwork. Its Architecture and Architectural Engineering doctorates are distinct; Moon Gyu Choi appears in past faculty and is not added as a current advisor.',
        '- Hanyang’s ERICA department PDF publishes doctoral study and advisor consultation; its undated roster has older ranks. Use current faculty profiles for roles and confirm current degree rules. Pusan’s historical doctorate and Inha’s professor biography leave exact present degree-route gaps.',
        '- NAVER evidence is company-reported; a business form does not establish personal access or research acceptance. 1784 is a corporate headquarters, not a public civic-building pilot.',
        '- Jo’s generic Wix footer contains a template address/email. Only the main professional contact section is used. MASS’s current office email was read on its official site after a TLS verification failure; this is not a delivery test.',
        '- Sources distinguish live retrieval, indexed primary text, historical evidence and unsuccessful refreshes. No full-paper review, site operation outcome or prior relationship is implied by a bibliography/project listing.', '',
        '## Remaining discovery', '']
    for q in data['expansion_queue']:
        readme.append(f"- **{q['area']}:** {q['next_step']}")
    readme += ['', '## Update this cohort', '', 'Edit contacts.json, then run:', '', '```sh', 'python3 research/phd-contact-map/korea/render.py', 'python3 research/phd-contact-map/korea/render.py --check', '```', '',
        'The renderer checks sources, counts, route scope, earlier lead links, recipient-specific cases and unsent status. Keep raw private correspondence outside the public repository.']
    output[HERE / 'README.md'] = md(readme)

    audit = ['# Korea evidence and retrieval audit', '',
        'Checked 10 October 2026. Findings are paraphrases; Korean research labels are explanatory translations unless an official English title is used. Indexed pages and unsuccessful refreshes are explicitly marked. The review date does not establish continued employment, mailbox delivery or recruitment.', '']
    for s in data['sources']:
        audit += [f"## {s['id']} — {s['label']}", '', f"[Primary source]({s['url']}) · Checked {s['checked_on']}", '', '**Review:** ' + s['review_method'], '', '**Published evidence / retrieval result:** ' + s['finding'], '', '**Limits:** ' + s['limitations'], '']
    output[HERE / 'sources.md'] = md(audit)

    notes = ['# Korea doctoral and conversation preparation', '',
        'Prepared 10 October 2026. No visit, meeting or admission is established. Start from the [current architecture brief](../../../writing/proposals/architecture-of-delegated-presence.md).', '',
        '## Match the spatial question to a doctoral home', '',
        '| Question | Architecture / spatial anchor | Complementary method |', '| --- | --- | --- |',
        '| Can a revoked robot task return to a human without spatial penalties? | Cha / Future Space Lab; CT degree context | Lim for inclusive observation; NAVER for operational precedents after routing |',
        '| What makes the threshold worth crossing after a transaction? | Youm / CAT; Yonsei Architecture PhD | Sung for participatory design; Cho for practice critique |',
        '| Where do privacy and responsibility sit? | Baek / SNU theory | Hong for contested rules; Woo for spatial disclosure |',
        '| Can a foyer be more than an efficient channel? | Paek / Pusan theory; confirm current doctorate code | Kim/A+U for installation, Hwang for reversible boundaries |',
        '| How can the layout’s effect be isolated? | Sohn / Yonsei LAUD | Bianchi for auditory embodiment via form; Yoon for accessible interruption subject to intake constraints |', '',
        'Prepare a two-page research question and one plan/section before choosing a broad advisor list. Keep the service task constant across ordinary booking, fixed automation, human assistance and a staged AI/robot condition. Show scope/expiry, revocation, error and human handoff; compare waiting, detours, comprehension, encounter opportunities and staff work. A separate robot entrance is one design hypothesis.', '',
        'Applicant qualifications, CV/portfolio, research background, language and funding needs are unknown. The drafts claim no attachments or travel. Operator willingness, observation/filming permissions and participant recruitment are separate outstanding steps.', '',
        '## Programme and process screens', '']
    for r in data['programme_routes']:
        notes += [f"### {r['institution']}", '', f"[{r['distinction']}]({sources[r['source_id']]['url']})", '']
        notes += ['- ' + q for q in r['questions']]
        if r['office_email']:
            notes += ['', f"Published administrative route: {r['office_email']} — [source]({sources[r['office_source_id']]['url']}). Use for procedure/eligibility/routing, not a generic substitute for an individual research letter."]
        notes.append('')
    notes += ['## Conditions and holds before use', '',
        'Make Lab’s statement is for its expression-of-interest form. Actual fields could not be read; do not assume the statement is a complete application. Published lab funding and English-language claims require confirmation against the intended admission round and any offer.', '',
        'Yoon’s Application PhD email remains held for CV/GPA or transcript and the applicable intake. The Spring 2027 Summer 2026 internship condition cannot be assumed satisfied; clarify a later route if needed.', '']
    for p in people:
        if p['route_status'].startswith('Hold'):
            notes.append(f"- **[{p['name']}](profiles/{p['id']}.md):** {p['route_status']}. {p['affiliation_caveat']}")
    notes += ['', '- **UIA / North Korea:** refresh the general contact route; no named local person or doctoral route established.', '',
        '## Conversation geography', '',
        'Seoul: SNU, Yonsei and practices. Daejeon: KAIST. Ansan: Hanyang ERICA. Incheon: Inha. Busan: Pusan. Ulsan: UNIST. Seongnam: NAVER. These are institutional bases and remote-conversation clusters, not a Korea itinerary. Public projects may be elsewhere and do not establish an architect’s availability.', '',
        'Suggested first step is one architectural topic-fit approach and one complementary methods approach, selected from the coordinated groups. Faculty capacity, admission, funding and cross-institution co-supervision remain separate questions.']
    output[HERE / 'programme-notes.md'] = md(notes)

    index = ['# Korea — personalized unsent correspondence', '',
        f"{counts['emails']} named-recipient email drafts, one Make Lab expression-of-interest statement and one separately counted UIA institutional referral: **{counts['total_prepared_texts']} prepared texts, all unsent**. Prepared 10 October 2026.", '',
        'Independent Korea versions based on Architecture of Delegated Presence (website source revision `8b621c9effe179a9f91463c32e10b6183004d13b`). Each named contact has its own published hook, spatial comparison and first ask. No website copy changed, and no Korea visit, qualification, prior relationship or attached material is assumed.', '',
        '[Research map](../../../research/phd-contact-map/korea/README.md) · [Programme preparation](../../../research/phd-contact-map/korea/programme-notes.md) · [Canonical evidence and full text](../../../research/phd-contact-map/korea/contacts.json).', '',
        'Use these drafts for the Korea-focused first approach to Cha, Ji-Hyun Lee, Lim and Cho; older global wording is an earlier/optional general version. NAVER’s named draft is an organisational-routing enquiry. Five named records and the UIA referral have holds. Bianchi’s application statement follows the form policy; a published email is not an invitation to send a positions/funding enquiry.', '',
        '| Recipient | Prepared text | Channel / status |', '| --- | --- | --- |']
    for p in people:
        d = p['draft']
        index.append(f"| [{safe(p['name'])}](../../../{p['profile_path']}) | [{safe(d['subject'])}]({p['id']}.md) | {safe(d['kind'])}; {safe(p['route_status'])} |")
        profile = [f"# {p['name']}" + (f" / {p['korean_name']}" if p['korean_name'] else ''), '', f"**Published role:** {p['published_role']}; {p['institution']}. **Base:** {p['city']}. **Geography:** {p['geography']}.", '', f"Checked {p['checked_on']}. **Priority:** {p['priority_rank']} (fit assessment). **Delivery:** Not sent; relationship unknown.", '', '## Published evidence', '']
        for e in p['professional_findings']:
            profile.append(f"- {e['evidence']} [Source]({sources[e['source_id']]['url']}).")
        profile += ['', '**Affiliation/source caution:** ' + (p['affiliation_caveat'] or 'No additional conflict identified in this pass; published evidence is not an employment or availability guarantee.'), '', '## Fit and proposed contribution', '', p['proposed_contribution'], '', '**Assessment:** ' + p['fit_assessment'], '', '**First ask:** ' + p['first_ask'], '', '## Supervision evidence', '', p['supervision_evidence'], '', '## Professional route', '', '**Published email:** ' + (p['contact_email'] or 'None verified'), '', f"**Contact source:** [{p['contact_source_id']}]({p['contact_url']})", '', '**Scope:** ' + p['route_scope'], '', '**Status:** ' + p['route_status']]
        if p.get('contact_form_url'):
            profile += ['', f"**Published form link:** [route]({p['contact_form_url']}); no submission or field completion recorded."]
        profile += ['', '## Open questions', ''] + ['- ' + q for q in p['open_questions']]
        if p['global_lead_id']:
            profile += ['', '**Earlier global ID:** `' + p['global_lead_id'] + '`; historical counts unchanged.']
        profile += ['', f"[Prepared unsent text](../../../../{d['path']}) · [Korea map](../README.md).", '', '## Source review limits', '']
        for sid in p['source_ids']:
            s = sources[sid]
            profile.append(f"- [{s['label']}]({s['url']}) — {s['checked_on']}; {s['review_method']}. {s['limitations']}")
        output[ROOT / p['profile_path']] = md(profile)
        mail = [f"# {d['kind']} draft — {p['name']}", '', f"**Status:** {d['status']}. Prepared {d['prepared_on']}; version {d['version']}. **Delivery:** Not sent.", '', '**To / channel:** ' + (p.get('contact_form_url') if p['id'] == 'andrea_bianchi' else (p['contact_email'] or p['route_scope'])), '', '**Route status:** ' + p['route_status'], '', '**Subject / working title:** ' + d['subject'], '', '## Prepared text', '', d['body'], '', '## Provenance and use', '', d['provenance'], '', '**Channel scope:** ' + p['route_scope'], '', '**Supervision evidence:** ' + p['supervision_evidence'], '', f"[Recipient research](../../../{p['profile_path']}) · [Korea writing index](README.md).", '',
            'Review the intended request, route and real applicant materials before use. No email or form has been sent. Private replies belong outside this public repository.']
        if p['affiliation_caveat']:
            mail += ['', '**Source caution:** ' + p['affiliation_caveat']]
        output[ROOT / d['path']] = md(mail)
    for r in data['referral_routes']:
        d = r['draft']
        index.append(f"| [UIA / North Korea](../../../{r['profile_path']}) | [{d['subject']}]({r['id']}.md) | {r['route_status']}; external institutional referral |")
        output[ROOT / r['profile_path']] = md(['# North Korea — external UIA referral', '', '**Named local people:** none verified. **Base:** ' + r['city'], '', '**Published evidence:** ' + r['published_evidence'], '', '**Assessment:** ' + r['fit_assessment'], '', '**Proposed contribution:** ' + r['proposed_contribution'], '', '**Supervision evidence:** ' + r['supervision_evidence'], '', '**Older UIA mailbox:** ' + r['contact_email'], '', '**Scope:** ' + r['route_scope'], '', '**Status:** ' + r['route_status'], '', '## Open questions', ''] + ['- ' + q for q in r['open_questions']] + ['', '## Sources', ''] + [f"- [{sources[s]['label']}]({sources[s]['url']}) — {sources[s]['review_method']}. {sources[s]['limitations']}" for s in r['source_ids']] + ['', f"[Unsent referral text](../../../{d['path']}) · [Korea map](README.md).", '', '**Delivery:** Not sent; relationship unknown. Earlier global ID: `' + r['global_lead_id'] + '`.'])
        output[ROOT / d['path']] = md(['# Institutional referral email — UIA / North Korea', '', '**Status:** ' + d['status'] + '. Prepared ' + d['prepared_on'] + '; version 1. **Delivery:** Not sent.', '', '**To:** ' + r['contact_email'] + ' (older UIA general route; current refresh hold).', '', '**Subject:** ' + d['subject'], '', '## Prepared text', '', d['body'], '', '## Provenance and use', '', d['provenance'], '', '**Scope:** ' + r['route_scope'], '', '**Route status:** ' + r['route_status'], '', f"[Referral evidence](../../../{r['profile_path']}) · [Writing index](README.md).", '', 'Drafting does not authorise sending; no local person or advisor availability is inferred.'])
    index += ['', 'No correspondence has been sent, form submitted, meeting booked or application made.']
    output[WRITING / 'README.md'] = md(index)
    fields = ['id', 'name', 'korean_name', 'institution', 'published_role', 'city', 'geography', 'kind', 'priority_rank', 'checked_on', 'contact_email', 'contact_url', 'contact_form_url', 'route_scope', 'route_status', 'professional_evidence', 'fit_assessment', 'proposed_contribution', 'first_ask', 'supervision_evidence', 'programme_source_ids', 'open_questions', 'affiliation_caveat', 'source_urls', 'global_lead_id', 'coordination_groups', 'delivery_status', 'existing_relationship', 'response', 'draft_kind', 'draft_subject', 'draft_body', 'draft_path', 'profile_path']
    output[HERE / 'contacts.csv'] = csv_export(people, fields, sources)
    fields = ['id', 'name', 'geography', 'institution', 'city', 'checked_on', 'contact_email', 'contact_url', 'route_scope', 'route_status', 'published_evidence', 'fit_assessment', 'proposed_contribution', 'supervision_evidence', 'open_questions', 'source_urls', 'global_lead_id', 'delivery_status', 'existing_relationship', 'response', 'draft_kind', 'draft_subject', 'draft_body', 'draft_path', 'profile_path']
    output[HERE / 'referrals.csv'] = csv_export(data['referral_routes'], fields, sources)
    return output


def csv_export(rows, fields, sources):
    buf = io.StringIO(newline='')
    writer = csv.DictWriter(buf, fieldnames=fields, lineterminator='\n')
    writer.writeheader()
    for p in rows:
        row = {f: p.get(f, '') for f in fields}
        d = p['draft']
        row.update(source_urls=' | '.join(sources[s]['url'] for s in p['source_ids']), draft_kind=d['kind'], draft_subject=d['subject'], draft_body=d['body'], draft_path=d['path'])
        if 'professional_evidence' in fields:
            row['professional_evidence'] = ' | '.join(e['evidence'] for e in p['professional_findings'])
        for key, value in row.items():
            if isinstance(value, list):
                row[key] = ' | '.join(value)
        writer.writerow(row)
    return buf.getvalue()


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--check', action='store_true')
    args = parser.parse_args()
    data = json.loads((HERE / 'contacts.json').read_text())
    output = render(data)
    stale = []
    for path, content in output.items():
        if args.check:
            if not path.exists() or path.read_text() != content:
                stale.append(str(path.relative_to(ROOT)))
        else:
            path.parent.mkdir(parents=True, exist_ok=True)
            path.write_text(content)
    expected_profiles = {ROOT / p['profile_path'] for p in data['people']}
    expected_drafts = {ROOT / p['draft']['path'] for p in data['people'] + data['referral_routes']} | {WRITING / 'README.md'}
    assert set((HERE / 'profiles').glob('*.md')) <= expected_profiles
    assert set(WRITING.glob('*.md')) <= expected_drafts
    if stale:
        raise SystemExit('Stale exports: ' + ', '.join(stale))
    print(('Verified' if args.check else 'Rendered') + f" {len(output)} exports; {len(data['people'])} named people and {len(data['referral_routes'])} separate referral; evidence and unsent writing consistent.")


if __name__ == '__main__':
    main()
