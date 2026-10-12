import type { CSSProperties } from "react";
import { Lines } from "@/components/typography/Lines";
import { Band } from "@/components/home/primitives/Band";
import { SectionLabel } from "@/components/home/primitives/SectionLabel";
import { outcomes } from "@/data/solutions";

/** 05: why the technology matters: one rail, four stations. */
export function Outcomes() {
  return (
    <Band tone="flow" labelledBy="sx-out-title" className="sx-out">
      <header className="sx-head">
        <SectionLabel index="05" meta="Why it matters">Business outcomes</SectionLabel>
        <Lines id="sx-out-title" className="hx-h2 sx-h2" lines={["Why the technology", "matters."]} />
      </header>
      <ol className="sx-rail" data-reveal="sys">
        {outcomes.map((o, i) => (
          <li key={o.label} style={{ "--i": i } as CSSProperties}>
            <span className="sx-rail__node" aria-hidden="true" />
            <p className="hx-label"><span>0{i + 1}</span>{o.label}</p>
            <p className="sx-rail__t">{o.text}</p>
          </li>
        ))}
      </ol>
    </Band>
  );
}
