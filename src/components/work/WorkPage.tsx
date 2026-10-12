import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import type { CSSProperties } from "react";
import { Lines } from "@/components/typography/Lines";
import { Reveal } from "@/components/motion/Reveal";
import { Band } from "@/components/home/primitives/Band";
import { SectionLabel } from "@/components/home/primitives/SectionLabel";
import { ArrowLink } from "@/components/home/primitives/ArrowLink";
import { BrandPlate, WebsitePlate } from "@/components/home/WorkList/Visuals";
import { caseStudies } from "@/data/work";
import { testimonials } from "@/data/testimonials";
import { services } from "@/data/services";
import { company } from "@/data/company";
import type { CaseStudy } from "@/data/types";
import "./work.css";

const pad = (n: number) => String(n).padStart(2, "0");
const isBrand = (c: CaseStudy) => c.slug.includes("accounting");
const quoteFor = (c: CaseStudy) => testimonials.find((t) => t.organisation === c.testimonialOrg);
const plateLabel = (c: CaseStudy) =>
  isBrand(c)
    ? "Schematic of a brand identity system: mark, type, palette and stationery"
    : "Schematic of a website layout: navigation, hero and content grid";

const total = pad(caseStudies.length);
const disciplines = caseStudies.map((c) => c.service);
const demonstrated = new Set(caseStudies.map((c) => c.serviceSlug));
const also = ["cloud-solutions", "software-development", "artificial-intelligence", "data-analytics"];
const bySlug = (slug: string) => services.find((s) => s.slug === slug);

/** Hero + archive index: one continuous band, so the headline resolves straight into the first entry. */
export function WorkHero() {
  return (
    <Band tone="flow" labelledBy="work-title" className="wk-hero">
      <SectionLabel index="01" meta={`${total} projects`}>Selected work</SectionLabel>
      <div className="wk-hero__grid">
        <Lines immediate as="h1" id="work-title" className="wk-hero__title" lines={["Delivered for", "ambitious businesses."]} delay={0.1} />
        <div className="wk-hero__aside">
          <Reveal immediate="rise" as="p" className="wk-hero__lead" delay={0.35}>
            Selected projects in web and brand identity, from a team that works across cloud, AI, software and the Microsoft ecosystem.
          </Reveal>
          <Reveal immediate="rise" as="dl" className="wk-hero__meta" delay={0.5}>
            <div><dt className="hx-label">Projects</dt><dd>{total}</dd></div>
            <div><dt className="hx-label">Disciplines</dt><dd>{disciplines.map((d) => d.replace(/ development$/, "")).join(" · ")}</dd></div>
            <div><dt className="hx-label">Active since</dt><dd>{company.since}</dd></div>
          </Reveal>
        </div>
      </div>

      <nav className="wk-index" aria-labelledby="wk-index-title" data-enter="rise" style={{ "--d": "0.7s" } as CSSProperties}>
        <h2 id="wk-index-title" className="hx-label wk-index__head"><span>02</span><i aria-hidden="true" />Index</h2>
        <ol className="wk-index__list">
          {caseStudies.map((c, i) => (
            <li key={c.slug}>
              <a className="wk-index__row" href={`#${c.slug}`}>
                <span className="wk-index__n">{pad(i + 1)}</span>
                <span className="wk-index__client">{c.client}</span>
                <span className="wk-index__svc hx-label">{c.service}</span>
                <span className="wk-index__yr hx-label">{c.year}</span>
                <span className="wk-index__go" aria-hidden="true"><ArrowDown size={16} strokeWidth={1.5} /></span>
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </Band>
  );
}

function CaseStudyBlock({ c, i }: { c: CaseStudy; i: number }) {
  const lead = i === 0;
  const quote = quoteFor(c);
  const service = c.serviceSlug ? bySlug(c.serviceSlug) : undefined;
  return (
    <article id={c.slug} className="wk-case" data-variant={lead ? "lead" : "quiet"} aria-labelledby={`${c.slug}-title`}>
      <div className="wk-case__bar" data-reveal="rule">
        <span className="wk-case__n">{pad(i + 1)}<i>/</i>{total}</span>
        <span className="hx-label">{lead ? "Signature project" : "Project"}<i>·</i>{c.year}</span>
      </div>

      <h3 className="wk-case__title" id={`${c.slug}-title`} data-reveal="lines" aria-label={c.client}>
        <span className="line" aria-hidden="true"><span className="line__in" style={{ "--d": "0.1s" } as CSSProperties}>{c.client}</span></span>
      </h3>

      <figure className="wk-case__media hx-img" data-reveal={lead ? "clip" : "wipe"} style={{ "--d": lead ? "0.25s" : "0.1s" } as CSSProperties}>
        <div className="wk-case__plane" role="img" aria-label={plateLabel(c)}>
          {isBrand(c) ? <BrandPlate label={plateLabel(c)} /> : <WebsitePlate label={plateLabel(c)} />}
        </div>
        <figcaption className="hx-label wk-case__fig">Fig. {pad(i + 1)}<i>/</i>Schematic</figcaption>
      </figure>

      <div className="wk-case__body">
        <Reveal as="dl" className="wk-case__meta" delay={0.1}>
          <div><dt className="hx-label">Client</dt><dd>{c.client}</dd></div>
          <div><dt className="hx-label">Year</dt><dd>{c.year}</dd></div>
          <div><dt className="hx-label">Service</dt><dd>{c.service}</dd></div>
        </Reveal>
        <Reveal as="p" className="wk-case__sum" delay={0.2}>{c.summary}</Reveal>
        {c.outcome && (
          <Reveal className="wk-case__outcome" delay={0.25}>
            <p className="hx-label">Reported outcome</p>
            <p>{c.outcome}</p>
          </Reveal>
        )}
        {quote && (
          <Reveal as="figure" className="wk-case__quote" delay={0.3}>
            <blockquote><p>“{quote.quote}”</p></blockquote>
            <figcaption className="hx-label">{quote.name}<i>·</i>{quote.role}, {quote.organisation}</figcaption>
          </Reveal>
        )}
        {service && (
          <Reveal delay={0.35}><ArrowLink href={`/services/${service.slug}`}>{service.title}</ArrowLink></Reveal>
        )}
      </div>
    </article>
  );
}

export function WorkCases() {
  return (
    <Band tone="flow" labelledBy="cases-title" className="wk-cases">
      <SectionLabel index="03" meta={`${total} of ${total}`}>Case studies</SectionLabel>
      <h2 id="cases-title" className="sr-only">Case studies</h2>
      <ol className="wk-cases__list">
        {caseStudies.map((c, i) => <li key={c.slug}><CaseStudyBlock c={c} i={i} /></li>)}
      </ol>
    </Band>
  );
}

/** Work → capability → technology → business, answered in type and rules rather than cards. */
export function WorkBridge() {
  const rows = [...demonstrated, ...also].map((slug) => ({ s: bySlug(slug as string)!, shown: demonstrated.has(slug) }));
  return (
    <Band tone="flow" labelledBy="bridge-title" className="wk-bridge">
      <SectionLabel index="04" meta="Work / Capability / Technology / Business">What the work demonstrates</SectionLabel>
      <div className="wk-bridge__grid">
        <div className="wk-bridge__intro">
          <Lines id="bridge-title" className="wk-bridge__title" lines={["Two projects.", "One practice."]} />
          <Reveal as="p" className="wk-bridge__lede" delay={0.2}>
            The projects above are the web and brand work we have published. The same team delivers across the rest of the practice below.
          </Reveal>
        </div>
        <ul className="wk-bridge__list">
          {rows.map(({ s, shown }, i) => (
            <Reveal as="li" key={s.slug} className="wk-bridge__row" delay={i * 0.05}>
              <Link href={`/services/${s.slug}`} className="wk-bridge__link">
                <span className="wk-bridge__n">{pad(i + 1)}</span>
                <span className="wk-bridge__name">{s.title}</span>
                <span className="wk-bridge__sum">{s.summary}</span>
                <span className="wk-bridge__tag hx-label">{shown ? "Shown in this work" : "Also offered"}</span>
                <ArrowRight className="wk-bridge__arrow" size={16} strokeWidth={1.5} aria-hidden="true" />
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </Band>
  );
}
