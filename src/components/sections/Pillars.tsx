"use client";

import { Section } from "@/components/layout/Section";
import { Lines } from "@/components/typography/Lines";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/buttons/Button";
import { useScrollSpy } from "@/lib/animations/useScrollSpy";
import { pillars } from "@/data/services";

const ids = pillars.map((p) => `cap-${p.id}`);

/** Desktop: sticky category rail follows the reading position. Mobile: stacked. No JS: plain anchors. */
export function Pillars() {
  const active = useScrollSpy(ids);
  return (
    <Section theme="dark" labelledBy="pillars-title">
      <Eyebrow index="02">What Claidsphere does</Eyebrow>
      <Lines id="pillars-title" lines={["Three disciplines,", "one ecosystem."]} />
      <div className="cap">
        <nav className="cap__rail" aria-label="Capabilities">
          <ol>
            {pillars.map((p) => (
              <li key={p.id}>
                <a href={`#cap-${p.id}`} aria-current={active === `cap-${p.id}`}>
                  <span className="label">{p.index}</span>
                  {p.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <div className="cap__list">
          {pillars.map((p) => (
            <article key={p.id} id={`cap-${p.id}`} className="cap__item" data-active={active === `cap-${p.id}`}>
              <div className="cap__head">
                <span className="label">{p.index}</span>
                <h3 className="cap__title">{p.title}</h3>
              </div>
              <p className="cap__lede">{p.lede}</p>
              <ul className="cap__items">{p.items.map((it) => <li key={it}>{it}</li>)}</ul>
            </article>
          ))}
        </div>
      </div>
      <Reveal><div style={{ marginTop: "2.5rem" }}><Button href="/services" variant="secondary">Explore all services</Button></div></Reveal>
    </Section>
  );
}
