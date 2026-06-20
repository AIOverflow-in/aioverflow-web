import type { Metadata } from "next";
import { Linkedin, Mail } from "lucide-react";
import { founders } from "@/content/founders";
import { Reveal } from "@/components/shared/reveal";
import { SectionLabel } from "@/components/shared/section-label";

export const metadata: Metadata = {
  title: "Founders",
  description:
    "Meet the co-founders behind AI Overflow — Subhanu Sankar Roy and Chethan Reddy — who build and operate production AI systems.",
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
            Two co-founders who&apos;ve been shipping AI products together for
            years.
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
                  <div
                    aria-hidden
                    className="grid h-20 w-20 shrink-0 place-items-center border border-foreground text-display text-2xl"
                  >
                    {f.name
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
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
    </>
  );
}
