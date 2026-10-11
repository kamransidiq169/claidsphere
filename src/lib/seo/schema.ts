import { company, contact, socials } from "@/data/company";

/** Only facts present on the source site. */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.short,
  legalName: company.legalName,
  url: company.siteUrl,
  description: company.description,
  email: contact.email,
  telephone: contact.phone,
  sameAs: socials.map((s) => s.href),
  address: {
    "@type": "PostalAddress",
    streetAddress: "005 Veracity House, Rajbagh",
    addressLocality: "Srinagar",
    addressRegion: "Jammu and Kashmir",
    postalCode: "190008",
    addressCountry: "IN",
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: company.short,
  url: company.siteUrl,
};

export function breadcrumb(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: `${company.siteUrl}${it.path}` })),
  };
}
