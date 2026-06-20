import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { SectionLabel } from "@/components/shared/section-label";
import { company } from "@/content/company";

export function Services() {
  return (
    <section
      id="services"
      data-section="services"
      className="relative border-b border-border py-24 md:py-36"
    >
      <div className="container-page">
        <Reveal className="max-w-3xl">
          <SectionLabel number="01">What we do</SectionLabel>
          <h2 className="text-display mt-6 text-5xl md:text-7xl">
            Custom AI, from &ldquo;does this even fit?&rdquo; to running in
            production.
          </h2>
          <p className="mt-6 max-w-xl text-lg text-foreground/70">
            Individual, startup, or established business — we start by working
            out whether AI is the right tool at all. When it is, we build and
            operate it.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
          {company.services.map((s, i) => (
            <Reveal key={s.number} delay={i * 0.06}>
              <div className="flex h-full flex-col gap-5 bg-background p-8 md:p-10">
                <div className="font-mono-label text-foreground/40">
                  {s.number}
                </div>
                <h3 className="text-display text-3xl md:text-4xl">{s.title}</h3>
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

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link
              href="/contact"
              className="link-underline inline-flex items-center gap-2 font-display text-xl md:text-2xl"
            >
              Tell us what you&apos;re working on
              <ArrowUpRight className="h-5 w-5" />
            </Link>
            <Link
              href="/services"
              className="font-mono-label text-foreground/55 transition-colors hover:text-foreground"
            >
              How we engage →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
