import type { Metadata } from "next";
import { PostBody } from "@/components/blog/post-body";
import { SectionLabel } from "@/components/shared/section-label";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "Terms",
  description: "The terms for using the AI Overflow website.",
  alternates: { canonical: "/terms" },
};

// NOTE(chethan): plain-language terms for the marketing site. Have a lawyer
// review before relying on these, and confirm the registered entity name.
const body = `_Last updated: June 2026._

These terms cover your use of this website. They don't govern any paid engagement — that's covered by a separate agreement we'll sign with you.

## Using this site

This site is for information about AI Overflow, our products, and our services. You're welcome to read, share, and link to it. Please don't misuse it — no attempts to break, scrape abusively, or disrupt it.

## Our content

The content, design, and brands on this site (including ScribeDesk and RetailOS) belong to AI Overflow. Our blog posts are ours; feel free to quote them with attribution and a link.

## No warranty

The site and its content are provided "as is," for general information. Nothing here is a binding offer, a guarantee of results, or professional (legal, medical, or financial) advice. Anything we build for you is governed by the contract we sign, not by this page.

## Products

ScribeDesk and RetailOS are described here for information. Access to the products themselves is governed by their own terms, provided when you sign up or start a pilot.

## Contact

Questions about these terms? Email [${company.email}](mailto:${company.email}). We're based in ${company.location}.`;

export default function TermsPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-border">
        <div aria-hidden className="absolute inset-0 line-grid opacity-60" />
        <div aria-hidden className="absolute inset-0 dot-grid dot-grid-mask" />
        <div aria-hidden className="absolute inset-0 spotlight-white" />
        <div className="container-page relative py-20 md:py-28">
          <SectionLabel>Legal</SectionLabel>
          <h1 className="text-display mt-6 text-6xl md:text-8xl">Terms.</h1>
        </div>
      </section>
      <div className="container-page py-16 md:py-24">
        <PostBody body={body} />
      </div>
    </>
  );
}
