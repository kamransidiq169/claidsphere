import { Section } from "@/components/layout/Section";
import { Lines } from "@/components/typography/Lines";
import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { Button } from "@/components/buttons/Button";
import { caseStudies } from "@/data/work";

export function WorkList({ heading = true, eyebrow = "What Claidsphere has built" }: { heading?: boolean; eyebrow?: string }) {
  return (
    <Section theme="dark" labelledBy="work-title">
      {heading ? (
        <>
          <Eyebrow index="05">{eyebrow}</Eyebrow>
          <Lines id="work-title" lines={["Selected", "work."]} />
        </>
      ) : (
        <h2 id="work-title" className="sr-only">Projects</h2>
      )}
      <div className="works" style={{ marginTop: heading ? "clamp(2.5rem,5vw,4.5rem)" : 0 }}>
        {caseStudies.map((c, i) => (
          <Reveal key={c.slug} as="article" className="work-row" delay={i * 0.05}>
            <span className="label work-row__idx">0{i + 1}</span>
            <div className="work-row__main">
              <h3 className="work-row__title">{c.client}</h3>
              <p className="work-row__lede">{c.summary}</p>
            </div>
            <dl className="work-row__meta">
              <div><dt className="label">Year</dt><dd>{c.year}</dd></div>
              <div><dt className="label">Service</dt><dd>{c.service}</dd></div>
            </dl>
          </Reveal>
        ))}
      </div>
      {heading && <Reveal><div style={{ marginTop: "2.5rem" }}><Button href="/work" variant="secondary">All work</Button></div></Reveal>}
    </Section>
  );
}
