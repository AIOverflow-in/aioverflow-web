import { Hero } from "@/components/landing/hero";
import { Services } from "@/components/landing/services";
import { ProductGrid } from "@/components/landing/product-grid";
import { Work } from "@/components/landing/work";
import { Process } from "@/components/landing/process";
import { Marquee } from "@/components/landing/marquee";
import { PullQuote } from "@/components/landing/pull-quote";
import { CTA } from "@/components/landing/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <ProductGrid />
      <Work />
      <Process />
      <Marquee />
      <PullQuote />
      <CTA />
    </>
  );
}
