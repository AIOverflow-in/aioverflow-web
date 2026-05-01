"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { ParticleField } from "@/components/landing/particle-field";
import { CyclingWord } from "@/components/landing/cycling-word";
import { company } from "@/content/company";

const ease = [0.2, 0.8, 0.2, 1] as const;

const cycle = ["AI products", "ML systems", "AI agents", "AI tooling"] as const;

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
        <div className="grid min-h-[calc(100vh-4rem)] grid-cols-12 items-center py-20 md:py-28">
          <div className="col-span-12 md:col-span-11 lg:col-span-10">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
              className="font-mono-label text-foreground/60"
            >
              AI · Overflow / 2026
            </motion.div>

            <h1 className="text-display mt-6 text-[clamp(3rem,9vw,9rem)]">
              <HeadlineLine delay={0.05}>We build</HeadlineLine>
              <HeadlineLine delay={0.18}>
                <CyclingWord words={cycle} />
              </HeadlineLine>
              <HeadlineLine delay={0.31}>
                <span className="inline-flex items-baseline gap-3 italic">
                  that ship.
                  <motion.span
                    initial={{ opacity: 0, x: -6, y: 6 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.6, ease, delay: 0.95 }}
                    aria-hidden
                    className="hidden md:inline-block"
                  >
                    <ArrowDownRight className="h-[0.7em] w-[0.7em] shrink-0 stroke-[1.5]" />
                  </motion.span>
                </span>
              </HeadlineLine>
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.55 }}
              className="mt-10 grid max-w-3xl gap-8 md:grid-cols-[1fr_auto] md:items-end"
            >
              <p className="text-pretty text-lg text-foreground/70 md:text-xl">
                {company.description}
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <Link href="/products" className={buttonVariants({ size: "lg" })}>
                  See our products <ArrowRight size={16} />
                </Link>
                <Link
                  href="/contact"
                  className={buttonVariants({ size: "lg", variant: "outline" })}
                >
                  Work with us
                </Link>
              </div>
            </motion.div>
          </div>
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
