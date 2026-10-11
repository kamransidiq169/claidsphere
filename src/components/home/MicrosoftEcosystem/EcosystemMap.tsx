"use client";

import { useState, type CSSProperties } from "react";
import type { MicrosoftProduct } from "@/data/types";

/** What Claidsphere enables, from the second sentence of microsoftIntro.body. */
const outcomes = ["Collaboration", "Productivity", "Automation", "Intelligent decision-making"];
/** Delivery qualities, from the first sentence of microsoftIntro.body. */
const qualities = ["Secure", "Scalable", "Cost-optimized"];

/**
 * The bus is drawn in half-column segments (s = 0, .5 … 4.5 column units). Each carries the capabilities whose
 * route to the central axis passes over it, so the active capability lights exactly its own path (data-lit).
 */
function segments(count: number) {
  const axis = count / 2;
  return Array.from({ length: count * 2 }, (_, n) => {
    const s = n / 2;
    const routes = Array.from({ length: count }, (_, k) => k).filter((k) => {
      const [a, b] = [Math.min(k + 0.5, axis), Math.max(k + 0.5, axis)];
      return s >= a && s + 0.5 <= b;
    });
    return { s, routes: routes.join(""), side: s < axis ? "l" : "r" };
  }).filter((x) => x.routes);
}

function Link({ count, dir, active }: { count: number; dir: "down" | "up"; active: number }) {
  const w = 100 / count;
  return (
    <div className={`hx-map__link hx-map__link--${dir}`} aria-hidden="true">
      <i data-r="stem" data-lit="" />
      {segments(count).map(({ s, routes, side }) => (
        <i key={s} data-r="bus" data-side={side} data-lit={routes.includes(String(active)) || undefined} style={{ left: `${s * w}%`, width: `${w / 2}%` }} />
      ))}
      {Array.from({ length: count }, (_, k) => (
        <i key={k} data-r="drop" data-lit={k === active || undefined} style={{ left: `${(k + 0.5) * w}%` }} />
      ))}
    </div>
  );
}

const split = (name: string) => (name.startsWith("Microsoft ") ? ([name.slice(0, 9), name.slice(10)] as const) : ([null, name] as const));

/** Microsoft → capabilities → Claidsphere → outcomes. Hover, focus or tap selects a capability and lights its route. */
export function EcosystemMap({ products }: { products: MicrosoftProduct[] }) {
  const [active, setActive] = useState(0);
  const n = products.length;

  return (
    <>
      <div className="hx-map" data-reveal="sys" data-active={active} role="group" aria-label="How Microsoft technologies connect through Claidsphere">
        <i className="hx-tick hx-map__tick hx-map__tick--tl" aria-hidden="true" />
        <i className="hx-tick hx-map__tick hx-map__tick--br" aria-hidden="true" />
        <p className="hx-label hx-map__cap" aria-hidden="true"><span>Fig. 03</span><i className="hx-map__caprule" /><span>Ecosystem map</span></p>

        <p className="hx-map__root"><span className="hx-label">Ecosystem</span><span className="hx-map__rootname">Microsoft</span></p>
        <Link count={n} dir="down" active={active} />

        <ol className="hx-map__caps" style={{ "--n": n } as CSSProperties}>
          {products.map((p, k) => {
            const [pre, rest] = split(p.name);
            const on = k === active;
            return (
              <li key={p.name} className="hx-cap" data-on={on || undefined} style={{ "--i": k } as CSSProperties}>
                <button type="button" className="hx-cap__btn" aria-pressed={on} onClick={() => setActive(k)} onFocus={() => setActive(k)} onPointerEnter={(e) => e.pointerType === "mouse" && setActive(k)}>
                  <span className="hx-label hx-cap__n">0{k + 1}</span>
                  <span className="hx-cap__name">{pre && <span className="hx-cap__pre">{pre}</span>}{rest}</span>
                </button>
                <p className="hx-cap__desc">{p.description}</p>
              </li>
            );
          })}
        </ol>

        <Link count={n} dir="up" active={active} />
        <div className="hx-map__us">
          <span className="hx-label hx-map__tier">Delivery</span>
          <span className="hx-map__usname">Claidsphere</span>
          <ul className="hx-map__qual">{qualities.map((q) => <li key={q}>{q}</li>)}</ul>
        </div>

        <div className="hx-map__out" role="group" aria-label="Enables">
          <span className="hx-label hx-map__enables">Enables</span>
          <ul>{outcomes.map((o, i) => <li key={o} style={{ "--i": i } as CSSProperties}>{o}</li>)}</ul>
        </div>
      </div>

      <div className="hx-eco__sel" aria-live="polite">
        <p key={active} className="hx-eco__selin">
          <span className="hx-label"><b>0{active + 1}</b><i>/</i>{products[active].name}</span>
          <span>{products[active].description}</span>
        </p>
      </div>
    </>
  );
}
