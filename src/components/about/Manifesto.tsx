import { Lines } from "@/components/typography/Lines";
import { Reveal } from "@/components/motion/Reveal";
import { Band } from "@/components/home/primitives/Band";
import { SectionLabel } from "@/components/home/primitives/SectionLabel";
import { EditorialImage } from "@/components/home/primitives/EditorialImage";
import { manifesto } from "@/data/about";

/** 01: what we believe. The company's own positioning, set as the page's philosophical centre. */
export function Manifesto() {
  return (
    <Band tone="flow" labelledBy="ab-manifesto" className="ab ab-manifesto">
      <SectionLabel index="01" meta="Belief">What we believe</SectionLabel>
      <Lines id="ab-manifesto" className="ab-manifesto__title" lines={[...manifesto.lines]} />
      <div className="ab-manifesto__body">
        <EditorialImage
          className="ab-manifesto__img"
          src="/images/why-hall.webp"
          alt="A dark corridor of server racks receding toward a single point of light"
          width={2200}
          height={1500}
          sizes="(min-width: 1024px) 55vw, 100vw"
          position="50% 45%"
        />
        <div className="ab-manifesto__text">
          <Reveal as="p" className="ab-lead">{manifesto.values}</Reveal>
          <Reveal as="ul" className="ab-tags" delay={0.15}>
            {manifesto.principles.map((p) => <li key={p} className="hx-label">{p}</li>)}
          </Reveal>
        </div>
      </div>
    </Band>
  );
}
