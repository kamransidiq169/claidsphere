import { Band } from "@/components/home/primitives/Band";
import { Geo } from "@/components/home/primitives/Geo";
import { SectionLabel } from "@/components/home/primitives/SectionLabel";
import { Lines } from "@/components/typography/Lines";
import { Reveal } from "@/components/motion/Reveal";
import { get, groups, numberOf, pad } from "./model";

/** The system view: four disciplines as ruled rows, each listing the services that belong to it. */
export function Capabilities() {
  return (
    <Band tone="flow" id="capabilities" labelledBy="sv-cap-title" className="sv-cap" backdrop={<Geo cx={140} cy={780} r={520} from={-40} to={10} align="left-bottom" />}>
      <header className="sv-head">
        <SectionLabel index="02" meta={`0${groups.length} disciplines`}>Capabilities</SectionLabel>
        <div className="sv-head__row">
          <Lines id="sv-cap-title" className="hx-h2 sv-h2" lines={["One service system,", "four disciplines."]} />
          <Reveal as="p" className="hx-lead sv-head__lead" delay={0.2}>Cloud is the foundation, AI and software build on it, and advisory work keeps the whole system pointed at the business.</Reveal>
        </div>
      </header>
      <ol className="sv-map" data-reveal="sys">
        {groups.map((g, i) => (
          <li key={g.id} className="sv-map__row" style={{ "--i": i } as React.CSSProperties}>
            <p className="hx-label sv-map__k"><span>{g.letter}</span><span>{pad(g.slugs.length)} {g.slugs.length === 1 ? "service" : "services"}</span></p>
            <h3 className="sv-map__name">{g.name}</h3>
            <p className="sv-map__lede">{g.lede}</p>
            <ul className="sv-map__list">
              {g.slugs.map((slug) => (
                <li key={slug}>
                  <a href={`#${slug}`}><span className="hx-label">{numberOf(slug)}</span><span>{get(slug).title}</span></a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Band>
  );
}
