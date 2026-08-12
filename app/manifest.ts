import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Proxy Society",
    short_name: "Proxy Society",
    description: "AI acts for us now. What is polite?",
    start_url: "/",
    display: "standalone",
    background_color: "#f4f1e8",
    theme_color: "#151510",
    icons: [{ src: "/favicon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
