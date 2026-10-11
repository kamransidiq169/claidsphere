import { Section } from "@/components/layout/Section";
import { Lines } from "@/components/typography/Lines";
import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { Button } from "@/components/buttons/Button";
import { intro } from "@/data/company";

export function Intro() {
  return (
    <Section theme="light" labelledBy="intro-title">
      <Eyebrow index="01">What is Claidsphere</Eyebrow>
      <div className="split">
        <div className="split__a">
          <Lines id="intro-title" lines={["Empowering your", "business with", "Claidsphere."]} />
        </div>
        <div className="split__b stack">
          <Reveal as="p" className="lead">{intro.body}</Reveal>
          <Reveal delay={0.1}>
            <ol className="numbered">
              {intro.principles.map((p, i) => (
                <li key={p}><span className="label">0{i + 1}</span><span>{p}</span></li>
              ))}
            </ol>
          </Reveal>
          <Reveal delay={0.15}><Button href="/about" variant="text">Learn more about us</Button></Reveal>
        </div>
      </div>
    </Section>
  );
}
