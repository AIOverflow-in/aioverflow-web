"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { ParticleField } from "@/components/landing/particle-field";
import { CyclingWord } from "@/components/landing/cycling-word";
import { company } from "@/content/company";

const ease = [0.2, 0.8, 0.2, 1] as const;

const cycle = ["works", "ships", "automates", "scales"] as const;

// Reveal helper: clip-path mask + slight Y for headline lines.
function HeadlineLine({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <span className={`block overflow-hidden pb-[0.06em] ${className ?? ""}`}>
      <motion.span
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.95, ease, delay }}
        className="block"
      >
        {children}
      </motion.span>
    </span>
  );
}

export function Hero() {
  return (
    <section
      data-section="hero"
      className="relative isolate overflow-hidden border-b border-border"
    >
      {/* Layered backgrounds: line grid, dot grid mask, animated particle field, spotlight */}
      <div aria-hidden className="absolute inset-0 line-grid opacity-40" />
      <ParticleField />
      <div aria-hidden className="absolute inset-0 spotlight-white" />

      <div className="container-page relative">
        <div className="grid min-h-[calc(100vh-4rem)] grid-cols-12 items-center gap-x-8 gap-y-14 py-20 md:py-28">
          {/* Left: headline, pitch, CTAs */}
          <div className="col-span-12 lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
              className="font-mono-label text-foreground/60"
            >
              AI · Overflow / 2026
            </motion.div>

            <h1 className="text-display mt-6 text-[clamp(2.75rem,7vw,7rem)]">
              <HeadlineLine delay={0.05}>We build</HeadlineLine>
              <HeadlineLine delay={0.18}>AI that</HeadlineLine>
              <HeadlineLine delay={0.31}>
                <span className="italic">
                  <CyclingWord words={cycle} />
                </span>
              </HeadlineLine>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.55 }}
              className="mt-8 max-w-xl text-pretty text-lg text-foreground/70 md:text-xl"
            >
              We build custom AI for businesses — and run our own AI products.
              We start by finding where it actually fits.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.68 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Link href="/contact" className={buttonVariants({ size: "lg" })}>
                Work with us <ArrowRight size={16} />
              </Link>
              <Link
                href="/services"
                className={buttonVariants({ size: "lg", variant: "outline" })}
              >
                What we do
              </Link>
            </motion.div>
          </div>

          {/* Right: orienting index (large screens) — fills the space and
              states the dual identity up front */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.8 }}
            className="hidden lg:flex lg:col-span-5 lg:justify-end"
          >
            <div className="w-full max-w-sm border-l border-border pl-8">
              <p className="font-mono-label text-foreground/50">For your business</p>
              <p className="mt-3 text-pretty text-foreground/85">
                Custom AI — workflows, agentic automation, and full products,
                built and run together with you.
              </p>
              <div className="mt-8 border-t border-border pt-6">
                <p className="font-mono-label text-foreground/50">We run our own</p>
                <ul className="mt-3 flex flex-col gap-2 text-foreground/85">
                  <li>ScribeDesk — clinical AI scribe</li>
                  <li>RetailOS — pharmacy POS</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-3 gap-6 border-t border-border py-8 md:gap-12 md:py-10"
        >
          {company.metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.9 + i * 0.08 }}
              className="flex flex-col gap-1"
            >
              <div className="text-display text-3xl md:text-5xl">{m.value}</div>
              <div className="font-mono-label text-foreground/55">{m.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Animated scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        aria-hidden
        className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block"
      >
        <div className="flex h-9 w-5 justify-center rounded-full border border-foreground/30 p-1">
          <motion.span
            animate={{ y: [0, 8, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="block h-1.5 w-0.5 rounded-full bg-foreground"
          />
        </div>
      </motion.div>
    </section>
  );
}
