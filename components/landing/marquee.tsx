import { company } from "@/content/company";

export function Marquee() {
  const items = [...company.partners, ...company.partners];

  return (
    <section
      aria-label="Trusted by"
      data-section="partners"
      className="relative overflow-hidden border-b border-border py-12"
    >
      <div className="container-page mb-8">
        <p className="font-mono-label text-foreground/60">
          Worked with teams at
        </p>
      </div>

      <div className="relative">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent md:w-40"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent md:w-40"
        />

        <div className="flex w-max animate-marquee gap-16 px-8 md:gap-24">
          {items.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="text-display whitespace-nowrap text-3xl text-foreground/55 md:text-5xl"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
