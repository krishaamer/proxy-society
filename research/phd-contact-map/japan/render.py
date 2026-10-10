#!/usr/bin/env python3
"""Render the Japan research cohort and unsent writing from contacts.json."""
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
WRITING = ROOT / 'writing/outreach/japan'


def safe(value):
    return str(value).replace('|', '\\|').replace('\n', ' ')


def md(lines):
    return '\n'.join(line.rstrip() for line in lines).rstrip() + '\n'


def validate(data):
    people = data['people']
    by = {p['id']: p for p in people}
    sources = {s['id']: s for s in data['sources']}
    c = data['metadata']['counts']
    assert len(people) == len(by) == c['people'] == c['drafts']
    assert len(sources) == len(data['sources']) == c['sources']
    assert len({s['url'] for s in sources.values()}) == c['unique_source_urls']
    assert c['emails'] == sum(p['draft']['kind'] == 'Email' for p in people)
    assert c['general_session_questions'] == sum(p['draft']['kind'] == 'General-session question' for p in people)
    assert c['published_email_records'] == sum(bool(p['contact_email']) for p in people)
    assert c['unique_email_routes'] == len({p['contact_email'] for p in people if p['contact_email']})
    assert c['holds'] == sum(p['route_status'].startswith('Hold') for p in people)
    assert c['published_form_records'] == sum(p['route_status'].startswith('Published general form') for p in people)
    assert c['programme_routes'] == len(data['programme_routes'])
    for s in sources.values():
        assert s['checked_on'] == data['metadata']['checked_on']
        assert urlsplit(s['url']).scheme in ('https', 'http')
        assert all(s[f] for f in ('label', 'finding', 'review_method', 'limitations'))
    global_ids = {p['id'] for p in json.loads((HERE.parent / 'contacts.json').read_text())['contacts']}
    event_ids = {p['id'] for p in json.loads((HERE.parent / 'anthology-manila/contacts.json').read_text())['people']}
    groups = {g['id']: g for g in data['coordination_groups']}
    for field in ('subject', 'project_case', 'personalized_ask', 'body'):
        assert len({p['draft'][field] for p in people}) == len(people), 'Duplicate ' + field
    for p in people:
        assert p['source_ids'] and set(p['source_ids']) <= sources.keys(), p['id']
        assert p['contact_source_id'] in p['source_ids']
        assert p['contact_url'] == sources[p['contact_source_id']]['url']
        assert set(p['programme_source_ids']) <= set(p['source_ids'])
        assert p['checked_on'] == data['metadata']['checked_on']
        assert p['delivery_status'] == 'Not sent' and p['existing_relationship'] == 'Unknown' and p['response'] == ''
        assert all(p[f] for f in ('published_role', 'supervision_evidence', 'fit_assessment', 'first_ask', 'open_questions', 'route_scope'))
        if p['contact_email']:
            assert re.fullmatch(r'[^@\s]+@[^@\s]+\.[^@\s]+', p['contact_email'])
        else:
            assert p['route_status'].startswith(('Hold', 'Published general form'))
        if p['global_lead_id']:
            assert p['global_lead_id'] in global_ids
        if p['anthology_lead_id']:
            assert p['anthology_lead_id'] in event_ids
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
        assert not re.search(r'\b(?:we met|as we discussed|I attended|I hold|my degree|I am enrolled|I.ll be in Japan|I.am visiting Japan|attached is)\b', d['body'], re.I)
        assert (ROOT / p['profile_path']).parent == HERE / 'profiles'
        assert (ROOT / d['path']).parent == WRITING
    for g in groups.values():
        assert g['instruction'] and set(g['people']) <= by.keys()
    for route in data['programme_routes']:
        assert route['source_id'] in sources and route['suggested_first_contact'] in by
        assert route['questions']
        if route['office_email']:
            assert route['office_source_id'] in sources
    # Preserve consequential route and appointment distinctions.
    tsuka = by['yoshiharu_tsukamoto']
    assert not tsuka['contact_email'] and tsuka['draft']['kind'] == 'General-session question'
    assert 'no individual admissions' in tsuka['route_status']
    assert by['taishin_shiozaki']['draft']['subject'] == 'student apply(Kris Haamer)'
    assert 'portfolio' in by['taishin_shiozaki']['route_status']
    assert 'CV' in by['takuya_oki']['route_status']
    assert 'Project Professor' in by['keisuke_toyoda']['published_role']
    assert 'Senior Lecturer' == by['yutaro_muraji']['published_role']
    assert 'Assistant Professor' == by['yuta_shimoda']['published_role']
    assert 'Emeritus' in by['kengo_kuma']['published_role']
    assert 'emeritus' in by['kazuyo_sejima']['published_role']
    assert 'Zurich' in by['momoyo_kaijima']['geography']
    assert not by['kumiko_inui']['contact_email'] and 'fallback' in by['kumiko_inui']['route_scope']


def render(data):
    validate(data)
    people = sorted(data['people'], key=lambda p: (p['priority_rank'], p['name']))
    by = {p['id']: p for p in people}
    sources = {s['id']: s for s in data['sources']}
    c = data['metadata']['counts']
    output = {}
    readme = ['# Japan architecture and PhD contact network', '',
        'Status: researched leads and **unsent** prepared correspondence. Checked **10 October 2026, Asia/Manila**.', '',
        f"**{c['people']} named contacts, {c['emails']} personalized email drafts and {c['general_session_questions']} general-session question**, with {c['programme_routes']} programme/process screens and {c['unique_source_urls']} primary source URLs. Scope: architectural doctoral fit, methods collaboration and practice interviews. This is a substantial first Japan cohort; [regional and institutional gaps](#remaining-discovery) remain explicit.", '',
        f"{c['published_email_records']} records have a published email, using {c['unique_email_routes']} distinct mailboxes; {c['published_form_records']} use a general form. **{c['holds']} records are on hold**, including missing personal routes, unsuccessful route refreshes, required applicant materials and Tsukamoto’s general admissions process. Counts overlap: a verified mailbox may still have a materials hold. No meeting, admission, funding or supervision agreement is recorded.", '',
        '[Canonical JSON](contacts.json) · [CSV tracker](contacts.csv) · [Evidence audit](sources.md) · [PhD and conversation preparation](programme-notes.md) · [Unsent writing](../../../writing/outreach/japan/README.md).', '',
        'No Japan trip, dates or itinerary are assumed. City labels describe published institutional or practice bases, not personal whereabouts. Kaijima is a Japan-connected contact with an academic base in Zurich.', '',
        'This cohort supplements the [303-lead global snapshot](../README.md), whose historical count remains unchanged. Japan wording here is current for Tsukamoto, Mano, Kakehi and Kanda; their global IDs are linked. Kadowaki and Shimoda also link to the [Anthology cohort](../anthology-manila/README.md): choose the Japan first-contact wording unless an event-specific approach is intended. No attendance or prior relationship is inferred.', '',
        '## First conversations', '',
        'Priority is a fit assessment. Select an architectural question and a possible doctoral home, then one complementary methods conversation. A faculty title or doctoral roster establishes neither a place nor funding.', '',
        '| Contact | Why this specific conversation | Route / draft |', '| --- | --- | --- |']
    for p in people[:15]:
        readme.append(f"| [{safe(p['name'])}](profiles/{p['id']}.md) — {safe(p['institution'])} | {safe(p['draft']['subject'])} | {safe(p['route_status'])}; [prepared text](../../../{p['draft']['path']}) |")
    readme += ['', '## Programme and degree distinctions', '', '| Institution | Published route / distinction | First contact option |', '| --- | --- | --- |']
    for r in data['programme_routes']:
        readme.append(f"| {safe(r['institution'])} | [{safe(r['distinction'])}]({sources[r['source_id']]['url']}) | [{by[r['suggested_first_contact']]['name']}](profiles/{r['suggested_first_contact']}.md) |")
    readme += ['', 'Keio Media and Governance and UTokyo Information Studies are included as interdisciplinary methods/graduate connections. A current individual doctoral route and architecture co-supervision have not been established for them. Past intake guides and information-session dates are not advertised as open applications.', '',
        '## Full roster', '', '| Contact | Published role / institution | Base | Proposed contribution | Professional route |', '| --- | --- | --- | --- | --- |']
    for p in people:
        route = p['contact_email'] or ('General form' if p['route_status'].startswith('Published general form') else 'Hold')
        if p['contact_email'] and p['route_status'].startswith('Hold'):
            route += ' (hold)'
        readme.append(f"| [{safe(p['name'])}](profiles/{p['id']}.md) | {safe(p['published_role'])}; {safe(p['institution'])} | {safe(p['city'])} | {safe(p['kind'])} | {safe(route)} |")
    readme += ['', '## Coordinating approaches', '']
    for g in data['coordination_groups']:
        readme.append('- **' + ', '.join(by[i]['name'] for i in g['people']) + ':** ' + g['instruction'])
    readme += ['', '## Material source cautions', '',
        '- Tsukamoto’s lab declines individual admissions enquiries by email/phone. Its prepared text is a question for a future general session.',
        '- Toyoda’s personal biography specifies Project Professor; Matsuda’s current lab and April guide disagree on rank. The records preserve both labels.',
        '- Sejima’s 2026 institutional profile says YNU emeritus; Kuma’s biography says Professor Emeritus/University Professor. Neither is presented as an available primary doctoral supervisor.',
        '- Meiji’s April 2026 list marks Tanaka for doctoral supervision in I-AUD’s English Track, while I-AUD’s general About page lists master’s degrees. Confirm the current doctorate/application route with the programme. Muraji’s doctoral column is blank and Shimoda is absent.',
        '- Onishi’s Y-GSA professorship and Hyakuda’s guest roles do not establish approval for YNU’s separate doctorate. o+h’s Japanese/English older teaching dates disagree.',
        '- Inui prefers the general form; her published email is an error fallback. SANAA’s indexed address has a live-refresh hold; Toyo Ito’s current research email was not verified.',
        '- Architectural projects are precedents and published intentions. No measured project outcomes, current operating rules or site access are inferred.', '',
        '## Remaining discovery', '']
    for q in data['expansion_queue']:
        readme.append(f"- **{q['area']}:** {q['next_step']}")
    readme += ['', '## Updating this cohort', '',
        'Edit contacts.json as the source of truth, then run:', '', '```sh',
        'python3 research/phd-contact-map/japan/render.py',
        'python3 research/phd-contact-map/japan/render.py --check', '```', '',
        'The renderer checks evidence IDs, current/older cohort links, counts, professional route scope, distinct personalized text and unsent status. Preserve earlier versions through Git; keep actual private correspondence outside this public repository.']
    output[HERE / 'README.md'] = md(readme)

    audit = ['# Japan source and status audit', '',
        f"{c['sources']} primary evidence records, checked 10 October 2026. A review date is not a mailbox-delivery test or an employment guarantee. Retrieval methods distinguish live pages/PDFs, indexed primary text, earlier project evidence and unsuccessful refreshes.", '',
        'Findings are paraphrases. Japanese work descriptions are explanatory translations unless an official English title is stated. The record uses professional public channels; no address patterns or private correspondence are included.', '']
    for s in data['sources']:
        audit += [f"## {s['id']} — {s['label']}", '', f"[Primary source]({s['url']}) · Checked {s['checked_on']}", '',
            '**Review:** ' + s['review_method'], '', '**Published finding / retrieval result:** ' + s['finding'], '', '**Limits:** ' + s['limitations'], '']
    output[HERE / 'sources.md'] = md(audit)

    notes = ['# Japan doctoral and conversation preparation', '',
        'Prepared 10 October 2026. No visit, application or meeting is confirmed. Use the [current architecture brief](../../../writing/proposals/architecture-of-delegated-presence.md) as the research starting point.', '',
        '## Choose the question before the institution', '',
        '| Architectural question | Initial options | Complementary method |', '| --- | --- | --- |',
        '| Can construction and rules be revised together? | [Kadowaki](profiles/kozo_kadowaki.md) for doctoral fit; [Muraji](profiles/yutaro_muraji.md) for methods | [Shimoda](profiles/yuta_shimoda.md) for fabrication |',
        '| Can planning and design form an English Track doctorate? | [Tanaka](profiles/tomoaki_tanaka.md), marked for I-AUD doctoral supervision in April 2026 | Confirm the current degree, application and language requirements |',
        '| Does a delegated arrival preserve independent access and the right to stay? | [Matsuda](profiles/yuji_matsuda.md), [Miura](profiles/ken_miura.md), [Yasuhara](profiles/motoki_yasuhara.md) | [Kanda](profiles/takayuki_kanda.md) for authority comprehension |',
        '| How is limited, revocable spatial authority represented? | [Toyoda](profiles/keisuke_toyoda.md), [Ikeda](profiles/yasushi_ikeda.md) | [Kakehi](profiles/yasuaki_kakehi.md) for material legibility |',
        '| Which tasks does the community want to delegate? | [Mano](profiles/yosuke_mano.md), [Otsuki](profiles/toshio_otsuki.md) | [Kobayashi](profiles/hiroto_kobayashi.md) for co-managed prototyping |',
        '| Which spatial claim can the experiment isolate? | [Oki](profiles/takuya_oki.md) | [Ishida](profiles/taiichiro_ishida.md), [Ueno](profiles/kanako_ueno.md) or [Sakuma](profiles/tetsuya_sakuma.md) for perception/acoustics |', '',
        '## A concrete first research packet', '',
        'Develop a two-page proposal and one threshold plan/section. Compare ordinary booking, fixed automation, human assistance and a staged AI/robot task. Keep the task constant while changing the spatial arrangement. Show mandate scope/expiry, an interruption, an error and a return to human control; measure waiting, detours, comprehension and staff work. A dedicated robot route is one hypothesis to compare.', '',
        'The applicant’s qualifications, CV, portfolio, language and funding needs are unknown. The drafts claim no attached material. Oki requests CV, reason for applying and research plan; Shiozaki additionally requests portfolio and motivation letter with the exact subject format. Their messages remain on materials hold.', '',
        '## Programme/process checks', '']
    for r in data['programme_routes']:
        notes += [f"### {r['institution']}", '', f"[{r['distinction']}]({sources[r['source_id']]['url']})", '']
        notes += ['- ' + q for q in r['questions']]
        if r['office_email']:
            notes += ['', f"**Published route:** {r['office_email']} — [source]({sources[r['office_source_id']]['url']}). Use administrative offices for eligibility, procedure and routing, not a recipient-specific research letter."]
        notes.append('')
    notes += ['## Tsukamoto general process', '',
        'The lab states it cannot respond to individual admissions enquiries by email or phone. Its May 2026 visits are past. Keep the prepared general-session question until a suitable current process/session is published. A Bow-Wow or ETH contact is not a route around that policy.', '',
        '## Practice and academic bases', '',
        'Tokyo, Yokohama, Kawasaki/Ikuta, Fujisawa and Kyoto are institutional/practice clusters, not an itinerary. Kaijima’s academic base is Zurich. Project locations such as Teshima, Yusuhara, Nobeoka and Kashiba are precedents; they do not establish where a designer is available.', '',
        'For a precedent interview, bring the relevant comparison drawing and ask which spatial detail merits study. Permission to interview an architect does not establish permission to intervene or film at a project. No operator, participant or consent is recorded.', '',
        '## Holds to resolve before use', '']
    for p in people:
        if p['route_status'].startswith('Hold'):
            notes.append(f"- **[{p['name']}](profiles/{p['id']}.md):** {p['route_status']}. {p['affiliation_caveat']}")
    output[HERE / 'programme-notes.md'] = md(notes)

    index = ['# Japan — personalized unsent correspondence', '',
        f"{c['emails']} individual English email drafts and {c['general_session_questions']} general-session question, prepared 10 October 2026. **All remain unsent.** Each uses a recipient-specific published work or method, spatial case and first ask.", '',
        'Independent Japan revisions based on Architecture of Delegated Presence (website source revision `8b621c9effe179a9f91463c32e10b6183004d13b`). No website text changed. No Japan visit, qualification, prior relationship, invitation or attached packet is assumed.', '',
        '[Research map](../../../research/phd-contact-map/japan/README.md) · [Programme preparation](../../../research/phd-contact-map/japan/programme-notes.md) · [Canonical evidence/text](../../../research/phd-contact-map/japan/contacts.json).', '',
        'Use this wording for the four overlapping Japan global leads and the two Meiji event contacts when making a Japan-focused first approach. Earlier general/event versions remain as history or an explicitly selected alternative. Shared office letters are alternatives, and recorded holds must be resolved before use.', '',
        '| Recipient | Prepared subject | Type / route status |', '| --- | --- | --- |']
    for p in people:
        d = p['draft']
        index.append(f"| [{safe(p['name'])}](../../../{p['profile_path']}) | [{safe(d['subject'])}]({p['id']}.md) | {safe(d['kind'])}; {safe(p['route_status'])} |")
        profile = [f"# {p['name']}" + (f" / {p['japanese_name']}" if p['japanese_name'] else ''), '',
            f"**Published role:** {p['published_role']}; {p['institution']}. **Base:** {p['city']}. **Geography:** {p['geography']}.", '',
            f"Checked {p['checked_on']}. **Priority:** {p['priority_rank']} (fit assessment). **Delivery:** Not sent; prior relationship unknown.", '',
            '## Published professional evidence', '']
        for e in p['professional_findings']:
            profile.append(f"- {e['evidence']} [Source]({sources[e['source_id']]['url']}).")
        if p['affiliation_caveat']:
            profile += ['', '**Source/affiliation caution:** ' + p['affiliation_caveat']]
        profile += ['', '## Proposed contribution', '', p['proposed_contribution'], '',
            '**Fit assessment:** ' + p['fit_assessment'], '', '**First question:** ' + p['first_ask'], '',
            '## Supervision evidence', '', p['supervision_evidence'], '',
            'No acceptance, available funded place, admission, research access or supervision agreement established.', '',
            '## Professional route', '',
            '**Email:** ' + (p['contact_email'] or 'No unrestricted appropriate email established') + '.', '',
            '[Published/reviewed route](' + p['contact_url'] + '). **Scope:** ' + p['route_scope'] + '.', '',
            '**Status:** ' + p['route_status'] + '.', '']
        profile += ['**Coordination:** ' + next(g['instruction'] for g in data['coordination_groups'] if g['id'] == gid) for gid in p['coordination_groups']]
        profile += ['', '## Open questions', ''] + ['- ' + q for q in p['open_questions']]
        if p['global_lead_id']:
            profile += ['', '**Global record ID:** `' + p['global_lead_id'] + '`; this Japan text is current for a Japan-focused first approach.']
        if p['anthology_lead_id']:
            profile += ['', '**Anthology record ID:** `' + p['anthology_lead_id'] + '`; event wording remains an alternative, with no attendance inferred.']
        profile += ['', f"[Prepared unsent text](../../../../{d['path']}) · [Japan network](../README.md).", '', '## Sources and review limits', '']
        for sid in p['source_ids']:
            s = sources[sid]
            profile.append(f"- [{s['label']}]({s['url']}) — {s['checked_on']}; {s['review_method']}. {s['limitations']}")
        output[ROOT / p['profile_path']] = md(profile)
        mail = [f"# {d['kind']} draft — {p['name']}", '',
            f"**Status:** {d['status']}. Prepared {d['prepared_on']}; version {d['version']}. **Delivery:** Not sent.", '',
            '**To / channel:** ' + (p['contact_email'] or p['route_scope']) + '.', '',
            '**Route status:** ' + p['route_status'] + '.', '', '**Subject:** ' + d['subject'], '',
            '## Prepared text', '', d['body'], '', '## Provenance and review', '', d['provenance'], '',
            f"[Recipient research](../../../{p['profile_path']}) · [Canonical record](../../../research/phd-contact-map/japan/contacts.json).", '',
            '**Scope:** ' + p['route_scope'] + '.', '', '**Supervision evidence:** ' + p['supervision_evidence'], '',
            'Confirm the route, recipient title, applicant materials and intended request before use. Actual CV/portfolio and language constraints are not inserted. Private replies belong outside this public repository.']
        if p['affiliation_caveat']:
            mail += ['', '**Source caution:** ' + p['affiliation_caveat']]
        output[ROOT / d['path']] = md(mail)
    index += ['', 'Drafting does not authorize sending. No mailbox or form has been used; no session question has been submitted.']
    output[WRITING / 'README.md'] = md(index)

    fields = ['id', 'name', 'japanese_name', 'institution', 'published_role', 'city', 'geography', 'kind', 'priority_rank', 'checked_on', 'contact_email', 'contact_url', 'route_scope', 'route_status', 'professional_evidence', 'fit_assessment', 'proposed_contribution', 'first_ask', 'supervision_evidence', 'programme_source_ids', 'open_questions', 'affiliation_caveat', 'source_urls', 'global_lead_id', 'anthology_lead_id', 'coordination_groups', 'delivery_status', 'existing_relationship', 'response', 'draft_kind', 'draft_subject', 'draft_body', 'draft_path', 'profile_path']
    buf = io.StringIO(newline='')
    writer = csv.DictWriter(buf, fieldnames=fields, lineterminator='\n')
    writer.writeheader()
    for p in people:
        row = {f: p.get(f, '') for f in fields}
        row.update(professional_evidence=' | '.join(e['evidence'] for e in p['professional_findings']), source_urls=' | '.join(sources[s]['url'] for s in p['source_ids']), draft_kind=p['draft']['kind'], draft_subject=p['draft']['subject'], draft_body=p['draft']['body'], draft_path=p['draft']['path'])
        for key, value in row.items():
            if isinstance(value, list):
                row[key] = ' | '.join(value)
        writer.writerow(row)
    output[HERE / 'contacts.csv'] = buf.getvalue()
    return output


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
    assert set((HERE / 'profiles').glob('*.md')) <= {ROOT / p['profile_path'] for p in data['people']}, 'Unexpected profile'
    assert set(WRITING.glob('*.md')) <= {ROOT / p['draft']['path'] for p in data['people']} | {WRITING / 'README.md'}, 'Unexpected draft'
    if stale:
        raise SystemExit('Stale exports: ' + ', '.join(stale))
    print(('Verified' if args.check else 'Rendered') + f" {len(output)} exports; {len(data['people'])} people; evidence, routes and unsent writing consistent.")


if __name__ == '__main__':
    main()
