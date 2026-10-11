import { Lines } from "@/components/typography/Lines";
import { Reveal } from "@/components/motion/Reveal";
import { Band } from "../primitives/Band";
import { Geo } from "../primitives/Geo";
import { SectionLabel } from "../primitives/SectionLabel";
import { EcosystemMap } from "./EcosystemMap";
import { microsoftIntro, microsoftProducts } from "@/data/services";
import "./eco.css";

/** The lead is the first sentence of the intro; the second sentence becomes the outcomes tier of the map. */
const lead = microsoftIntro.body.match(/^[^.]+\./)?.[0] ?? microsoftIntro.body;

export function MicrosoftEcosystem() {
  return (
    <Band tone="flow" id="microsoft" labelledBy="ms-title" className="hx-eco" backdrop={<Geo cx={-300} cy={1000} r={520} from={-34} to={-6} align="left-bottom" />}>
      <div className="hx-eco__grid">
        <header className="hx-eco__head">
          <SectionLabel index="03" meta={`0${microsoftProducts.length} capabilities`}>The Microsoft ecosystem</SectionLabel>
          <Lines id="ms-title" className="hx-h2 hx-eco__title" lines={["Unlock the power", "of Microsoft with", "Claidsphere."]} />
          <Reveal as="p" className="hx-eco__lead" delay={0.25}>{lead}</Reveal>
        </header>
        <EcosystemMap products={microsoftProducts} />
        <Reveal as="p" className="hx-fine hx-eco__fine">{microsoftIntro.trademark}</Reveal>
      </div>
    </Band>
  );
}
