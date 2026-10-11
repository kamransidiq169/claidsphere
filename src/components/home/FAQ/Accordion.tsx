"use client";

import { useRef, useState, type CSSProperties, type KeyboardEvent } from "react";

type Item = { question: string; answer: string };

/**
 * Editorial index of questions. One row open at a time; the panel unfolds with the grid 0fr→1fr technique
 * (height + clip + small rise, no JS measuring). Open without JS. ↑/↓/Home/End move between triggers.
 */
export function Accordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const triggers = useRef<(HTMLButtonElement | null)[]>([]);

  const onKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const last = items.length - 1;
    const next = e.key === "ArrowDown" ? (i === last ? 0 : i + 1) : e.key === "ArrowUp" ? (i === 0 ? last : i - 1) : e.key === "Home" ? 0 : e.key === "End" ? last : null;
    if (next === null) return;
    e.preventDefault();
    triggers.current[next]?.focus();
  };

  return (
    <ol className="hx-faq" data-reveal="sys">
      {items.map((f, i) => {
        const on = open === i;
        return (
          <li key={f.question} data-open={on ? "" : undefined} data-reveal="fade" style={{ "--d": `${0.08 + i * 0.07}s` } as CSSProperties}>
            <h3>
              <button
                type="button"
                ref={(el) => { triggers.current[i] = el; }}
                aria-expanded={on}
                aria-controls={`faq-p-${i}`}
                id={`faq-b-${i}`}
                onClick={() => setOpen(on ? null : i)}
                onKeyDown={(e) => onKey(e, i)}
              >
                <span className="hx-label hx-faq__n">{String(i + 1).padStart(2, "0")}</span>
                <span className="hx-faq__q">{f.question}</span>
                <span className="hx-faq__icon" aria-hidden="true"><i /><i /></span>
              </button>
            </h3>
            <div className="hx-faq__panel" id={`faq-p-${i}`} role="region" aria-labelledby={`faq-b-${i}`} inert={!on}>
              <div><p>{f.answer}</p></div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
