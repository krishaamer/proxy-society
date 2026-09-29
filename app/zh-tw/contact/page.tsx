import type { Metadata } from "next";
import ContactPage from "../../components/ContactPage";

export const metadata: Metadata = {
  title: "聯絡與登記資料",
  description:
    "聯絡 Proxy Society MTÜ。愛沙尼亞非營利組織，登記編號 80679069。",
  alternates: {
    canonical: "https://proxysociety.org/zh-tw/contact",
    languages: {
      en: "https://proxysociety.org/contact",
      "zh-Hant-TW": "https://proxysociety.org/zh-tw/contact",
    },
  },
};

export default function ContactZhTw() {
  return <ContactPage locale="zh-TW" />;
}
