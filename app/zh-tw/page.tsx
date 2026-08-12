import type { Metadata } from "next";
import SitePage from "../components/SitePage";
import { traditionalChineseContent } from "../site-content";

export const metadata: Metadata = {
  title: "Proxy Society | AI 代理人禮儀",
  description: "AI 已經開始替我們行動。怎樣才算有禮貌？Proxy Society 研究 AI 代理人禮儀、代理式在場，以及替人類行動的機器該如何被設計。",
  alternates: {
    canonical: "https://proxysociety.org/zh-tw",
    languages: {
      en: "https://proxysociety.org/",
      "zh-Hant-TW": "https://proxysociety.org/zh-tw",
    },
  },
  openGraph: {
    title: "Proxy Society | AI 代理人禮儀",
    description: "AI 已經開始替我們行動。怎樣才算有禮貌？",
    url: "https://proxysociety.org/zh-tw",
    locale: "zh_TW",
  },
};

export default function TraditionalChineseHome() {
  return <SitePage content={traditionalChineseContent} />;
}
