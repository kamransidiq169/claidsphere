import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Lines } from "@/components/typography/Lines";
import { Reveal } from "@/components/motion/Reveal";
import { Figure } from "./Figure";
import { get, numberOf, offeringCount, pillarLabel } from "./model";
import type { Service } from "@/data/types";

function Body({ s, children }: { s: Service; children?: React.ReactNode }) {
  return (
    <div className="sv-body">
      <p className="hx-label sv-meta"><span>{numberOf(s.slug)}</span><i aria-hidden="true" /><span>{pillarLabel(s)}</span><span>{offeringCount(s)}</span>{s.isNew && <span className="sv-new">New</span>}</p>
      <Lines as="h3" className="sv-title" lines={[s.title]} />
      <Reveal as="p" className="sv-summary" delay={0.15}>{s.summary}</Reveal>
      <Reveal as="ul" className="sv-offer" delay={0.25}>{s.offerings.map((o) => <li key={o}>{o}</li>)}</Reveal>
      {children}
      <Reveal className="sv-go-wrap" delay={0.3}>
        <Link className="sv-go" href={`/services/${s.slug}`}><span>Explore {s.title}</span><ArrowUpRight size={18} strokeWidth={1.5} aria-hidden="true" /></Link>
      </Reveal>
    </div>
  );
}

/** Lead: the most important service, with a dominant figure on the left. */
export function FeatureLead({ slug }: { slug: string }) {
  const s = get(slug);
  return (
    <article id={s.slug} className="sv-feat sv-feat--lead hx-hover">
      <Figure s={s} link sizes="(min-width: 1024px) 62vw, 100vw" aspect="16 / 11" />
      <Body s={s} />
    </article>
  );
}

/** Split: content first, a smaller figure set lower on the right. */
export function FeatureSplit({ slug }: { slug: string }) {
  const s = get(slug);
  return (
    <article id={s.slug} className="sv-feat sv-feat--split hx-hover">
      <Body s={s} />
      <Figure s={s} link sizes="(min-width: 1024px) 46vw, 100vw" aspect="4 / 3" />
    </article>
  );
}

/** Wide: a full-width plate, then the statement and its sibling services beneath. */
export function FeatureWide({ slug, siblings }: { slug: string; siblings: readonly string[] }) {
  const s = get(slug);
  return (
    <article id={s.slug} className="sv-feat sv-feat--wide hx-hover">
      <Figure s={s} link sizes="(min-width: 1600px) 1500px, 100vw" aspect="21 / 9" />
      <Body s={s}>
        <Reveal className="sv-sib" delay={0.3}>
          <p className="hx-label">Delivered with</p>
          <ul>{siblings.map((x) => <li key={x}><Link href={`/services/${x}`}>{get(x).title}</Link></li>)}</ul>
        </Reveal>
      </Body>
    </article>
  );
}
