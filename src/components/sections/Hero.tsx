import { Button } from "@/components/buttons/Button";
import { Magnetic } from "@/components/motion/Magnetic";
import { Lines } from "@/components/typography/Lines";
import { Reveal } from "@/components/motion/Reveal";
import { HeroPointerLight } from "./HeroPointerLight";
import { hero, heroIndex } from "@/data/company";

export function Hero() {
  return (
    <section id="hero" className="hero" data-theme="dark" aria-labelledby="hero-title">
      <HeroPointerLight targetId="hero" />
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__light" aria-hidden="true" />
      <div className="container">
        <Reveal immediate as="p" className="label dim" delay={0.05}>{hero.eyebrow}<span className="hide-sm"> &nbsp;/&nbsp; Cloud · AI · Software</span></Reveal>
        <div style={{ marginTop: "1.75rem" }}>
          <Lines immediate as="h1" id="hero-title" className="hero__title" lines={["Data into intelligence.", "AI into innovation.", "Cloud into possibility."]} delay={0.1} />
        </div>
        <div className="hero__body">
          <div>
            <Reveal immediate="rise" as="p" className="hero__lede" delay={0.2}>{hero.support}</Reveal>
            <Reveal immediate className="hero__ctas" delay={0.3}>
              <Magnetic><Button href="/contact">Talk to an Expert</Button></Magnetic>
              <Button href="/solutions" variant="text">Explore Solutions</Button>
            </Reveal>
          </div>
          <Reveal immediate delay={0.4}>
            <ul className="hero__index" aria-label="Core capabilities">
              {heroIndex.map((i) => <li key={i.name}><span>{i.name}</span><span className="label">{i.detail}</span></li>)}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
