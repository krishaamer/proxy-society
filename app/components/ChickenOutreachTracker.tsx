"use client";

import { useMemo, useState } from "react";
import {
  chickenMembers,
  chickenMembershipAudit,
  chickenOutreachSnapshot,
  type ChickenAction,
  type ChickenMember,
} from "../chicken-outreach-data";
import type { ProjectLocale } from "../projects-data";
import styles from "./ChickenOutreachTracker.module.css";

type EvidenceFilter = "all" | "quote" | "action" | "unknown";
type OutreachFilter = "all" | "not_contacted" | "contacted" | "replied";

const text = {
  en: {
    kicker: "FIELD LOG / ESTONIA / 2026",
    heading: "A public record of civic follow-through.",
    description:
      "One human preference, 101 elected representatives, two bills. This register shows what an MP has publicly said or done separately from whether Proxy Society has contacted them. It does not score political beliefs.",
    snapshotLabel: "Evidence snapshot",
    snapshotNote: "Public quotations checked 23 Oct 2026. The full member and committee review dates to 28 Sep 2026. This is a dated research snapshot, not a live parliamentary feed.",
    metrics: {
      members: "MPs in the research map",
      profiles: "First-pass profiles",
      quotes: "Verified direct quotes",
      contacted: "Emails confirmed sent",
      replies: "Replies recorded",
    },
    coverage: "Attributable evidence coverage",
    quoteLegend: "Direct quotation",
    actionLegend: "Public action only",
    unknownLegend: "No attributable hook verified",
    coverageNote:
      "An action includes introducing a bill, participating in committee work, or speaking in debate. None is treated as a vote or an inferred position.",
    issue: "Legislation under review",
    billOne: "828 SE",
    billOneStatus: "First reading completed, at second-reading stage",
    billTwo: "970 SE",
    billTwoStatus: "Introduced 17 June 2026, referred to the Rural Affairs Committee",
    noLaw: "Neither proposal is recorded here as an enacted cage ban.",
    timeline: "How this issue reached Parliament",
    source: "Original source ↗",
    quotesTitle: "In their own words",
    quotesIntro:
      "A short selection of individual quotations with their dates and original sources. Historical comments are not assumed to be present-day positions.",
    originalLanguage: "Original Estonian statement",
    directory: "Every member, every recorded step",
    directoryIntro:
      "Search all 101 members. Open a row to see the actual source, its limits, and the recorded outreach state.",
    search: "Find a member",
    searchPlaceholder: "Name, for example Maran or Kruuse",
    evidenceLabel: "Public evidence",
    evidenceAll: "All evidence",
    evidenceQuote: "Verified quotation",
    evidenceAction: "Documented action only",
    evidenceUnknown: "No verified hook",
    outreachLabel: "Outreach",
    outreachAll: "All outreach statuses",
    notContacted: "Not contacted",
    contacted: "Contacted",
    replied: "Replied",
    count: "members shown",
    nameCol: "Member",
    evidenceCol: "Evidence",
    contactCol: "Contact",
    quoteEvidence: "Verified quotation",
    actionEvidence: "Documented action",
    unknownEvidence: "Not yet established",
    noQuote: "No individual direct quotation has been verified for this entry.",
    noAction: "No qualifying individual statement or parliamentary action is recorded yet. This does not imply opposition or support.",
    actionsTitle: "Documented activity",
    sourceLabel: "View source ↗",
    scope: "Context and attribution limits",
    outreachTitle: "Communication status",
    noSent: "No sent email has been confirmed for this member.",
    sentOn: "Contacted on",
    repliedOn: "Reply recorded on",
    replyCaution: "The reply has not been published here. Private correspondence is reviewed before quotation.",
    empty: "No members match those filters.",
    reset: "Clear filters",
    methodology: "How to read this register",
    methods:
      "A quotation must be individually attributable, dated and linked to its source. Bill sponsorship, committee office, debate participation and responses are different types of evidence. Silence is never labeled opposition. Prepared or unsent drafts are not outreach. A public response appears only after verification and an editorial review.",
    sourceCode: "Inspect the public dataset ↗",
    footer:
      "Corrections and sourced updates are welcome. Members may supply a link to an existing public statement. Corrections do not automatically overwrite the original historical record.",
    correct: "Suggest a correction ↗",
    eventNote: "This is a source-linked chronology of policy activity, not a prediction of when legislation will pass.",
    actions: {
      initiated828: "Co-initiated bill 828 SE",
      initiated970: "Co-initiated bill 970 SE",
      committee: "Rural Affairs Committee",
      spoke828: "Spoke during the first reading of 828 SE; the fact of speaking alone does not establish a position",
      furBill: "Co-initiated the 2021 fur-farming ban bill (a different animal-welfare issue)",
    },
  },
  "zh-TW": {
    kicker: "實地紀錄 / 愛沙尼亞 / 2026",
    heading: "把公民訴求的後續進展攤開來看。",
    description:
      "一項明確的人類意願、101 位國會議員、兩項法案。這份公開紀錄分開呈現議員說過或做過什麼，以及 Proxy Society 是否已經聯繫對方；不會依政治立場評分。",
    snapshotLabel: "證據資料快照",
    snapshotNote: "公開引言於 2026 年 10 月 23 日核對；完整議員與委員會名單上次全面檢查為 9 月 28 日。這是有日期的研究紀錄，並非即時國會資料。",
    metrics: {
      members: "追蹤的國會議員",
      profiles: "完成初步資料研究",
      quotes: "已核實的本人引言",
      contacted: "確認寄出的信件",
      replies: "已記錄的回覆",
    },
    coverage: "可歸屬證據涵蓋率",
    quoteLegend: "本人公開引言",
    actionLegend: "僅有公開行動紀錄",
    unknownLegend: "尚無可核實的線索",
    coverageNote:
      "公開行動包括提出法案、參與委員會或發言。不能因此推定某位議員投票支持或反對。",
    issue: "相關法案進度",
    billOne: "828 SE",
    billOneStatus: "已完成一讀，目前處於二讀階段",
    billTwo: "970 SE",
    billTwoStatus: "2026 年 6 月 17 日提出，交由農村事務委員會審查",
    noLaw: "本紀錄並未將任一提案視為已經通過的禁養法。",
    timeline: "這項議題如何進入國會",
    source: "原始資料 ↗",
    quotesTitle: "議員親自說過的話",
    quotesIntro: "保留原文、日期與來源。較早的發言不代表議員如今仍持相同立場。",
    originalLanguage: "愛沙尼亞語原文",
    directory: "逐一檢視 101 位議員",
    directoryIntro: "可搜尋所有議員，展開個別紀錄查看來源、歸屬限制及聯繫進度。",
    search: "搜尋議員",
    searchPlaceholder: "姓名，例如 Maran 或 Kruuse",
    evidenceLabel: "公開證據",
    evidenceAll: "全部證據",
    evidenceQuote: "已核實本人引言",
    evidenceAction: "僅有行動紀錄",
    evidenceUnknown: "無核實線索",
    outreachLabel: "聯繫狀態",
    outreachAll: "全部聯繫狀態",
    notContacted: "尚未聯繫",
    contacted: "已聯繫",
    replied: "已收到回覆",
    count: "位議員符合條件",
    nameCol: "議員",
    evidenceCol: "證據",
    contactCol: "聯繫",
    quoteEvidence: "已核實引言",
    actionEvidence: "有公開行動紀錄",
    unknownEvidence: "尚未確認",
    noQuote: "這位議員的本人公開引言目前尚未完成核實。",
    noAction: "目前沒有可歸屬的發言或國會行動紀錄；不代表支持或反對。",
    actionsTitle: "已記錄的行動",
    sourceLabel: "查看來源 ↗",
    scope: "發言背景與歸屬限制",
    outreachTitle: "聯繫進度",
    noSent: "尚無證據顯示已向這位議員寄出信件。",
    sentOn: "寄信日期",
    repliedOn: "回覆日期",
    replyCaution: "回覆內容尚未公開；私人通信須先經查核與編輯審視。",
    empty: "沒有符合目前篩選條件的議員。",
    reset: "清除篩選",
    methodology: "閱讀這份紀錄的原則",
    methods:
      "引言須明確出自本人，並記錄日期及來源。提案連署、委員會職務、議場發言與通信回覆是不同類型的證據；未回覆不等於反對。尚未寄出的草稿不算聯繫。公開回覆前必須核實並審視可公開的內容。",
    sourceCode: "查看公開資料檔 ↗",
    footer: "歡迎提供更正或公開來源。議員也可以提供既有公開聲明的連結。更正不會直接抹去原始歷史紀錄。",
    correct: "提出資料更正 ↗",
    eventNote: "這是有來源的政策事件紀錄，不代表對法案通過時程的預測。",
    actions: {
      initiated828: "共同提出 828 SE 法案",
      initiated970: "共同提出 970 SE 法案",
      committee: "農村事務委員會",
      spoke828: "曾在 828 SE 一讀發言；僅有發言紀錄不能證明其立場",
      furBill: "曾共同提出 2021 年禁養毛皮動物法案（不同的動物福利議題）",
    },
  },
} as const;

const chronology = [
  {
    date: "2024-06-13",
    en: "The Rural Affairs Committee calls for deeper analysis of ending cage housing.",
    zh: "農村事務委員會要求進一步分析廢除籠飼制度。",
    source:
      "https://www.riigikogu.ee/pressiteated/maaelukomisjon-kanade-puurispidamise-lopetamist-on-vaja-suvitsi-analuusida/",
  },
  {
    date: "2026-02-19",
    en: "Eighteen MPs introduce bill 828 SE.",
    zh: "18 位議員提出 828 SE 法案。",
    source:
      "https://www.riigikogu.ee/pressiteated/18-riigikogu-liiget-esitas-eeln-u-kanade-puurispidamise-keelustamiseks/",
  },
  {
    date: "2026-02-25",
    en: "Four major egg producers sign a voluntary transition commitment for 2035.",
    zh: "四家主要雞蛋生產商簽署最晚於 2035 年轉型的自願承諾。",
    source:
      "https://epkk.ee/eesti-suurimad-munatootjad-allkirjastasid-pidulikult-kokkuleppe-uleminekuks-puurivabadele-tootmisviisidele-hiljemalt-2035-aastaks/",
  },
  {
    date: "2026-04-22",
    en: "Bill 828 SE completes its first reading.",
    zh: "828 SE 法案完成一讀。",
    source:
      "https://www.riigikogu.ee/pressiteated/riigikogus-labis-munakanade-puurispidamist-keelav-eelnou-esimese-lugemise/",
  },
  {
    date: "2026-06-17",
    en: "Seventeen MPs introduce bill 970 SE, assigned to the Rural Affairs Committee.",
    zh: "17 位議員提出 970 SE 法案，交由農村事務委員會。",
    source:
      "https://www.riigikogu.ee/pressiteated/muu-pressiteade-et/menetlusse-voeti-eelnou-tarbijakaitse-kohta/",
  },
  {
    date: "2026-10-20",
    en: "TV3 reports that the legislative process remains stalled. This is reporting, not a parliamentary decision.",
    zh: "TV3 報導立法進程停滯；這是新聞報導，並非國會決議。",
    source:
      "https://www.tv3.ee/tv3telekanal/tv3-uudised/tv3-uudised-kanad-jaavad-puuridesse-keelustav-eelnou-istub-riigikogulaste-sahtlis/",
  },
];

const counts = {
  members: chickenMembers.length,
  profiles: chickenMembers.filter((m) => m.profileRecorded).length,
  quotes: chickenMembers.filter((m) => m.quote !== null).length,
  actionOnly: chickenMembers.filter((m) => m.quote === null && m.actions.length > 0).length,
  contacted: chickenMembers.filter((m) => m.outreach.status !== "not_contacted").length,
  replies: chickenMembers.filter((m) => m.outreach.status === "replied").length,
};
const unverified = counts.members - counts.quotes - counts.actionOnly;

function normalizeName(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function actionDescription(action: ChickenAction, locale: ProjectLocale) {
  const t = text[locale].actions;
  if (action.kind === "committee") {
    if (locale === "zh-TW") {
      const role = action.detail?.includes("Chair;")
        ? "（主席，828 SE 主責委員會代表）"
        : action.detail?.includes("Deputy Chair")
          ? "（副主席）"
          : "（委員）";
      return t.committee + role;
    }
    return t.committee + (action.detail ? ": " + action.detail : "");
  }
  return t[action.kind];
}

function evidenceKind(member: ChickenMember): EvidenceFilter {
  if (member.quote) return "quote";
  if (member.actions.length) return "action";
  return "unknown";
}

export default function ChickenOutreachTracker({ locale }: { locale: ProjectLocale }) {
  const t = text[locale];
  const [query, setQuery] = useState("");
  const [evidence, setEvidence] = useState<EvidenceFilter>("all");
  const [outreach, setOutreach] = useState<OutreachFilter>("all");

  const featured = useMemo(
    () =>
      chickenMembers
        .filter((member) => member.quote !== null)
        .sort((a, b) => a.name.localeCompare(b.name, "et")),
    [],
  );

  const visible = useMemo(
    () =>
      chickenMembers
        .filter((m) => normalizeName(m.name).includes(normalizeName(query.trim())))
        .filter((m) => evidence === "all" || evidenceKind(m) === evidence)
        .filter((m) => outreach === "all" || m.outreach.status === outreach)
        .sort((a, b) => {
          const weight = (m: ChickenMember) => (m.quote ? 2 : m.actions.length > 0 ? 1 : 0);
          return weight(b) - weight(a) || a.name.localeCompare(b.name, "et");
        }),
    [query, evidence, outreach],
  );

  const resetFilters = () => {
    setQuery("");
    setEvidence("all");
    setOutreach("all");
  };

  return (
    <section id="outreach" className={styles.tracker} aria-labelledby="outreach-heading">
      <div className={styles.introduction}>
        <div>
          <p className={styles.kicker}>{t.kicker}</p>
          <h2 id="outreach-heading">{t.heading}</h2>
          <p className={styles.lead}>{t.description}</p>
        </div>
        <aside className={styles.snapshot}>
          <span>{t.snapshotLabel}</span>
          <strong>{chickenOutreachSnapshot}</strong>
          <p>{t.snapshotNote}</p>
        </aside>
      </div>

      <div className={styles.stats} aria-label={t.coverage}>
        {[
          [counts.members, t.metrics.members],
          [counts.profiles, t.metrics.profiles],
          [counts.quotes, t.metrics.quotes],
          [counts.contacted, t.metrics.contacted],
          [counts.replies, t.metrics.replies],
        ].map(([value, label]) => (
          <div className={styles.stat} key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>

      <div className={styles.coverage}>
        <div className={styles.coverageHeading}>
          <h3>{t.coverage}</h3>
          <span>{counts.quotes} / {counts.members}</span>
        </div>
        <div className={styles.track} role="img" aria-label={
          t.quoteLegend + ": " + counts.quotes + "; " +
          t.actionLegend + ": " + counts.actionOnly + "; " +
          t.unknownLegend + ": " + unverified
        }>
          <div className={styles.quoteFill} style={{ width: (counts.quotes / counts.members * 100) + "%" }} />
          <div className={styles.actionFill} style={{ width: (counts.actionOnly / counts.members * 100) + "%" }} />
          <div className={styles.unknownFill} style={{ width: (unverified / counts.members * 100) + "%" }} />
        </div>
        <div className={styles.legend}>
          <span><i className={styles.quoteKey} />{t.quoteLegend}: <b>{counts.quotes}</b></span>
          <span><i className={styles.actionKey} />{t.actionLegend}: <b>{counts.actionOnly}</b></span>
          <span><i className={styles.unknownKey} />{t.unknownLegend}: <b>{unverified}</b></span>
        </div>
        <p>{t.coverageNote}</p>
      </div>

      <div className={styles.issuePanel}>
        <div className={styles.subhead}>
          <span className={styles.kicker}>01 / {t.issue}</span>
          <h3>{t.issue}</h3>
        </div>
        <div className={styles.billGrid}>
          <a href="https://www.riigikogu.ee/tegevus/eelnoud/e5671f5a-d571-4fcb-96d5-cd2afd5734c4/loomakaitseseaduse-muutmise-seadus/" target="_blank" rel="noreferrer">
            <strong>{t.billOne}</strong><span>{t.billOneStatus}</span><small>{t.source}</small>
          </a>
          <a href="https://www.riigikogu.ee/pressiteated/muu-pressiteade-et/menetlusse-voeti-eelnou-tarbijakaitse-kohta/" target="_blank" rel="noreferrer">
            <strong>{t.billTwo}</strong><span>{t.billTwoStatus}</span><small>{t.source}</small>
          </a>
        </div>
        <p className={styles.noLaw}>{t.noLaw}</p>
      </div>

      <div className={styles.timelineSection}>
        <div className={styles.subhead}>
          <span className={styles.kicker}>02 / {t.timeline}</span>
          <h3>{t.timeline}</h3>
          <p>{t.eventNote}</p>
        </div>
        <ol className={styles.timeline}>
          {chronology.map((event) => (
            <li key={event.date}>
              <time dateTime={event.date}>{event.date}</time>
              <span>{locale === "en" ? event.en : event.zh}</span>
              <a href={event.source} target="_blank" rel="noreferrer">{t.source}</a>
            </li>
          ))}
        </ol>
      </div>

      <div className={styles.featuredSection}>
        <div className={styles.subhead}>
          <span className={styles.kicker}>03 / {t.quotesTitle}</span>
          <h3>{t.quotesTitle}</h3>
          <p>{t.quotesIntro}</p>
        </div>
        <div className={styles.quoteGrid}>
          {featured.map((member) => {
            const quote = member.quote;
            if (!quote) return null;
            return (
              <article className={styles.quoteCard} key={member.name}>
                <div className={styles.quoteHead}>
                  <strong>{member.name}</strong><time dateTime={quote.date}>{quote.date}</time>
                </div>
                <p className={styles.languageNote}>{t.originalLanguage}</p>
                <blockquote lang="et">“{quote.text}”</blockquote>
                <a href={quote.source} target="_blank" rel="noreferrer">{t.source}</a>
              </article>
            );
          })}
        </div>
      </div>

      <div className={styles.directory}>
        <div className={styles.subhead}>
          <span className={styles.kicker}>04 / 101 MEMBERS</span>
          <h3>{t.directory}</h3>
          <p>{t.directoryIntro}</p>
        </div>

        <div className={styles.controls}>
          <label>
            <span>{t.search}</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={t.searchPlaceholder}
            />
          </label>
          <label>
            <span>{t.evidenceLabel}</span>
            <select value={evidence} onChange={(event) => setEvidence(event.target.value as EvidenceFilter)}>
              <option value="all">{t.evidenceAll}</option>
              <option value="quote">{t.evidenceQuote}</option>
              <option value="action">{t.evidenceAction}</option>
              <option value="unknown">{t.evidenceUnknown}</option>
            </select>
          </label>
          <label>
            <span>{t.outreachLabel}</span>
            <select value={outreach} onChange={(event) => setOutreach(event.target.value as OutreachFilter)}>
              <option value="all">{t.outreachAll}</option>
              <option value="not_contacted">{t.notContacted}</option>
              <option value="contacted">{t.contacted}</option>
              <option value="replied">{t.replied}</option>
            </select>
          </label>
        </div>

        <div className={styles.resultLine} role="status" aria-live="polite">
          <span>{visible.length} {t.count}</span>
          {(query || evidence !== "all" || outreach !== "all") && (
            <button type="button" onClick={resetFilters}>{t.reset}</button>
          )}
        </div>

        {visible.length > 0 ? (
          <div className={styles.entries}>
            <div className={styles.columnHead} aria-hidden="true">
              <span>{t.nameCol}</span>
              <span>{t.evidenceCol}</span>
              <span>{t.contactCol}</span>
            </div>
            {visible.map((member) => {
              const kind = evidenceKind(member);
              return (
                <details className={styles.entry} key={member.name}>
                  <summary>
                    <strong>{member.name}</strong>
                    <span className={kind === "quote" ? styles.quoteState : styles.mutedState}>
                      {kind === "quote" ? t.quoteEvidence : kind === "action" ? t.actionEvidence : t.unknownEvidence}
                    </span>
                    <span className={styles.contactState}>
                      {member.outreach.status === "not_contacted"
                        ? t.notContacted : member.outreach.status === "replied" ? t.replied : t.contacted}
                    </span>
                    <span className={styles.expand} aria-hidden="true">+</span>
                  </summary>
                  <div className={styles.entryBody}>
                    <div>
                      {member.quote ? (
                        <div className={styles.recordQuote}>
                          <span>{t.originalLanguage} / {member.quote.date}</span>
                          <blockquote lang="et">“{member.quote.text}”</blockquote>
                          <p>{t.scope}: {member.quote.context}</p>
                          <a href={member.quote.source} target="_blank" rel="noreferrer">{t.sourceLabel}</a>
                        </div>
                      ) : <p className={styles.muted}>{t.noQuote}</p>}
                      {member.actions.length > 0 ? (
                        <div className={styles.actions}>
                          <h4>{t.actionsTitle}</h4>
                          <ul>
                            {member.actions.map((action) => (
                              <li key={action.kind}>
                                <span>{actionDescription(action, locale)} ({action.date})</span>
                                <a href={action.source} target="_blank" rel="noreferrer">{t.sourceLabel}</a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : !member.quote ? <p className={styles.muted}>{t.noAction}</p> : null}
                    </div>
                    <aside className={styles.contactDetail}>
                      <h4>{t.outreachTitle}</h4>
                      {member.outreach.contactedAt ? (
                        <p>{t.sentOn}: {member.outreach.contactedAt}</p>
                      ) : <p>{t.noSent}</p>}
                      {member.outreach.repliedAt && (
                        <p>{t.repliedOn}: {member.outreach.repliedAt}. {t.replyCaution}</p>
                      )}
                    </aside>
                  </div>
                </details>
              );
            })}
          </div>
        ) : (
          <div className={styles.empty}>
            <p>{t.empty}</p>
            <button type="button" onClick={resetFilters}>{t.reset}</button>
          </div>
        )}
      </div>

      <div className={styles.methods}>
        <div>
          <span className={styles.kicker}>05 / {t.methodology}</span>
          <h3>{t.methodology}</h3>
          <p>{t.methods}</p>
          <small>{t.footer}</small>
        </div>
        <div className={styles.methodLinks}>
          <a href="https://github.com/krishaamer/proxy-society/blob/main/app/chicken-outreach-data.ts" target="_blank" rel="noreferrer">{t.sourceCode}</a>
          <a href="mailto:hello@proxysociety.org?subject=Chickens%2C%20No%20Cages%20-%20source%20correction">{t.correct}</a>
          <span>{t.snapshotLabel}: {chickenOutreachSnapshot}</span>
          <span>MP / {chickenMembershipAudit}</span>
        </div>
      </div>
    </section>
  );
}
