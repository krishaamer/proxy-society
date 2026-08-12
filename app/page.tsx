import type { Metadata } from "next";
import SitePage from "./components/SitePage";
import { englishContent } from "./site-content";

export const metadata: Metadata = {
  title: "Proxy Society | AI Agent Etiquette",
  description: "AI acts for us now. What is polite? Proxy Society researches AI agent etiquette, delegated presence and interaction design for machines acting on behalf of humans.",
  alternates: {
    canonical: "https://proxysociety.org/",
    languages: {
      en: "https://proxysociety.org/",
      "zh-Hant-TW": "https://proxysociety.org/zh-tw",
    },
  },
};

export default function Home() {
  return <SitePage content={englishContent} />;
}
