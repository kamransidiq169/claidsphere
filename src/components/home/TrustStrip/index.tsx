import type { CSSProperties } from "react";
import { Lines } from "@/components/typography/Lines";
import { Reveal } from "@/components/motion/Reveal";
import { Band } from "../primitives/Band";
import { trust } from "@/data/company";
import "./trust.css";

/**
 * Scene two between Hero and Intro: the technology system behind the work, drawn as a
 * three-tier architecture on one spine, ending in the proof metadata.
 *   Ecosystem  →  Platform  →  Build  →  Proof
 * Names and captions restate existing service copy; clients and ratings come from data/company.
 */
const tiers = [
  { tag: "Ecosystem", items: [{ name: "Microsoft", note: "Microsoft-focused partner" }] },
  {
    tag: "Platform",
    items: [
      { name: "Azure", note: "Cloud environments" },
      { name: "AI", note: "Copilot · Analytics" },
      { name: "Cloud", note: "Azure · Microsoft 365" },
    ],
  },
  {
    tag: "Build",
    items: [
      { name: "Software", note: "Web · Mobile · Custom" },
      { name: "Data", note: "Analytics · Reporting" },
    ],
  },
] as const;

export function TrustStrip() {
  const ratings = trust.ratings.split(" · ");
  let n = 0;
  return (
    <Band tone="royal" labelledBy="trust-title" className="hx-trust" bare>
      <div className="hx-trust__bridge" aria-hidden="true">
        <svg viewBox="0 0 1364 180" preserveAspectRatio="none" fill="none">
          <path className="hx-trust__arc" d="M 0 0 A 1400 1400 0 0 0 1364 0" pathLength="1" />
        </svg>
        <i className="hx-trust__stem" />
        <i className="hx-trust__node" />
      </div>

      <div className="hx-wrap">
        <p className="hx-label hx-tr__bar" data-reveal="sys" aria-hidden="true">
          <span className="hx-tr__eyebrow">Technology ecosystem</span>
          <i className="hx-tr__barrule" />
          <span>06 <b>/</b> Disciplines</span>
        </p>

        <div className="hx-tr__grid">
          <header className="hx-tr__lede">
            <Lines id="trust-title" className="hx-tr__title" lines={["Built around", "the Microsoft", "ecosystem."]} delay={0.15} />
            <Reveal as="p" className="hx-tr__support" delay={0.35}>
              {trust.ecosystem.join(" · ")}
            </Reveal>
          </header>

          <div className="hx-tr__arch" data-reveal="sys">
            {tiers.map((tier, t) => (
              <div key={tier.tag} role="group" aria-label={tier.tag} className="hx-tr__tier" data-n={tier.items.length} style={{ "--t": t } as CSSProperties}>
                <p className="hx-label hx-tr__tag" aria-hidden="true">{tier.tag}</p>
                <ol className="hx-tr__items" start={n + 1}>
                  {tier.items.map((it, i) => {
                    const idx = ++n;
                    return (
                      <li key={it.name} style={{ "--i": i } as CSSProperties}>
                        <span className="hx-tr__n" aria-hidden="true">0{idx}</span>
                        <span className="hx-tr__name">{it.name}</span>
                        <span className="hx-tr__note">{it.note}</span>
                      </li>
                    );
                  })}
                </ol>
              </div>
            ))}

            <div role="group" aria-label="Proof" className="hx-tr__tier hx-tr__proof" style={{ "--t": 3 } as CSSProperties}>
              <p className="hx-label hx-tr__tag" aria-hidden="true">Proof</p>
              <div className="hx-tr__proofbody">
                <p className="hx-label hx-tr__by">Trusted by</p>
                <ul className="hx-tr__clients">
                  {trust.clients.map((c) => <li key={c}>{c}</li>)}
                </ul>
                <ul className="hx-tr__ratings" aria-label="Ratings">
                  {ratings.map((r) => <li key={r}>{r}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Band>
  );
}
