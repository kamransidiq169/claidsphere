import { Lines } from "@/components/typography/Lines";
import { Reveal } from "@/components/motion/Reveal";
import { Band } from "@/components/home/primitives/Band";
import { EditorialImage } from "@/components/home/primitives/EditorialImage";
import { aboutHero } from "@/data/about";
import "./about.css";

/** Who we are: the company behind the work. Copy left, one identity image right, company facts as quiet metadata. */
export function AboutHero() {
  return (
    <Band tone="royal" labelledBy="ab-title" className="ab ab-hero">
      <div className="ab-hero__grid">
        <div className="ab-hero__copy">
          <p className="hx-label ab-eyebrow" data-enter="fade"><span>{aboutHero.eyebrow}</span><i aria-hidden="true">/</i><span>Claidsphere Solutions</span></p>
          <Lines immediate as="h1" id="ab-title" className="ab-hero__title" lines={[...aboutHero.lines]} />
          <Reveal immediate="rise" as="p" className="ab-hero__lead" delay={0.25}>{aboutHero.lead}</Reveal>
        </div>
        <EditorialImage
          reveal={false}
          preload
          className="ab-hero__img"
          src="/images/cta-contour.webp"
          alt="Fine contour lines flowing across a deep-blue field, an abstract image of data taking shape"
          width={2400}
          height={1300}
          sizes="(min-width: 1024px) 38vw, 100vw"
          position="42% 50%"
        >
          <p className="hx-label hx-figcap"><span>Fig. 01</span><span>Claidsphere Solutions</span></p>
        </EditorialImage>
      </div>
      <Reveal immediate="rise" delay={0.45}>
        <dl className="ab-facts">
          {aboutHero.facts.map((f) => (
            <div key={f.k}><dt className="hx-label">{f.k}</dt><dd>{f.v}</dd></div>
          ))}
        </dl>
      </Reveal>
    </Band>
  );
}
