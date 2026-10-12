import { Reveal } from "@/components/motion/Reveal";
import { ContactForm } from "@/components/forms/ContactForm";
import { contact, socials } from "@/data/company";

/** The conversation: direct contact set quietly beside a guided, four-part enquiry. Light surface for legibility. */
export function Enquiry() {
  return (
    <section className="ct ct-enq" aria-labelledby="ct-enq-title" data-tone="paper">
      <div className="hx-wrap ct-enq__grid">
        <Reveal as="aside" className="ct-direct" >
          <h2 className="ct-label" id="ct-direct">Direct contact</h2>
          <dl aria-labelledby="ct-direct">
            <div><dt>Email</dt><dd><a href={`mailto:${contact.email}`}>{contact.email}</a></dd></div>
            <div><dt>Phone</dt><dd><a href={contact.phoneHref}>{contact.phone}</a></dd></div>
            <div><dt>Support</dt><dd>{contact.supportHours}<span>Office hours: {contact.supportTime}</span></dd></div>
            {contact.offices.map((o) => (
              <div key={o.label}><dt>{o.label}</dt><dd>{o.lines.map((l) => <span key={l}>{l}</span>)}</dd></div>
            ))}
            <div><dt>Elsewhere</dt><dd className="ct-direct__social">{socials.map((s) => <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">{s.label}<span className="sr-only"> (opens in a new tab)</span></a>)}</dd></div>
          </dl>
          <p className="ct-direct__note">{contact.responseTime}</p>
        </Reveal>
        <Reveal className="ct-main" delay={0.08}>
          <h2 className="ct-enq__title" id="ct-enq-title">Start with the problem. <em>We’ll take it from there.</em></h2>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
