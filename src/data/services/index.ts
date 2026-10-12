import type { Service, MicrosoftProduct } from "../types";

/** Services listed on the Services page, in narrative order: cloud, AI, software, then advisory and growth. */
export const services: Service[] = [
  { slug: "cloud-solutions", title: "Cloud Solutions", summary: "Our cloud solutions scale effortlessly to meet business demands.", offerings: ["Cloud migration and support", "Microsoft Azure", "Microsoft 365"], pillar: "cloud" },
  { slug: "artificial-intelligence", title: "Artificial Intelligence", summary: "Our AI-powered tools seamlessly integrate to enhance decision-making.", offerings: ["Microsoft Copilot", "AI-powered solutions"], pillar: "ai" },
  { slug: "software-development", title: "Software Development", summary: "Our skilled developers build tailored solutions to accelerate growth.", offerings: ["Custom, tailored solutions"], pillar: "software" },
  { slug: "data-analytics", title: "Data Analytics", summary: "Turning data into intelligence.", offerings: ["Data collection and management", "Data analysis", "Reporting and visualization"], pillar: "ai" },
  { slug: "web-design-development", title: "Web Design & Development", summary: "Websites designed and built around your business.", offerings: ["Custom website design", "E-commerce solutions", "Website maintenance and support"], pillar: "software" },
  { slug: "mobile-app-development", title: "Mobile App Development", summary: "Apps designed, built and tested for real users.", offerings: ["Custom app design & development", "Cross-Platform solutions", "Usability testing"], pillar: "software" },
  { slug: "quality-assurance", title: "Quality Assurance", summary: "From functional testing to performance testing.", offerings: ["Functional testing", "Performance testing"], pillar: "software" },
  { slug: "maintenance-support", title: "Maintenance & Support", summary: "Keep your software running smoothly.", offerings: ["Software maintenance", "Ongoing support"], pillar: "software" },
  { slug: "consulting", title: "Consulting Services", summary: "Advice across strategy, technology and operations.", offerings: ["Business strategy", "Technology consulting", "Operational improvement"] },
  { slug: "digital-marketing", title: "Digital Marketing Solutions", summary: "Strategic digital marketing to reach and grow your audience.", offerings: ["Fundamentals of SEO", "Social media marketing", "Pay-Per-Click"], isNew: true },
  { slug: "brand-strategy-identity", title: "Brand Strategy & Identity", summary: "Strategy and visual identity that make your brand clear.", offerings: ["Logo design", "Brand strategy", "Visual identity"] },
];

export const pillars = [
  { id: "cloud", index: "01", title: "Cloud", lede: "Our cloud solutions scale effortlessly to meet business demands.", items: ["Microsoft Azure", "Microsoft 365", "Cloud migration and support", "License optimization & cloud cost reduction", "Managed Microsoft services"] },
  { id: "ai", index: "02", title: "AI", lede: "Our AI-powered tools seamlessly integrate to enhance decision-making.", items: ["Artificial Intelligence", "Microsoft Copilot", "Data Analytics", "Data-driven insights"] },
  { id: "software", index: "03", title: "Software", lede: "Our skilled developers build tailored solutions to accelerate growth.", items: ["Web development", "Mobile app development", "Software development", "Quality assurance", "Maintenance & support"] },
] as const;

export const microsoftIntro = {
  title: "Unlock the Power of Microsoft with Claidsphere",
  body: "We help organizations unlock the full value of Microsoft technologies by delivering secure, scalable, and cost-optimized solutions. As a Microsoft-focused cloud and managed services provider, we enable better collaboration, productivity, automation, and intelligent decision-making.",
  trademark: "Microsoft, Microsoft 365, SharePoint, Copilot, and Power Platform are trademarks of Microsoft Corporation. Services are delivered following Microsoft best practices and licensing guidelines.",
};

export const microsoftProducts: MicrosoftProduct[] = [
  { name: "Microsoft Azure", description: "Cloud environments designed, optimized and managed with a focus on security, performance and cost." },
  { name: "Microsoft 365", description: "A complete productivity suite that enhances collaboration, security, and efficiency." },
  { name: "Microsoft Copilot", description: "Automate tasks, gain insights, and improve decision-making with AI." },
  { name: "Power Platform", description: "Build low-code applications, automate workflows, and analyze data." },
  { name: "Microsoft SharePoint", description: "Improve content management and collaboration; organize, secure, and access documents seamlessly." },
];

export const azurePartner = {
  eyebrow: "Microsoft Cloud Expertise",
  title: "Trusted Microsoft & Azure Partner",
  body: [
    "We are a trusted Microsoft-focused partner and managed service provider helping organizations modernize, secure, and optimize their Microsoft environments. Our approach is centered on delivering measurable outcomes — lower licensing costs, improved productivity, and scalable cloud solutions.",
    "From Microsoft Azure and Microsoft 365 to licensing optimization and ongoing managed services, we help businesses confidently adopt Microsoft technologies while ensuring compliance, performance, and cost efficiency.",
  ],
  points: [
    "Microsoft Azure & Microsoft 365 specialists",
    "License optimization & cloud cost reduction",
    "Secure, compliant Microsoft cloud environments",
    "Ongoing Microsoft MSP-style support",
  ],
  withClaidsphere: [
    "Microsoft & Azure specialists focused on real business outcomes",
    "Proactive Microsoft 365 & Azure license cost optimization",
    "Clear guidance on what licenses you actually need",
    "Secure, compliant cloud environments aligned with best practices",
    "Ongoing MSP-style support, not one-time setup",
    "A partner who grows with your Microsoft environment",
  ],
  withoutPartner: [
    "Overpaying for unused or misaligned Microsoft licenses",
    "Confusion between Microsoft plans, add-ons, and subscriptions",
    "Reactive support only after issues occur",
    "Increased compliance and audit risk",
    "Cloud costs growing without clear control",
    "No long-term Microsoft strategy",
  ],
  trademark: "Microsoft, Azure, and Microsoft 365 are trademarks of Microsoft Corporation. Services are delivered in alignment with Microsoft best practices and licensing guidelines.",
};
