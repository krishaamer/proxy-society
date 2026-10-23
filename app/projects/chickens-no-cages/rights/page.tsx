import type { Metadata } from "next";
import ChickenLegalNotice from "../../../components/ChickenLegalNotice";

export const metadata: Metadata = {
  title: "Chickens, No Cages: Sources, Privacy & Image Rights",
  description: "Data protection, photo licences, copyright, public sources and correction rights for the parliamentary outreach tracker.",
  alternates: {
    canonical: "https://proxysociety.org/projects/chickens-no-cages/rights",
    languages: {
      en: "https://proxysociety.org/projects/chickens-no-cages/rights",
      "zh-Hant-TW": "https://proxysociety.org/zh-tw/projects/chickens-no-cages/rights"
    }
  }
};

export default function ChickensRightsPage() {
  return <ChickenLegalNotice locale="en" />;
}
