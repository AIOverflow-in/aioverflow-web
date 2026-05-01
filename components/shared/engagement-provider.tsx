"use client";

import { useEffect } from "react";
import {
  ensureSession,
  markSectionViewed,
  recordScroll,
} from "@/lib/engagement";

export function EngagementProvider() {
  useEffect(() => {
    ensureSession();

    const onScroll = () => {
      const doc = document.documentElement;
      const scrollable = Math.max(1, doc.scrollHeight - window.innerHeight);
      const pct = Math.min(1, Math.max(0, window.scrollY / scrollable));
      recordScroll(pct);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const sections = document.querySelectorAll<HTMLElement>("[data-section]");
    let observer: IntersectionObserver | null = null;
    if (sections.length > 0) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const id = (entry.target as HTMLElement).dataset.section;
              if (id) markSectionViewed(id);
            }
          });
        },
        { threshold: 0.4 }
      );
      sections.forEach((s) => observer!.observe(s));
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer?.disconnect();
    };
  }, []);

  return null;
}
