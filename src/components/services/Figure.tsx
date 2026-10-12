import Link from "next/link";
import { EditorialImage } from "@/components/home/primitives/EditorialImage";
import { Plate } from "./Plate";
import { art, numberOf, pillarLabel } from "./model";
import type { Service } from "@/data/types";

/** Square-cornered figure: photographic art where it exists, a drawn plate otherwise. Same ticks and caption either way. */
export function Figure({ s, sizes, aspect, link, preload }: { s: Service; sizes: string; aspect?: string; link?: boolean; preload?: boolean }) {
  const a = art[s.slug];
  const inner = (
    <figure className="sv-fig" style={aspect ? { aspectRatio: aspect } : undefined} data-kind={a ? "photo" : "plate"}>
      {a ? (
        <EditorialImage src={a.src} alt={`Abstract art direction for ${s.title}`} width={a.width} height={a.height} sizes={sizes} position={a.position} reveal preload={preload} />
      ) : (
        <div className="sv-fig__plate" data-reveal="clip"><Plate slug={s.slug} /></div>
      )}
      <i className="sv-tick sv-tick--tl" aria-hidden="true" /><i className="sv-tick sv-tick--br" aria-hidden="true" />
      <figcaption className="hx-label sv-fig__cap" aria-hidden="true"><span>Fig. {numberOf(s.slug)}</span><span>{pillarLabel(s)}</span></figcaption>
    </figure>
  );
  if (!link) return inner;
  return <Link href={`/services/${s.slug}`} tabIndex={-1} aria-hidden="true" className="sv-fig-link">{inner}</Link>;
}
