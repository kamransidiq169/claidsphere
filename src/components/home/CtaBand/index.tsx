import { Lines } from "@/components/typography/Lines";
import { Reveal } from "@/components/motion/Reveal";
import { Band } from "../primitives/Band";
import { Geo } from "../primitives/Geo";
import { HomeButton } from "../primitives/HomeButton";
import { contact } from "@/data/company";

/** The close: a quiet invitation. The orbit from the Hero returns beneath it and brightens as the section is approached (HomeMotion → --ap). */
export function CtaBand() {
  return (
    <Band tone="flow" labelledBy="cta-title" className="hx-cta" bare backdrop={<><div className="hx-cta__light" aria-hidden="true" /><Geo className="hx-geo--cta" cx={682} cy={1130} r={820} from={232} to={268} align="center-bottom" /></>}>
      <div className="hx-wrap hx-cta__inner">
        <Reveal as="p" className="hx-label hx-cta__eyebrow">Claidsphere Solutions <i>/</i> Start a conversation</Reveal>
        <Lines id="cta-title" className="hx-cta__title" lines={["Let’s build", "what’s next."]} />
        <div className="hx-cta__row">
          <Reveal as="p" className="hx-lead hx-cta__lede" delay={0.2}>Kickstart your digital transformation with Claidsphere. Explore our AI-powered solutions with expert guidance.</Reveal>
          <Reveal className="hx-cta__side" delay={0.3}>
            <HomeButton href="/contact" className="hx-btn--lg">Talk to an Expert</HomeButton>
            <div className="hx-cta__contact">
              <a className="hx-arrowlink" href={`mailto:${contact.email}`}><span className="hx-arrowlink__t">{contact.email}</span></a>
              <a className="hx-arrowlink" href={contact.phoneHref}><span className="hx-arrowlink__t">{contact.phone}</span></a>
            </div>
          </Reveal>
        </div>
      </div>
    </Band>
  );
}
