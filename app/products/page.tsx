import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { products } from "@/content/products";
import { Reveal } from "@/components/shared/reveal";
import { SectionLabel } from "@/components/shared/section-label";
import { Work } from "@/components/landing/work";

export const metadata: Metadata = {
  title: "Products & work",
  description:
    "Our own AI products — ScribeDesk and Sell OS — plus custom AI solutions we've built and run for clients.",
  alternates: { canonical: "/products" },
};

const statusLabel: Record<string, string> = {
  live: "Live",
  beta: "In beta",
  "coming-soon": "Coming soon",
};

export default function ProductsPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-border">
        <div aria-hidden className="absolute inset-0 line-grid opacity-60" />
        <div aria-hidden className="absolute inset-0 dot-grid dot-grid-mask" />
        <div aria-hidden className="absolute inset-0 spotlight-white" />

        <div className="container-page relative py-20 md:py-28">
          <SectionLabel>Products &amp; work</SectionLabel>
          <h1 className="text-display mt-6 text-6xl md:text-9xl">
            Our products.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-foreground/70 md:text-xl">
            Our own brands, built and operated in production — and the clearest
            proof of what we can build for you. Custom client work follows
            below.
          </p>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="grid border-t border-border md:grid-cols-2">
          {products.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <Link
                href={`/products/${p.slug}`}
                className="group relative flex h-full min-h-[420px] flex-col justify-between overflow-hidden border-b border-border bg-background p-8 transition-colors duration-500 hover:bg-muted md:min-h-[560px] md:border-b-0 md:p-12 md:[&:not(:first-child)]:border-l md:[&:not(:first-child)]:border-border"
              >
                <div className="flex items-start justify-between">
                  <div className="font-mono-label text-foreground/55">
                    /{p.slug}
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="text-foreground/40 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground"
                  />
                </div>

                <div>
                  <div className="font-mono-label text-foreground/55">
                    {p.industry} · {statusLabel[p.status]}
                  </div>
                  <h2 className="text-display mt-4 text-6xl md:text-7xl">
                    {p.name}
                  </h2>
                  <p className="mt-4 text-xl text-foreground/85 text-balance">
                    {p.tagline}
                  </p>
                  <p className="mt-6 max-w-md text-sm text-foreground/60">
                    {p.description}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <Work />
    </>
  );
}
