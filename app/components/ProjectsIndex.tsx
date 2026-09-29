import styles from "./Projects.module.css";
import { getProjects, type ProjectLocale } from "../projects-data";

const copy = {
  en: {
    lang: "en",
    home: "/",
    other: "/zh-tw/projects",
    otherLabel: "繁中",
    contact: "/contact",
    kicker: "FIELD SYSTEMS / 11 CASES",
    status: "PROXY SOCIETY / WORKING EVIDENCE",
    title: "Projects",
    accent: "/ in the wild",
    intro:
      "Proxy Society is easier to understand through systems that already have to preserve a person's intent. These projects test delegation across shopping, money, data rights, work, law, civic action, voice, health, labor and physical infrastructure.",
    nav: { projects: "Projects", research: "Research", contact: "Contact" },
    open: "Open case",
    footer: "11 field systems · Registry 80679069"
  },
  "zh-TW": {
    lang: "zh-Hant-TW",
    home: "/zh-tw",
    other: "/projects",
    otherLabel: "EN",
    contact: "/zh-tw/contact",
    kicker: "實地系統 / 11 個案例",
    status: "PROXY SOCIETY / 實作證據",
    title: "專案",
    accent: "/ 真實世界",
    intro:
      "理解 Proxy Society 最直接的方法，是看那些已經需要保存人類意圖的系統。這 11 個專案分別在購物、金錢、資料權利、工作、法律、公民行動、聲音、健康、勞動與實體基礎設施中測試委託。",
    nav: { projects: "專案", research: "研究", contact: "聯絡" },
    open: "開啟案例",
    footer: "11 個實地系統 · 登記編號 80679069"
  }
} as const;

export default function ProjectsIndex({ locale }: { locale: ProjectLocale }) {
  const t = copy[locale];
  const projects = getProjects(locale);
  const base = locale === "zh-TW" ? "/zh-tw/projects" : "/projects";

  return (
    <main className={styles.page} lang={t.lang}>
      <div className="ambient-grid" aria-hidden="true" />
      <header className="site-header shell">
        <a className="wordmark" href={t.home} aria-label="Proxy Society home">
          <span className="mark" aria-hidden="true">P/S</span>
          <span className="wordmark-copy">
            <strong>PROXY SOCIETY</strong>
            <small>HUMAN / AGENT / SOCIETY</small>
          </span>
        </a>
        <nav aria-label="Primary navigation">
          <a href={base}>{t.nav.projects}</a>
          <a href={`${t.home}#research`}>{t.nav.research}</a>
          <a className="locale-switch" href={t.other}>{t.otherLabel}</a>
          <a className="nav-cta" href={t.contact}>{t.nav.contact}</a>
        </nav>
      </header>

      <section className={`${styles.hero} shell`}>
        <div className={styles.statusLine}>
          <p className="section-kicker">{t.kicker}</p>
          <span>{t.status}</span>
        </div>
        <div className={styles.heroGrid}>
          <h1><span>{t.title}</span><em>{t.accent}</em></h1>
          <p className={styles.heroCopy}>{t.intro}</p>
        </div>
      </section>

      <section className={`${styles.gridSection} shell`}>
        <div className={styles.projectGrid}>
          {projects.map((project) => (
            <a className={styles.projectCard} href={`${base}/${project.slug}`} key={project.slug}>
              <div className={styles.cardTop}>
                <span className={styles.cardNumber}>{project.number}</span>
                <span className={styles.cardDomain}>{project.domain}</span>
              </div>
              <h2>{project.name}</h2>
              <strong>{project.tagline}</strong>
              <p>{project.summary}</p>
              <div className={styles.cardBottom}>
                <span>{project.status}</span>
                <b>{t.open} ↗</b>
              </div>
            </a>
          ))}
        </div>
      </section>

      <footer className="site-footer shell">
        <span>© 2026 PROXY SOCIETY MTÜ</span>
        <span>{t.footer}</span>
        <a href="mailto:hello@proxysociety.org">hello@proxysociety.org</a>
      </footer>
    </main>
  );
}
