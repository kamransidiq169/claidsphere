import type { ReactNode } from "react";
import { Lines } from "@/components/typography/Lines";
import { Reveal } from "@/components/motion/Reveal";
import { Band } from "@/components/home/primitives/Band";
import { SectionLabel } from "@/components/home/primitives/SectionLabel";
import { EditorialImage } from "@/components/home/primitives/EditorialImage";
import { ArrowLink } from "@/components/home/primitives/ArrowLink";
import { solutions, type Solution } from "@/data/solutions";

const by = (id: Solution["id"]) => solutions.find((s) => s.id === id)!;

/** Need → technology → outcome, set as typography on a shared ruled grid rather than as three boxes. */
function Triad({ s, tech }: { s: Solution; tech: string }) {
  return (
    <dl className="sx-triad">
      <div><dt className="hx-label">Business need</dt><dd>{s.need}</dd></div>
      <div><dt className="hx-label">Technology</dt><dd className="sx-triad__tech">{tech}</dd></div>
      <div><dt className="hx-label">Outcome</dt><dd>{s.outcome}</dd></div>
    </dl>
  );
}

function Plate({ src, alt, w, h, pos }: { src: string; alt: string; w: number; h: number; pos?: string }) {
  return <div className="sx-plate hx-hover"><EditorialImage src={src} alt={alt} width={w} height={h} sizes="(min-width: 1024px) 50vw, 100vw" position={pos} /></div>;
}

function Head({ s, children }: { s: Solution; children: ReactNode }) {
  return (
    <>
      <p className="hx-label sx-sig__n" data-reveal="fade"><span>{s.index}</span><i aria-hidden="true">/</i><span>{s.role}</span></p>
      <h3 className="sx-sig__h" data-reveal="fade">{children}</h3>
    </>
  );
}

/** 03: four compositions, one system. Large (image) → compact (type only) → large (image, reversed) → offset (two columns, staggered). */
export function Signature() {
  const azure = by("azure"), m365 = by("m365"), copilot = by("copilot"), power = by("power"), sp = by("sharepoint");
  return (
    <Band tone="flow" labelledBy="sx-sig-title" className="sx-sig">
      <header className="sx-head">
        <SectionLabel index="03" meta="Where we create value">Signature solutions</SectionLabel>
        <Lines id="sx-sig-title" className="hx-h2 sx-h2" lines={["From business need", "to measurable outcome."]} />
      </header>

      <article className="sx-sig__a sx-sig__a--large" aria-labelledby="sx-azure">
        <div className="sx-sig__text">
          <Head s={azure}><span id="sx-azure">Cloud that stays under control.</span></Head>
          <Reveal as="p" className="sx-sig__p">{azure.description}</Reveal>
          <Reveal><Triad s={azure} tech="Microsoft Azure, managed by Claidsphere" /></Reveal>
          <Reveal><ArrowLink href={azure.href}>{azure.cta}</ArrowLink></Reveal>
        </div>
        <Plate src="/images/why-hall.webp" alt="A lit corridor between rows of server racks, in deep blue" w={2200} h={1500} pos="50% 45%" />
      </article>

      <article className="sx-sig__a sx-sig__a--compact" aria-labelledby="sx-m365">
        <div className="sx-sig__lhs">
          <Head s={m365}><span id="sx-m365">Licensing you can reason about.</span></Head>
          <Reveal as="p" className="sx-sig__p">{m365.description}</Reveal>
        </div>
        <div className="sx-sig__rhs">
          <Reveal><Triad s={m365} tech="Microsoft 365, with license optimization" /></Reveal>
          <Reveal><ArrowLink href={m365.href}>{m365.cta}</ArrowLink></Reveal>
        </div>
      </article>

      <article className="sx-sig__a sx-sig__a--large sx-sig__a--flip" aria-labelledby="sx-copilot">
        <div className="sx-sig__text">
          <Head s={copilot}><span id="sx-copilot">Intelligence in the flow of work.</span></Head>
          <Reveal as="p" className="sx-sig__p">{copilot.description}</Reveal>
          <Reveal><Triad s={copilot} tech="Microsoft Copilot, with data analytics" /></Reveal>
          <Reveal><ArrowLink href={copilot.href}>{copilot.cta}</ArrowLink></Reveal>
        </div>
        <Plate src="/images/pillar-ai.webp" alt="Fine flowing lines converging across a dark blue field" w={1800} h={1350} pos="40% 50%" />
      </article>

      <div className="sx-sig__a sx-sig__a--offset">
        <article aria-labelledby="sx-power" className="sx-off sx-off--a">
          <Head s={power}><span id="sx-power">Workflows, built to fit.</span></Head>
          <Reveal as="p" className="sx-sig__p">{power.description}</Reveal>
          <Reveal><Triad s={power} tech="Power Platform" /></Reveal>
        </article>
        <article aria-labelledby="sx-sp" className="sx-off sx-off--b">
          <Head s={sp}><span id="sx-sp">Content, in one secure place.</span></Head>
          <Reveal as="p" className="sx-sig__p">{sp.description}</Reveal>
          <Reveal><Triad s={sp} tech="Microsoft SharePoint" /></Reveal>
        </article>
      </div>
    </Band>
  );
}
