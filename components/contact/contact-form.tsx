"use client";

import Link from "next/link";
import { useActionState, useRef } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { sendContactMessage, type ContactState } from "@/app/contact/actions";
import { collectClientContext } from "@/lib/client-context";

const initial: ContactState = { status: "idle" };

export function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContactMessage, initial);
  const contextRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    if (!contextRef.current) return;
    try {
      const ctx = collectClientContext();
      contextRef.current.value = JSON.stringify(ctx);
    } catch {
      // If context collection fails for any reason, submit without it —
      // the server side still attaches IP/geo/UA from request headers.
      contextRef.current.value = "";
    }
  };

  return (
    <form
      action={formAction}
      onSubmit={handleSubmit}
      className="border border-border bg-background p-6 md:p-10"
    >
      <input type="hidden" name="context" ref={contextRef} />

      <div className="space-y-6">
        <Field label="Name" name="name" required placeholder="Jane Doe" />
        <Field label="Email" name="email" type="email" required placeholder="jane@company.com" />
        <Field label="Company" name="company" placeholder="Optional" />
        <div>
          <label htmlFor="message" className="font-mono-label text-foreground/65">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="What are you working on?"
            className="mt-2 w-full border-0 border-b border-border-strong bg-transparent px-0 py-3 text-base text-foreground placeholder:text-foreground/40 focus:border-foreground focus:outline-none focus:ring-0"
          />
        </div>

        <button
          type="submit"
          disabled={pending}
          className="inline-flex w-full items-center justify-center gap-2 bg-foreground px-5 py-4 text-base font-medium text-background transition-colors hover:bg-foreground/90 disabled:opacity-50"
        >
          {pending ? "Sending…" : (
            <>
              Send message <Send size={14} />
            </>
          )}
        </button>

        {state.status === "success" && (
          <p className="flex items-center gap-2 border border-border-strong p-3 font-mono-label text-foreground">
            <CheckCircle2 size={16} /> Thanks — we&apos;ll be in touch shortly.
          </p>
        )}
        {state.status === "error" && (
          <p className="flex items-center gap-2 border border-border-strong p-3 font-mono-label text-foreground">
            <AlertCircle size={16} /> {state.error}
          </p>
        )}

        <p className="text-xs text-foreground/45 text-pretty">
          When you submit, we receive your message plus some context (the page
          you were on and basic device info) to help us reply. We honor Do Not
          Track. See our{" "}
          <Link href="/privacy" className="link-underline text-foreground/70">
            privacy policy
          </Link>
          .
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="font-mono-label text-foreground/65">
        {label}
        {required && <span className="text-foreground/40"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full border-0 border-b border-border-strong bg-transparent px-0 py-3 text-base text-foreground placeholder:text-foreground/40 focus:border-foreground focus:outline-none focus:ring-0"
      />
    </div>
  );
}
