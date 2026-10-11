import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/layout/Section";
import { Lines } from "@/components/typography/Lines";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/buttons/Button";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/lib/seo/JsonLd";
import { breadcrumb } from "@/lib/seo/schema";
import { services, microsoftProducts } from "@/data/services";
import { company } from "@/data/company";
import { pageMetadata } from "@/lib/seo/metadata";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return {};
  return pageMetadata({ title: s.title, description: `${s.title} from Claidsphere: ${s.offerings.join(", ").toLowerCase()}. ${s.summary}`.slice(0, 158), path: `/services/${s.slug}` });
}

/** Microsoft products that the source site ties to a service. */
const msFor: Record<string, string[]> = {
  "cloud-solutions": ["Microsoft Azure", "Microsoft 365", "Microsoft SharePoint"],
  "artificial-intelligence": ["Microsoft Copilot", "Power Platform"],
};

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const idx = services.findIndex((x) => x.slug === slug);
  if (idx < 0) notFound();
  const s = services[idx];
  const ms = microsoftProducts.filter((p) => msFor[s.slug]?.includes(p.name));
  const same = services.filter((x) => x.slug !== s.slug && s.pillar && x.pillar === s.pillar);
  const related = (same.length >= 3 ? same : [...same, ...services.filter((x) => x.slug !== s.slug && !same.includes(x))]).slice(0, 3);

  return (
    <SiteShell>
      <JsonLd data={breadcrumb([{ name: "Services", path: "/services" }, { name: s.title, path: `/services/${s.slug}` }])} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Service", name: s.title, description: s.summary, provider: { "@type": "Organization", name: company.short, url: company.siteUrl } }} />
      <PageHero eyebrow={`Service ${String(idx + 1).padStart(2, "0")} / ${String(services.length).padStart(2, "0")}`} lines={s.title.split(" & ").length > 1 ? [s.title.split(" & ")[0] + " &", s.title.split(" & ")[1]] : [s.title]} lead={s.summary} />
      <Section theme="light" labelledBy="included-h">
        <Eyebrow index="01">What&apos;s included</Eyebrow>
        <h2 id="included-h" className="sr-only">What&apos;s included in {s.title}</h2>
        <ol className="included">
          {s.offerings.map((o, i) => <Reveal as="li" key={o} delay={i * 0.06}><span className="label">0{i + 1}</span><span>{o}</span></Reveal>)}
        </ol>
        <Reveal><div style={{ marginTop: "2.5rem", display: "flex", gap: "1.5rem", flexWrap: "wrap", alignItems: "center" }}>
          <Button href="/contact">Talk to an Expert</Button>
          <Button href="/services" variant="text">All services</Button>
        </div></Reveal>
      </Section>
      {ms.length > 0 && (
        <Section theme="graphite" labelledBy="ms-h">
          <Eyebrow index="02">Built on Microsoft</Eyebrow>
          <Lines id="ms-h" lines={["Microsoft technology,", "applied."]} />
          <div className="eco">
            {ms.map((p, i) => (
              <Reveal as="article" key={p.name} className={`eco__item ${i === 0 ? "eco__item--major" : "eco__item--minor"}`} delay={i * 0.06}>
                <h3>{p.name}</h3><p>{p.description}</p>
              </Reveal>
            ))}
          </div>
          <Reveal><p style={{ marginTop: "2rem" }}><Link className="btn btn--text" href="/solutions"><span className="btn__label">Our Microsoft solutions</span></Link></p></Reveal>
        </Section>
      )}
      <Section theme="dark" labelledBy="rel-h">
        <Eyebrow index={ms.length ? "03" : "02"}>Related</Eyebrow>
        <h2 id="rel-h" className="sr-only">Related services</h2>
        <ul className="related">
          {related.map((r, i) => (
            <li key={r.slug}><Link href={`/services/${r.slug}`}><span className="label">0{i + 1}</span><span>{r.title}</span><span aria-hidden="true">→</span></Link></li>
          ))}
        </ul>
      </Section>
      <CtaBand />
    </SiteShell>
  );
}
