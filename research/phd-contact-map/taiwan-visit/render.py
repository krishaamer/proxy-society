#!/usr/bin/env python3
"""Render Taiwan visit research and unsent drafts from the canonical JSON."""
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
WRITING = ROOT / 'writing/outreach/taiwan-visit'


def safe(value):
    return str(value).replace('|', '\\|').replace('\n', ' ')


def validate(data):
    people = data['people']
    sources = {s['id']: s for s in data['sources']}
    by = {p['id']: p for p in people}
    counts = data['metadata']['counts']
    assert len(people) == len(by) == counts['people'] == counts['drafts']
    assert len(sources) == len(data['sources']) == counts['sources']
    assert counts['unique_source_urls'] == len({s['url'] for s in sources.values()})
    assert counts['published_email_records'] == sum(bool(p['contact_email']) for p in people)
    assert counts['unique_email_routes'] == len({p['contact_email'] for p in people if p['contact_email']})
    assert counts['routing_holds'] == sum(p['route_status'].startswith('Hold') for p in people)
    assert counts['email_records_without_routing_hold'] == sum(bool(p['contact_email']) and not p['route_status'].startswith('Hold') for p in people)
    assert counts['programme_routes'] == len(data['programme_routes'])
    for s in sources.values():
        assert s['checked_on'] == data['metadata']['checked_on']
        assert urlsplit(s['url']).scheme in ('https', 'http')
        assert s['finding'] and s['review_method'] and s['limitations']
    for field in ('subject', 'project_case', 'personalized_ask', 'body'):
        assert len({p['draft'][field] for p in people}) == len(people), 'Duplicate ' + field
    global_ids = {p['id'] for p in json.loads((HERE.parent / 'contacts.json').read_text())['contacts']}
    groups = {g['id']: g for g in data['coordination_groups']}
    for p in people:
        assert p['source_ids'] and set(p['source_ids']) <= sources.keys(), p['id']
        assert p['checked_on'] == data['metadata']['checked_on']
        assert p['delivery_status'] == 'Not sent' and p['existing_relationship'] == 'Unknown' and not p['response']
        assert p['supervision_evidence'] and p['fit_assessment'] and p['first_ask'] and p['open_questions']
        assert p['contact_source_id'] in p['source_ids']
        assert p['contact_url'] == sources[p['contact_source_id']]['url']
        if p['contact_email']:
            assert re.fullmatch(r'[^@\s]+@[^@\s]+\.[^@\s]+', p['contact_email'])
        else:
            assert p['route_status'].startswith('Hold')
        assert set(p['programme_source_ids']) <= set(p['source_ids'])
        if p['global_lead_id']:
            assert p['global_lead_id'] in global_ids
        assert set(p['coordination_groups']) == {gid for gid, g in groups.items() if p['id'] in g['people']}
        for e in p['professional_findings']:
            assert e['source_id'] in p['source_ids'] and e['evidence']
        d = p['draft']
        assert d['anchor_source_id'] in p['source_ids']
        assert sources[d['anchor_source_id']]['url'] in d['personalized_opening']
        assert d['status'].startswith('Unsent') and d['prepared_on'] == p['checked_on']
        assert d['body_word_count'] == len(d['body'].split())
        assert d['body'].startswith(d['salutation'])
        assert all(d[f] in d['body'] for f in ('personalized_opening', 'project_case', 'personalized_ask'))
        assert re.search(r'\b(?:AI|agent|robot)\b', d['body'])
        assert not re.search(r'\b(?:we met|as we discussed|I attended|I hold|my degree|I am enrolled)\b', d['body'], re.I)
        assert '2026-10' not in d['body'], 'Visit dates must not be invented'
        assert (ROOT / p['profile_path']).parent == HERE / 'profiles'
        assert (ROOT / d['path']).parent == WRITING
    for g in groups.values():
        assert g['instruction'] and set(g['people']) <= by.keys()
    for route in data['programme_routes']:
        assert route['source_id'] in sources and route['suggested_first_contact'] in by
        if route['office_email']:
            assert route['office_source_id'] in sources
    # Material status distinctions must survive edits and rendering.
    assert 'retired' in by['heng_da_bih']['published_role'].lower()
    assert 'absent' in by['chen_cheng_chen']['affiliation_caveat'].lower()
    assert by['yuan_jung_lee']['route_status'].startswith('Hold')
    assert by['yi_pei_hsu']['route_status'].startswith('Hold')
    assert not by['johnny_chiu']['contact_email']
    assert 'purchase' in by['johnny_chiu']['affiliation_caveat'].lower()
    assert 'Project Teacher' == by['charng_shin_chen']['published_role']


def render(data):
    validate(data)
    people = sorted(data['people'], key=lambda p: (p['priority_rank'], p['name']))
    by = {p['id']: p for p in people}
    sources = {s['id']: s for s in data['sources']}
    counts = data['metadata']['counts']
    output = {}
    header = ['# Taiwan architecture and PhD visit network', '',
        'Status: source-researched leads and **unsent** individual emails. Checked **10 October 2026, Asia/Manila**.', '',
        f"**{counts['people']} named contacts, {counts['drafts']} individual drafts, five published doctoral routes and {counts['unique_source_urls']} distinct source URLs ({counts['sources']} evidence records).** This is a broad fit-based network, with a [remaining discovery queue](#remaining-coverage). It does not claim to include every possible contact in Taiwan.", '',
        f"Published emails appear on {counts['published_email_records']} person records, using {counts['unique_email_routes']} distinct mailboxes; this includes shared offices and two provisional Feng Chia routes. **{counts['routing_holds']} records are on hold**: six lack an appropriate verified email and two need a fresh route/appointment check. {counts['email_records_without_routing_hold']} email records have no routing hold; none has a confirmed meeting, relationship or supervisory offer.", '',
        f"[Canonical JSON](contacts.json) · [CSV tracker](contacts.csv) · [Source and status audit](sources.md) · [Visit preparation](visit-plan.md) · [{counts['drafts']} unsent drafts](../../../writing/outreach/taiwan-visit/README.md).", '',
        'Dates, cities, working language and applicant qualifications are unknown. City clusters are options for planning, not a confirmed itinerary. No correspondence has been sent and no application, booking or site access is recorded.', '',
        'This cohort sits beside the [303-lead global map](../README.md). Jeng, Hsu, Hou and Kung link to existing IDs; the global count and country-coverage snapshot remain unchanged. **These visit-specific drafts are the current Taiwan wording** for those four people. They replace the older general outreach choice, not the historical evidence record.', '',
        '## First conversations', '',
        'Priority is a fit assessment. Select a doctoral home and a complementary methods/practice conversation first, then follow actual replies and referrals. Shared department membership does not establish an introduction.', '',
        '| Person | City / institution | Specific reason to approach | Draft |',
        '| --- | --- | --- | --- |']
    for p in people:
        if p['priority_rank'] > 16:
            continue
        header.append(f"| [{safe(p['name'])}](profiles/{p['id']}.md) | {safe(p['city'])}; {safe(p['institution'])} | {safe(p['draft']['subject'].removeprefix('Taiwan visit: '))} | [Email](../../../{p['draft']['path']}) |")
    header += ['', '## Degree routes', '',
        'Programme evidence and individual supervision evidence are separate. A doctorate page or a professor title does not establish capacity, funding, eligibility or an offer.', '',
        '| Institution | Published route | First enquiry |', '| --- | --- | --- |']
    for r in data['programme_routes']:
        s = sources[r['source_id']]
        p = by[r['suggested_first_contact']]
        header.append(f"| {r['institution']} | [{safe(r['distinction'])}]({s['url']}) | [{safe(p['name'])}](profiles/{p['id']}.md) |")
    header += ['', 'Current international intake/deadlines, qualifications, language, primary/co-supervision approval and funding require programme-specific confirmation. No funded vacancy or open intake is claimed. Tunghai, Tamkang, Feng Chia and NUK are included for critique, methods and referrals; a suitable doctorate there has not been established. Tamkang’s published Civil Engineering doctoral teaching/advising needs a route-specific enquiry.', '',
        '## City clusters', '', '| Published work / office city | People |', '| --- | ---: |']
    for city, n in sorted(Counter(p['city'] for p in people).items()):
        header.append(f'| {safe(city)} | {n} |')
    header += ['', 'MAYU’s two contacts have offices in both Kaohsiung and Taipei; office presence does not establish where either person will be. The [visit plan](visit-plan.md) suggests questions and project precedents without opening hours or booked access.', '',
        '## Full contact roster', '',
        '| Person | Institution and published role | City | Proposed contribution | Professional route | Draft |', '| --- | --- | --- | --- | --- | --- |']
    for p in people:
        route = p['contact_email'] or 'Routing hold'
        if p['route_status'].startswith('Hold') and p['contact_email']:
            route += ' — verification hold'
        header.append(f"| [{safe(p['name'])}](profiles/{p['id']}.md) | {safe(p['institution'])}: {safe(p['published_role'])} | {safe(p['city'])} | {safe(p['proposed_contribution'])} | {safe(route)} | [Draft](../../../{p['draft']['path']}) |")
    header += ['', '## Coordinating approaches', '']
    for g in data['coordination_groups']:
        header.append('- **' + ', '.join(by[i]['name'] for i in g['people']) + ':** ' + g['instruction'])
    header += ['', '## Source and affiliation cautions', '',
        '- NYCU’s English and Chinese pages disagree on the architecture directorship and on Hou’s college leadership label. Drafts use faculty roles and avoid those administrative titles.',
        '- NTU’s current profiles show Shu-Mei Huang as professor/director and Chi-Hsin Chiu as professor. Bih is retired and approached for external methods advice.',
        '- Chen-Cheng Chen has 2025–2026 doctoral advising records but is absent from Tamkang’s current architecture roster. Affiliation and route remain unresolved.',
        '- Feng Chia evidence comes from an older indexed official roster after direct TLS retrieval failed. Both records remain on verification hold.',
        '- NUK faculty facts come from public official site data used by its client-rendered profiles; Chinese names are retained rather than inventing preferred English spellings.',
        '- JC’s published purchase-enquiry email is excluded from research routing. Fieldoffice’s current office email could not be verified.',
        '- Practice projects establish design intentions, not observed outcomes, operating policies or permission to conduct a study. BaF and MAYU work is credited to the practice rather than attributed solely to a founder.', '',
        '## Remaining coverage', '']
    for q in data['expansion_queue']:
        header.append(f"- **{q['area']}:** {q['institutions']}. {q['next_check']} Status: discovery queue; individual fit and routes not yet verified.")
    header += ['', '## Maintaining the record', '',
        'Edit `contacts.json`, then run `python3 research/phd-contact-map/taiwan-visit/render.py`; use `--check` to verify JSON, CSV, notes and draft parity. Preserve current source dates and route caveats. Record actual contact only when evidenced; raw replies and personal travel logistics belong outside this public repository.', '']
    output[HERE / 'README.md'] = '\n'.join(header)

    audit = ['# Taiwan source and status audit', '',
        'Checked 10 October 2026. A check date is a review date, not proof of live employment, mailbox delivery or recruitment. Findings are paraphrases; English renderings of Chinese work titles are explanatory unless a published English title is identified.', '',
        f"{counts['sources']} source records use {counts['unique_source_urls']} distinct URLs. The same page may support separate individual findings. Live HTML, indexed primary text, official public site data and unsuccessful refreshes are explicitly distinguished.", '',
        'The draft and profile source lists expose evidence separately from proposed fit. The map uses public professional routes only, excludes a purchase-only mailbox, and does not include private student details or personal correspondence.', '']
    for s in data['sources']:
        audit += [f"## {s['id']} — {s['label']}", '', f"[Source]({s['url']}) · Checked {s['checked_on']}.", '', '**Review method:** ' + s['review_method'] + '.', '', '**Published finding / retrieval result:** ' + s['finding'], '', '**Limits:** ' + s['limitations'], '']
    output[HERE / 'sources.md'] = '\n'.join(audit)

    plan = ['# Taiwan visit preparation', '',
        'Status: proposed meeting clusters and preparation, 10 October 2026. No dates, confirmed destinations or meeting agreements are recorded. Scope follows the [current architecture brief](../../../writing/proposals/architecture-of-delegated-presence.md).', '',
        'Start with a small number of distinct conversations. A useful first round pairs a potential doctoral home with an observation/prototype advisor and one library/public-space practice. Choose the cities after the actual itinerary is known.', '',
        '| Cluster | First conversation options | Concrete purpose |', '| --- | --- | --- |']
    clusters = [
        ('Taipei / New Taipei', ['chi_hsin_chiu','shu_mei_huang','ying_fen_chen','shen_guan_shih'], 'Ask whether the doctorate should be architecture, planning or interdisciplinary design; compare behavioural observation, resident-led XR and responsive-threshold prototypes.'),
        ('Hsinchu', ['pei_hsien_hsu','june_hao_hou','shih_yuan_wang'], 'Start with Hsu or Hou; clarify Civil Engineering Group G and how to isolate the spatial contribution. Wang adds construction-robotics methods to critique the prototype.'),
        ('Taichung', ['hao_hsiu_chiu','meng_chi_hsueh','wei_tseng'], 'Discuss responsive/remote presence, covered corridors and a community-remakable mock-up. Feng Chia is a later option after fresh verification.'),
        ('Tainan', ['taysheng_jeng','yang_ting_shen','shuenn_ren_liu','cho_jen_huang'], 'Explore an architecture doctoral home, MR rehearsal and a full-scale prototype/retrofit sequence.'),
        ('Tamsui / New Taipei', ['yi_cheng_lai','jui_mao_huang','hoang_ell_jeng'], 'Verify academic-unit routing; discuss publicness, agent-based models, community participation and cognition. Confirm any Civil Engineering doctoral route separately.'),
        ('Yilan', ['huang_sheng_yuan'], 'Verify Fieldoffice routing first; discuss everyday public life and the value of voluntary presence.'),
        ('Kaohsiung', ['nuk_chi_chieh_chen','nuk_kai_hsiang_liang','nuk_yu_pin_ma','ma_lone_chang'], 'Seek local architectural/methods advice on digital-twin or MR/game prototypes and library approach/publicness. No NUK doctorate established; MAYU availability requires a reply.'),
    ]
    for city, ids, purpose in clusters:
        links = ', '.join(f"[{by[i]['name']}](profiles/{i}.md)" for i in ids)
        plan.append(f'| {city} | {links} | {purpose} |')
    plan += ['', '## Public architectural precedents to discuss', '',
        '| Precedent | Why it matters to the pilot | Source / practice contact |', '| --- | --- | --- |',
        f"| New Taipei City Second Main Library | Library as a city living room; open arrival, flexible programmes and intergenerational use. | [Practice statement]({sources['baf_library']['url']}); [BaF](profiles/ching_hwa_chang.md) |",
        f"| Pingtung Public Library | Reoriented city approach, transparent lobby, park arcade and gathering islands. | [Practice statement]({sources['mayu_pingtung']['url']}); [MAYU](profiles/ma_lone_chang.md) |",
        f"| Tainan Public Library design | Shaded approach, visible play/reading relationship and flexible public space. | [Practice statement]({sources['mayu_tainan']['url']}); [MAYU](profiles/yu_lin_chen.md) |",
        f"| New Taipei City Art Museum design | Open public ground beside controlled museum interior. | [Practice statement]({sources['artech_museum']['url']}); [ARTECH](profiles/kris_yao.md) |",
        f"| Tunghai corridors / SEED House | Existing spatial and prototype methods for chosen presence and responsive environments. | [Faculty](profiles/hao_hsiu_chiu.md); [corridor research](profiles/meng_chi_hsueh.md) |", '',
        'These are discussion precedents. Do not infer current opening hours, exhibition availability, research access or operating rules from the design descriptions. Observation beyond ordinary public access and any intervention need the operator’s agreement.', '',
        '## Material for a first meeting', '',
        'Prepare a two-page architecture brief, one plan/section of a proposed threshold, and a four-condition comparison: ordinary booking, fixed automation, human assistance and a staged AI/robot task. The represented person must be able to arrive, stay, interrupt and regain authority. A dedicated robot route is a hypothesis to compare, not the assumed outcome.', '',
        'Bring one tailored question from the person’s draft. Show what could be observed: approach, hesitation, waiting, interruption, staff workload and human handoff. Use plans/full-scale mock-ups and filmed encounters only with appropriate agreement. Do not imply a willing operator has already been found.', '',
        '## Questions that change the doctoral choice', '',
        '- What is the degree and current international application code, and does the applicant’s actual qualification meet entry rules?',
        '- Can this faculty member formally supervise or co-supervise through that route? What capacity and funding are actually available?',
        '- What is the working language for supervision, fieldwork and writing, and what local-language collaboration would observation require?',
        '- Which architectural claim should the experiment establish, and which methods or technical collaborator is missing?',
        '- Which public-space operator could be approached for a later bounded pilot, without treating an architect’s referral as consent?', '',
        '## Published programme-office options', '',
        'Use these for precise administrative questions after choosing a route; a faculty conversation and an office enquiry should be coordinated.', '']
    for r in data['programme_routes']:
        if r['office_email']:
            plan.append(f"- **{r['institution']}:** {r['office_email']} — [published source]({sources[r['office_source_id']]['url']}). {r['distinction']}")
    plan += ['', '## Route holds', '']
    for p in people:
        if p['route_status'].startswith('Hold'):
            plan.append(f"- **[{p['name']}](profiles/{p['id']}.md):** {p['route_status']}. {p['affiliation_caveat']}".rstrip())
    plan += ['', 'No messages have been sent. Drafts with shared mailboxes are alternative approaches, not a batch to send unchanged. Personal visit dates and private replies must not be published in the repo.', '']
    output[HERE / 'visit-plan.md'] = '\n'.join(plan)

    index = ['# Taiwan visit — personalized unsent correspondence', '',
        f"{counts['drafts']} individual English drafts prepared 10 October 2026. **All are unsent and require human review.** Each links a specific published work, method or professional role to a different spatial case and a tailored ask.", '',
        'These are independent visit-specific revisions based on the Architecture of Delegated Presence brief, source revision `8b621c9effe179a9f91463c32e10b6183004d13b`. No website copy changed. For Jeng, Hsu, Hou and Kung, choose these current Taiwan drafts instead of the earlier global-map wording.', '',
        '[Research and priority map](../../../research/phd-contact-map/taiwan-visit/README.md) · [Visit preparation](../../../research/phd-contact-map/taiwan-visit/visit-plan.md) · [Canonical evidence and draft text](../../../research/phd-contact-map/taiwan-visit/contacts.json).', '',
        'The user plans to be in Taiwan; no dates, confirmed city sequence, degree qualifications or prior contacts are assumed. Eight records need routing/affiliation verification. Shared office drafts require coordination. Programme pages and faculty titles do not confirm supervisory availability or funding.', '',
        '| Recipient | City | Subject | Route status |', '| --- | --- | --- | --- |']
    for p in people:
        d = p['draft']
        index.append(f"| [{safe(p['name'])}](../../../{p['profile_path']}) | {safe(p['city'])} | [{safe(d['subject'])}]({p['id']}.md) | {safe(p['route_status'])} |")
        profile = [f"# {p['name']}" + (f" / {p['chinese_name']}" if p['chinese_name'] and p['name'] != p['chinese_name'] else ''), '',
            f"**Published affiliation/role:** {p['institution']} — {p['published_role']}. **City:** {p['city']}. Checked {p['checked_on']}.", '',
            f"**Status:** {p['delivery_status']}; prior relationship {p['existing_relationship'].lower()}. **Priority:** {p['priority_rank']} (fit assessment).", '',
            '## Published professional evidence', '']
        for e in p['professional_findings']:
            s = sources[e['source_id']]
            profile.append(f"- {e['evidence']} [Source]({s['url']}). Review: {s['review_method']}.")
        if p['affiliation_caveat']:
            profile += ['', '**Affiliation/source caution:** ' + p['affiliation_caveat']]
        profile += ['', '## Proposed contribution and first question', '',
            '**Proposed role:** ' + p['proposed_contribution'] + '.', '',
            '**Fit / spatial case (assessment):** ' + p['fit_assessment'], '',
            '**First ask:** ' + p['first_ask'], '',
            '## Supervision evidence and limits', '', p['supervision_evidence'], '',
            'No capacity, funding, admission, agreed supervision or research access is recorded.', '',
            '## Professional contact route', '',
            '**Email:** ' + (p['contact_email'] or 'Not established; hold') + '. [Published/reviewed route](' + p['contact_url'] + ').', '',
            '**Route scope:** ' + p['route_scope'] + '. **Status:** ' + p['route_status'] + '.', '']
        for gid in p['coordination_groups']:
            g = next(g for g in data['coordination_groups'] if g['id']==gid)
            profile.append('**Coordination:** ' + g['instruction'])
        profile += ['', '## Open questions', ''] + ['- ' + q for q in p['open_questions']]
        if p['global_lead_id']:
            profile += ['', '**Existing global lead ID:** `' + p['global_lead_id'] + '`. This focused note and draft supply the current Taiwan visit wording; the earlier global snapshot is retained.']
        profile += ['', f"[Individual unsent email](../../../../{d['path']}) · [Full contact map](../README.md).", '', '## Reviewed sources', '']
        for sid in p['source_ids']:
            s = sources[sid]
            profile.append(f"- [{s['label']}]({s['url']}) — {s['checked_on']}; {s['review_method']}. {s['limitations']}")
        profile.append('')
        output[ROOT / p['profile_path']] = '\n'.join(profile)
        mail = [f"# Email draft — {p['name']}", '',
            f"**Status:** {d['status']}. Prepared {d['prepared_on']}; version {d['version']}. **Delivery:** {p['delivery_status']}.", '',
            '**To:** ' + (p['contact_email'] or 'Hold; confirm an appropriate published professional route') + '.', '',
            '**Route scope:** ' + p['route_scope'] + '. **Route status:** ' + p['route_status'] + '.', '',
            f"**Subject:** {d['subject']}", '', '## Draft', '', d['body'], '', '## Preparation and review', '',
            f"[Recipient research](../../../{p['profile_path']}) · [Canonical record](../../../research/phd-contact-map/taiwan-visit/contacts.json).", '',
            d['provenance'], '',
            'Confirm visit availability, preferred name/title and route scope before use. Review the question against the actual qualification and city/date constraints. No dates or qualifications have been inserted. Do not send other drafts to the same shared office without coordinating the approach.', '',
            '**Supervision evidence:** ' + p['supervision_evidence'], '']
        if p['affiliation_caveat']:
            mail += ['**Source/affiliation caution:** ' + p['affiliation_caveat'], '']
        output[ROOT / d['path']] = '\n'.join(mail)
    index += ['', 'Sending or submitting these drafts requires separate explicit authorization. No mailbox or form has been used. Record private replies outside this public repository.', '']
    output[WRITING / 'README.md'] = '\n'.join(index)

    fields = ['id','name','chinese_name','institution','published_role','kind','city','priority_rank','contact_email','contact_url','route_scope','route_status','checked_on','professional_evidence','fit_assessment','proposed_contribution','first_ask','supervision_evidence','programme_source_ids','open_questions','affiliation_caveat','source_urls','global_lead_id','coordination_groups','delivery_status','existing_relationship','response','draft_subject','draft_body','draft_path','profile_path']
    buf = io.StringIO(newline='')
    writer = csv.DictWriter(buf, fieldnames=fields, lineterminator='\n')
    writer.writeheader()
    for p in people:
        row = {k:p.get(k,'') for k in fields}
        row.update(professional_evidence=' | '.join(e['evidence'] for e in p['professional_findings']), source_urls=' | '.join(dict.fromkeys(sources[s]['url'] for s in p['source_ids'])), draft_subject=p['draft']['subject'], draft_body=p['draft']['body'], draft_path=p['draft']['path'])
        for k,v in row.items():
            if isinstance(v,list):row[k]=' | '.join(v)
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
    expected_profiles={ROOT/p['profile_path'] for p in data['people']}
    expected_drafts={ROOT/p['draft']['path'] for p in data['people']} | {WRITING/'README.md'}
    assert set((HERE/'profiles').glob('*.md')) <= expected_profiles, 'Unexpected stale profile'
    assert set(WRITING.glob('*.md')) <= expected_drafts, 'Unexpected stale draft'
    if stale:
        raise SystemExit('Stale generated files: ' + ', '.join(stale))
    print(('Verified' if args.check else 'Rendered') + f" {len(output)} exports for {len(data['people'])} people; evidence, routes and unsent draft parity valid.")


if __name__ == '__main__':
    main()
