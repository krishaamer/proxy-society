import type { Metadata } from "next";
import ChickenLegalNotice from "../../../../components/ChickenLegalNotice";

export const metadata: Metadata = {
  title: "Kanad ilma puurideta: allikad, isikuandmed ja kasutusõigused",
  description: "Kuidas Proxy Society MTÜ käsitleb avalikke Riigikogu sõnavõtte, portreefotosid, isikuandmeid, autoriõigust ja parandustaotlusi.",
  alternates: {
    canonical: "https://proxysociety.org/et/projects/chickens-no-cages/rights",
    languages: {
      et: "https://proxysociety.org/et/projects/chickens-no-cages/rights",
      en: "https://proxysociety.org/projects/chickens-no-cages/rights",
      "zh-Hant-TW": "https://proxysociety.org/zh-tw/projects/chickens-no-cages/rights"
    }
  },
  openGraph: {
    title: "Allikad ja kasutusõigused | Proxy Society",
    locale: "et_EE",
    url: "https://proxysociety.org/et/projects/chickens-no-cages/rights"
  }
};

export default function ChickensNoCagesRightsEstonianPage() {
  return <ChickenLegalNotice locale="et" />;
}
