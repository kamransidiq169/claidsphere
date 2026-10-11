"use client";

import { useState, type CSSProperties } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { HomeButton } from "../primitives/HomeButton";
import { microsoftProducts } from "@/data/services";

type Props = { points: string[]; lead: React.ReactNode };

const [azure, m365] = microsoftProducts;
const latticeCols = [40, 120, 200, 280, 360];
const latticeRows = [30, 90, 150];

/** Which figure layers each capability point lights. Index matches `points`. */
const lights = [["m365", "azure"], ["licensing"], ["security"], ["support"]] as const;

/** Capability list and reference-architecture figure share one active state: hover, focus or tap a point to see where it sits. */
export function ArchitectureStage({ points, lead }: Props) {
  const [active, setActive] = useState<number | null>(null);
  const on = (layer: string) => (active === null ? undefined : lights[active].some((l) => l === layer) ? "on" : "off");

  return (
    <div className="hx-stage" data-active={active ?? undefined}>
      <div className="hx-stage__side">
      {lead}
      <ul className="hx-stage__points" onMouseLeave={() => setActive(null)}>
        {points.map((p, i) => (
          <li key={p} style={{ "--i": i } as CSSProperties}>
            <button
              type="button"
              aria-pressed={active === i}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onBlur={() => setActive(null)}
              onClick={() => setActive(active === i ? null : i)}
            >
              <span className="hx-label">0{i + 1}</span>
              <span>{p}</span>
            </button>
          </li>
        ))}
        <li className="hx-stage__cta"><HomeButton href="/contact">Speak to a Microsoft Expert</HomeButton></li>
      </ul>
      </div>

      <Reveal className="hx-fig">
        <p className="hx-label hx-fig__cap"><span>Fig. 03</span><span>Reference architecture</span></p>
        <i className="hx-fig__tick hx-fig__tick--tl" aria-hidden="true" />
        <i className="hx-fig__tick hx-fig__tick--tr" aria-hidden="true" />
        <div className="hx-fig__boundary" role="group" aria-label="Microsoft Azure and Microsoft 365 environment managed by Claidsphere">
          <span className="hx-label hx-fig__owner">Managed by Claidsphere</span>

          <div className="hx-layer hx-layer--support" data-state={on("support")}>
            <span className="hx-label">Ongoing support</span>
            <i className="hx-layer__rail" aria-hidden="true" />
          </div>
          <div className="hx-layer hx-layer--m365" data-state={on("m365")}>
            <span className="hx-label">Platform</span>
            <h3>{m365.name}</h3>
          </div>
          <div className="hx-layer hx-layer--azure" data-state={on("azure")}>
            <svg viewBox="0 0 400 180" preserveAspectRatio="xMaxYMid slice" fill="none" aria-hidden="true">
              {latticeRows.map((y) => <line key={`h${y}`} x1="40" x2="360" y1={y} y2={y} />)}
              {latticeCols.map((x) => <line key={`v${x}`} x1={x} x2={x} y1="30" y2="150" />)}
              {latticeRows.flatMap((y) => latticeCols.map((x) => <rect key={`${x}-${y}`} x={x - 3.5} y={y - 3.5} width="7" height="7" />))}
            </svg>
            <span className="hx-label">Platform</span>
            <h3>{azure.name}</h3>
            <p>{azure.description}</p>
          </div>
          <div className="hx-layer hx-layer--security" data-state={on("security")}>
            <span className="hx-label">Governance</span>
            <h3>Security &amp; compliance</h3>
          </div>
          <div className="hx-layer hx-layer--licensing" data-state={on("licensing")}>
            <span className="hx-label">Governance</span>
            <h3>Licensing &amp; cost</h3>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
