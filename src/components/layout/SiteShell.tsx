import type { ReactNode } from "react";
import { Header } from "@/components/navigation/Header";
import { Footer } from "./Footer";
import { JsonLd } from "@/lib/seo/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/seo/schema";
import { RevealRoot } from "@/components/motion/RevealRoot";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />
      <Header />
      <main id="main">{children}</main>
      <Footer />
      <RevealRoot />
    </>
  );
}
