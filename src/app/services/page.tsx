import { SiteShell } from "@/components/layout/SiteShell";
import { CtaBand } from "@/components/home/CtaBand";
import { HomeMotion } from "@/components/home/primitives/HomeMotion";
import { ServicesHero } from "@/components/services/ServicesHero";
import { Capabilities } from "@/components/services/Capabilities";
import { Practice } from "@/components/services/Practice";
import { Technology } from "@/components/services/Technology";
import { Engagement } from "@/components/services/Engagement";
import { JsonLd } from "@/lib/seo/JsonLd";
import { breadcrumb } from "@/lib/seo/schema";
import { pageMetadata } from "@/lib/seo/metadata";
import "@/components/services/services.css";

export const metadata = pageMetadata({
  title: "Services",
  description: "Cloud, AI, software, data analytics, consulting, digital marketing and brand services from Claidsphere, built on Microsoft Azure and Microsoft 365.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <SiteShell>
      <JsonLd data={breadcrumb([{ name: "Services", path: "/services" }])} />
      <ServicesHero />
      <Capabilities />
      <Practice />
      <Technology />
      <Engagement />
      <CtaBand className="sv-cta" eyebrow="Services" lines={["A complex technology", "challenge? Let’s build", "the right system."]} lede="Tell us how your business works. We will help you choose, build and run the technology around it." />
      <HomeMotion />
    </SiteShell>
  );
}
