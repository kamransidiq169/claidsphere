import { SiteShell } from "@/components/layout/SiteShell";
import { PageHero } from "@/components/sections/PageHero";
import { MicrosoftEcosystem } from "@/components/sections/MicrosoftEcosystem";
import { AzurePartner } from "@/components/sections/AzurePartner";
import { FAQ } from "@/components/sections/FAQ";
import { CtaBand } from "@/components/sections/CtaBand";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata = pageMetadata({
  title: "Solutions — Microsoft & Azure",
  description: "Microsoft Azure, Microsoft 365, Copilot, Power Platform and SharePoint: secure, scalable, cost-optimized Microsoft solutions.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <SiteShell>
      <PageHero eyebrow="Solutions" lines={["Microsoft,", "done properly."]} lead="Secure, scalable and cost-optimized Microsoft solutions, from Azure and Microsoft 365 to licensing and ongoing managed services." />
      <MicrosoftEcosystem />
      <AzurePartner />
      <FAQ />
      <CtaBand />
    </SiteShell>
  );
}
