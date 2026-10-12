"use client";

import Link from "next/link";
import { useRef, useState, type KeyboardEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { layers, solutions } from "@/data/solutions";

/** Manual selection only: click, tap, or arrow keys. Nothing changes on scroll, and nothing cycles. */
export function Selector() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const cur = solutions[active];
  const layerIdx = layers.findIndex((l) => l.id === cur.layer);

  const onKey = (e: KeyboardEvent) => {
    const step = e.key === "ArrowDown" || e.key === "ArrowRight" ? 1 : e.key === "ArrowUp" || e.key === "ArrowLeft" ? -1 : 0;
    const jump = e.key === "Home" ? 0 : e.key === "End" ? solutions.length - 1 : null;
    if (!step && jump === null) return;
    e.preventDefault();
    const next = jump ?? (active + step + solutions.length) % solutions.length;
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <div className="sx-sel">
      <div className="sx-sel__list" role="tablist" aria-label="Solutions" aria-orientation="vertical" onKeyDown={onKey}>
        {solutions.map((s, i) => (
          <button
            key={s.name}
            ref={(el) => { tabs.current[i] = el; }}
            type="button"
            role="tab"
            id={`sx-tab-${s.id}`}
            aria-selected={i === active}
            aria-controls="sx-panel"
            tabIndex={i === active ? 0 : -1}
            className="sx-tab"
            onClick={() => setActive(i)}
          >
            <span className="hx-label sx-tab__n">{s.index}</span>
            <span className="sx-tab__body">
              <span className="sx-tab__name">{s.name}</span>
              <span className="hx-label sx-tab__rel">{s.relevance}</span>
            </span>
            <span className="sx-tab__mark" aria-hidden="true" />
          </button>
        ))}
      </div>

      <div className="sx-sel__panel" id="sx-panel" role="tabpanel" aria-labelledby={`sx-tab-${cur.id}`} tabIndex={0}>
        <div className="sx-detail" key={cur.id}>
          <p className="hx-label sx-detail__role"><span>{cur.index}</span><i aria-hidden="true">/</i><span>{cur.role}</span></p>
          <h3 className="sx-detail__name">{cur.name}</h3>
          <p className="sx-detail__desc">{cur.description}</p>
          <ul className="sx-detail__caps" aria-label={`${cur.name} capabilities`}>
            {cur.capabilities.map((c) => <li key={c}>{c}</li>)}
          </ul>
          <Link href={cur.href} className="sx-go"><span>{cur.cta}</span><ArrowUpRight size={16} strokeWidth={1.5} aria-hidden="true" /></Link>
        </div>

        <div className="sx-gauge" aria-label={`Sits in the ${layers[layerIdx].name} layer`} role="img">
          <p className="hx-label sx-gauge__t">Where it sits</p>
          <ol>
            {layers.map((l, i) => (
              <li key={l.id} data-on={i === layerIdx || undefined}><i aria-hidden="true" /><span className="hx-label">{l.name}</span></li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
