import { Lines } from "@/components/typography/Lines";
import { Reveal } from "@/components/motion/Reveal";
import { Band } from "@/components/home/primitives/Band";
import { SectionLabel } from "@/components/home/primitives/SectionLabel";
import { ArrowLink } from "@/components/home/primitives/ArrowLink";
import { team } from "@/data/team";
import { people } from "@/data/about";

/** 06: technology → people. No portraits exist, so the roster is set as typography: founders first and largest. */
export function People() {
  return (
    <Band tone="flow" labelledBy="ab-people" className="ab ab-people">
      <SectionLabel index="06" meta="The team">People</SectionLabel>
      <div className="ab-people__grid">
        <div className="ab-people__copy">
          <Lines id="ab-people" className="hx-h2 ab-h2" lines={["The people", "behind it."]} />
          <Reveal as="p" className="ab-lead" delay={0.2}><strong>{people.title}.</strong> {people.body}</Reveal>
          <Reveal delay={0.3}><ArrowLink href="/team">Meet the team</ArrowLink></Reveal>
        </div>
        <ul className="ab-roster">
          {team.map((m, i) => (
            <Reveal as="li" key={m.name} className={i < 2 ? "ab-roster__m ab-roster__m--lead" : "ab-roster__m"}>
              <span className="ab-roster__name">{m.name}</span>
              <span className="hx-label">{m.role}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </Band>
  );
}
