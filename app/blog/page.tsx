import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { SectionLabel } from "@/components/shared/section-label";
import {
  getAllPosts,
  readingTimeMinutes,
  formatPostDate,
} from "@/content/blog";
import { team } from "@/content/founders";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes on building and shipping production AI — from the team at AI Overflow. Honest takes on AI strategy, agentic automation, and custom AI solutions.",
  alternates: { canonical: "/blog" },
};

function authorName(slug: string): string {
  return team.find((m) => m.slug === slug)?.name ?? "AI Overflow";
}

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-border">
        <div aria-hidden className="absolute inset-0 line-grid opacity-60" />
        <div aria-hidden className="absolute inset-0 dot-grid dot-grid-mask" />
        <div aria-hidden className="absolute inset-0 spotlight-white" />

        <div className="container-page relative py-20 md:py-28">
          <SectionLabel>Blog</SectionLabel>
          <h1 className="text-display mt-6 text-6xl md:text-9xl">Notes.</h1>
          <p className="mt-8 max-w-2xl text-lg text-foreground/70 md:text-xl text-pretty">
            What we&apos;re learning building and running production AI — for our
            own products and for the businesses we work with. No hype, just the
            parts that actually matter.
          </p>
        </div>
      </section>

      <section className="border-b border-border">
        <ul className="border-t border-border">
          {posts.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05} as="li">
              <Link
                href={`/blog/${p.slug}`}
                className="group block border-b border-border bg-background transition-colors duration-500 hover:bg-muted"
              >
                <article className="container-page grid gap-6 py-10 md:grid-cols-12 md:gap-8 md:py-14">
                  <div className="md:col-span-3">
                    <div className="font-mono-label text-foreground/55">
                      {formatPostDate(p.date)}
                    </div>
                    <div className="mt-2 font-mono-label text-foreground/40">
                      {readingTimeMinutes(p.body)} min read
                    </div>
                  </div>

                  <div className="md:col-span-8">
                    <h2 className="text-display text-3xl text-balance md:text-4xl">
                      {p.title}
                    </h2>
                    <p className="mt-4 max-w-xl text-foreground/65 text-pretty">
                      {p.description}
                    </p>
                    <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
                      <span className="font-mono-label text-foreground/50">
                        {authorName(p.authorSlug)}
                      </span>
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="border border-border px-2.5 py-1 font-mono-label text-foreground/55"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="hidden items-start justify-end md:col-span-1 md:flex">
                    <ArrowUpRight
                      size={22}
                      className="text-foreground/40 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground"
                    />
                  </div>
                </article>
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>
    </>
  );
}
