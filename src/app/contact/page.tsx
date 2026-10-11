import { SiteShell } from "@/components/layout/SiteShell";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { ContactForm } from "@/components/forms/ContactForm";
import { contact } from "@/data/company";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata = pageMetadata({
  title: "Contact",
  description: "Talk to Claidsphere about cloud, AI, software and Microsoft solutions. Call, email or send a message; we aim to respond within 24 hours.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <SiteShell>
      <PageHero eyebrow="Contact" lines={["Let’s build", "what’s next."]} lead="Have an idea, need advice, or just want to say hello? We're all ears." />
      <Section theme="light">
        <div className="split">
          <Reveal className="split__a"><ContactForm /></Reveal>
          <Reveal className="split__b" delay={0.1}>
            <dl className="dl">
              <div><dt className="label">Call</dt><dd><a href={contact.phoneHref}>{contact.phone}</a></dd></div>
              <div><dt className="label">Email</dt><dd><a href={`mailto:${contact.email}`}>{contact.email}</a><br /><span className="dim" style={{ fontSize: ".9375rem" }}>{contact.responseTime}</span></dd></div>
              <div><dt className="label">Support</dt><dd>{contact.supportHours}<br /><span className="dim" style={{ fontSize: ".9375rem" }}>Office hours: {contact.supportTime}</span></dd></div>
              {contact.offices.map((o) => (
                <div key={o.label}><dt className="label">{o.label}</dt><dd>{o.lines.map((l) => <span key={l}>{l}<br /></span>)}</dd></div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Section>
    </SiteShell>
  );
}
