import { Lines } from "@/components/typography/Lines";
import { Reveal } from "@/components/motion/Reveal";
import { Band } from "@/components/home/primitives/Band";
import { SectionLabel } from "@/components/home/primitives/SectionLabel";
import { principles } from "@/data/about";

/** 04: reality → method. A numbered system carried by type and rules. */
export function Principles() {
  return (
    <Band tone="flow" labelledBy="ab-principles" className="ab ab-principles">
      <SectionLabel index="04" meta="What guides the work">Principles</SectionLabel>
      <Lines id="ab-principles" className="hx-h2 ab-h2" lines={["Four things we", "hold ourselves to."]} />
      <ol className="ab-pr">
        {principles.map((p, i) => (
          <Reveal as="li" key={p.title} className="ab-pr__row">
            <span className="hx-label ab-pr__n">0{i + 1}</span>
            <h3 className="ab-pr__t">{p.title}</h3>
            <p className="ab-pr__b">{p.body}</p>
          </Reveal>
        ))}
      </ol>
    </Band>
  );
}
