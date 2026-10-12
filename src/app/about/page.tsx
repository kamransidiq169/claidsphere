import { SiteShell } from "@/components/layout/SiteShell";
import { AboutHero } from "@/components/about/Hero";
import { Manifesto } from "@/components/about/Manifesto";
import { Story } from "@/components/about/Story";
import { Thinking } from "@/components/about/Thinking";
import { Principles } from "@/components/about/Principles";
import { Ecosystem } from "@/components/about/Ecosystem";
import { People } from "@/components/about/People";
import { AboutCta } from "@/components/about/Cta";
import { JsonLd } from "@/lib/seo/JsonLd";
import { breadcrumb } from "@/lib/seo/schema";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata = pageMetadata({
  title: "About",
  description: "Claidsphere: a team of passionate professionals helping businesses thrive in cloud, AI, data and digital. Our beliefs, our approach and the people behind the work.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <SiteShell>
      <JsonLd data={breadcrumb([{ name: "About", path: "/about" }])} />
      <AboutHero />
      <Manifesto />
      <Story />
      <Thinking />
      <Principles />
      <Ecosystem />
      <People />
      <AboutCta />
    </SiteShell>
  );
}
