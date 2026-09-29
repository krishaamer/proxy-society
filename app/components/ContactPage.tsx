import styles from "./ContactPage.module.css";

type Locale = "en" | "zh-TW";

const content = {
  en: {
    lang: "en",
    otherLabel: "繁中",
    otherHref: "/zh-tw/contact",
    homeHref: "/",
    nav: {
      etiquette: "Etiquette",
      principles: "Principles",
      projects: "Projects",
      research: "Research",
      contact: "Email",
    },
    kicker: "CONTACT / REGISTERED ENTITY",
    status: "REGISTERED / ESTONIA / 2026",
    title: "Contact",
    accent: "/ registry",
    intro:
      "Proxy Society MTÜ is an Estonian non-profit association researching how human agency, social norms and the built environment change when AI agents act on people's behalf.",
    emailAction: "hello@proxysociety.org",
    detailsKicker: "LEGAL ENTITY / 80679069",
    detailsTitle: "Registered in Estonia.",
    legalName: "Legal name",
    legalForm: "Legal form",
    legalFormValue: "Non-profit association (MTÜ)",
    registryCode: "Registry code",
    registered: "Registered",
    registeredValue: "29 September 2026",
    board: "Management board",
    address: "Registered office",
    addressValue: "Jahu tn 14-219, Põhja-Tallinna linnaosa, 10415 Tallinn, Harju maakond, Estonia",
    email: "Email",
    registerLink: "View official register entry ↗",
    channelKicker: "OPEN CHANNEL",
    channelTitle: "Research, collaboration, media, events.",
    channelCopy:
      "For research collaborations, institutional partnerships, speaking, media or proposals, write to the association directly.",
    github: "GitHub ↗",
    footer: "Registry 80679069 · Tallinn, Estonia",
  },
  "zh-TW": {
    lang: "zh-Hant-TW",
    otherLabel: "EN",
    otherHref: "/contact",
    homeHref: "/zh-tw",
    nav: {
      etiquette: "AI 禮儀",
      principles: "原則",
      projects: "專案",
      research: "研究",
      contact: "寄信",
    },
    kicker: "聯絡 / 登記法人",
    status: "已登記 / 愛沙尼亞 / 2026",
    title: "聯絡",
    accent: "/ 登記資料",
    intro:
      "Proxy Society MTÜ 是在愛沙尼亞登記成立的非營利組織，研究 AI 代理人代表人類行動時，人類自主性、社會規範與實體環境如何改變。",
    emailAction: "hello@proxysociety.org",
    detailsKicker: "法人資料 / 80679069",
    detailsTitle: "於愛沙尼亞正式登記。",
    legalName: "法人名稱",
    legalForm: "法律形式",
    legalFormValue: "非營利組織（MTÜ）",
    registryCode: "登記編號",
    registered: "登記日期",
    registeredValue: "2026 年 9 月 29 日",
    board: "理事會",
    address: "登記地址",
    addressValue: "Jahu tn 14-219, Põhja-Tallinna linnaosa, 10415 Tallinn, Harju maakond, Estonia",
    email: "電子郵件",
    registerLink: "查看愛沙尼亞官方登記資料 ↗",
    channelKicker: "開放頻道",
    channelTitle: "研究、合作、媒體、活動。",
    channelCopy:
      "研究合作、機構夥伴關係、演講、媒體採訪或提案，請直接寫信給 Proxy Society。",
    github: "GitHub ↗",
    footer: "登記編號 80679069 · 愛沙尼亞塔林",
  },
} as const;

export default function ContactPage({ locale }: { locale: Locale }) {
  const t = content[locale];
  const projectsHref = locale === "zh-TW" ? "/zh-tw/projects" : "/projects";

  return (
    <main lang={t.lang}>
      <div className="ambient-grid" aria-hidden="true" />

      <header className="site-header shell">
        <a className="wordmark" href={t.homeHref} aria-label="Proxy Society home">
          <span className="mark" aria-hidden="true">P/S</span>
          <span className="wordmark-copy">
            <strong>PROXY SOCIETY</strong>
            <small>HUMAN / AGENT / SOCIETY</small>
          </span>
        </a>
        <nav aria-label="Primary navigation">
          <a href={`${t.homeHref}#etiquette`}>{t.nav.etiquette}</a>
          <a href={`${t.homeHref}#principles`}>{t.nav.principles}</a>
          <a href={projectsHref}>{t.nav.projects}</a>
          <a href={`${t.homeHref}#research`}>{t.nav.research}</a>
          <a className="locale-switch" href={t.otherHref}>{t.otherLabel}</a>
          <a className="nav-cta" href="mailto:hello@proxysociety.org">{t.nav.contact}</a>
        </nav>
      </header>

      <section className={`${styles.hero} shell`} id="top">
        <div className={styles.statusLine}>
          <p className="section-kicker">{t.kicker}</p>
          <span>{t.status}</span>
        </div>
        <div className={styles.heroGrid}>
          <h1>
            <span>{t.title}</span>
            <em>{t.accent}</em>
          </h1>
          <div className={styles.heroCopy}>
            <p>{t.intro}</p>
            <a className="button primary" href="mailto:hello@proxysociety.org">
              {t.emailAction}
            </a>
          </div>
        </div>
      </section>

      <section className={`${styles.body} shell`}>
        <div className={styles.registryPanel}>
          <div className={styles.panelTopline}>
            <span>{t.detailsKicker}</span>
            <span>STATUS: ACTIVE</span>
          </div>
          <div className={styles.panelInner}>
            <h2>{t.detailsTitle}</h2>
            <dl className={styles.registryList}>
              <div>
                <dt>{t.legalName}</dt>
                <dd>Proxy Society MTÜ</dd>
              </div>
              <div>
                <dt>{t.legalForm}</dt>
                <dd>{t.legalFormValue}</dd>
              </div>
              <div>
                <dt>{t.registryCode}</dt>
                <dd>80679069</dd>
              </div>
              <div>
                <dt>{t.registered}</dt>
                <dd>{t.registeredValue}</dd>
              </div>
              <div>
                <dt>{t.board}</dt>
                <dd>Kris Haamer</dd>
              </div>
              <div>
                <dt>{t.address}</dt>
                <dd>{t.addressValue}</dd>
              </div>
              <div>
                <dt>{t.email}</dt>
                <dd><a href="mailto:hello@proxysociety.org">hello@proxysociety.org</a></dd>
              </div>
            </dl>
            <a
              className={styles.registryLink}
              href="https://ariregister.rik.ee/eng/company/80679069"
              target="_blank"
              rel="noreferrer"
            >
              {t.registerLink}
            </a>
          </div>
        </div>

        <aside className={styles.channel}>
          <p className="section-kicker">{t.channelKicker}</p>
          <h2>{t.channelTitle}</h2>
          <p>{t.channelCopy}</p>
          <div className={styles.channelLinks}>
            <a className="button primary" href="mailto:hello@proxysociety.org">
              hello@proxysociety.org
            </a>
            <a
              className="button ghost"
              href="https://github.com/krishaamer/proxy-society"
              target="_blank"
              rel="noreferrer"
            >
              {t.github}
            </a>
          </div>
        </aside>
      </section>

      <footer className="site-footer shell">
        <span>© 2026 PROXY SOCIETY MTÜ</span>
        <span>{t.footer}</span>
        <a href="https://github.com/krishaamer/proxy-society" target="_blank" rel="noreferrer">
          {t.github}
        </a>
      </footer>
    </main>
  );
}
