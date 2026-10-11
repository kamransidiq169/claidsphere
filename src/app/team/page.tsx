import { SiteShell } from "@/components/layout/SiteShell";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { CtaBand } from "@/components/sections/CtaBand";
import { team } from "@/data/team";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata = pageMetadata({ title: "Team", description: "Meet the Claidsphere team: our founder and co-founder, data scientist, solutions architect and website developer.", path: "/team" });

export default function TeamPage() {
  return (
    <SiteShell>
      <PageHero eyebrow="Team" lines={["Meet our", "experts."]} lead="A dedicated team, passionate about delivering results that exceed expectations." />
      <Section theme="dark">
        <Reveal>
          <ul className="team-list" style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {team.map((m) => <li key={m.name} className="member"><h2 className="member__name">{m.name}</h2><span className="label">{m.role}</span></li>)}
          </ul>
        </Reveal>
      </Section>
      <CtaBand />
    </SiteShell>
  );
}
