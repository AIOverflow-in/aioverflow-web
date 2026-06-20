import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { SectionLabel } from "@/components/shared/section-label";
import { buttonVariants } from "@/components/ui/button";
import { company } from "@/content/company";

export function CTA() {
  return (
    <section
      data-section="cta"
      className="relative border-b border-border py-24 md:py-36"
    >
      <div className="container-page">
        <Reveal>
          <div className="grid items-end gap-12 md:grid-cols-[1.4fr_1fr]">
            <div>
              <SectionLabel number="05">Get in touch</SectionLabel>
              <h2 className="text-display mt-6 text-6xl md:text-8xl">
                Have a problem?
                <br />
                Let&apos;s see if AI fits.
              </h2>
            </div>
            <div className="md:pb-4">
              <p className="text-lg text-foreground/70 text-balance">
                Partner with us, pilot one of our products, or just say hi —
                we read every message.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className={buttonVariants({ size: "lg" })}
                >
                  Get in touch <ArrowUpRight size={16} />
                </Link>
                <a
                  href={`mailto:${company.email}`}
                  className="link-underline font-mono-label text-foreground/70 hover:text-foreground"
                >
                  {company.email}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
