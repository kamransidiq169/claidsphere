import { SiteShell } from "@/components/layout/SiteShell";
import { SolutionsHero } from "@/components/solutions/Hero";
import { SolutionIndex } from "@/components/solutions/Index";
import { Signature } from "@/components/solutions/Signature";
import { Relationship } from "@/components/solutions/Relationship";
import { Outcomes } from "@/components/solutions/Outcomes";
import { SolutionsCta } from "@/components/solutions/Cta";
import { JsonLd } from "@/lib/seo/JsonLd";
import { breadcrumb } from "@/lib/seo/schema";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata = pageMetadata({
  title: "Solutions — Microsoft & Azure for your business",
  description: "Business problems, solved with Microsoft Azure, Microsoft 365, Copilot, Power Platform and SharePoint: secure, scalable, cost-optimized solutions from Claidsphere.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <SiteShell>
      <JsonLd data={breadcrumb([{ name: "Solutions", path: "/solutions" }])} />
      <SolutionsHero />
      <SolutionIndex />
      <Signature />
      <Relationship />
      <Outcomes />
      <SolutionsCta />
    </SiteShell>
  );
}
