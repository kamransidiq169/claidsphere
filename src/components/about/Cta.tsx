import { Lines } from "@/components/typography/Lines";
import { Reveal } from "@/components/motion/Reveal";
import { Band } from "@/components/home/primitives/Band";
import { HomeButton } from "@/components/home/primitives/HomeButton";
import { contact } from "@/data/company";

/** Closing: people → partnership. */
export function AboutCta() {
  return (
    <Band tone="flow" labelledBy="ab-cta" className="ab ab-cta">
      <Reveal as="p" className="hx-label">Claidsphere Solutions <i>/</i> Start a conversation</Reveal>
      <Lines id="ab-cta" className="ab-cta__title" lines={["Work with the team", "behind the technology."]} />
      <div className="ab-cta__row">
        <Reveal as="p" className="ab-lead" delay={0.2}>Kickstart your digital transformation with Claidsphere. Explore our AI-powered solutions with expert guidance.</Reveal>
        <Reveal className="ab-cta__side" delay={0.3}>
          <HomeButton href="/contact" className="hx-btn--lg">Talk to an Expert</HomeButton>
          <a className="hx-arrowlink" href={`mailto:${contact.email}`}><span className="hx-arrowlink__t">{contact.email}</span></a>
        </Reveal>
      </div>
    </Band>
  );
}
