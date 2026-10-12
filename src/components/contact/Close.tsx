import { Lines } from "@/components/typography/Lines";
import { Reveal } from "@/components/motion/Reveal";
import { Band } from "@/components/home/primitives/Band";
import { whyProof } from "@/data/company";
import { contactClose } from "@/data/contact";

/** Reassurance in the company's own published words, closing into the footer. */
export function ContactClose() {
  return (
    <Band tone="flow" labelledBy="ct-close" className="ct ct-close">
      <Reveal as="p" className="hx-label">{contactClose.label}</Reveal>
      <Lines id="ct-close" className="ct-close__title" lines={[...contactClose.lines]} />
      <ul className="ct-proof">
        {whyProof.map((p, i) => (
          <Reveal as="li" key={p.title} delay={0.08 * i}>
            <span className="hx-label">{String(i + 1).padStart(2, "0")}</span>
            <h3>{p.title}</h3>
            <p>{p.body}</p>
          </Reveal>
        ))}
      </ul>
    </Band>
  );
}
