import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";
import { SectionLabel } from "@/components/shared/section-label";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "Services — Custom AI solutions",
  description:
    "AI Overflow builds custom AI for businesses of any size: AI fit & discovery, agentic automation, AI workflows & integration, and full custom AI products — built and run in production.",
  alternates: { canonical: "/services" },
};

const engagement = [
  {
    step: "01",
    title: "Discovery call",
    body: "We learn your workflow and where the friction is. You leave knowing whether AI is worth pursuing — honestly, even if the answer is no.",
  },
  {
    step: "02",
    title: "Scoped build",
    body: "A clear, fixed-scope first build aimed at the highest-leverage seam. Production from week one, with real data and real users.",
  },
  {
    step: "03",
    title: "Run & compound",
    body: "We operate what we ship, watch how it behaves, and keep improving it. The system gets better the longer it runs.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-border">
        <div aria-hidden className="absolute inset-0 line-grid opacity-60" />
        <div aria-hidden className="absolute inset-0 dot-grid dot-grid-mask" />
        <div aria-hidden className="absolute inset-0 spotlight-white" />

        <div className="container-page relative py-20 md:py-28">
          <SectionLabel>Services</SectionLabel>
          <h1 className="text-display mt-6 max-w-5xl text-5xl md:text-8xl">
            We build AI that works for your business.
          </h1>
          <p className="mt-10 max-w-2xl text-lg text-foreground/70 md:text-xl text-pretty">
            {company.pitch} Individual, startup, or established business — we
            start by working out whether AI is the right tool at all, then build
            and operate the systems that get the work done.
          </p>
          <div className="mt-10">
            <Link href="/contact" className={buttonVariants({ size: "lg" })}>
              Book an AI feasibility audit <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-24 md:py-32">
        <div className="container-page">
          <Reveal className="max-w-3xl">
            <SectionLabel number="01">What we do</SectionLabel>
            <h2 className="text-display mt-6 text-4xl md:text-6xl">
              Four ways we work with you.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
            {company.services.map((s, i) => (
              <Reveal key={s.number} delay={i * 0.06}>
                <div className="flex h-full flex-col gap-5 bg-background p-8 md:p-10">
                  <div className="font-mono-label text-foreground/40">
                    {s.number}
                  </div>
                  <h3 className="text-display text-3xl md:text-4xl">
                    {s.title}
                  </h3>
                  <p className="text-lg text-foreground/85 text-balance">
                    {s.summary}
                  </p>
                  <p className="text-foreground/65 text-pretty">{s.body}</p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-2">
                    {s.examples.map((ex) => (
                      <span
                        key={ex}
                        className="border border-border px-2.5 py-1 font-mono-label text-foreground/55"
                      >
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border py-24 md:py-32">
        <div className="container-page">
          <Reveal className="max-w-3xl">
            <SectionLabel number="02">How we engage</SectionLabel>
            <h2 className="text-display mt-6 text-4xl md:text-6xl">
              Start small. Prove value. Then compound.
            </h2>
          </Reveal>

          <ol className="mt-16 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
            {engagement.map((e, i) => (
              <Reveal key={e.step} delay={i * 0.1} as="li">
                <div className="flex h-full flex-col gap-8 bg-background p-8 md:p-10">
                  <div className="text-display text-7xl text-foreground/30 md:text-8xl">
                    {e.step}
                  </div>
                  <div>
                    <h3 className="text-display text-2xl md:text-3xl">
                      {e.title}
                    </h3>
                    <p className="mt-3 text-base text-foreground/65 text-pretty">
                      {e.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-border py-24 md:py-32">
        <div className="container-page grid gap-16 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <SectionLabel number="03">How we keep agents safe</SectionLabel>
            <h2 className="text-display mt-6 text-4xl md:text-6xl text-balance">
              Engineering you can audit, not a black box.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-7">
            <ul className="flex flex-col">
              {company.agentPrinciples.map((p, i) => (
                <li
                  key={p}
                  className={`flex gap-5 py-5 text-lg text-foreground/80 text-pretty ${
                    i !== 0 ? "border-t border-border" : ""
                  }`}
                >
                  <span className="font-mono-label text-foreground/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-page">
          <Reveal>
            <h2 className="text-display max-w-4xl text-5xl md:text-7xl">
              Not sure if AI fits your problem?
            </h2>
            <p className="mt-6 max-w-xl text-lg text-foreground/70">
              That&apos;s the right place to start. Tell us what you&apos;re
              working on — we&apos;ll tell you straight.
            </p>
            <div className="mt-12 flex flex-wrap items-center gap-3">
              <Link href="/contact" className={buttonVariants({ size: "lg" })}>
                Work with us <ArrowRight size={16} />
              </Link>
              <Link
                href="/products"
                className={buttonVariants({ size: "lg", variant: "outline" })}
              >
                See what we&apos;ve built
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
