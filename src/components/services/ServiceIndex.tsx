"use client";

import Link from "next/link";
import type { Service } from "@/data/types";
import { useScrollSpy } from "@/lib/animations/useScrollSpy";

/**
 * Works without JS: every service renders as a full section and the left rail is
 * plain anchor links. JS only tracks which section is active (desktop emphasis).
 */
export function ServiceIndex({ services }: { services: Service[] }) {
  const active = useScrollSpy(services.map((s) => s.slug));

  return (
    <div className="sindex">
      <nav className="sindex__nav" aria-label="Service index">
        <ol>
          {services.map((s, i) => (
            <li key={s.slug}>
              <a href={`#${s.slug}`} aria-current={active === s.slug}>
                <span className="label">{String(i + 1).padStart(2, "0")}</span>
                {s.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>
      <div className="sindex__list">
        {services.map((s, i) => (
          <article key={s.slug} id={s.slug} className="sitem" data-active={active === s.slug}>
            <div className="sitem__head">
              <span className="label">{String(i + 1).padStart(2, "0")}</span>
              <h2>
                {s.title}
                {s.isNew && <span className="tag">New</span>}
              </h2>
            </div>
            <p className="sitem__summary">{s.summary}</p>
            <ul>{s.offerings.map((o) => <li key={o}>{o}</li>)}</ul>
            <p><Link className="btn btn--text" href={`/services/${s.slug}`}><span className="btn__label">Explore service</span></Link></p>
          </article>
        ))}
      </div>
    </div>
  );
}
