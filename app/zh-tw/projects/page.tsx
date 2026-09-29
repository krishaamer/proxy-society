import type { Metadata } from "next";
import ProjectsIndex from "../../components/ProjectsIndex";

export const metadata: Metadata = {
  title: "專案",
  description: "11 個實地系統，測試人類意圖、代理式行動、授權、權利、身分與公共基礎設施。",
  alternates: {
    canonical: "https://proxysociety.org/zh-tw/projects",
    languages: {
      en: "https://proxysociety.org/projects",
      "zh-Hant-TW": "https://proxysociety.org/zh-tw/projects"
    }
  }
};

export default function ProjectsZhTwPage() {
  return <ProjectsIndex locale="zh-TW" />;
}
