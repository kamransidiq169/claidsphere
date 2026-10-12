import { microsoftProducts, azurePartner, microsoftIntro } from "./services";

/**
 * Business-first reading of the existing Microsoft solution set.
 * Every `need`, `outcome` and capability restates published copy (microsoftProducts, azurePartner,
 * pillars, FAQ); nothing here introduces a new product, relationship or claim.
 */

export type SolutionId = "azure" | "m365" | "copilot" | "power" | "sharepoint";

/** Layers of the business → outcomes architecture (hero figure and selector gauge). */
export const layers = [
  { id: "business", name: "Business", note: "Your operations" },
  { id: "claidsphere", name: "Claidsphere", note: "Design · Delivery · Support" },
  { id: "platform", name: "Microsoft & Azure", note: "Azure · Microsoft 365" },
  { id: "apps", name: "Applications", note: "Power Platform · SharePoint" },
  { id: "data", name: "Data & AI", note: "Copilot · Analytics" },
  { id: "outcomes", name: "Outcomes", note: "Cost · Productivity · Scale" },
] as const;

export type LayerId = (typeof layers)[number]["id"];

type Extra = {
  id: SolutionId;
  layer: LayerId;
  /** Short business-relevance tag line. */
  relevance: string;
  /** How the technology relates to the business problem. */
  role: string;
  need: string;
  outcome: string;
  capabilities: string[];
  href: string;
  cta: string;
};

const extras: Extra[] = [
  {
    id: "azure", layer: "platform", relevance: "Cost · Security · Performance", role: "Cloud platform",
    need: "Cloud costs growing without clear control.",
    outcome: "Secure, compliant cloud environments, with performance and cost under control.",
    capabilities: ["Cloud migration and support", "License optimization & cloud cost reduction", "Secure, compliant Microsoft cloud environments", "Managed Microsoft services"],
    href: "/services/cloud-solutions", cta: "See the cloud service",
  },
  {
    id: "m365", layer: "platform", relevance: "Collaboration · Security · Efficiency", role: "Productivity platform",
    need: "Confusion between Microsoft plans, add-ons and subscriptions.",
    outcome: "Clear guidance on the licenses you actually need, and a suite that improves collaboration and efficiency.",
    capabilities: ["Clear license guidance", "Proactive license cost optimization", "Ongoing MSP-style support"],
    href: "/services/cloud-solutions", cta: "See the cloud service",
  },
  {
    id: "copilot", layer: "data", relevance: "Automation · Insight", role: "AI assistance",
    need: "Routine work, and decisions made without enough insight.",
    outcome: "Automated tasks, clearer insight and more intelligent decision-making.",
    capabilities: ["Microsoft Copilot", "AI-powered solutions", "Data analytics", "Data-driven insights"],
    href: "/services/artificial-intelligence", cta: "See the AI service",
  },
  {
    id: "power", layer: "apps", relevance: "Low-code · Workflows · Data", role: "Application platform",
    need: "A workflow that off-the-shelf software does not quite fit.",
    outcome: "Low-code applications and automated workflows, with the data analyzed alongside.",
    capabilities: ["Low-code applications", "Workflow automation", "Data analysis"],
    href: "/services/artificial-intelligence", cta: "See the AI service",
  },
  {
    id: "sharepoint", layer: "apps", relevance: "Content · Collaboration", role: "Content platform",
    need: "Documents and content spread across teams.",
    outcome: "Content organized, secured and accessible seamlessly.",
    capabilities: ["Content management", "Secure document access", "Team collaboration"],
    href: "/services/cloud-solutions", cta: "See the cloud service",
  },
];

export const solutions = microsoftProducts.map((p, i) => ({ ...p, ...extras[i], index: String(i + 1).padStart(2, "0") }));
export type Solution = (typeof solutions)[number];

export const solutionsHero = {
  lines: ["Technology aligned", "to the way your", "business operates."],
  lead: "Secure, scalable and cost-optimized Microsoft solutions, from Azure and Microsoft 365 to licensing and ongoing managed services.",
};

/** Microsoft technology → Claidsphere expertise → business solution. */
export const relationship = {
  technology: microsoftProducts.map((p) => p.name),
  expertise: azurePartner.points,
  solution: ["Lower licensing costs", "Improved productivity", "Scalable cloud solutions"],
  lead: microsoftIntro.body.match(/^[^.]+\./)?.[0] ?? microsoftIntro.body,
  trademark: azurePartner.trademark,
};

/** Technology foundation → value. Each line restates an existing outcome statement. */
export const outcomes = [
  { label: "Technology foundation", text: "Secure, compliant Microsoft cloud environments aligned with best practices." },
  { label: "Operational improvement", text: "Better collaboration, productivity and automation." },
  { label: "Better decisions", text: "Intelligent decision-making, supported by data and AI." },
  { label: "Scalable growth", text: "A partner who grows with your Microsoft environment." },
] as const;
