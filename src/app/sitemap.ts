import type { MetadataRoute } from "next";
import { company } from "@/data/company";
import { services } from "@/data/services";
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/about", "/services", "/solutions", "/work", "/team", "/careers", "/contact", ...services.map((s) => `/services/${s.slug}`)];
  return paths.map((p) => ({ url: `${company.siteUrl}${p}`, changeFrequency: "monthly", priority: p === "" ? 1 : 0.7 }));
}
