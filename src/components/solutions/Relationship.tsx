import { Lines } from "@/components/typography/Lines";
import { Reveal } from "@/components/motion/Reveal";
import { Band } from "@/components/home/primitives/Band";
import { SectionLabel } from "@/components/home/primitives/SectionLabel";
import { relationship as r } from "@/data/solutions";

const cols = [
  { k: "Microsoft technology", t: "The platform", items: r.technology },
  { k: "Claidsphere expertise", t: "The practice", items: r.expertise },
  { k: "Business solution", t: "The result", items: r.solution },
] as const;

/** 04: Microsoft stays typographic: one name in a column, never a logo. */
export function Relationship() {
  return (
    <Band tone="flow" labelledBy="sx-rel-title" className="sx-rel">
      <header className="sx-head">
        <SectionLabel index="04" meta="Technology foundation">Microsoft &amp; Azure</SectionLabel>
        <Lines id="sx-rel-title" className="hx-h2 sx-h2" lines={["Microsoft technology,", "applied with expertise."]} />
        <Reveal as="p" className="sx-head__lead" delay={0.2}>{r.lead}</Reveal>
      </header>
      <ol className="sx-flow">
        {cols.map((c, i) => (
          <Reveal as="li" key={c.k} className="sx-flow__col" delay={i * 0.12}>
            <p className="hx-label sx-flow__k"><span>0{i + 1}</span><span>{c.k}</span></p>
            <ul>{c.items.map((x) => <li key={x}>{x}</li>)}</ul>
          </Reveal>
        ))}
      </ol>
      <p className="hx-fine">{r.trademark}</p>
    </Band>
  );
}
