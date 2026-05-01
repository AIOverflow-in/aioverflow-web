import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { products } from "@/content/products";
import { Reveal } from "@/components/shared/reveal";
import { SectionLabel } from "@/components/shared/section-label";

const statusLabel: Record<string, string> = {
  live: "Live",
  beta: "In beta",
  "coming-soon": "Coming soon",
};

export function ProductGrid() {
  return (
    <section
      id="products"
      data-section="products"
      className="relative border-b border-border py-24 md:py-36"
    >
      <div className="container-page">
        <Reveal className="max-w-3xl">
          <SectionLabel number="01">Portfolio</SectionLabel>
          <h2 className="text-display mt-6 text-5xl md:text-7xl">
            Products built under the AI&nbsp;Overflow umbrella.
          </h2>
          <p className="mt-6 max-w-xl text-lg text-foreground/70">
            Each is its own brand and team — unified by the same standard for
            craft and shipping speed.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-[2px] border border-border bg-border md:grid-cols-2">
          {products.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <Link
                href={`/products/${p.slug}`}
                className="group relative flex h-full flex-col justify-between overflow-hidden bg-background p-8 transition-colors duration-500 hover:bg-muted md:p-12"
              >
                <div className="flex items-start justify-between">
                  <div className="font-mono-label text-foreground/55">
                    /{p.slug}
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="shrink-0 text-foreground/40 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground"
                  />
                </div>

                <div className="mt-24 md:mt-32">
                  <div className="font-mono-label text-foreground/55">
                    {p.industry} · {statusLabel[p.status]}
                  </div>
                  <h3 className="text-display mt-4 text-5xl md:text-6xl">
                    {p.name}
                  </h3>
                  <p className="mt-3 text-lg text-foreground/70 text-balance">
                    {p.tagline}
                  </p>
                  <p className="mt-6 max-w-md text-sm text-foreground/55">
                    {p.description}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
