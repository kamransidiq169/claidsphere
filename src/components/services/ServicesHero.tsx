import { ArrowUpRight } from "lucide-react";
import { Band } from "@/components/home/primitives/Band";
import { Geo } from "@/components/home/primitives/Geo";
import { SectionLabel } from "@/components/home/primitives/SectionLabel";
import { HomeButton } from "@/components/home/primitives/HomeButton";
import { ArrowLink } from "@/components/home/primitives/ArrowLink";
import { Lines } from "@/components/typography/Lines";
import { Reveal } from "@/components/motion/Reveal";
import { services } from "@/data/services";
import { numberOf, pad, pillarLabel } from "./model";

export function ServicesHero() {
  return (
    <Band tone="flow" labelledBy="sv-title" className="sv-hero" backdrop={<Geo cx={1180} cy={330} r={560} from={118} to={166} />}>
      <div className="sv-hero__grid">
        <div className="sv-hero__copy">
          <SectionLabel index="01">Services</SectionLabel>
          <Lines immediate as="h1" id="sv-title" className="sv-h1" lines={["Technology built", "around how your", "business works."]} />
          <Reveal immediate="rise" as="p" className="hx-lead sv-hero__lead" delay={0.25}>
            Cloud, AI and software, with deep Microsoft Azure and Microsoft 365 expertise, alongside analytics, consulting, marketing and brand.
          </Reveal>
          <Reveal immediate="rise" className="sv-hero__actions" delay={0.35}>
            <HomeButton href="/contact">Talk to an Expert</HomeButton>
            <ArrowLink href="#capabilities">See how it fits together</ArrowLink>
          </Reveal>
        </div>

        <nav className="sv-index" aria-label="Services" data-enter="rise" style={{ "--d": "0.3s" } as React.CSSProperties}>
          <p className="hx-label sv-index__h"><span>Index</span><span>{pad(services.length)}</span></p>
          <ol>
            {services.map((s) => (
              <li key={s.slug}>
                <a href={`#${s.slug}`} className="sv-index__a">
                  <span className="hx-label sv-index__n">{numberOf(s.slug)}</span>
                  <span className="sv-index__t">{s.title}</span>
                  <span className="hx-label sv-index__p">{pillarLabel(s)}</span>
                  <ArrowUpRight size={16} strokeWidth={1.5} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </Band>
  );
}
