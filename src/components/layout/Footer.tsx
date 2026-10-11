import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
import { Reveal } from "@/components/motion/Reveal";
import { company, contact, heroIndex, socials, reviewPlatforms } from "@/data/company";
import { services, microsoftProducts } from "@/data/services";

type NavLink = { label: string; href: string };

const nav: { id: string; title: string; links: NavLink[] }[] = [
  {
    id: "company",
    title: "Company",
    links: [["About", "/about"], ["Team", "/team"], ["Work", "/work"], ["Careers", "/careers"], ["Contact", "/contact"]].map(([label, href]) => ({ label, href })),
  },
  {
    id: "services",
    title: "Services",
    links: [...services.slice(0, 6).map((s) => ({ label: s.title, href: `/services/${s.slug}` })), { label: "All services", href: "/services" }],
  },
  {
    id: "solutions",
    title: "Solutions",
    links: microsoftProducts.map((p) => ({ label: p.name, href: "/solutions" })),
  },
];

const external = [
  { title: "Social", links: socials },
  { title: "Reviews", links: reviewPlatforms },
];

const idx = (n: number) => String(n).padStart(2, "0");
const office = contact.offices[0];

/** The anchor: the logo's ring-and-core, drawn as an orbit system that bleeds off the corner. Static, decorative. */
function Orbit() {
  return (
    <svg className="ft__orbit" viewBox="0 0 800 800" fill="none" aria-hidden="true" focusable="false">
      <circle cx="800" cy="800" r="760" />
      <circle cx="800" cy="800" r="600" />
      <circle cx="800" cy="800" r="440" />
      <circle cx="800" cy="800" r="280" />
      <circle className="ft__orbit-core" cx="800" cy="800" r="120" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="ft" data-theme="dark">
      <Orbit />
      <div className="container ft__inner">
        {/* 01 — Closing statement */}
        <section className="ft__close" aria-label="Claidsphere Solutions">
          <Reveal className="ft__brand">
            <Logo />
            <p className="ft__descriptor">{heroIndex.map((h) => h.name).join(" · ")}</p>
          </Reveal>
          <Reveal as="p" className="ft__statement" delay={0.08}>{company.tagline}</Reveal>
          <Reveal className="ft__cta" delay={0.16}>
            <Link href="/contact" className="ft__cta-link">
              <span className="ft__cta-label">Talk to an Expert</span>
              <span className="ft__cta-arrow" aria-hidden="true"><ArrowUpRight size={22} strokeWidth={1.25} /></span>
            </Link>
          </Reveal>
        </section>

        {/* 02 — Navigation architecture */}
        <Reveal className="ft__navs" delay={0.12}>
          {nav.map((group, i) => (
            <nav key={group.id} className={`ft__nav ft__nav--${group.id}`} aria-labelledby={`ft-${group.id}`}>
              <h2 id={`ft-${group.id}`} className="ft__h"><span>{idx(i + 1)}</span>{group.title}</h2>
              <ul>
                {group.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="ft__link">
                      <span className="ft__link-t">{l.label}</span>
                      <ArrowUpRight className="ft__link-a" size={15} strokeWidth={1.5} aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </Reveal>

        {/* 03 — Contact */}
        <Reveal className="ft__contact" delay={0.2}>
          <h2 className="ft__h"><span>{idx(nav.length + 1)}</span>Contact</h2>
          <div className="ft__reach">
            <a className="ft__big" href={`mailto:${contact.email}`}>{contact.email}</a>
            <a className="ft__big" href={contact.phoneHref}>{contact.phone}</a>
          </div>
          <address className="ft__office">
            <span className="ft__meta">{office.label}</span>
            {office.lines.map((l) => <span key={l}>{l}</span>)}
          </address>
        </Reveal>

        {/* 04 — Signature */}
        <Reveal className="ft__sig" delay={0.28}>
          <p className="ft__legal">© {company.since} {company.legalName}</p>
          <div className="ft__ext">
            {external.map((g) => (
              <nav key={g.title} aria-label={g.title} className="ft__extgroup">
                <span className="ft__meta" aria-hidden="true">{g.title}</span>
                <ul>
                  {g.links.map((s) => (
                    <li key={s.label}>
                      <a className="ft__ext-link" href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
