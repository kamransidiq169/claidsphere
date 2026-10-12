import { Lines } from "@/components/typography/Lines";
import { Reveal } from "@/components/motion/Reveal";
import { Band } from "@/components/home/primitives/Band";
import { SectionLabel } from "@/components/home/primitives/SectionLabel";
import { ecosystem as e } from "@/data/about";

/** 05: method → technology. Where Claidsphere sits: between the Microsoft ecosystem and business capability. Type and lines only. */
export function Ecosystem() {
  return (
    <Band tone="flow" labelledBy="ab-eco" className="ab ab-eco">
      <SectionLabel index="05" meta="Technology landscape">Where we operate</SectionLabel>
      <div className="ab-eco__grid">
        <div className="ab-eco__copy">
          <Lines id="ab-eco" className="hx-h2 ab-h2" lines={["Between the platform", "and the business."]} />
          <Reveal as="p" className="ab-lead" delay={0.2}>{e.lead}</Reveal>
        </div>
        <ol className="ab-tier" aria-label="Technology ecosystem, Claidsphere, business capability">
          <Reveal as="li" className="ab-tier__row">
            <p className="hx-label">Technology ecosystem</p>
            <ul className="ab-tier__list">{e.technology.map((t) => <li key={t}>{t}</li>)}</ul>
          </Reveal>
          <li className="ab-tier__link" aria-hidden="true"><i /></li>
          <Reveal as="li" className="ab-tier__row ab-tier__row--core" delay={0.1}>
            <p className="hx-label">Claidsphere</p>
            <p className="ab-tier__big">{e.claidsphere.join(" · ")}</p>
            <p className="hx-label ab-tier__note">{e.claidsphereNote}</p>
          </Reveal>
          <li className="ab-tier__link" aria-hidden="true"><i /></li>
          <Reveal as="li" className="ab-tier__row" delay={0.2}>
            <p className="hx-label">Business capability</p>
            <ul className="ab-tier__list">{e.capability.map((t) => <li key={t}>{t}</li>)}</ul>
          </Reveal>
        </ol>
      </div>
      <p className="hx-fine">{e.trademark}</p>
    </Band>
  );
}
