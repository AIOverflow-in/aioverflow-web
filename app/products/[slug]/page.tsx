import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { DemoEmbed } from "@/components/product/demo-embed";
import { Reveal } from "@/components/shared/reveal";
import { SectionLabel } from "@/components/shared/section-label";
import { products, getProduct } from "@/content/products";
import { siteUrl } from "@/lib/site";

const statusLabel: Record<string, string> = {
  live: "Live",
  beta: "In beta",
  "coming-soon": "Coming soon",
};

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: `${product.name} — ${product.tagline}`,
    description: product.description,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      type: "website",
      title: `${product.name} — ${product.tagline}`,
      description: product.description,
      url: `${siteUrl}/products/${product.slug}`,
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const productJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: product.name,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description: product.description,
        url: `${siteUrl}/products/${product.slug}`,
        publisher: { "@id": `${siteUrl}/#organization` },
        featureList: product.features.map((f) => f.title),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Products", item: `${siteUrl}/products` },
          {
            "@type": "ListItem",
            position: 2,
            name: product.name,
            item: `${siteUrl}/products/${product.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <section className="relative isolate overflow-hidden border-b border-border">
        <div aria-hidden className="absolute inset-0 line-grid opacity-60" />
        <div aria-hidden className="absolute inset-0 dot-grid dot-grid-mask" />
        <div aria-hidden className="absolute inset-0 spotlight-white" />

        <div className="container-page relative py-16 md:py-24">
          <Link
            href="/products"
            className="link-underline inline-flex items-center gap-2 font-mono-label text-foreground/65 hover:text-foreground"
          >
            <ArrowLeft size={12} /> All products
          </Link>

          <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <div className="font-mono-label text-foreground/55">
                {product.industry} · {statusLabel[product.status]}
              </div>
              <h1 className="text-display mt-6 text-7xl md:text-9xl">
                {product.name}
              </h1>
              <p className="mt-8 max-w-2xl text-2xl text-foreground/85 text-balance md:text-3xl">
                {product.tagline}
              </p>
              <p className="mt-6 max-w-2xl text-base text-foreground/65 text-pretty">
                {product.description}
              </p>
            </div>
            <div>
              <Link
                href={product.cta.href}
                className={buttonVariants({ size: "lg" })}
              >
                {product.cta.label} <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-b border-border py-20 md:py-28">
        <div className="container-page">
          <SectionLabel number="01">Interactive preview</SectionLabel>
          <p className="mt-4 max-w-xl text-sm text-foreground/55">
            A synthetic, interactive preview — illustrative data, not a recording
            of real customers or patients. Book a demo to see the live product.
          </p>
          <Reveal className="mt-10">
            <DemoEmbed demo={product.demo} />
          </Reveal>
        </div>
      </section>

      <section className="relative py-24 md:py-32">
        <div className="container-page">
          <Reveal>
            <SectionLabel number="02">Capabilities</SectionLabel>
            <h2 className="text-display mt-6 text-5xl md:text-7xl">
              What it does.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
            {product.features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.08}>
                <div className="flex h-full flex-col gap-6 bg-background p-8">
                  <span className="grid h-9 w-9 place-items-center border border-foreground/40">
                    <Check size={14} />
                  </span>
                  <h3 className="text-display text-2xl md:text-3xl">{f.title}</h3>
                  <p className="text-foreground/70">{f.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {product.trust && (
        <section className="relative border-t border-border py-24 md:py-32">
          <div className="container-page grid gap-12 md:grid-cols-12">
            <Reveal className="md:col-span-5">
              <SectionLabel number="03">{product.trust.label}</SectionLabel>
              <h2 className="text-display mt-6 text-4xl md:text-6xl text-balance">
                {product.trust.title}
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="md:col-span-7">
              <ul className="flex flex-col gap-5">
                {product.trust.points.map((p) => (
                  <li key={p} className="flex gap-4 text-lg text-foreground/80 text-pretty">
                    <Check size={18} className="mt-1 shrink-0 text-foreground/50" />
                    {p}
                  </li>
                ))}
              </ul>
              <p className="mt-8 border-l-2 border-border-strong pl-5 text-foreground/65 text-pretty">
                {product.trust.note}
              </p>
            </Reveal>
          </div>
        </section>
      )}
    </>
  );
}
