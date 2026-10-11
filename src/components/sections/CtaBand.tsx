import { Section } from "@/components/layout/Section";
import { Lines } from "@/components/typography/Lines";
import { Reveal } from "@/components/motion/Reveal";
import { Magnetic } from "@/components/motion/Magnetic";
import { Button } from "@/components/buttons/Button";
import { contact } from "@/data/company";

export function CtaBand() {
  return (
    <Section theme="dark" className="cta-final" labelledBy="cta-title">
      <Lines id="cta-title" lines={["Let’s build", "what’s next."]} />
      <div className="cta-final__row">
        <Reveal as="p" className="cta-final__lede" delay={0.2}>Kickstart your digital transformation with Claidsphere. Explore our AI-powered solutions with expert guidance.</Reveal>
        <Reveal className="cta-final__side" delay={0.3}>
          <div><Magnetic><Button href="/contact">Talk to an Expert</Button></Magnetic></div>
          <div className="cta-final__contact">
            <a className="linkline" href={`mailto:${contact.email}`}>{contact.email}</a>
            <a className="linkline" href={contact.phoneHref}>{contact.phone}</a>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
