import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://proxysociety.org"),
  title: {
    default: "Proxy Society | AI Agent Etiquette",
    template: "%s | Proxy Society",
  },
  description:
    "Proxy Society studies the social rules of AI agents acting on behalf of humans: etiquette, delegated presence, authority, disclosure, reciprocity, and human control.",
  openGraph: {
    title: "Proxy Society",
    description: "AI acts for us now. What is polite?",
    url: "https://proxysociety.org",
    siteName: "Proxy Society",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Proxy Society",
    description: "AI acts for us now. What is polite?",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
