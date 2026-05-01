import { Reveal } from "@/components/shared/reveal";
import { company } from "@/content/company";

export function PullQuote() {
  return (
    <section
      data-section="quote"
      className="relative isolate overflow-hidden border-b border-border py-32 md:py-44"
    >
      <div aria-hidden className="absolute inset-0 dot-grid dot-grid-mask opacity-70" />
      <div aria-hidden className="absolute inset-0 spotlight-white" />

      <div className="container-page relative">
        <Reveal>
          <figure className="mx-auto max-w-5xl text-center">
            <span
              aria-hidden
              className="text-display block text-7xl leading-none text-foreground/15 md:text-9xl"
            >
              &ldquo;
            </span>
            <blockquote className="text-display -mt-4 text-3xl text-balance md:text-5xl lg:text-6xl">
              {company.pullQuote.text}
            </blockquote>
            <figcaption className="mt-10 font-mono-label text-foreground/55">
              — {company.pullQuote.attribution}
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
