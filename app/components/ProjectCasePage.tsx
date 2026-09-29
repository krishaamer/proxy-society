import styles from "./Projects.module.css";
import { getProject, getProjects, type ProjectLocale } from "../projects-data";

const labels = {
  en: {
    home: "/",
    index: "/projects",
    otherPrefix: "/zh-tw/projects",
    otherLabel: "繁中",
    contact: "/contact",
    back: "All projects",
    intent: "Human intent",
    action: "System / agent action",
    boundary: "Hard boundary",
    evidence: "Evidence in the system",
    question: "Proxy Society question",
    status: "Current status",
    previous: "Previous",
    next: "Next",
    contactLabel: "Contact"
  },
  "zh-TW": {
    home: "/zh-tw",
    index: "/zh-tw/projects",
    otherPrefix: "/projects",
    otherLabel: "EN",
    contact: "/zh-tw/contact",
    back: "全部專案",
    intent: "人類意圖",
    action: "系統 / 代理人行動",
    boundary: "硬邊界",
    evidence: "系統中的證據",
    question: "Proxy Society 問題",
    status: "目前狀態",
    previous: "上一個",
    next: "下一個",
    contactLabel: "聯絡"
  }
} as const;

export default function ProjectCasePage({ locale, slug }: { locale: ProjectLocale; slug: string }) {
  const t = labels[locale];
  const projects = getProjects(locale);
  const project = getProject(slug, locale);
  if (!project) return null;

  const index = projects.findIndex((item) => item.slug === slug);
  const previous = index > 0 ? projects[index - 1] : projects[projects.length - 1];
  const next = index < projects.length - 1 ? projects[index + 1] : projects[0];

  return (
    <main className={styles.page} lang={locale === "zh-TW" ? "zh-Hant-TW" : "en"}>
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
          <a href={t.index}>{t.back}</a>
          <a className="locale-switch" href={`${t.otherPrefix}/${project.slug}`}>{t.otherLabel}</a>
          <a className="nav-cta" href={t.contact}>{t.contactLabel}</a>
        </nav>
      </header>

      <section className={`${styles.caseHero} shell`}>
        <div className={styles.caseMeta}>
          <a href={t.index}>← {t.back}</a>
          <span className={styles.mono}>{project.number} / {project.domain} / {project.year}</span>
        </div>
        <div className={styles.caseHeroGrid}>
          <h1><span>{project.name}</span><em>{project.tagline}</em></h1>
          <div className={styles.caseLead}>
            <strong>{project.status}</strong>
            <p>{project.summary}</p>
          </div>
        </div>
      </section>

      <section className={`${styles.caseBody} shell`}>
        <div className={styles.signalGrid}>
          <article className={styles.signal}>
            <span>01 / {t.intent}</span>
            <h2>{t.intent}</h2>
            <p>{project.humanIntent}</p>
          </article>
          <article className={styles.signal}>
            <span>02 / {t.action}</span>
            <h2>{t.action}</h2>
            <p>{project.systemAction}</p>
          </article>
          <article className={styles.signal}>
            <span>03 / {t.boundary}</span>
            <h2>{t.boundary}</h2>
            <p>{project.boundary}</p>
          </article>
        </div>

        <div className={styles.boundary}>
          <span>INTENT PRESERVATION / CORE</span>
          <p>{project.boundary}</p>
        </div>

        <div className={styles.lowerGrid}>
          <section className={styles.evidencePanel}>
            <span>{t.evidence}</span>
            <h2>{t.evidence}</h2>
            <ul>
              {project.evidence.map((item) => <li key={item}>{item}</li>)}
            </ul>
            {project.links.length > 0 && (
              <div className={styles.linkRow}>
                {project.links.map((link) => (
                  <a className="button ghost" href={link.href} key={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </section>

          <aside className={styles.questionPanel}>
            <span>{t.question}</span>
            <h2>{t.question}</h2>
            <p>{project.question}</p>
            <div className={styles.statusBox}>
              <small>{t.status}</small>
              <strong>{project.status}</strong>
            </div>
          </aside>
        </div>

        <nav className={styles.caseNav} aria-label="Project cases">
          <a href={`${t.index}/${previous.slug}`}>← {t.previous}: {previous.name}</a>
          <a href={`${t.index}/${next.slug}`}>{t.next}: {next.name} →</a>
        </nav>
      </section>

      <footer className="site-footer shell">
        <span>© 2026 PROXY SOCIETY MTÜ</span>
        <span>FIELD SYSTEM {project.number} / 11</span>
        <a href="mailto:hello@proxysociety.org">hello@proxysociety.org</a>
      </footer>
    </main>
  );
}
