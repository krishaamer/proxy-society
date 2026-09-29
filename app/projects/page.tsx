import type { Metadata } from "next";
import ProjectsIndex from "../components/ProjectsIndex";

export const metadata: Metadata = {
  title: "Projects",
  description: "Eleven field systems testing human intent, delegated agency, authority, rights, identity and public infrastructure.",
  alternates: {
    canonical: "https://proxysociety.org/projects",
    languages: {
      en: "https://proxysociety.org/projects",
      "zh-Hant-TW": "https://proxysociety.org/zh-tw/projects"
    }
  }
};

export default function ProjectsPage() {
  return <ProjectsIndex locale="en" />;
}
