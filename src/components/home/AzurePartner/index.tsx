import { Lines } from "@/components/typography/Lines";
import { Reveal } from "@/components/motion/Reveal";
import { Band } from "../primitives/Band";
import { Geo } from "../primitives/Geo";
import { SectionLabel } from "../primitives/SectionLabel";
import { ArchitectureStage } from "./ArchitectureStage";
import { azurePartner as a } from "@/data/services";

/** Cloud credibility as an editorial statement: the claim on the left, the architecture Claidsphere manages as proof on the right. */
export function AzurePartner() {
  const lead = (
    <div className="hx-azure__lead">
      <SectionLabel index="04">{a.eyebrow}</SectionLabel>
      <Lines id="azure-title" className="hx-h2 hx-h2--md" lines={["Trusted Microsoft", "& Azure Partner"]} />
      <Reveal as="p" className="hx-lead" delay={0.1}>{a.body[0]}</Reveal>
    </div>
  );
  return (
    <Band tone="flow" labelledBy="azure-title" className="hx-azure" backdrop={<Geo cx={1500} cy={250} r={640} from={180} to={203} />}>
      <ArchitectureStage points={a.points} lead={lead} />

      <div className="hx-compare" role="group" aria-label="With and without the right partner">
        <Reveal as="h3" className="hx-label hx-compare__title">The difference a partner makes</Reveal>
        <div className="hx-compare__col hx-compare__col--with">
          <Reveal as="h4" className="hx-label hx-compare__h">With Claidsphere</Reveal>
          <ol>{a.withClaidsphere.slice(0, 4).map((x, i) => <Reveal as="li" key={x} delay={i * 0.05}><span className="hx-label">0{i + 1}</span><span>{x}</span></Reveal>)}</ol>
        </div>
        <div className="hx-compare__col hx-compare__col--without">
          <Reveal as="h4" className="hx-label hx-compare__h" delay={0.1}>Without the right partner</Reveal>
          <ol>{a.withoutPartner.slice(0, 4).map((x, i) => <Reveal as="li" key={x} delay={0.1 + i * 0.05}><span className="hx-label">0{i + 1}</span><span>{x}</span></Reveal>)}</ol>
        </div>
      </div>
      <p className="hx-fine">{a.trademark}</p>
    </Band>
  );
}
