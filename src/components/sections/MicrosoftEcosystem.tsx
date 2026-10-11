import { Section } from "@/components/layout/Section";
import { Lines } from "@/components/typography/Lines";
import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { microsoftIntro, microsoftProducts } from "@/data/services";

/** Scale expresses hierarchy: Azure is the platform, the rest build on it. */
const tier = ["lead", "major", "minor", "minor", "minor"] as const;

export function MicrosoftEcosystem() {
  return (
    <Section theme="graphite" id="microsoft" labelledBy="ms-title">
      <Eyebrow index="03">The Microsoft ecosystem</Eyebrow>
      <div className="split">
        <div className="split__a"><Lines id="ms-title" lines={["Unlock the power of", "Microsoft with", "Claidsphere."]} /></div>
        <Reveal as="p" className="split__b lead dim">{microsoftIntro.body}</Reveal>
      </div>
      <div className="eco">
        {microsoftProducts.map((p, i) => (
          <Reveal key={p.name} as="article" className={`eco__item eco__item--${tier[i]}`} delay={(i % 3) * 0.06}>
            <span className="label">0{i + 1}</span>
            <h3>{p.name}</h3>
            <p>{p.description}</p>
          </Reveal>
        ))}
      </div>
      <Reveal as="p" className="fine">{microsoftIntro.trademark}</Reveal>
    </Section>
  );
}
