import { services } from "@/data/services";
import type { Service } from "@/data/types";

export const pad = (n: number) => String(n).padStart(2, "0");

/** Number shown for a service everywhere on the page: its position in the data (which is the narrative order). */
export const numberOf = (slug: string) => pad(services.findIndex((s) => s.slug === slug) + 1);

export const get = (slug: string): Service => {
  const s = services.find((x) => x.slug === slug);
  if (!s) throw new Error(`Unknown service: ${slug}`);
  return s;
};

export const pillarLabel = (s: Service) => (s.pillar === "ai" ? "AI" : s.pillar === "cloud" ? "Cloud" : s.pillar === "software" ? "Software" : "Advisory");

export const offeringCount = (s: Service) => `${pad(s.offerings.length)} ${s.offerings.length === 1 ? "offering" : "offerings"}`;

/** Raster art exists for three services; every other service gets a drawn plate. */
export const art: Record<string, { src: string; width: number; height: number; position: string }> = {
  "cloud-solutions": { src: "/images/pillar-cloud.webp", width: 1800, height: 1350, position: "50% 62%" },
  "artificial-intelligence": { src: "/images/pillar-ai.webp", width: 1800, height: 1350, position: "40% 50%" },
  "software-development": { src: "/images/intro-hall.webp", width: 2400, height: 1200, position: "50% 45%" },
};

export const groups = [
  { id: "cloud", letter: "A", name: "Cloud", lede: "Our cloud solutions scale effortlessly to meet business demands.", slugs: ["cloud-solutions"] },
  { id: "ai", letter: "B", name: "Artificial Intelligence", lede: "Our AI-powered tools seamlessly integrate to enhance decision-making.", slugs: ["artificial-intelligence", "data-analytics"] },
  { id: "software", letter: "C", name: "Software", lede: "Our skilled developers build tailored solutions to accelerate growth.", slugs: ["software-development", "web-design-development", "mobile-app-development", "quality-assurance", "maintenance-support"] },
  { id: "advisory", letter: "D", name: "Advisory & growth", lede: "Strategy, brand and audience growth, alongside the technology.", slugs: ["consulting", "digital-marketing", "brand-strategy-identity"] },
] as const;
