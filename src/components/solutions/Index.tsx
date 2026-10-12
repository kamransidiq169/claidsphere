import { Lines } from "@/components/typography/Lines";
import { Reveal } from "@/components/motion/Reveal";
import { Band } from "@/components/home/primitives/Band";
import { SectionLabel } from "@/components/home/primitives/SectionLabel";
import { ArrowLink } from "@/components/home/primitives/ArrowLink";
import { Selector } from "./Selector";
import { solutions } from "@/data/solutions";

/** 02: the solution ecosystem as one ruled index with a manual selector. */
export function SolutionIndex() {
  return (
    <Band tone="flow" id="index" labelledBy="sx-index-title" className="sx-index">
      <header className="sx-head">
        <SectionLabel index="02" meta={`0${solutions.length} solutions`}>Solution architecture</SectionLabel>
        <Lines id="sx-index-title" className="hx-h2 sx-h2" lines={["One ecosystem,", "organized around outcomes."]} />
        <Reveal as="p" className="sx-head__lead" delay={0.2}>Five Microsoft solutions, each answering a business need. Select one to see where it sits and what it covers.</Reveal>
      </header>
      <Reveal><Selector /></Reveal>
      <Reveal className="sx-aside" delay={0.1}>
        <p>Looking for what we build and deliver?</p>
        <ArrowLink href="/services">Explore our services</ArrowLink>
      </Reveal>
    </Band>
  );
}
