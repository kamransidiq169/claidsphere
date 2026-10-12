import { Lines } from "@/components/typography/Lines";
import { Reveal } from "@/components/motion/Reveal";
import { Band } from "@/components/home/primitives/Band";
import { contact } from "@/data/company";
import { contactHero, contactNext } from "@/data/contact";
import "./contact.css";

/** Invitation: a statement and a plain account of what happens next. Compact, so the enquiry is one scroll away. */
export function ContactHero() {
  return (
    <Band tone="royal" labelledBy="ct-title" className="ct ct-hero">
      <div className="ct-hero__grid">
        <div className="ct-hero__copy">
          <p className="hx-label ct-eyebrow" data-enter="fade"><span>{contactHero.eyebrow}</span><i aria-hidden="true">/</i><span>Start a conversation</span></p>
          <Lines immediate as="h1" id="ct-title" className="ct-hero__title" lines={[...contactHero.lines]} />
          <Reveal immediate="rise" as="p" className="ct-hero__lead" delay={0.25}>{contactHero.lead}</Reveal>
        </div>
        <Reveal immediate="rise" delay={0.4} className="ct-hero__side">
          <p className="hx-label">What happens next</p>
          <ol className="ct-next">
            {contactNext.map((n, i) => (
              <li key={n.k}><span className="hx-label">{String(i + 1).padStart(2, "0")}</span><b>{n.k}</b><span>{n.v}</span></li>
            ))}
          </ol>
          <p className="ct-hero__direct">
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <a href={contact.phoneHref}>{contact.phone}</a>
          </p>
        </Reveal>
      </div>
    </Band>
  );
}
