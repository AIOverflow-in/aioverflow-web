"use client";

import { useEffect, useRef } from "react";

// A grid of dots that breathe with a sine wave and brighten near the cursor.
// Pure canvas, no deps. Pauses off-screen and respects prefers-reduced-motion.

const SPACING = 28;
const CURSOR_RADIUS = 220;

export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorRef = useRef({ x: -10000, y: -10000, smoothed: { x: -10000, y: -10000 } });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    type Dot = { x: number; y: number; base: number; phase: number };
    let dots: Dot[] = [];
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let running = true;
    let raf = 0;
    let t = 0;

    const resize = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      dots = [];
      const cols = Math.ceil(w / SPACING);
      const rows = Math.ceil(h / SPACING);
      const offsetX = (w - (cols - 1) * SPACING) / 2;
      const offsetY = (h - (rows - 1) * SPACING) / 2;
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          dots.push({
            x: offsetX + i * SPACING,
            y: offsetY + j * SPACING,
            base: 0.06 + Math.random() * 0.04,
            phase: Math.random() * Math.PI * 2,
          });
        }
      }
    };

    const draw = () => {
      if (!running) return;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;

      // Smooth cursor for buttery follow
      const c = cursorRef.current;
      c.smoothed.x += (c.x - c.smoothed.x) * 0.18;
      c.smoothed.y += (c.y - c.smoothed.y) * 0.18;

      ctx.clearRect(0, 0, w, h);

      const radius2 = CURSOR_RADIUS * CURSOR_RADIUS;

      for (let k = 0; k < dots.length; k++) {
        const d = dots[k];
        const dx = d.x - c.smoothed.x;
        const dy = d.y - c.smoothed.y;
        const dist2 = dx * dx + dy * dy;

        // Cursor falloff (radial, 0..1)
        const falloff = dist2 < radius2 ? 1 - dist2 / radius2 : 0;
        const cursorBoost = falloff * falloff; // ease-out quad

        // Idle breathing wave (skip when reduced motion)
        const wave = reduce ? 0 : (Math.sin(t * 0.0009 + d.phase) * 0.5 + 0.5) * 0.045;

        const alpha = Math.min(0.95, d.base + wave + cursorBoost * 0.85);
        const r = 1 + cursorBoost * 1.4;

        ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx.beginPath();
        ctx.arc(d.x, d.y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      t += 16;
      raf = requestAnimationFrame(draw);
    };

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      cursorRef.current.x = e.clientX - rect.left;
      cursorRef.current.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      cursorRef.current.x = -10000;
      cursorRef.current.y = -10000;
    };

    // Visibility — pause when off-screen for perf
    const io = new IntersectionObserver(
      ([entry]) => {
        running = entry.isIntersecting;
        if (running) {
          raf = requestAnimationFrame(draw);
        } else {
          cancelAnimationFrame(raf);
        }
      },
      { threshold: 0 }
    );
    io.observe(canvas);

    resize();
    raf = requestAnimationFrame(draw);

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
