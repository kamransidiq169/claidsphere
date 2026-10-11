import type { CSSProperties } from "react";
import Image from "next/image";
import { Lines } from "@/components/typography/Lines";
import { Reveal } from "@/components/motion/Reveal";
import { Band } from "../primitives/Band";
import { SectionLabel } from "../primitives/SectionLabel";
import { ArrowLink } from "../primitives/ArrowLink";
import { company, intro } from "@/data/company";
import "./intro.css";

/**
 * Scene three: "the axis".
 * One vertical axis runs through the whole section, from the TrustStrip handoff to the Pillars handoff.
 * It passes through the vanishing point of the corridor image. As the section rises into view the image
 * opens outward from that axis (a slit becoming a field), the statement's lines part around it, and a node
 * travels down it. The principles then step down along the same axis. Copy comes from data/company.
 * Scroll progress is written to --ip (0..1) by HomeMotion; without it (reduced motion / no JS) --ip is 1.
 */
export function Intro() {
  return (
    <Band tone="royal" labelledBy="intro-title" className="hx-intro" bare>
      <div className="hx-intro__axis" aria-hidden="true"><i /></div>

      <div className="hx-wrap">
        <div className="hx-intro__meta" data-reveal="sys">
          <SectionLabel index="01">Claidsphere</SectionLabel>
          <p className="hx-label hx-intro__since">Since {company.since}</p>
        </div>
      </div>

      <div className="hx-intro__stage">
        <figure className="hx-intro__fig" data-reveal="fade">
          <Image className="hx-intro__img" src="/images/intro-hall.webp" alt="A dark data-centre corridor of server racks receding to a single point of light" width={2400} height={1200} sizes="(min-width: 1024px) 140vw, 190vw" quality={75} loading="lazy" />
        </figure>

        <div className="hx-wrap hx-intro__over">
          <Lines id="intro-title" className="hx-intro__title" lines={["Empowering Your", "Business with", "Claidsphere"]} delay={0.1} />
          <Reveal as="p" className="hx-intro__lead" delay={0.35}>{intro.body}</Reveal>
        </div>
      </div>

      <div className="hx-wrap">
        <ol className="hx-intro__beliefs" aria-label="Principles">
          {intro.principles.map((p, i) => (
            <li key={p} data-reveal="fade" style={{ "--i": i, "--d": `${i * 0.12}s` } as CSSProperties}>
              <span className="hx-intro__bn">0{i + 1}</span>
              <span className="hx-intro__bt">{p}</span>
            </li>
          ))}
        </ol>
        <Reveal className="hx-intro__cta" delay={0.2}><ArrowLink href="/about">Learn more about us</ArrowLink></Reveal>
      </div>
    </Band>
  );
}
