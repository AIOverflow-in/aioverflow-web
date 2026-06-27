import { company } from "@/content/company";

// Repeated 3× so the seamless loop always has content visible at all widths.
const items = [
  ...company.recognition,
  ...company.recognition,
  ...company.recognition,
];

export function TopBanner() {
  return (
    <div
      aria-label="Where we've competed and placed"
      className="relative overflow-hidden border-b border-foreground/10 bg-foreground py-1.5"
    >
      {/* fade edges */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-foreground to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-foreground to-transparent"
      />

      <div className="flex w-max animate-marquee items-center gap-10">
        {items.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="whitespace-nowrap font-mono-label text-[11px] uppercase tracking-widest text-background/55"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
