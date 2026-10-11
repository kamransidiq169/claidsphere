import { SiteShell } from "@/components/layout/SiteShell";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/buttons/Button";

export const metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <SiteShell>
      <PageHero eyebrow="404" lines={["This page", "doesn’t exist."]} lead="It may have moved, or the link may be wrong." />
      <Section theme="dark"><Button href="/">Back to home</Button></Section>
    </SiteShell>
  );
}
