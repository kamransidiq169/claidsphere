export type Pillar = "cloud" | "ai" | "software";

export interface Service {
  slug: string;
  title: string;
  summary: string;
  /** Sub-offerings exactly as listed on claids.com */
  offerings: string[];
  pillar?: Pillar;
  isNew?: boolean;
}

export interface MicrosoftProduct {
  name: string;
  description: string;
}

export interface CaseStudy {
  slug: string;
  client: string;
  year: string;
  service: string;
  summary: string;
  /** Route slug of the matching service page, when one exists. */
  serviceSlug?: string;
  /** Organisation name as it appears on this client's testimonial. */
  testimonialOrg?: string;
  /** Only facts stated on the source site; fields stay undefined when unsourced. */
  challenge?: string;
  solution?: string;
  outcome?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  note?: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  organisation?: string;
}

export interface Job {
  title: string;
  location: string;
  department: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface TimelineEntry {
  period: string;
  title: string;
  body: string;
}

export interface Step {
  title: string;
  body?: string;
}
