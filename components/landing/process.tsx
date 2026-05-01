import { Reveal } from "@/components/shared/reveal";
import { SectionLabel } from "@/components/shared/section-label";
import { company } from "@/content/company";

export function Process() {
  return (
    <section
      data-section="process"
      className="relative border-b border-border py-24 md:py-36"
    >
      <div className="container-page">
        <Reveal className="max-w-3xl">
          <SectionLabel number="02">How we work</SectionLabel>
          <h2 className="text-display mt-6 text-5xl md:text-7xl">
            Fewer ideas, finished better.
          </h2>
        </Reveal>

        <ol className="mt-16 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
          {company.process.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.1} as="li">
              <div className="flex h-full flex-col gap-8 bg-background p-8 md:p-10">
                <div className="text-display text-7xl text-foreground/30 md:text-8xl">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-display text-2xl md:text-3xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-base text-foreground/65 text-pretty">
                    {step.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
