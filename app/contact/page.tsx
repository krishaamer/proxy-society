import type { Metadata } from "next";
import ContactPage from "../components/ContactPage";

export const metadata: Metadata = {
  title: "Contact & Registry",
  description:
    "Contact Proxy Society MTÜ, Estonian non-profit association registry code 80679069.",
  alternates: {
    canonical: "https://proxysociety.org/contact",
    languages: {
      en: "https://proxysociety.org/contact",
      "zh-Hant-TW": "https://proxysociety.org/zh-tw/contact",
    },
  },
};

export default function Contact() {
  return <ContactPage locale="en" />;
}
