import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";
import { SectionLabel } from "@/components/shared/section-label";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "About",
  description:
    "AI Overflow is a team of AI engineers who build production AI — our own products and custom solutions for businesses. Here's why we exist and how we work.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-border">
        <div aria-hidden className="absolute inset-0 line-grid opacity-60" />
        <div aria-hidden className="absolute inset-0 dot-grid dot-grid-mask" />
        <div aria-hidden className="absolute inset-0 spotlight-white" />

        <div className="container-page relative py-20 md:py-28">
          <SectionLabel>About</SectionLabel>
          <h1 className="text-display mt-6 max-w-5xl text-5xl md:text-9xl">
            We turn AI capability into things people use.
          </h1>
          <p className="mt-10 max-w-2xl text-lg text-foreground/70 md:text-xl text-pretty">
            {company.description}
          </p>
          <p className="mt-6 max-w-2xl text-sm text-foreground/45 text-pretty">
            Background: the team has reached {company.competitionRecord.finals}{" "}
            national & international hackathon and competition finals, with{" "}
            {company.competitionRecord.topThree} top-three finishes — where a lot
            of the muscle behind our products was first built.
          </p>
        </div>
      </section>

      <section className="border-b border-border py-24 md:py-32">
        <div className="container-page grid gap-16 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <SectionLabel number="01">How we work</SectionLabel>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-7">
            <p className="text-2xl text-foreground/85 md:text-3xl text-pretty">
              We&apos;re a small, senior team that owns the whole arc —
              research, engineering, design, and operations. We build our own
              products under their own brands, and we build custom solutions for
              clients. Same people, same standard, tight feedback loops with
              real users either way.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border py-24 md:py-32">
        <div className="container-page grid gap-16 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <SectionLabel number="02">What we believe</SectionLabel>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-7">
            <p className="text-2xl text-foreground/85 md:text-3xl text-pretty">
              The hard part of AI products isn&apos;t the model — it&apos;s the
              ten thousand product decisions that turn a model into something
              people actually want to use every day. That&apos;s the work
              we&apos;re here to do.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-page">
          <Reveal>
            <h2 className="text-display max-w-4xl text-5xl md:text-7xl">
              Want to work together?
            </h2>
            <div className="mt-12 flex flex-wrap items-center gap-3">
              <Link href="/products" className={buttonVariants({ size: "lg" })}>
                See our products
              </Link>
              <Link
                href="/contact"
                className={buttonVariants({ size: "lg", variant: "outline" })}
              >
                Work with us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
