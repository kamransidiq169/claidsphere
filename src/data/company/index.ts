import type { TimelineEntry } from "../types";

export const company = {
  name: "Claidsphere Solutions",
  legalName: "Claidsphere Solutions Pvt Ltd",
  short: "Claidsphere",
  tagline: "From Cloud to Code Intelligence, Delivered.",
  /** Override with NEXT_PUBLIC_SITE_URL for staging / the final production domain. */
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.claids.com",
  description:
    "Claidsphere helps businesses transform through Cloud, AI and Software, with deep expertise in Microsoft Azure and Microsoft 365.",
  since: "2025",
} as const;

export const contact = {
  phone: "+91 8899819161",
  phoneHref: "tel:+918899819161",
  email: "info@claids.com",
  supportHours: "24/7",
  supportTime: "Monday to Saturday, 9:00 am to 6:30 pm",
  responseTime: "We aim to respond to all inquiries within 24 hours.",
  /**
   * The live site gives two different office addresses (contact page vs.
   * structured data). Both are preserved; see docs/content-audit.md.
   */
  offices: [
    {
      label: "Office",
      lines: ["Qureshi Estate, Maidanpora, Karan Nagar", "Srinagar, Jammu and Kashmir 190010", "India"],
    },
    {
      label: "Additional address",
      lines: ["005 Veracity House, Rajbagh", "Srinagar, Jammu and Kashmir 190008", "India"],
    },
  ],
} as const;

export const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/claidss/" },
  { label: "Instagram", href: "https://www.instagram.com/lifeatclaids" },
  { label: "X", href: "https://x.com/Claidsphere" },
] as const;

export const reviewPlatforms = [
  { label: "Clutch", href: "https://clutch.co/profile/claids" },
  { label: "Trustpilot", href: "https://www.trustpilot.com/review/claids.com" },
] as const;

export const hero = {
  eyebrow: "Claidsphere Solutions",
  headline: "Data into intelligence. AI into innovation. Cloud into possibility.",
  support:
    "Transforming businesses through cutting-edge cloud solutions, intelligent AI, strategic digital marketing and data-driven insights.",
};

export const intro = {
  title: "Empowering Your Business with Claidsphere",
  body: "Transforming Businesses Through Cutting-Edge Cloud Solutions, Intelligent AI, Strategic Digital Marketing, and Data-Driven Insights. Data into intelligence, AI into Innovation, and Cloud into Possibilities.",
  principles: ["Collaborative approach", "Agile development methodology", "Data security and compliance"],
};

export const about = {
  title: "Building a Better Future Together",
  body: "Welcome to Claidsphere, where innovation meets implementation. We are a team of passionate professionals dedicated to helping businesses navigate and thrive in the ever-evolving digital landscape. Our mission is to provide comprehensive, tailored solutions in Cloud Computing, Artificial Intelligence, Digital Marketing, Data Analytics, and IT Support, empowering our clients to achieve their strategic goals.",
  values: "We pride ourselves on innovation, reliability, and client satisfaction. Our solutions are tailored to meet your unique needs and drive measurable results.",
  priorityTitle: "Your Success, Our Priority",
  priorityBody:
    "At Claidsphere, we're not just service providers; we're your strategic partners. We focus on delivering tangible results, tailoring solutions to your unique needs, and ensuring your long-term success in the digital landscape.",
};

/** Dates are as published ("2025" three times); ordering preserved. */
export const timeline: TimelineEntry[] = [
  {
    period: "2025",
    title: "The Beginning",
    body: "Founded with a vision to revolutionize the visual design industry. Starting as a small team of passionate designers, we set out to deliver creative solutions that make a difference.",
  },
  {
    period: "2025",
    title: "Adapting and Innovating",
    body: "A significant pivot towards digital solutions, ensuring we stayed at the forefront of industry trends and embraced new collaboration tools.",
  },
  {
    period: "2025",
    title: "Reaching New Heights",
    body: "Our commitment to quality and innovation continued to drive our growth and solidify our position as industry leaders.",
  },
  {
    period: "Present",
    title: "Looking ahead",
    body: "With a vision for the future, we are excited to explore new opportunities, expand our services, and continue delivering exceptional solutions that inspire and engage.",
  },
];

/** Reasons shown in "Why Claidsphere". Each is drawn from claims already on claids.com. */
export const whyClaidsphere = [
  { title: "Client-centric, by design.", body: "We focus on delivering tangible results, tailored to your unique needs and your long-term success." },
  { title: "Agile, collaborative delivery.", body: "A functional prototype within 24 hours, so progress and feedback start immediately." },
  { title: "Secure and compliant.", body: "Cloud environments built to Microsoft best practices, with data security and compliance in mind." },
  { title: "Cost-optimized and scalable.", body: "Licensing guidance and cloud cost control that grows with your Microsoft environment." },
  { title: "Support that doesn’t stop.", body: "Ongoing, MSP-style support, not one-time setup, with 24/7 tech and business support." },
] as const;

/** Four-point reading of whyClaidsphere for the homepage. Every body is existing published copy, regrouped (no new claims). */
export const whyProof = [
  { title: "Business-first thinking", body: "We focus on delivering tangible results, tailored to your unique needs and your long-term success." },
  { title: "Microsoft & Azure expertise", body: "Cloud environments built to Microsoft best practices, with data security and compliance in mind, plus licensing guidance and cloud cost control that grows with your Microsoft environment." },
  { title: "Engineering discipline", body: "Agile, collaborative delivery: a functional prototype within 24 hours, so progress and feedback start immediately." },
  { title: "Long-term partnership", body: "Ongoing, MSP-style support, not one-time setup, with 24/7 tech and business support." },
] as const;

export const heroIndex = [
  { name: "Cloud", detail: "Azure · Microsoft 365" },
  { name: "AI", detail: "Copilot · Analytics" },
  { name: "Software", detail: "Web · Mobile · Custom" },
  
] as const;

/** Credibility strip. Ratings are shown as published by Claidsphere; see docs/content-audit.md for the Google 4.6 vs 5-star conflict. */
export const trust = {
  ecosystem: ["Microsoft Azure", "Microsoft 365", "Microsoft Copilot", "Power Platform", "SharePoint"],
  clients: ["Jammu & Kashmir Accounting Services", "Yaseen Stone Crusher"],
  ratings: "Trustpilot 4.8 · Google 4.6",
} as const;
