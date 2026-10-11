import { Lines } from "@/components/typography/Lines";
import { Reveal } from "@/components/motion/Reveal";
import { Band } from "../primitives/Band";
import { SectionLabel } from "../primitives/SectionLabel";
import { Geo } from "../primitives/Geo";
import { ArrowLink } from "../primitives/ArrowLink";
import { PillarIndex, type PillarRow } from "./PillarIndex";
import { pillars } from "@/data/services";

/** Full service name and destination per pillar; the lede and lists come from the data file. */
const meta = {
  cloud: { heading: "Cloud", href: "/services/cloud-solutions" },
  ai: { heading: "Artificial Intelligence", href: "/services/artificial-intelligence" },
  software: { heading: "Software Development", href: "/services/software-development" },
} as const;

const rows: PillarRow[] = pillars.map((p) => ({ id: p.id, index: p.index, lede: p.lede, items: p.items, ...meta[p.id] }));

export function Pillars() {
  return (
    <Band tone="flow" labelledBy="pillars-title" className="hx-pillars hx-pil" backdrop={<Geo cx={1260} cy={40} r={470} from={105} to={150} />}>
      <div className="hx-pil__grid">
        <header className="hx-pil__head">
          <SectionLabel index="02" meta={`0${pillars.length} disciplines`}>What Claidsphere does</SectionLabel>
          <Lines id="pillars-title" className="hx-h2 hx-pil__title" lines={["Three disciplines,", "one ecosystem."]} />
          <Reveal as="p" className="hx-pil__lead" delay={0.25}>Cloud infrastructure, intelligent tools and custom software, delivered together.</Reveal>
          <Reveal delay={0.35}><ArrowLink href="/services">Explore all services</ArrowLink></Reveal>
        </header>
        <PillarIndex rows={rows} />
      </div>
    </Band>
  );
}
