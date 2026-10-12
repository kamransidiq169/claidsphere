import Link from "next/link";
import { Band } from "@/components/home/primitives/Band";
import { Geo } from "@/components/home/primitives/Geo";
import { SectionLabel } from "@/components/home/primitives/SectionLabel";
import { ArrowLink } from "@/components/home/primitives/ArrowLink";
import { Lines } from "@/components/typography/Lines";
import { Reveal } from "@/components/motion/Reveal";
import { azurePartner, microsoftProducts } from "@/data/services";
import { get } from "./model";

const product = (name: string) => microsoftProducts.find((p) => p.name === name)?.description ?? "";

/** Services from a delivery point of view: Microsoft foundation → engineering → business outcome. Every line restates existing site content. */
const stages = [
  {
    k: "Foundation",
    title: "Microsoft cloud foundation",
    body: product("Microsoft Azure"),
    items: ["Microsoft Azure", "Microsoft 365", "Microsoft SharePoint", "Cloud migration and support"],
    services: ["cloud-solutions"],
  },
  {
    k: "Engineering",
    title: "Intelligence and software",
    body: product("Microsoft Copilot"),
    items: ["Microsoft Copilot", "Power Platform", "Data Analytics", "Custom, tailored solutions"],
    services: ["artificial-intelligence", "data-analytics", "software-development"],
  },
  {
    k: "Outcome",
    title: "Business outcomes",
    body: "Lower licensing costs, improved productivity, and scalable cloud solutions.",
    items: azurePartner.points.slice(1),
    services: ["consulting"],
  },
] as const;

export function Technology() {
  return (
    <Band tone="flow" id="technology" labelledBy="sv-tech-title" className="sv-tech" backdrop={<Geo cx={1320} cy={640} r={480} from={150} to={196} align="right-bottom" />}>
      <header className="sv-head">
        <SectionLabel index="04" meta="Delivery view">Technology</SectionLabel>
        <div className="sv-head__row">
          <Lines id="sv-tech-title" className="hx-h2 sv-h2" lines={["From foundation", "to outcome."]} />
          <Reveal as="p" className="hx-lead sv-head__lead" delay={0.2}>Every service sits on the same Microsoft-focused foundation, so cloud, AI, data and software work as one delivered system.</Reveal>
        </div>
      </header>

      <ol className="sv-flow" data-reveal="sys">
        {stages.map((st, i) => (
          <li key={st.k} className="sv-flow__st" style={{ "--i": i } as React.CSSProperties}>
            <p className="hx-label sv-flow__k"><span>0{i + 1}</span><span>{st.k}</span></p>
            <h3 className="sv-flow__t">{st.title}</h3>
            <p className="sv-flow__b">{st.body}</p>
            <ul className="sv-flow__items">{st.items.map((x) => <li key={x}>{x}</li>)}</ul>
            <p className="hx-label sv-flow__svc">Delivered through</p>
            <ul className="sv-flow__links">
              {st.services.map((slug) => <li key={slug}><Link href={`/services/${slug}`}>{get(slug).title}</Link></li>)}
            </ul>
          </li>
        ))}
      </ol>

      <div className="sv-tech__foot">
        <Reveal><ArrowLink href="/solutions">Our Microsoft solutions</ArrowLink></Reveal>
        <p className="hx-fine">{azurePartner.trademark}</p>
      </div>
    </Band>
  );
}
