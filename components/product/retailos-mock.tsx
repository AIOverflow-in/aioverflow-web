"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Package, AlertTriangle, TrendingUp, Sparkles } from "lucide-react";

const orders = [
  { id: "ORD-3041", customer: "Aanya P.", channel: "Shopify", value: "₹4,290", status: "ok" },
  { id: "ORD-3042", customer: "Rohan M.", channel: "Amazon", value: "₹12,800", status: "flagged" },
  { id: "ORD-3043", customer: "Sara K.", channel: "Shopify", value: "₹2,150", status: "ok" },
  { id: "ORD-3044", customer: "Vikram B.", channel: "Retail", value: "₹6,500", status: "ok" },
];

const askExamples = [
  "How are sales trending this week?",
  "Which SKUs need restocking?",
  "What flagged the Amazon order?",
];

const answers: Record<string, string> = {
  "How are sales trending this week?":
    "Up 18% week-over-week. Best mover: Cotton Tee (Black, M) — 142 units. Slowest: Linen Pant (Beige, XL) — 3 units.",
  "Which SKUs need restocking?":
    "Three SKUs below safety stock: Cotton Tee (Black, M), Cotton Tee (White, S), Mug — Walnut. Suggested reorder qty: 200 / 150 / 80.",
  "What flagged the Amazon order?":
    "ORD-3042 was flagged: shipping address mismatch with billing, and order value 3.2× this customer's average. Recommended: hold and verify.",
};

export function RetailosMock() {
  const [tab, setTab] = useState<"orders" | "ask">("orders");
  const [question, setQuestion] = useState<string | null>(null);

  return (
    <div className="border border-border bg-background">
      <div className="flex items-center justify-between border-b border-border px-6 py-4 md:px-8">
        <div className="flex items-center gap-3 font-mono-label text-foreground/65">
          <span className="grid h-7 w-7 place-items-center border border-foreground/30">
            <Package size={12} />
          </span>
          RetailOS · Operations
        </div>
        <div className="flex gap-px border border-border-strong">
          <button
            onClick={() => setTab("orders")}
            className={`px-4 py-2 font-mono-label transition-colors ${
              tab === "orders"
                ? "bg-foreground text-background"
                : "text-foreground/60 hover:text-foreground"
            }`}
          >
            Order desk
          </button>
          <button
            onClick={() => setTab("ask")}
            className={`px-4 py-2 font-mono-label transition-colors ${
              tab === "ask"
                ? "bg-foreground text-background"
                : "text-foreground/60 hover:text-foreground"
            }`}
          >
            Ask RetailOS
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {tab === "orders" ? (
          <motion.div
            key="orders"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="p-6 md:p-8"
          >
            <div className="grid grid-cols-3 gap-px overflow-hidden border border-border bg-border">
              <Stat
                icon={<TrendingUp size={12} />}
                label="Orders today"
                value="128"
                trend="+18%"
              />
              <Stat
                icon={<Package size={12} />}
                label="Pending fulfillment"
                value="14"
              />
              <Stat
                icon={<AlertTriangle size={12} />}
                label="Flagged"
                value="1"
                tone="warn"
              />
            </div>

            <div className="mt-6 overflow-hidden border border-border">
              <table className="w-full text-sm">
                <thead className="border-b border-border font-mono-label text-foreground/55">
                  <tr>
                    <th className="px-4 py-3 text-left font-medium">Order</th>
                    <th className="px-4 py-3 text-left font-medium">Customer</th>
                    <th className="px-4 py-3 text-left font-medium">Channel</th>
                    <th className="px-4 py-3 text-right font-medium">Value</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((o, i) => (
                    <tr
                      key={o.id}
                      className={
                        i !== orders.length - 1 ? "border-b border-border" : ""
                      }
                    >
                      <td className="px-4 py-3 font-mono text-xs text-foreground/85">
                        {o.id}
                      </td>
                      <td className="px-4 py-3">{o.customer}</td>
                      <td className="px-4 py-3 text-foreground/70">
                        <span className="inline-flex items-center gap-2">
                          {o.channel}
                          {o.status === "flagged" && (
                            <span className="inline-flex items-center gap-1 border border-foreground px-1.5 py-0.5 font-mono-label text-foreground">
                              <AlertTriangle size={10} /> Flagged
                            </span>
                          )}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-right font-medium">
                        {o.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="ask"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="p-6 md:p-8"
          >
            <div className="flex flex-wrap gap-2">
              {askExamples.map((q) => (
                <button
                  key={q}
                  onClick={() => setQuestion(q)}
                  className={`border px-3 py-1.5 font-mono-label transition-colors ${
                    question === q
                      ? "border-foreground bg-foreground text-background"
                      : "border-border-strong text-foreground/65 hover:border-foreground hover:text-foreground"
                  }`}
                >
                  {q}
                </button>
              ))}
            </div>

            <div className="mt-6 min-h-[180px] border border-border p-6 text-sm">
              {question ? (
                <motion.div
                  key={question}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-3"
                >
                  <div className="flex items-center gap-2 font-mono-label text-foreground">
                    <Sparkles size={12} /> RetailOS Copilot
                  </div>
                  <p className="text-foreground/90 text-pretty">{answers[question]}</p>
                </motion.div>
              ) : (
                <p className="text-foreground/55">
                  Pick a question above to see how RetailOS answers in plain English.
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Stat({
  icon,
  label,
  value,
  trend,
  tone = "default",
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  trend?: string;
  tone?: "default" | "warn";
}) {
  return (
    <div className="bg-background p-5">
      <div className="flex items-center gap-2 font-mono-label text-foreground/55">
        {icon}
        {label}
      </div>
      <div className="mt-3 flex items-baseline gap-3">
        <span className="text-display text-3xl">{value}</span>
        {trend && (
          <span className="font-mono-label text-foreground/70">{trend}</span>
        )}
        {tone === "warn" && (
          <span className="font-mono-label text-foreground/70">!</span>
        )}
      </div>
    </div>
  );
}
