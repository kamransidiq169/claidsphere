import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { testimonials } from "@/data/testimonials";
import type { Testimonial } from "@/data/types";

const byline = (t: Testimonial) => [t.role, t.organisation].filter(Boolean).join(", ");

export function Testimonials() {
  const [lead, ...rest] = testimonials.filter((t, i, a) => a.findIndex((x) => x.name === t.name) === i);
  return (
    <Section theme="graphite" labelledBy="voices-title">
      <Eyebrow index="08">What clients say</Eyebrow>
      <h2 id="voices-title" className="sr-only">Testimonials</h2>
      <div className="voices">
        <Reveal as="figure" className="voice-lead" >
          <blockquote><p>&ldquo;{lead.quote}&rdquo;</p></blockquote>
          <figcaption><cite><span className="voice-name">{lead.name}</span><span className="dim">{byline(lead)}</span></cite></figcaption>
        </Reveal>
        <div className="voices__rest">
          {rest.map((t, i) => (
            <Reveal as="figure" key={t.name} className="voice" delay={i * 0.07}>
              <blockquote><p>&ldquo;{t.quote}&rdquo;</p></blockquote>
              <figcaption><cite><span className="voice-name">{t.name}</span><span className="dim">{byline(t)}</span></cite></figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
