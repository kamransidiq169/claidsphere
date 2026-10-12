/** Copy and options for /contact. Contact details themselves live in data/company. */
export const contactHero = {
  eyebrow: "Contact Claidsphere",
  lines: ["Tell us what you’re", "trying to solve."],
  lead: "Share the challenge in your own words. We’ll help you understand the right technology direction.",
} as const;

/** What happens after sending: a plain description of the process, no promises on timing. */
export const contactNext = [
  { k: "Read", v: "Your enquiry goes to the team who would work on it." },
  { k: "Reply", v: "We respond using the details you share." },
  { k: "Direction", v: "Together we decide whether, and how, we can help." },
] as const;

/** Topics map to published capabilities (data/services). The chosen label is submitted as the enquiry subject. */
export const contactTopics = [
  { value: "Cloud & Microsoft", hint: "Azure, Microsoft 365, migration, licensing" },
  { value: "AI & Data", hint: "Copilot, analytics, reporting" },
  { value: "Software & Apps", hint: "Web, mobile, custom, QA, support" },
  { value: "Consulting", hint: "Strategy, technology and operations" },
  { value: "Something else", hint: "Marketing, brand, or not sure yet" },
] as const;

export const contactClose = {
  label: "Why talk to us",
  lines: ["A serious conversation,", "a clear next step."],
} as const;
