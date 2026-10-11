"use client";

import Link from "next/link";
import { useState, type CSSProperties } from "react";
import { ArrowUpRight } from "lucide-react";
import { EditorialImage } from "../primitives/EditorialImage";

export type PillarRow = { id: string; index: string; heading: string; href: string; lede: string; items: readonly string[] };

/** Raster plates for the first two disciplines; Software draws a wireframe, so no image is implied. */
const plates: Record<string, { src: string; position: string }> = {
  cloud: { src: "/images/int.png", position: "50% 60%" },
  ai: { src: "/images/hero.png", position: "50% 50%" },
};

/** One discipline is open at a time. Hover (mouse), focus and tap all select; the figure follows. */
export function PillarIndex({ rows }: { rows: readonly PillarRow[] }) {
  const [active, setActive] = useState(0);
  const current = rows[active];

  return (
    <>
      <figure className="hx-pil__fig" data-active={current.id} data-reveal="sys" aria-hidden="true">
        {rows.map((r) => (
          <div key={r.id} className="hx-pil__plate" data-id={r.id}>
            {plates[r.id] ? (
              <EditorialImage src={plates[r.id].src} alt="" width={1800} height={1350} sizes="(min-width: 1024px) 40vw, 0px" reveal={false} position={plates[r.id].position} />
            ) : (
              <svg className="hx-pil__wire" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" fill="none">
                <rect x="60" y="50" width="280" height="200" />
                <path d="M60 84H340M104 50V84M60 170H190M190 84V250M190 140H340M250 140V250M250 196H340" />
                <path className="hx-pil__wire-a" d="M60 84H190V170H60Z" />
              </svg>
            )}
          </div>
        ))}
        <i className="hx-pil__tick hx-pil__tick--tl" />
        <i className="hx-pil__tick hx-pil__tick--tr" />
        <figcaption className="hx-label hx-pil__cap"><span>Fig. {current.index}</span><span>{current.heading}</span></figcaption>
      </figure>

      <ol className="hx-pil__list" data-reveal="sys">
        {rows.map((r, i) => {
          const open = i === active;
          return (
            <li key={r.id} className="hx-pr" data-open={open || undefined} style={{ "--i": i } as CSSProperties}>
              <h3 className="hx-pr__h">
                <button
                  type="button"
                  className="hx-pr__btn"
                  aria-expanded={open}
                  aria-controls={`pr-${r.id}`}
                  onClick={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onPointerEnter={(e) => e.pointerType === "mouse" && setActive(i)}
                >
                  <span className="hx-label hx-pr__n">{r.index}</span>
                  <span className="hx-pr__name">{r.heading}</span>
                  <span className="hx-pr__mark" aria-hidden="true" />
                </button>
              </h3>
              <div className="hx-pr__panel" id={`pr-${r.id}`} inert={!open}>
                <div className="hx-pr__body">
                  <p className="hx-pr__lede">{r.lede}</p>
                  <ul className="hx-pr__items">{r.items.map((it) => <li key={it}>{it}</li>)}</ul>
                  <Link href={r.href} className="hx-pr__go"><span>Explore {r.heading}</span><ArrowUpRight size={16} strokeWidth={1.5} aria-hidden="true" /></Link>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </>
  );
}
