import { Lines } from "@/components/typography/Lines";
import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/typography/Eyebrow";

export function PageHero({ eyebrow, lines, lead }: { eyebrow: string; lines: string[]; lead?: string }) {
  return (
    <section className="page-hero" data-theme="dark" aria-labelledby="page-title">
      <div className="container">
        <Eyebrow>{eyebrow}</Eyebrow>
        <Lines immediate as="h1" id="page-title" lines={lines} />
        {lead && <Reveal immediate="rise" as="p" className="lead" delay={0.2}>{lead}</Reveal>}
      </div>
    </section>
  );
}
