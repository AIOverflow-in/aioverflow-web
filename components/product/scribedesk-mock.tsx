"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, FileText, Send, CheckCircle2 } from "lucide-react";

type Step = {
  id: string;
  title: string;
  speaker: "doctor" | "patient";
  text: string;
};

const transcript: Step[] = [
  { id: "1", title: "Greeting", speaker: "doctor", text: "Good morning. What brings you in today?" },
  { id: "2", title: "Chief complaint", speaker: "patient", text: "I've had a sharp headache on the right side for three days." },
  { id: "3", title: "History", speaker: "doctor", text: "Any nausea, light sensitivity, or recent stress?" },
  { id: "4", title: "Patient detail", speaker: "patient", text: "Some light sensitivity. I've been sleeping poorly this week." },
];

const note = {
  subjective: "Patient reports right-sided sharp headache for 3 days, with photophobia and recent poor sleep.",
  objective: "Alert, oriented. No focal neurological deficits.",
  assessment: "Probable tension/migraine variant. Sleep deprivation likely contributing.",
  plan: "Trial NSAIDs PRN. Sleep hygiene counseling. Follow up in 1 week if not improved.",
};

export function ScribedeskMock() {
  const [phase, setPhase] = useState<"idle" | "listening" | "drafting" | "done">("idle");
  const [activeIdx, setActiveIdx] = useState(-1);
  const timeouts = useRef<ReturnType<typeof setTimeout>[]>([]);

  const reset = () => {
    timeouts.current.forEach(clearTimeout);
    timeouts.current = [];
    setPhase("idle");
    setActiveIdx(-1);
  };

  const start = () => {
    reset();
    setPhase("listening");
    transcript.forEach((_, i) => {
      timeouts.current.push(
        setTimeout(() => setActiveIdx(i), 700 + i * 1100)
      );
    });
    timeouts.current.push(
      setTimeout(() => setPhase("drafting"), 700 + transcript.length * 1100)
    );
    timeouts.current.push(
      setTimeout(() => setPhase("done"), 700 + transcript.length * 1100 + 1600)
    );
  };

  useEffect(() => () => timeouts.current.forEach(clearTimeout), []);

  const phaseLabel = {
    idle: "Ready",
    listening: "Listening",
    drafting: "Transcribed",
    done: "Complete",
  } as const;

  return (
    <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
      <div className="flex flex-col bg-background p-6 md:p-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 font-mono-label text-foreground/65">
            <span className="grid h-7 w-7 place-items-center border border-foreground/30">
              <Mic size={12} />
            </span>
            Live consultation
          </div>
          <span className="inline-flex items-center gap-2 font-mono-label text-foreground/55">
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                phase === "listening" ? "bg-foreground animate-pulse" : "bg-foreground/30"
              }`}
            />
            {phaseLabel[phase]}
          </span>
        </div>

        <div className="mt-6 min-h-[260px] space-y-3">
          {transcript.map((line, i) => (
            <AnimatePresence key={line.id}>
              {i <= activeIdx && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-3 text-sm ${
                    line.speaker === "doctor" ? "" : "pl-6"
                  }`}
                >
                  <span className="shrink-0 border border-foreground/20 px-1.5 py-0.5 font-mono-label text-foreground/60">
                    {line.speaker}
                  </span>
                  <span className="text-foreground/90">{line.text}</span>
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>

        <div className="mt-auto pt-6">
          <button
            onClick={phase === "idle" || phase === "done" ? start : reset}
            className="inline-flex items-center gap-2 bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
          >
            {phase === "idle" || phase === "done" ? "Start consultation" : "Reset"}
          </button>
        </div>
      </div>

      <div className="flex flex-col bg-background p-6 md:p-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 font-mono-label text-foreground/65">
            <span className="grid h-7 w-7 place-items-center border border-foreground/30">
              <FileText size={12} />
            </span>
            SOAP note
          </div>
          {phase === "done" && (
            <span className="inline-flex items-center gap-1.5 font-mono-label text-foreground">
              <CheckCircle2 size={12} /> Ready to sign
            </span>
          )}
        </div>

        <div className="mt-6 min-h-[260px] space-y-5 text-sm">
          {phase !== "drafting" && phase !== "done" ? (
            <p className="text-foreground/55">
              The note will draft itself in real time as the consultation progresses.
            </p>
          ) : (
            (Object.keys(note) as (keyof typeof note)[]).map((k, i) => (
              <motion.div
                key={k}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.25 }}
              >
                <div className="font-mono-label text-foreground/55">{k}</div>
                <div className="mt-1 text-foreground/90">{note[k]}</div>
              </motion.div>
            ))
          )}
        </div>

        {phase === "done" && (
          <button className="mt-auto inline-flex w-fit items-center gap-2 border border-border-strong px-5 py-2.5 text-sm font-medium text-foreground hover:bg-foreground hover:text-background">
            <Send size={14} /> Send to EHR
          </button>
        )}
      </div>
    </div>
  );
}
