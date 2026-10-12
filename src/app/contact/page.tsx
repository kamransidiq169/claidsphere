import { SiteShell } from "@/components/layout/SiteShell";
import { ContactHero } from "@/components/contact/Hero";
import { Enquiry } from "@/components/contact/Enquiry";
import { ContactClose } from "@/components/contact/Close";
import { JsonLd } from "@/lib/seo/JsonLd";
import { breadcrumb } from "@/lib/seo/schema";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata = pageMetadata({
  title: "Contact",
  description: "Start a conversation with Claidsphere about cloud, AI, software and Microsoft solutions. Tell us the challenge and we’ll help you find the right direction.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <SiteShell>
      <JsonLd data={breadcrumb([{ name: "Contact", path: "/contact" }])} />
      <ContactHero />
      <Enquiry />
      <ContactClose />
    </SiteShell>
  );
}
