import { company } from "@/content/company";

export function Marquee() {
  const items = [...company.recognition, ...company.recognition];

  return (
    <section
      aria-label="Recognition"
      data-section="recognition"
      className="relative overflow-hidden border-b border-border py-16 md:py-24"
    >
      <div className="container-page mb-10 md:mb-12">
        <p className="font-mono-label text-foreground/60">
          Where we&apos;ve competed &amp; placed
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

        <div className="flex w-max animate-marquee items-center gap-16 px-8 py-2 leading-none md:gap-24">
          {items.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="text-display whitespace-nowrap text-3xl leading-none text-foreground/55 md:text-5xl"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
