import type { MetadataRoute } from "next";
import { projectSlugs } from "./projects-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectEntries: MetadataRoute.Sitemap = projectSlugs.flatMap((slug) => [
    {
      url: `https://proxysociety.org/projects/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
      alternates: {
        languages: {
          en: `https://proxysociety.org/projects/${slug}`,
          "zh-Hant-TW": `https://proxysociety.org/zh-tw/projects/${slug}`
        }
      }
    },
    {
      url: `https://proxysociety.org/zh-tw/projects/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
      alternates: {
        languages: {
          en: `https://proxysociety.org/projects/${slug}`,
          "zh-Hant-TW": `https://proxysociety.org/zh-tw/projects/${slug}`
        }
      }
    }
  ]);

  return [
    {
      url: "https://proxysociety.org/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          en: "https://proxysociety.org/",
          "zh-Hant-TW": "https://proxysociety.org/zh-tw"
        }
      }
    },
    {
      url: "https://proxysociety.org/zh-tw",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: {
          en: "https://proxysociety.org/",
          "zh-Hant-TW": "https://proxysociety.org/zh-tw"
        }
      }
    },
    {
      url: "https://proxysociety.org/projects",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          en: "https://proxysociety.org/projects",
          "zh-Hant-TW": "https://proxysociety.org/zh-tw/projects"
        }
      }
    },
    {
      url: "https://proxysociety.org/zh-tw/projects",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          en: "https://proxysociety.org/projects",
          "zh-Hant-TW": "https://proxysociety.org/zh-tw/projects"
        }
      }
    },
    ...projectEntries,
    {
      url: "https://proxysociety.org/contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: {
        languages: {
          en: "https://proxysociety.org/contact",
          "zh-Hant-TW": "https://proxysociety.org/zh-tw/contact"
        }
      }
    },
    {
      url: "https://proxysociety.org/zh-tw/contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: {
        languages: {
          en: "https://proxysociety.org/contact",
          "zh-Hant-TW": "https://proxysociety.org/zh-tw/contact"
        }
      }
    },
    {
      url: "https://proxysociety.org/proposal",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: "https://proxysociety.org/social-permeability",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: "https://proxysociety.org/human-intent",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9
    },
    {
      url: "https://proxysociety.org/architecture",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9
    }
  ];
}
