import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://proxysociety.org/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          en: "https://proxysociety.org/",
          "zh-Hant-TW": "https://proxysociety.org/zh-tw",
        },
      },
    },
    {
      url: "https://proxysociety.org/zh-tw",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: {
          en: "https://proxysociety.org/",
          "zh-Hant-TW": "https://proxysociety.org/zh-tw",
        },
      },
    },
  ];
}
