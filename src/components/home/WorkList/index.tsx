import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Band } from "../primitives/Band";
import { SectionLabel } from "../primitives/SectionLabel";
import { BrandPlate, WebsitePlate } from "./Visuals";
import { caseStudies } from "@/data/work";
import "./work.css";

const pad = (n: number) => String(n).padStart(2, "0");
const isBrand = (slug: string) => slug.includes("accounting");

/**
 * Selected work as proof of delivery. One dominant case (01) breaks the grid: its title crosses onto a plate that bleeds off
 * the right edge. Case 02 is the quiet counterpart: smaller type, plate pinned left, text offset right.
 * Everything shown comes from `caseStudies`; there are no per-project routes yet, so every project links to /work.
 */
export function WorkList({ heading = true }: { heading?: boolean }) {
  const total = pad(caseStudies.length);
  const disciplines = Array.from(new Set(caseStudies.map((c) => c.service.toLowerCase().replace(/ development$/, ""))));

  return (
    <Band tone="flow" labelledBy="work-title" className="hx-work hx-wk">
      {heading ? (
        <header className="hx-wk__head">
          <SectionLabel index="05" meta={`${total} projects`}>Selected work</SectionLabel>
          <Reveal as="h2" id="work-title" className="hx-wk__h2">Built for ambitious businesses.</Reveal>
          <Reveal as="p" className="hx-wk__lede" delay={0.15}>{`${total} recent projects across ${disciplines.join(" and ")} development.`}</Reveal>
        </header>
      ) : (
        <h2 id="work-title" className="sr-only">Projects</h2>
      )}

      <ol className="hx-wk__list">
        {caseStudies.map((c, i) => {
          const lead = i === 0;
          const brand = isBrand(c.slug);
          const label = brand ? "Schematic of a brand identity system: mark, type, palette and stationery" : "Schematic of a website layout: navigation, hero and content grid";
          return (
            <li key={c.slug} className="hx-wk__item">
              <article className="hx-wk__case" data-variant={lead ? "lead" : "quiet"} aria-labelledby={`wk-${c.slug}`}>
                <div className="hx-wk__bar" data-reveal="rule">
                  <span className="hx-wk__n">{pad(i + 1)}<i>/</i>{total}</span>
                  <span className="hx-label hx-wk__cat">{c.service}<i>·</i>{c.year}</span>
                </div>

                <h3 className="hx-wk__title" id={`wk-${c.slug}`} data-reveal="lines">
                  <Link href="/work" className="hx-wk__link">
                    <span className="line"><span className="line__in" style={{ "--d": "0.12s" } as React.CSSProperties}>{c.client}</span></span>
                  </Link>
                </h3>

                <figure className="hx-wk__media hx-img" data-reveal={lead ? "clip" : "wipe"} style={{ "--d": lead ? "0.3s" : "0.1s" } as React.CSSProperties}>
                  <div className="hx-img__plane" data-parallax="">{brand ? <BrandPlate label={label} /> : <WebsitePlate label={label} />}</div>
                  <figcaption className="hx-label hx-wk__fig" aria-hidden="true">Fig. {pad(i + 1)}<i>/</i>Schematic</figcaption>
                </figure>

                <Reveal className="hx-wk__body" delay={lead ? 0.5 : 0.3}>
                  <p className="hx-wk__sum">{c.summary}</p>
                  <p className="hx-wk__view hx-label" aria-hidden="true"><span>View project</span><ArrowRight size={14} strokeWidth={1.5} /></p>
                </Reveal>
              </article>
            </li>
          );
        })}
      </ol>

      {heading && (
        <Reveal className="hx-wk__all-wrap">
          <Link href="/work" className="hx-wk__all">
            <span className="hx-label">{total} of {total} shown</span>
            <span className="hx-wk__all-t">All work</span>
            <ArrowRight className="hx-wk__all-a" size={20} strokeWidth={1.3} aria-hidden="true" />
          </Link>
        </Reveal>
      )}
    </Band>
  );
}
