import type { Metadata } from "next";
import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";
import { team, initials } from "@/content/founders";
import { Reveal } from "@/components/shared/reveal";
import { SectionLabel } from "@/components/shared/section-label";

export const metadata: Metadata = {
  title: "Team",
  description:
    "The AI Overflow team — co-founders Subhanu Sankar Roy and Chethan Reddy, with design, core AI engineering, strategy, and forward deployed engineering.",
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
          <h1 className="text-display mt-6 text-6xl md:text-9xl">Team.</h1>
          <p className="mt-8 max-w-2xl text-lg text-foreground/70 md:text-xl">
            The people who design, build, and deploy every system we ship.
          </p>
        </div>
      </section>

      <section className="border-b border-border">
        <ul className="grid gap-px border-t border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {team.map((m, i) => (
            <Reveal key={m.slug} delay={i * 0.06} as="li">
              <article className="flex h-full flex-col gap-6 bg-background p-8 md:p-10">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden border border-foreground">
                  {m.photo ? (
                    <Image
                      src={m.photo}
                      alt={m.name}
                      fill
                      className="object-cover object-top"
                      sizes="80px"
                    />
                  ) : (
                    <span
                      aria-hidden
                      className="text-display flex h-full w-full items-center justify-center text-2xl text-foreground/55"
                    >
                      {initials(m.name)}
                    </span>
                  )}
                </div>

                <div>
                  <h2 className="text-display text-2xl md:text-3xl">{m.name}</h2>
                  <p className="font-mono-label mt-2 text-foreground/55">
                    {m.role}
                  </p>
                </div>

                <p className="text-foreground/75 text-pretty">{m.shortBio}</p>

                <div className="mt-auto flex flex-wrap gap-3 pt-2">
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 border border-border-strong px-4 py-2 font-mono-label text-foreground/85 transition-colors hover:bg-foreground hover:text-background"
                  >
                    <Linkedin size={12} /> LinkedIn
                  </a>
                  {m.email && (
                    <a
                      href={`mailto:${m.email}`}
                      className="inline-flex items-center gap-2 border border-border-strong px-4 py-2 font-mono-label text-foreground/85 transition-colors hover:bg-foreground hover:text-background"
                    >
                      <Mail size={12} /> Email
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </section>
    </>
  );
}
