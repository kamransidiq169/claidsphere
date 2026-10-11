import { SiteShell } from "@/components/layout/SiteShell";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/layout/Section";
import { Lines } from "@/components/typography/Lines";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/buttons/Button";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { CtaBand } from "@/components/sections/CtaBand";
import { careersIntro, perks, recruitment, jobs } from "@/data/careers";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata = pageMetadata({ title: "Careers", description: "Careers at Claidsphere: a collaborative culture, impactful projects and cutting-edge technology. See our recruitment process and current openings.", path: "/careers" });

export default function CareersPage() {
  return (
    <SiteShell>
      <PageHero eyebrow="Careers" lines={["Build your", "career with us."]} lead={careersIntro.body} />
      <Section theme="light" labelledBy="why-join">
        <Eyebrow index="01">Why join</Eyebrow>
        <Lines id="why-join" lines={["Work that", "matters."]} />
        <Reveal><ol className="numbered" style={{ marginTop: "3rem" }}>{perks.map((p, i) => <li key={p}><span className="label">0{i + 1}</span><span>{p}</span></li>)}</ol></Reveal>
      </Section>
      <Section theme="dark" labelledBy="process-h">
        <Eyebrow index="02">Recruitment process</Eyebrow>
        <Lines id="process-h" lines={["Five steps", "to joining."]} />
        <div style={{ marginTop: "3rem" }}><ProcessSteps steps={recruitment} /></div>
      </Section>
      <Section theme="light" labelledBy="open-roles">
        <Eyebrow index="03">Open positions</Eyebrow>
        <Lines id="open-roles" lines={["Current", "openings."]} />
        <Reveal><ul className="jobs" style={{ listStyle: "none", padding: 0, marginTop: "3rem" }}>
          {jobs.map((j) => (
            <li key={j.title} className="job">
              <h3>{j.title}</h3>
              <span className="label">{j.department}</span>
              <span className="label">{j.location}</span>
            </li>
          ))}
        </ul></Reveal>
        <Reveal><div style={{ marginTop: "2.5rem" }}><Button href="/contact">Ask about a role</Button></div></Reveal>
      </Section>
      <CtaBand />
    </SiteShell>
  );
}
