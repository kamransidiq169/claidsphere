import { SiteShell } from "@/components/layout/SiteShell";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/layout/Section";
import { ServiceIndex } from "@/components/services/ServiceIndex";
import { CtaBand } from "@/components/sections/CtaBand";
import { services } from "@/data/services";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata = pageMetadata({
  title: "Services",
  description: "Cloud, AI, software, data analytics, digital marketing, branding, consulting and mobile development from Claidsphere.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <SiteShell>
      <PageHero eyebrow="Services" lines={["Our professional", "services."]} lead="Cloud, AI and software, alongside digital marketing, brand, analytics and consulting." />
      <Section theme="dark">
        <ServiceIndex services={services} />
      </Section>
      <CtaBand />
    </SiteShell>
  );
}
