import { Lines } from "@/components/typography/Lines";
import { Reveal } from "@/components/motion/Reveal";
import { Band } from "../primitives/Band";
import { Geo } from "../primitives/Geo";
import { ArrowLink } from "../primitives/ArrowLink";
import { SectionLabel } from "../primitives/SectionLabel";
import { Accordion } from "./Accordion";
import { faqs } from "@/data/faq";

/** The last information layer before the close: a statement on the left, a ruled index of answers on the right, and a hand-off line into the CTA. */
export function FAQ() {
  return (
    <Band tone="flow" labelledBy="faq-title" className="hx-faqsec" backdrop={<Geo cx={1560} cy={120} r={640} from={180} to={200} />}>
      <div className="hx-faqsec__grid">
        <div className="hx-faqsec__head">
          <SectionLabel index="09" meta={`${String(faqs.length).padStart(2, "0")} questions`}>FAQ</SectionLabel>
          <Lines id="faq-title" className="hx-h2 hx-h2--md" lines={["The answers", "before the", "next step."]} />
          <Reveal as="p" className="hx-faqsec__sub" delay={0.1}>Straight answers on how we work with startups, SMEs and enterprises.</Reveal>
        </div>
        <div className="hx-faqsec__main">
          <Accordion items={faqs} />
          <Reveal className="hx-faqsec__more" delay={0.1}>
            <p>Something else you need to know?</p>
            <ArrowLink href="/contact">Ask us directly</ArrowLink>
          </Reveal>
        </div>
      </div>
    </Band>
  );
}
