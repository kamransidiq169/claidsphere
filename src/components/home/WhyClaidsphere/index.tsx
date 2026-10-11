import { Lines } from "@/components/typography/Lines";
import { Reveal } from "@/components/motion/Reveal";
import { Band } from "../primitives/Band";
import { SectionLabel } from "../primitives/SectionLabel";
import { WhyProof } from "./WhyProof";
import { whyProof } from "@/data/company";
import "./why.css";

/**
 * 07 — why it matters. Method (how we work) → this (why it matters) → Voices (proof from clients).
 * One idea: four reasons as a numbered index, read one at a time, by the visitor only. No scroll input.
 * Starts on --s-c (where Methodology ends) and ends on --s-b (where Voices begins).
 */
export function WhyClaidsphere() {
  return (
    <Band tone="flow" labelledBy="why-title" className="hx-why">
      <SectionLabel index="07" meta={`0${whyProof.length} reasons`}>Why Claidsphere</SectionLabel>

      <WhyProof
        items={whyProof}
        lead={
          <>
            <Lines id="why-title" className="hx-why__title" lines={["Your success,", "our priority."]} />
            <Reveal as="p" className="hx-why__copy" delay={0.15}>
              We’re not just service providers; we’re your strategic partners.
            </Reveal>
          </>
        }
      />

      <div className="hx-why__close" aria-hidden="true">
        <Reveal as="p" className="hx-label hx-why__dir">Proof from clients</Reveal>
        <i className="hx-why__tail" />
      </div>
    </Band>
  );
}
