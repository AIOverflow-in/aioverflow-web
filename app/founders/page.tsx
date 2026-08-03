import type { Metadata } from "next";
import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";
import { founders, foundingTeam, initials } from "@/content/founders";
import { Reveal } from "@/components/shared/reveal";
import { SectionLabel } from "@/components/shared/section-label";

export const metadata: Metadata = {
  title: "Founders",
  description:
    "Meet the founding team behind AI Overflow — co-founders Subhanu Sankar Roy and Chethan Reddy, and the people who build and operate production AI systems with them.",
  alternates: { canonical: "/founders" },
};

export default function FoundersPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-border">
        <div aria-hidden className="absolute inset-0 line-grid opacity-60" />
        <div aria-hidden className="absolute inset-0 dot-grid dot-grid-mask" />
        <div aria-hidden className="absolute inset-0 spotlight-white" />

        <div className="container-page relative py-20 md:py-28">
          <SectionLabel>Team</SectionLabel>
          <h1 className="text-display mt-6 text-6xl md:text-9xl">Founders.</h1>
          <p className="mt-8 max-w-2xl text-lg text-foreground/70 md:text-xl">
            Two co-founders and a founding team who&apos;ve been shipping AI
            products together for years.
          </p>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="grid border-t border-border md:grid-cols-2">
          {founders.map((f, i) => (
            <Reveal key={f.slug} delay={i * 0.08}>
              <article
                className={`flex h-full flex-col gap-10 bg-background p-8 md:p-12 ${
                  i !== 0 ? "border-t border-border md:border-l md:border-t-0" : ""
                }`}
              >
                <div className="flex items-start gap-6">
                  <div className="relative h-28 w-28 shrink-0 overflow-hidden border border-foreground">
                    <Image
                      src={f.photo}
                      alt={f.name}
                      fill
                      className="object-cover object-top"
                      sizes="112px"
                    />
                  </div>
                  <div>
                    <h2 className="text-display text-3xl md:text-4xl">{f.name}</h2>
                    <p className="font-mono-label mt-2 text-foreground/55">
                      {f.role}
                    </p>
                  </div>
                </div>

                <p className="text-lg text-foreground/85 text-balance">
                  {f.shortBio}
                </p>

                <p className="text-foreground/65 text-pretty">{f.longBio}</p>

                <div className="mt-auto flex flex-wrap gap-3 pt-4">
                  <a
                    href={f.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 border border-border-strong px-4 py-2 font-mono-label text-foreground/85 transition-colors hover:bg-foreground hover:text-background"
                  >
                    <Linkedin size={12} /> LinkedIn
                  </a>
                  {f.email && (
                    <a
                      href={`mailto:${f.email}`}
                      className="inline-flex items-center gap-2 border border-border-strong px-4 py-2 font-mono-label text-foreground/85 transition-colors hover:bg-foreground hover:text-background"
                    >
                      <Mail size={12} /> Email
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-b border-border py-24 md:py-32">
        <div className="container-page">
          <Reveal className="max-w-3xl">
            <SectionLabel>Founding team</SectionLabel>
            <h2 className="text-display mt-6 text-4xl md:text-6xl">
              The people behind the work.
            </h2>
          </Reveal>

          <ul className="mt-16 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {foundingTeam.map((m, i) => (
              <Reveal key={m.slug} delay={i * 0.06} as="li">
                <div className="flex h-full items-center gap-5 bg-background p-6 md:p-8">
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden border border-foreground">
                    {m.photo ? (
                      <Image
                        src={m.photo}
                        alt={m.name}
                        fill
                        className="object-cover object-top"
                        sizes="64px"
                      />
                    ) : (
                      <span
                        aria-hidden
                        className="text-display flex h-full w-full items-center justify-center text-xl text-foreground/55"
                      >
                        {initials(m.name)}
                      </span>
                    )}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-display text-xl md:text-2xl">
                      {m.name}
                    </h3>
                    {m.role && (
                      <p className="font-mono-label mt-2 text-foreground/55">
                        {m.role}
                      </p>
                    )}
                    <a
                      href={m.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex items-center gap-2 font-mono-label text-foreground/70 underline decoration-border-strong underline-offset-4 transition-colors hover:text-foreground"
                    >
                      <Linkedin size={12} /> LinkedIn
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
