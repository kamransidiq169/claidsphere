import { Band } from "@/components/home/primitives/Band";
import { SectionLabel } from "@/components/home/primitives/SectionLabel";
import { ArrowLink } from "@/components/home/primitives/ArrowLink";
import { Lines } from "@/components/typography/Lines";
import { Reveal } from "@/components/motion/Reveal";
import { methodology } from "@/data/methodology";
import { pad } from "./model";

/** The hinge from "what we build" to "how we build it". Stage names come from the methodology data; the full section lives on the homepage. */
export function Engagement() {
  return (
    <Band tone="flow" id="engagement" labelledBy="sv-eng-title" className="sv-eng">
      <div className="sv-eng__grid">
        <header className="sv-eng__head">
          <SectionLabel index="05" meta={`${pad(methodology.length)} stages`}>Engagement</SectionLabel>
          <Lines id="sv-eng-title" className="hx-h2 sv-h2" lines={["What we build.", "How we build it."]} />
          <Reveal as="p" className="hx-lead sv-head__lead" delay={0.2}>Every service follows the same collaborative, agile path, with a functional prototype available within 24 hours for early feedback.</Reveal>
          <Reveal delay={0.3}><ArrowLink href="/#methodology">See the full methodology</ArrowLink></Reveal>
        </header>
        <ol className="sv-stages" data-reveal="sys">
          {methodology.map((m, i) => (
            <li key={m.title} style={{ "--i": i } as React.CSSProperties}>
              <span className="hx-label">{pad(i + 1)}</span>
              <span className="sv-stages__t">{m.title}</span>
            </li>
          ))}
        </ol>
      </div>
    </Band>
  );
}
