import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { SectionLabel } from "@/components/shared/section-label";
import { caseStudies } from "@/content/products";

const statusLabel: Record<string, string> = {
  live: "Live",
  beta: "In beta",
  "coming-soon": "Coming soon",
};

export function Work() {
  return (
    <section
      id="work"
      data-section="work"
      className="relative border-b border-border py-24 md:py-36"
    >
      <div className="container-page">
        <Reveal className="max-w-3xl">
          <SectionLabel number="03">Custom solutions</SectionLabel>
          <h2 className="text-display mt-6 text-5xl md:text-7xl">
            Built for clients. Running in production.
          </h2>
          <p className="mt-6 max-w-xl text-lg text-foreground/70">
            The same standard we hold our own products to — applied to a
            specific business problem, then operated, not just delivered.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
          {caseStudies.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.08}>
              <article className="flex h-full flex-col bg-background p-8 md:p-12">
                <div className="flex items-start justify-between gap-4">
                  <div className="font-mono-label text-foreground/55">
                    {c.industry} · {statusLabel[c.status]}
                  </div>
                  <div className="font-mono-label text-foreground/40">
                    {c.client}
                  </div>
                </div>

                <h3 className="text-display mt-10 text-4xl md:text-5xl">
                  {c.name}
                </h3>
                <p className="mt-4 text-lg text-foreground/85 text-balance">
                  {c.summary}
                </p>
                <p className="mt-5 text-sm text-foreground/60 text-pretty">
                  {c.detail}
                </p>

                <ul className="mt-8 flex flex-col gap-2 border-t border-border pt-6">
                  {c.outcomes.map((o) => (
                    <li
                      key={o}
                      className="flex gap-3 text-sm text-foreground/70"
                    >
                      <span aria-hidden className="text-foreground/40">
                        —
                      </span>
                      {o}
                    </li>
                  ))}
                </ul>

                {c.url && (
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline mt-6 inline-flex items-center gap-1.5 font-mono-label text-foreground/60 hover:text-foreground"
                  >
                    Visit site <ArrowUpRight size={12} />
                  </a>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
