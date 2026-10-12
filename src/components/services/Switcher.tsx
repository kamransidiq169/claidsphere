"use client";

import Link from "next/link";
import { useState, useSyncExternalStore } from "react";
import { ArrowUpRight } from "lucide-react";
import { Figure } from "./Figure";
import { numberOf, offeringCount, pillarLabel } from "./model";
import type { Service } from "@/data/types";

const subscribe = (cb: () => void) => { window.addEventListener("hashchange", cb); return () => window.removeEventListener("hashchange", cb); };
const hashNow = () => window.location.hash.slice(1);
const hashServer = () => "";

/**
 * One service open at a time, chosen by hand (click, tap, Enter/Space) or by an in-page link to its slug.
 * Desktop: the list on the left, the open service in a wide panel on the right. Mobile: an accordion, so the detail sits under what was tapped.
 * Without JS every panel renders in sequence.
 */
export function Switcher({ items }: { items: Service[] }) {
  const hash = useSyncExternalStore(subscribe, hashNow, hashServer);
  const [picked, setPicked] = useState<{ slug: string; hash: string } | null>(null);
  const fromHash = items.find((s) => s.slug === hash)?.slug;
  const active = (picked && picked.hash === hash ? picked.slug : fromHash) ?? items[0].slug;

  return (
    <ul className="sv-sw" data-reveal="sys">
      {items.map((s, i) => {
        const open = s.slug === active;
        return (
          <li key={s.slug} className="sv-sw__item" data-open={open || undefined} style={{ "--i": i } as React.CSSProperties}>
            <h3 className="sv-sw__h">
              <button id={s.slug} type="button" className="sv-sw__btn" aria-expanded={open} aria-controls={`${s.slug}-panel`} onClick={() => setPicked({ slug: s.slug, hash })}>
                <span className="hx-label sv-sw__n">{numberOf(s.slug)}</span>
                <span className="sv-sw__name">{s.title}</span>
                <span className="hx-label sv-sw__tag">{pillarLabel(s)}</span>
                <span className="sv-sw__mark" aria-hidden="true" />
              </button>
            </h3>
            <div id={`${s.slug}-panel`} role="region" aria-labelledby={s.slug} className="sv-sw__panel hx-hover">
              <div className="sv-sw__inner">
                <Figure s={s} sizes="(min-width: 1024px) 50vw, 100vw" aspect="16 / 10" />
                <div className="sv-sw__text">
                  <p className="hx-label sv-meta"><span>{numberOf(s.slug)}</span><i aria-hidden="true" /><span>{offeringCount(s)}</span>{s.isNew && <span className="sv-new">New</span>}</p>
                  <p className="sv-summary">{s.summary}</p>
                  <ul className="sv-offer">{s.offerings.map((o) => <li key={o}>{o}</li>)}</ul>
                  <Link className="sv-go" href={`/services/${s.slug}`}><span>Explore {s.title}</span><ArrowUpRight size={18} strokeWidth={1.5} aria-hidden="true" /></Link>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
