import styles from "./Projects.module.css";
import { getProjects, type ProjectLocale } from "../projects-data";

const copy = {
  en: {
    kicker: "FIELD SYSTEMS / 11 CASES",
    title: "The theory is already being tested.",
    copy: "These projects make Proxy Society concrete: what happens when software shops, spends, writes, applies, argues, remembers, interprets, advocates or navigates infrastructure for a person?",
    action: "Explore all 11 projects",
    open: "Open case"
  },
  "zh-TW": {
    kicker: "實地系統 / 11 個案例",
    title: "這套理論已經在被測試。",
    copy: "這些專案把 Proxy Society 變成具體問題：當軟體替一個人購物、花錢、寫作、求職、主張權利、記憶、解讀、倡議或使用城市基礎設施時，會發生什麼？",
    action: "查看全部 11 個專案",
    open: "開啟案例"
  }
} as const;

export default function ProjectsPreview({ locale }: { locale: ProjectLocale }) {
  const t = copy[locale];
  const projects = getProjects(locale);
  const base = locale === "zh-TW" ? "/zh-tw/projects" : "/projects";

  return (
    <section className={styles.preview} id="projects">
      <div className="shell">
        <div className={styles.previewHeading}>
          <div>
            <p className="section-kicker">{t.kicker}</p>
            <h2>{t.title}</h2>
          </div>
          <div>
            <p>{t.copy}</p>
            <a className="button primary" href={base}>{t.action}</a>
          </div>
        </div>
        <div className={styles.previewGrid}>
          {projects.map((project) => (
            <a className={styles.previewCard} href={`${base}/${project.slug}`} key={project.slug}>
              <span>{project.number}</span>
              <h3>{project.name}</h3>
              <p>{project.tagline}</p>
              <small>{project.domain} / {t.open}</small>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
