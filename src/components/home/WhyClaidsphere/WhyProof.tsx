"use client";

import { useCallback, useRef, useState, type CSSProperties, type KeyboardEvent, type ReactNode } from "react";

type Item = { readonly title: string; readonly body: string };

const pad = (n: number) => String(n).padStart(2, "0");

/** Strata anchor: one line per reason, lengths stepping like a section drawing. The selected line takes the accent. */
const SPANS = [300, 232, 266, 190];

/**
 * Four reasons as a manual index (WAI-ARIA vertical tabs). Selection changes only by click, tap or arrow keys:
 * no timer, no scroll input. Panels share one grid cell, so the section never changes height.
 */
export function WhyProof({ items, lead }: { items: readonly Item[]; lead: ReactNode }) {
  const n = items.length;
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  const select = useCallback((i: number, focus = false) => {
    const next = (i + n) % n;
    setActive(next);
    if (focus) tabs.current[next]?.focus();
  }, [n]);

  const onKey = (e: KeyboardEvent) => {
    const step = e.key === "ArrowDown" || e.key === "ArrowRight" ? 1 : e.key === "ArrowUp" || e.key === "ArrowLeft" ? -1 : 0;
    if (step) { e.preventDefault(); select(active + step, true); }
    else if (e.key === "Home") { e.preventDefault(); select(0, true); }
    else if (e.key === "End") { e.preventDefault(); select(n - 1, true); }
  };

  return (
    <div className="hx-why__grid">
      <div className="hx-why__lead">{lead}</div>

      <div className="hx-why__strata" aria-hidden="true" data-reveal="fade" style={{ "--d": "0.3s" } as CSSProperties}>
        <svg viewBox="0 0 300 96" fill="none" preserveAspectRatio="xMinYMid meet">
          <line className="hx-ws__datum" x1="0.5" y1="0" x2="0.5" y2="96" />
          {SPANS.map((w, i) => (
            <g key={i} className="hx-ws__row" data-on={i === active ? "" : undefined} transform={`translate(0 ${6 + i * 28})`}>
              <line className="hx-ws__line" x1="0" y1="0" x2={w} y2="0" />
              <line className="hx-ws__tick" x1={w} y1="-4" x2={w} y2="4" />
            </g>
          ))}
        </svg>
        <p className="hx-label hx-why__fig"><span>{pad(active + 1)}</span> / {pad(n)}</p>
      </div>

      <div className="hx-why__proof">
        <div className="hx-why__tabs" role="tablist" aria-orientation="vertical" aria-label="Why Claidsphere" onKeyDown={onKey}>
          {items.map((it, i) => (
            <button
              key={it.title}
              ref={(el) => { tabs.current[i] = el; }}
              id={`why-tab-${i}`}
              type="button"
              role="tab"
              className="hx-wt"
              data-reveal="fade"
              style={{ "--d": `${0.12 + i * 0.07}s` } as CSSProperties}
              aria-selected={i === active}
              aria-controls={`why-panel-${i}`}
              tabIndex={i === active ? 0 : -1}
              onClick={() => select(i)}
            >
              <span className="hx-label hx-wt__n" aria-hidden="true">{pad(i + 1)}</span>
              <span className="hx-wt__t">{it.title}</span>
            </button>
          ))}
        </div>

        <div className="hx-why__panels">
          {items.map((it, i) => (
            <p key={it.title} id={`why-panel-${i}`} role="tabpanel" aria-labelledby={`why-tab-${i}`} tabIndex={i === active ? 0 : -1} className="hx-wp" data-state={i === active ? "on" : "off"}>
              {it.body}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
