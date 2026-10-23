import type { Metadata } from "next";
import VariFilmClub from "../../components/VariFilmClub";

export const metadata: Metadata = {
  title: "VARI 電影俱樂部 | AI 電影與創作者",
  description: "VARI 是 Proxy Society 發起的實驗電影俱樂部，從愛沙尼亞連結臺灣、韓國與世界，一起看電影、做電影，也一起思考 AI 影像與作者身分。",
  alternates: {
    canonical: "https://proxysociety.org/zh-tw/vari",
    languages: {
      en: "https://proxysociety.org/vari",
      "zh-Hant-TW": "https://proxysociety.org/zh-tw/vari",
    },
  },
  openGraph: {
    title: "VARI 電影俱樂部 | Proxy Society",
    description: "電影由光影構成。當影像能被生成，電影又會變成什麼？",
    url: "https://proxysociety.org/zh-tw/vari",
    locale: "zh_TW",
    siteName: "Proxy Society",
    type: "website",
  },
};

export default function VariTraditionalChinesePage() {
  return <VariFilmClub locale="zh-TW" />;
}
