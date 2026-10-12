import { SiteShell } from "@/components/layout/SiteShell";
import { WorkHero, WorkCases, WorkBridge } from "@/components/work/WorkPage";
import { CtaBand } from "@/components/home/CtaBand";
import { HomeMotion } from "@/components/home/primitives/HomeMotion";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata = pageMetadata({
  title: "Work",
  description: "Selected Claidsphere projects: Yaseen Stone Crusher and Jammu & Kashmir Accounting Services.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <SiteShell>
      <WorkHero />
      <WorkCases />
      <WorkBridge />
      <CtaBand />
      <HomeMotion />
    </SiteShell>
  );
}
