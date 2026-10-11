import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { company } from "@/data/company";
import "./globals.css";
import "./components.css";
import "./home.css";
import "./flow.css";
import "./editorial.css";
import "./header.css";
import "./footer.css";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  title: { default: `${company.name} — Cloud, AI & Software`, template: `%s — ${company.short}` },
  description: company.description,
  openGraph: { type: "website", siteName: company.name, locale: "en_IN" },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#080a0f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geist.variable} ${geistMono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
