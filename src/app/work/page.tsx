import { SiteShell } from "@/components/layout/SiteShell";
import { PageHero } from "@/components/sections/PageHero";
import { WorkList } from "@/components/sections/WorkList";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBand } from "@/components/sections/CtaBand";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata = pageMetadata({
  title: "Work",
  description: "Selected Claidsphere projects: Yaseen Stone Crusher and Jammu & Kashmir Accounting Services.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <SiteShell>
      <PageHero eyebrow="Work" lines={["What we've", "built."]} lead="Selected projects, in the words of the clients they were built for." />
      <WorkList heading={false} />
      <Testimonials />
      <CtaBand />
    </SiteShell>
  );
}
