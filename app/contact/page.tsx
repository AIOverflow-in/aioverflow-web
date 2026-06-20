import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/contact-form";
import { SectionLabel } from "@/components/shared/section-label";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell AI Overflow what you're working on. Book a discovery call about custom AI solutions, automation, or one of our products.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-border">
        <div aria-hidden className="absolute inset-0 line-grid opacity-60" />
        <div aria-hidden className="absolute inset-0 dot-grid dot-grid-mask" />
        <div aria-hidden className="absolute inset-0 spotlight-white" />

        <div className="container-page relative py-20 md:py-28">
          <SectionLabel>Contact</SectionLabel>
          <h1 className="text-display mt-6 text-7xl md:text-9xl">
            Let&apos;s talk.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-foreground/70 md:text-xl text-pretty">
            Tell us what you&apos;re working on. We read every message and reply
            within a few business days.
          </p>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container-page grid gap-12 py-20 md:grid-cols-12 md:gap-16 md:py-28">
          <div className="md:col-span-5">
            <div className="font-mono-label text-foreground/55">Direct</div>
            <a
              href={`mailto:${company.email}`}
              className="link-underline mt-4 inline-block max-w-full font-display text-2xl [overflow-wrap:anywhere] md:text-[clamp(1.5rem,3vw,2.25rem)]"
            >
              {company.email}
            </a>

            <div className="mt-12 grid gap-8">
              <div>
                <div className="font-mono-label text-foreground/55">Response time</div>
                <p className="mt-2 text-foreground/85">A few business days.</p>
              </div>
              <div>
                <div className="font-mono-label text-foreground/55">For partnerships</div>
                <p className="mt-2 text-foreground/85">
                  Tell us a little about who you are and what you&apos;re trying
                  to ship — we&apos;ll route it to the right team.
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
