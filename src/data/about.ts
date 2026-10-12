import { about, company, contact, hero, intro, timeline, whyClaidsphere, whyProof } from "./company";
import { azurePartner, microsoftProducts } from "./services";
import { methodology } from "./methodology";

/**
 * Editorial arrangement of existing Claidsphere copy for /about.
 * Every sentence below is either lifted from data/company, data/services, data/methodology
 * or is a short label / paraphrase of those sources. No new facts, history, clients or claims.
 */

const office = contact.offices[0].lines;

export const aboutHero = {
  eyebrow: "About Claidsphere",
  lines: ["Where innovation", "meets implementation."],
  /** Second sentence of about.body, trimmed. */
  lead: "We are a team of passionate professionals dedicated to helping businesses navigate and thrive in the ever-evolving digital landscape.",
  facts: [
    { k: "Company", v: company.legalName },
    { k: "Established", v: company.since },
    { k: "Based in", v: `${office[1].replace(/ \d+$/, "")}, ${office[2]}` },
    { k: "Focus", v: "Cloud · AI · Software" },
  ],
} as const;

export const manifesto = {
  /** The company's own positioning line (hero.headline), set as the statement. */
  lines: hero.headline.split(/(?<=\.)\s+/),
  lead: intro.body.split(". ")[0] + ".",
  values: about.values,
  principles: intro.principles,
} as const;

export const story = [
  { k: "Where we began", head: "Founded to revolutionize visual design.", body: timeline[0].body },
  { k: "Where we are", head: "Pivoted to digital, built for business.", body: `${timeline[1].body} Today our mission is comprehensive, tailored solutions in Cloud Computing, Artificial Intelligence, Digital Marketing, Data Analytics and IT Support.` },
  { k: "Where we are going", head: "New opportunities. Expanded services.", body: timeline[3].body },
] as const;

export const thinking = {
  lines: ["Understand the business.", "Then build for it."],
  lead: methodology[0].body,
  stages: methodology,
} as const;

/** Four principles; each body is existing published copy (whyClaidsphere / whyProof / intro). */
export const principles = [
  { title: "Client satisfaction", body: whyProof[0].body },
  { title: "Innovation", body: whyClaidsphere[1].body },
  { title: "Reliability", body: whyProof[3].body },
  { title: "Security & compliance", body: whyClaidsphere[2].body },
] as const;

export const ecosystem = {
  lead: azurePartner.body[0].split(". ")[0] + ".",
  technology: microsoftProducts.map((p) => p.name),
  claidsphere: ["Cloud", "AI", "Software"],
  claidsphereNote: "Design · Delivery · Support",
  capability: ["Lower licensing costs", "Improved productivity", "Scalable cloud solutions"],
  trademark: azurePartner.trademark,
} as const;

export const people = {
  title: about.priorityTitle,
  body: about.priorityBody,
};
