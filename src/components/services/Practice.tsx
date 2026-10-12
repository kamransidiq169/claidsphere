import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Band } from "@/components/home/primitives/Band";
import { Geo } from "@/components/home/primitives/Geo";
import { SectionLabel } from "@/components/home/primitives/SectionLabel";
import { Lines } from "@/components/typography/Lines";
import { Reveal } from "@/components/motion/Reveal";
import { FeatureLead, FeatureSplit, FeatureWide } from "./Feature";
import { Figure } from "./Figure";
import { Switcher } from "./Switcher";
import { services } from "@/data/services";
import { get, groups, numberOf, offeringCount, pad } from "./model";

function Chapter({ letter, name, count, children }: { letter: string; name: string; count: number; children?: React.ReactNode }) {
  return (
    <div className="sv-chapter" data-reveal="sys">
      <span className="hx-label sv-chapter__k"><span>{letter}</span><span className="sv-chapter__rule" aria-hidden="true" /><span>{name}</span></span>
      <span className="hx-label sv-chapter__c">{pad(count)} {count === 1 ? "service" : "services"}</span>
      {children}
    </div>
  );
}

const [cloud, ai, software, advisory] = groups;
const switcherSlugs = ["data-analytics", "web-design-development", "mobile-app-development", "quality-assurance", "maintenance-support"];

export function Practice() {
  return (
    <Band tone="flow" labelledBy="sv-practice-title" className="sv-practice" backdrop={<Geo cx={1250} cy={120} r={500} from={95} to={142} />}>
      <header className="sv-head">
        <SectionLabel index="03" meta={`${pad(services.length)} services`}>Practice</SectionLabel>
        <div className="sv-head__row">
          <Lines id="sv-practice-title" className="hx-h2 sv-h2" lines={["Each discipline,", "in detail."]} />
          <Reveal as="p" className="hx-lead sv-head__lead" delay={0.2}>What is included, what it connects to, and where to go next.</Reveal>
        </div>
      </header>

      <Chapter letter={cloud.letter} name={cloud.name} count={cloud.slugs.length} />
      <FeatureLead slug="cloud-solutions" />

      <Chapter letter={ai.letter} name={ai.name} count={ai.slugs.length} />
      <FeatureSplit slug="artificial-intelligence" />

      <Chapter letter={software.letter} name={software.name} count={software.slugs.length} />
      <FeatureWide slug="software-development" siblings={["web-design-development", "mobile-app-development", "quality-assurance", "maintenance-support"]} />

      <Chapter letter="B · C" name="Data and delivery" count={switcherSlugs.length} />
      <Switcher items={switcherSlugs.map(get)} />

      <Chapter letter={advisory.letter} name={advisory.name} count={advisory.slugs.length} />
      <div className="sv-adv">
        {advisory.slugs.map((slug, i) => {
          const s = get(slug);
          return (
            <article key={slug} id={slug} className="sv-adv__item hx-hover" style={{ "--i": i } as React.CSSProperties}>
              <Figure s={s} link sizes="(min-width: 1024px) 28vw, (min-width: 640px) 40vw, 100vw" aspect={["4 / 3", "1 / 1", "4 / 5"][i]} />
              <div className="sv-body">
                <p className="hx-label sv-meta"><span>{numberOf(slug)}</span><i aria-hidden="true" /><span>{offeringCount(s)}</span>{s.isNew && <span className="sv-new">New</span>}</p>
                <h3 className="sv-title sv-title--sm"><Link href={`/services/${slug}`}>{s.title}</Link></h3>
                <p className="sv-summary">{s.summary}</p>
                <ul className="sv-offer">{s.offerings.map((o) => <li key={o}>{o}</li>)}</ul>
                <Link className="sv-go" href={`/services/${slug}`}><span>Explore</span><ArrowUpRight size={18} strokeWidth={1.5} aria-hidden="true" /></Link>
              </div>
            </article>
          );
        })}
      </div>
    </Band>
  );
}
