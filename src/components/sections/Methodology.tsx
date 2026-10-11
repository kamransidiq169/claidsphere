import { Section } from "@/components/layout/Section";
import { Lines } from "@/components/typography/Lines";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { ProcessSteps } from "./ProcessSteps";
import { methodology } from "@/data/methodology";

export function Methodology() {
  return (
    <Section theme="light" labelledBy="method-title">
      <Eyebrow index="06">How we work</Eyebrow>
      <Lines id="method-title" lines={["Mastering every step", "of our methodology."]} />
      <div style={{ marginTop: "clamp(2.5rem,5vw,4.5rem)" }}><ProcessSteps steps={methodology} /></div>
    </Section>
  );
}
