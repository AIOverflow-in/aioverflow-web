import { Hero } from "@/components/landing/hero";
import { Marquee } from "@/components/landing/marquee";
import { ProductGrid } from "@/components/landing/product-grid";
import { Process } from "@/components/landing/process";
import { PullQuote } from "@/components/landing/pull-quote";
import { CTA } from "@/components/landing/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <ProductGrid />
      <Process />
      <PullQuote />
      <CTA />
    </>
  );
}
