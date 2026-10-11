import Link from "next/link";
import { Cloud, BrainCircuit, CodeXml, Globe, Workflow } from "lucide-react";
import { Lines } from "@/components/typography/Lines";
import { Reveal } from "@/components/motion/Reveal";
import { EditorialImage } from "../primitives/EditorialImage";
import { Band } from "../primitives/Band";
import { company, hero, heroIndex } from "@/data/company";
import "./hero.css";

/** Two display lines from the tagline as published; falls back to one line if the copy changes shape. */
const titleLines = company.tagline.match(/^(.+?)\s+([-–—]\s+)?(Intelligence.*)$/)?.filter((_, i) => i === 1 || i === 3) ?? [company.tagline];
const strap = hero.headline.split(/(?<=\.)\s+/);
const icons = [Cloud, BrainCircuit, CodeXml];
const hrefs = ["/services/cloud-solutions", "/services/artificial-intelligence", "/services/software-development"];

/** Orbit nodes: positions are percentages of the orbit plane (viewBox 1364 × 932), so they stay on the ring at every size. */
const nodes = [
  { Icon: Globe, x: 19.4, y: 9.4 },
  { Icon: Workflow, x: 80.4, y: 9.5 },
  { Icon: Cloud, x: 4, y: 35.4 },
  { Icon: BrainCircuit, x: 95.7, y: 35.4 },
];

export function Hero() {
  return (
    <Band tone="royal" id="hero" labelledBy="hero-title" className="hx-hero" bare>
      <div className="hx-hero__orbit" aria-hidden="true">
        <svg viewBox="0 0 1364 932" fill="none" preserveAspectRatio="xMidYMin meet">
          <circle className="hx-hero__ring" cx="682" cy="663" r="711" pathLength="1" />
          <circle className="hx-hero__ring hx-hero__ring--inner" cx="682" cy="663" r="560" pathLength="1" />
          <path className="hx-hero__arc" d="M 55 330 A 711 711 0 0 1 265 88" pathLength="1" />
          <path className="hx-hero__arc hx-hero__arc--r" d="M 1097 89 A 711 711 0 0 1 1309 330" pathLength="1" />
        </svg>
        {nodes.map(({ Icon, x, y }, i) => (
          <span key={i} className="hx-hero__node" style={{ left: `${x}%`, top: `${y}%`, "--i": i } as React.CSSProperties}>
            <Icon size={14} strokeWidth={1.5} />
          </span>
        ))}
      </div>

      <div className="hx-wrap hx-hero__inner">
        <div className="hx-hero__head">
          <Reveal immediate as="p" className="hx-hero__eyebrow" delay={0.05}>Microsoft <i>/</i> Azure <i>/</i> AI <i>/</i> Cloud</Reveal>
          <Lines immediate as="h1" id="hero-title" className="hx-hero__title" lines={titleLines} delay={0.15} />
          <Reveal immediate="rise" as="p" className="hx-hero__lede" delay={0.45}>
            <span className="hx-hero__strap">{strap.map((s) => <span key={s}>{s}</span>)}</span>
            {hero.support}
          </Reveal>
          <Reveal immediate className="hx-hero__ctas" delay={0.6}>
            <Link href="/contact" className="hx-hero__cta hx-hero__cta--primary">Talk to an Expert</Link>
            <Link href="/solutions" className="hx-hero__cta hx-hero__cta--ghost">Explore Solutions</Link>
          </Reveal>
        </div>

        <div className="hx-hero__stage">
          <EditorialImage src="/images/hero.png" alt="Glowing blue server hardware inside a glass enclosure, lit by cyan light strips" width={1452} height={1083} sizes="(min-width: 1024px) 46vw, 100vw" preload reveal={false} className="hx-hero__img" position="64% 50%">
            <i className="hx-hero__tick hx-hero__tick--tl" aria-hidden="true" />
            <i className="hx-hero__tick hx-hero__tick--tr" aria-hidden="true" />
            <i className="hx-hero__tick hx-hero__tick--bl" aria-hidden="true" />
            <i className="hx-hero__tick hx-hero__tick--br" aria-hidden="true" />
            <figcaption className="hx-hero__cap"><span>Fig. 01</span><span>Infrastructure</span></figcaption>
          </EditorialImage>

          <ul className="hx-hero__index" role="list">
            {heroIndex.map((it, n) => {
              const Icon = icons[n];
              return (
                <li key={it.name} className={`hx-hero__call hx-hero__call--${n + 1}`} data-enter="rise" style={{ "--d": `${0.9 + n * 0.14}s` } as React.CSSProperties}>
                  <i className="hx-hero__conn" aria-hidden="true" />
                  <i className="hx-hero__dot" aria-hidden="true" />
                  <Link href={hrefs[n]}>
                    <span className="hx-hero__ic"><Icon size={20} strokeWidth={1.5} aria-hidden="true" /></span>
                    <span className="hx-hero__n">0{n + 1}</span>
                    <span className="hx-hero__name">{it.name}</span>
                    <span className="hx-hero__detail">{it.detail}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Band>
  );
}
