import type { Metadata } from "next";
import { company } from "@/data/company";

export function pageMetadata({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  const url = `${company.siteUrl}${path}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url, type: "website", siteName: company.name, images: ["/opengraph-image"] },
    twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] },
    robots: { index: true, follow: true },
  };
}
