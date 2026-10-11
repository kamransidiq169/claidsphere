import { Section } from "@/components/layout/Section";
import { Lines } from "@/components/typography/Lines";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { faqs } from "@/data/faq";

export function FAQ() {
  return (
    <Section theme="light" labelledBy="faq-title">
      <Eyebrow index="09">Questions</Eyebrow>
      <div className="split">
        <div className="split__a"><Lines id="faq-title" lines={["Got", "questions?"]} /></div>
        <Reveal className="split__b faq">
          {faqs.map((f) => (
            <details key={f.question}>
              <summary>{f.question}</summary>
              <div>{f.answer}</div>
            </details>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
