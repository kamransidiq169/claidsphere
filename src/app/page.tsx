import { SiteShell } from "@/components/layout/SiteShell";
import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { Intro } from "@/components/home/Intro";
import { Pillars } from "@/components/home/Pillars";
import { MicrosoftEcosystem } from "@/components/home/MicrosoftEcosystem";
import { AzurePartner } from "@/components/home/AzurePartner";
import { WorkList } from "@/components/home/WorkList";
import { Methodology } from "@/components/home/Methodology";
import { WhyClaidsphere } from "@/components/home/WhyClaidsphere";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";
import { CtaBand } from "@/components/home/CtaBand";
import { HomeMotion } from "@/components/home/primitives/HomeMotion";

import { pageMetadata } from "@/lib/seo/metadata";
import { company } from "@/data/company";

export const metadata = { ...pageMetadata({ title: `${company.name} — Cloud, AI & Software`, description: company.description, path: "/" }), title: { absolute: `${company.name} — Cloud, AI & Software` } };

export default function Home() {
  return (
    <SiteShell>
      <Hero />
      <TrustStrip />
      <Intro />
      <Pillars />
      <MicrosoftEcosystem />
      <AzurePartner />
      <WorkList />
      <Methodology />
      <WhyClaidsphere />
      <Testimonials />
      <FAQ />
      <CtaBand />
      <HomeMotion />
    </SiteShell>
  );
}
