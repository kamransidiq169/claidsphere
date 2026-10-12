import type { CSSProperties } from "react";
import { Lines } from "@/components/typography/Lines";
import { Reveal } from "@/components/motion/Reveal";
import { Band } from "@/components/home/primitives/Band";
import { HomeButton } from "@/components/home/primitives/HomeButton";
import { ArrowLink } from "@/components/home/primitives/ArrowLink";
import { layers, solutionsHero } from "@/data/solutions";
import "./solutions.css";

/** What we solve: the claim on the left, the business → outcomes architecture as the page's signature figure on the right. */
export function SolutionsHero() {
  return (
    <Band tone="royal" labelledBy="sx-title" className="sx-hero">
      <div className="sx-hero__grid">
        <div className="sx-hero__copy">
          <p className="hx-label sx-hero__eyebrow" data-enter="fade"><span>Solutions</span><i aria-hidden="true">/</i><span>Business first</span></p>
          <Lines immediate as="h1" id="sx-title" className="sx-hero__title" lines={[...solutionsHero.lines]} />
          <Reveal immediate="rise" as="p" className="sx-hero__lead" delay={0.25}>{solutionsHero.lead}</Reveal>
          <Reveal immediate="rise" className="sx-hero__cta" delay={0.4}>
            <HomeButton href="/contact">Talk to an Expert</HomeButton>
            <ArrowLink href="#index">Explore the solutions</ArrowLink>
          </Reveal>
        </div>

        <figure className="sx-arch" aria-label="From your business to outcomes: Claidsphere and Microsoft technology in between">
          <figcaption className="hx-label sx-arch__cap"><span>Fig. 01</span><span>Business → outcomes</span></figcaption>
          <ol className="sx-arch__list">
            {layers.map((l, i) => (
              <li key={l.id} className="sx-arch__row" data-id={l.id} style={{ "--i": i } as CSSProperties}>
                <span className="sx-arch__node" aria-hidden="true" />
                <span className="hx-label sx-arch__n">0{i + 1}</span>
                <span className="sx-arch__name">{l.name}</span>
                <span className="hx-label sx-arch__note">{l.note}</span>
              </li>
            ))}
          </ol>
          <i className="sx-arch__rail" aria-hidden="true" />
        </figure>
      </div>
    </Band>
  );
}
