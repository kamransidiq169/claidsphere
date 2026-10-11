import { Band } from "../primitives/Band";
import { Geo } from "../primitives/Geo";
import { SectionLabel } from "../primitives/SectionLabel";
import { Stage } from "./Stage";
import { testimonials } from "@/data/testimonials";

/** Client endorsements only: one voice per person, and the company's own team is left out. */
export function Testimonials() {
  const items = testimonials.filter((t, i, a) => t.organisation !== "Claidsphere" && a.findIndex((x) => x.name === t.name) === i);
  return (
    <Band tone="flow" labelledBy="voices-title" className="hx-voices" backdrop={<Geo cx={-40} cy={880} r={560} from={-62} to={-22} align="left-bottom" />}>
      <h2 id="voices-title" className="sr-only">Client testimonials</h2>
      <Stage items={items} label={<SectionLabel index="08" meta="Client voices">What clients say</SectionLabel>} />
    </Band>
  );
}
