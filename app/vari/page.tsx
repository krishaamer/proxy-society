import type { Metadata } from "next";
import VariFilmClub from "../components/VariFilmClub";

export const metadata: Metadata = {
  title: "VARI Film Club | Cinema, AI & Authorship",
  description: "VARI is an experimental film club by Proxy Society. Watch, make and question cinema in the age of AI, with conversations between Estonia, Taiwan, Korea and beyond.",
  alternates: {
    canonical: "https://proxysociety.org/vari",
    languages: {
      en: "https://proxysociety.org/vari",
      "zh-Hant-TW": "https://proxysociety.org/zh-tw/vari",
    },
  },
  openGraph: {
    title: "VARI Film Club | By Proxy Society",
    description: "Cinema is made of shadows. What happens when the shadows can be generated?",
    url: "https://proxysociety.org/vari",
    siteName: "Proxy Society",
    type: "website",
  },
};

export default function VariPage() {
  return <VariFilmClub locale="en" />;
}
