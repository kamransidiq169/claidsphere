import { Reveal } from "@/components/motion/Reveal";
import { trust } from "@/data/company";

export function TrustStrip() {
  return (
    <section className="trust" data-theme="dark" aria-label="Credibility">
      <div className="container">
        <Reveal className="trust__row">
          <p className="label dim">Microsoft ecosystem</p>
          <ul className="trust__list">
            {trust.ecosystem.map((t) => <li key={t}>{t}</li>)}
          </ul>
        </Reveal>
        <Reveal className="trust__row trust__row--second" delay={0.1}>
          <p className="label dim">Trusted by</p>
          <ul className="trust__list dim">
            {trust.clients.map((c) => <li key={c}>{c}</li>)}
            <li>{trust.ratings}</li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
