import { Section } from "@/components/layout/Section";
import { Lines } from "@/components/typography/Lines";
import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { Button } from "@/components/buttons/Button";
import { azurePartner as a } from "@/data/services";

export function AzurePartner() {
  return (
    <Section theme="light" labelledBy="azure-title">
      <Eyebrow index="04">{a.eyebrow}</Eyebrow>
      <div className="split">
        <div className="split__a"><Lines id="azure-title" lines={["Trusted Microsoft", "& Azure partner."]} /></div>
        <div className="split__b stack">
          {a.body.map((b) => <Reveal key={b} as="p" className="lead">{b}</Reveal>)}
          <Reveal>
            <ul className="numbered">
              {a.points.map((p, i) => <li key={p}><span className="label">0{i + 1}</span><span style={{ fontFamily: "var(--font-sans)", fontSize: "1.125rem", letterSpacing: 0 }}>{p}</span></li>)}
            </ul>
          </Reveal>
        </div>
      </div>

      <div className="transform">
        <div className="transform__col transform__col--without">
          <Reveal as="p" className="label">Without the right partner</Reveal>
          <ol>{a.withoutPartner.map((x, i) => <Reveal as="li" key={x} delay={i * 0.06}>{x}</Reveal>)}</ol>
        </div>
        <div className="transform__col transform__col--with">
          <Reveal as="p" className="label" delay={0.1}>With Claidsphere</Reveal>
          <ol>{a.withClaidsphere.map((x, i) => <Reveal as="li" key={x} delay={0.12 + i * 0.06}>{x}</Reveal>)}</ol>
        </div>
      </div>
      <Reveal className="stack" delay={0.1}>
        <div style={{ marginTop: "3rem", display: "flex", flexWrap: "wrap", gap: "1.5rem", alignItems: "center" }}>
          <Button href="/contact">Speak to a Microsoft Expert</Button>
        </div>
        <p className="fine">{a.trademark}</p>
      </Reveal>
    </Section>
  );
}
