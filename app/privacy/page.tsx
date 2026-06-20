import type { Metadata } from "next";
import { PostBody } from "@/components/blog/post-body";
import { SectionLabel } from "@/components/shared/section-label";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "What AI Overflow collects when you contact us, why, and how we handle it.",
  alternates: { canonical: "/privacy" },
};

// NOTE(chethan): this reflects what the site's code actually does today. Have it
// reviewed against your jurisdiction (DPDP Act 2023) before relying on it legally.
const body = `_Last updated: June 2026._

AI Overflow ("we") builds and operates AI products and custom AI solutions. This page explains, in plain language, what we collect through this website and why. We keep it minimal.

## What we collect when you contact us

When you submit the contact form, we receive what you type — your **name, email, company, and message** — so we can reply.

Along with it, we record some **context to help us respond well**: the page you were on, how you found us (referrer / campaign tags), and basic device and approximate-location signals derived from your request (city-level, via our hosting provider). We use this only to understand and route your enquiry — never to sell or advertise to you.

## If you enable Do Not Track

If your browser sends a **Do Not Track** signal, we honor it: we collect only your message and the page you were on, and skip the device, connection, and engagement signals entirely.

## Third parties

- **Email** is delivered through [Resend](https://resend.com), which processes your message to send it to us.
- **Analytics** uses Vercel Analytics, which is cookieless and does not build advertising profiles.
- We do **not** send your IP address to any third-party enrichment service by default.

We do not sell your data, run advertising trackers, or share your information except with the processors above that are needed to operate the site.

## Your choices

You can ask us to access or delete the information you've sent us at any time — just email [${company.email}](mailto:${company.email}).

## Contact

Questions about privacy? Email [${company.email}](mailto:${company.email}).`;

export default function PrivacyPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-border">
        <div aria-hidden className="absolute inset-0 line-grid opacity-60" />
        <div aria-hidden className="absolute inset-0 dot-grid dot-grid-mask" />
        <div aria-hidden className="absolute inset-0 spotlight-white" />
        <div className="container-page relative py-20 md:py-28">
          <SectionLabel>Legal</SectionLabel>
          <h1 className="text-display mt-6 text-6xl md:text-8xl">Privacy.</h1>
        </div>
      </section>
      <div className="container-page py-16 md:py-24">
        <PostBody body={body} />
      </div>
    </>
  );
}
