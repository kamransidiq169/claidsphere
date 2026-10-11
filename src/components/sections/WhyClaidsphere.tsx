import { Section } from "@/components/layout/Section";
import { Lines } from "@/components/typography/Lines";
import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { whyClaidsphere } from "@/data/company";

export function WhyClaidsphere() {
  return (
    <Section theme="dark" labelledBy="why-title">
      <Eyebrow index="07">Why Claidsphere</Eyebrow>
      <Lines id="why-title" lines={["Your success,", "our priority."]} />
      <div className="why" style={{ marginTop: "clamp(2.5rem,5vw,4.5rem)" }}>
        {whyClaidsphere.map((r, i) => (
          <Reveal key={r.title} as="article" className="why__item" delay={0.03 * i}>
            <h3>{r.title}</h3>
            <p>{r.body}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
