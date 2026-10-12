import { Lines } from "@/components/typography/Lines";
import { Reveal } from "@/components/motion/Reveal";
import { Band } from "@/components/home/primitives/Band";
import { HomeButton } from "@/components/home/primitives/HomeButton";
import { contact } from "@/data/company";

export function SolutionsCta() {
  return (
    <Band tone="flow" labelledBy="sx-cta-title" className="sx-cta">
      <div className="sx-cta__inner">
        <Reveal as="p" className="hx-label">Claidsphere Solutions <i>/</i> Start a conversation</Reveal>
        <Lines id="sx-cta-title" className="sx-cta__title" lines={["Have a complex", "business challenge?"]} />
        <Reveal className="sx-cta__row" delay={0.2}>
          <HomeButton href="/contact" className="hx-btn--lg">Talk to an Expert</HomeButton>
          <a className="hx-arrowlink" href={`mailto:${contact.email}`}><span className="hx-arrowlink__t">{contact.email}</span></a>
        </Reveal>
      </div>
    </Band>
  );
}
