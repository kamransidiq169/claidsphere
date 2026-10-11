import { SiteShell } from "@/components/layout/SiteShell";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/layout/Section";
import { Lines } from "@/components/typography/Lines";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/buttons/Button";
import { Intro } from "@/components/sections/Intro";
import { WhyClaidsphere } from "@/components/sections/WhyClaidsphere";
import { CtaBand } from "@/components/sections/CtaBand";
import { about, timeline } from "@/data/company";
import { team } from "@/data/team";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata = pageMetadata({
  title: "About",
  description: "Claidsphere: a team of passionate professionals helping businesses thrive in cloud, AI, data and digital.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <SiteShell>
      <PageHero eyebrow="About" lines={["Building a better", "future together."]} lead={about.body} />
      <Section theme="light" labelledBy="philosophy">
        <Eyebrow index="01">Philosophy</Eyebrow>
        <div className="split">
          <div className="split__a"><Lines id="philosophy" lines={["Innovation,", "reliability,", "client satisfaction."]} /></div>
          <div className="split__b stack">
            <Reveal as="p" className="lead">{about.values}</Reveal>
            <Reveal as="p" className="lead dim">{about.priorityBody}</Reveal>
          </div>
        </div>
      </Section>
      <Section theme="dark" labelledBy="evolution">
        <Eyebrow index="02">Evolution</Eyebrow>
        <div className="split">
          <div className="split__a"><Lines id="evolution" lines={["A legacy of", "creativity", "and growth."]} /></div>
          <Reveal className="split__b">
            <ol className="timeline">
              {timeline.map((t) => (
                <li key={t.title}>
                  <span className="label">{t.period}</span>
                  <h3>{t.title}</h3>
                  <p>{t.body}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </Section>
      <Intro />
      <Section theme="graphite" labelledBy="team-h">
        <Eyebrow index="04">Team</Eyebrow>
        <Lines id="team-h" lines={["The people", "behind it."]} />
        <Reveal><ul className="team-list" style={{ listStyle: "none", padding: 0, marginTop: "3rem" }}>
          {team.map((m) => <li key={m.name} className="member"><h3>{m.name}</h3><span className="label">{m.role}</span></li>)}
        </ul></Reveal>
        <Reveal><div style={{ marginTop: "2.5rem" }}><Button href="/team" variant="text">Meet the team</Button></div></Reveal>
      </Section>
      <WhyClaidsphere />
      <CtaBand />
    </SiteShell>
  );
}
