"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ease = [0.2, 0.8, 0.2, 1] as const;

export function CyclingWord({
  words,
  intervalMs = 2400,
}: {
  words: readonly string[];
  intervalMs?: number;
}) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (words.length <= 1) return;
    const id = setInterval(
      () => setIdx((i) => (i + 1) % words.length),
      intervalMs
    );
    return () => clearInterval(id);
  }, [words.length, intervalMs]);

  return (
    <span className="relative inline-block overflow-hidden align-baseline">
      {/* Sizing ghost: fills the natural width of the longest word so the
          following content doesn't reflow as the active word changes. */}
      <span aria-hidden className="invisible block whitespace-nowrap">
        {words.reduce((a, b) => (b.length > a.length ? b : a), words[0])}
      </span>

      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={words[idx]}
          initial={{ y: "110%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-110%", opacity: 0 }}
          transition={{ duration: 0.55, ease }}
          className="absolute inset-0 whitespace-nowrap"
        >
          {words[idx]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
