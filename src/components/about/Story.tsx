import type { CSSProperties } from "react";
import { Lines } from "@/components/typography/Lines";
import { Reveal } from "@/components/motion/Reveal";
import { Band } from "@/components/home/primitives/Band";
import { SectionLabel } from "@/components/home/primitives/SectionLabel";
import { story } from "@/data/about";

/** 02: belief → reality. Three moments on a single vertical rule, not three cards. */
export function Story() {
  return (
    <Band tone="flow" labelledBy="ab-story" className="ab ab-story">
      <SectionLabel index="02" meta="Since 2025">Our story</SectionLabel>
      <Lines id="ab-story" className="hx-h2 ab-h2" lines={["Where we began,", "and where we’re headed."]} />
      <ol className="ab-story__list">
        {story.map((s, i) => (
          <Reveal as="li" key={s.k} className="ab-story__item" delay={0.05} >
            <p className="hx-label ab-story__k" style={{ "--i": i } as CSSProperties}><span>0{i + 1}</span><span>{s.k}</span></p>
            <div className="ab-story__txt">
              <h3>{s.head}</h3>
              <p>{s.body}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </Band>
  );
}
