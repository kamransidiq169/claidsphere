import { Lines } from "@/components/typography/Lines";
import { Reveal } from "@/components/motion/Reveal";
import { Band } from "@/components/home/primitives/Band";
import { SectionLabel } from "@/components/home/primitives/SectionLabel";
import { thinking } from "@/data/about";

/** 03: how we think. One dominant statement; the six stages are a single sequence, ruled rather than boxed. */
export function Thinking() {
  return (
    <Band tone="flow" labelledBy="ab-thinking" className="ab ab-thinking">
      <SectionLabel index="03" meta="Method">How we think</SectionLabel>
      <div className="ab-thinking__head">
        <Lines id="ab-thinking" className="ab-statement" lines={[...thinking.lines]} />
        <Reveal as="p" className="ab-lead" delay={0.2}>{thinking.lead}</Reveal>
      </div>
      <ol className="ab-stages">
        {thinking.stages.map((s, i) => (
          <Reveal as="li" key={s.title} className="ab-stage" delay={(i % 3) * 0.1}>
            <span className="hx-label ab-stage__n">0{i + 1}</span>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
          </Reveal>
        ))}
      </ol>
    </Band>
  );
}
