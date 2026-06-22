"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Receipt, AlertTriangle, Boxes } from "lucide-react";

// A pharmacy-counter bill — what RetailOS actually is. Synthetic data, clearly
// a preview, not a live system.
const lineItems = [
  { name: "Dolo 650 Tablet", batch: "DL2291", expiry: "08/27", qty: 2, mrp: 30.0, gst: 12 },
  { name: "Azithral 500 (3 tab)", batch: "AZ8843", expiry: "11/26", qty: 1, mrp: 132.0, gst: 12 },
  { name: "Cetzine Syrup 60ml", batch: "CT1190", expiry: "02/26", qty: 1, mrp: 89.5, gst: 12 },
  { name: "Volini Spray 100g", batch: "VL5521", expiry: "05/26", qty: 1, mrp: 215.0, gst: 18 },
];

const inventoryAlerts = [
  { name: "Cetzine Syrup 60ml", note: "Near expiry — 2 batches expire in < 60 days", tone: "warn" as const },
  { name: "Dolo 650 Tablet", note: "Below reorder level — 18 strips left", tone: "warn" as const },
  { name: "Pan-D Capsule", note: "Out of stock at MG Road branch", tone: "warn" as const },
];

function gstBreakup() {
  // group by gst rate
  const map = new Map<number, number>();
  for (const it of lineItems) {
    const taxable = (it.mrp * it.qty) / (1 + it.gst / 100);
    const tax = it.mrp * it.qty - taxable;
    map.set(it.gst, (map.get(it.gst) ?? 0) + tax);
  }
  return [...map.entries()].sort((a, b) => a[0] - b[0]);
}

export function RetailosMock() {
  const [tab, setTab] = useState<"bill" | "inventory">("bill");

  const subtotal = lineItems.reduce((s, it) => s + it.mrp * it.qty, 0);
  const taxes = gstBreakup();
  const totalTax = taxes.reduce((s, [, t]) => s + t, 0);

  const fmt = (n: number) =>
    "₹" + n.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <div className="border border-border bg-background">
      <div className="flex items-center justify-between border-b border-border px-6 py-4 md:px-8">
        <div className="flex items-center gap-3 font-mono-label text-foreground/65">
          <span className="grid h-7 w-7 place-items-center border border-foreground/30">
            <Receipt size={12} />
          </span>
          Sell OS · Billing
        </div>
        <div className="flex gap-px border border-border-strong">
          <button
            onClick={() => setTab("bill")}
            className={`px-4 py-2 font-mono-label transition-colors ${
              tab === "bill"
                ? "bg-foreground text-background"
                : "text-foreground/60 hover:text-foreground"
            }`}
          >
            Counter bill
          </button>
          <button
            onClick={() => setTab("inventory")}
            className={`px-4 py-2 font-mono-label transition-colors ${
              tab === "inventory"
                ? "bg-foreground text-background"
                : "text-foreground/60 hover:text-foreground"
            }`}
          >
            Stock alerts
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {tab === "bill" ? (
          <motion.div
            key="bill"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="p-6 md:p-8"
          >
            <div className="overflow-x-auto border border-border">
              <table className="w-full text-sm">
                <thead className="border-b border-border font-mono-label text-foreground/55">
                  <tr>
                    <th className="px-4 py-3 text-left font-medium">Item</th>
                    <th className="px-4 py-3 text-left font-medium">Batch</th>
                    <th className="px-4 py-3 text-left font-medium">Exp</th>
                    <th className="px-4 py-3 text-right font-medium">Qty</th>
                    <th className="px-4 py-3 text-right font-medium">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {lineItems.map((it, i) => {
                    const soon = ["02/26", "05/26"].includes(it.expiry);
                    return (
                      <tr
                        key={it.batch}
                        className={i !== lineItems.length - 1 ? "border-b border-border" : ""}
                      >
                        <td className="px-4 py-3 text-foreground/90">{it.name}</td>
                        <td className="px-4 py-3 font-mono text-xs text-foreground/65">{it.batch}</td>
                        <td className="px-4 py-3">
                          <span
                            className={`inline-flex items-center gap-1 font-mono text-xs ${
                              soon ? "text-foreground" : "text-foreground/65"
                            }`}
                          >
                            {it.expiry}
                            {soon && <AlertTriangle size={10} />}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-right">{it.qty}</td>
                        <td className="px-4 py-3 text-right font-medium">
                          {fmt(it.mrp * it.qty)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* GST breakup + total */}
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="border border-border p-5">
                <div className="font-mono-label text-foreground/55">GST breakup</div>
                <div className="mt-3 space-y-2 text-sm">
                  {taxes.map(([rate, tax]) => (
                    <div key={rate} className="flex justify-between text-foreground/70">
                      <span>GST @ {rate}%</span>
                      <span>{fmt(tax)}</span>
                    </div>
                  ))}
                  <div className="flex justify-between border-t border-border pt-2 text-foreground/70">
                    <span>Total tax</span>
                    <span>{fmt(totalTax)}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between border border-border-strong p-5">
                <div className="flex justify-between text-sm text-foreground/70">
                  <span>Subtotal (incl. tax)</span>
                  <span>{fmt(subtotal)}</span>
                </div>
                <div className="mt-4 flex items-baseline justify-between">
                  <span className="font-mono-label text-foreground/55">Amount due</span>
                  <span className="text-display text-3xl">{fmt(subtotal)}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="inventory"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="p-6 md:p-8"
          >
            <div className="flex items-center gap-2 font-mono-label text-foreground/55">
              <Boxes size={12} /> Live stock signals across branches
            </div>
            <div className="mt-5 overflow-hidden border border-border">
              {inventoryAlerts.map((a, i) => (
                <div
                  key={a.name}
                  className={`flex items-start gap-3 p-4 ${
                    i !== inventoryAlerts.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center border border-foreground/40">
                    <AlertTriangle size={12} />
                  </span>
                  <div>
                    <div className="text-sm text-foreground/90">{a.name}</div>
                    <div className="text-sm text-foreground/55">{a.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
