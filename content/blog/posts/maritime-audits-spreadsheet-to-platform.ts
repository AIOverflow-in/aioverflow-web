import type { BlogPost } from "../types";

export const post: BlogPost = {
  slug: "from-spreadsheets-to-a-platform-maritime-audits",
  title: "From spreadsheets to a platform: digitizing maritime audits",
  description:
    "A case study in custom AI-era software: how we replaced a maritime consultancy's email-and-spreadsheet workflow with one platform built for a non-technical team.",
  date: "2026-05-27",
  authorSlug: "chethan-reddy",
  tags: ["Case study", "Custom software", "Workflow automation"],
  body: `Not every project starts with AI. Some start with a spreadsheet that's quietly running an entire business — and the right first move is to replace the workflow, cleanly, before anything intelligent gets layered on top.

This is one of those. A maritime audit consultancy came to us running every vessel inspection through email threads, file-transfer links, and a shared spreadsheet. It worked, until it didn't scale.

## The problem

Every audit lived in three disconnected places:

- **Email** for coordination with clients and ship owners.
- **File-transfer links** for sending large inspection reports and raw data.
- **A spreadsheet** as the single source of truth for what stage every inspection was in.

The result was the usual entropy: links that expired, reports that got buried, and a spreadsheet that only one person fully understood. Clients had no way to get their own reports without asking.

## The hard constraint

The most important fact about this project had nothing to do with technology: the primary user was a senior, non-technical maritime professional — decades of expertise, zero patience for software that fights back.

So the entire design leaned the other way: plain language, large readable type, and a layout that mirrored the spreadsheet the team already knew. We weren't introducing a new mental model. We were giving the existing one a better home.

## What we built

A single web platform that tracks every audit end to end:

| Capability | What it does |
|---|---|
| Audit lifecycle | Each inspection moves through eight tracked stages, from enquiry to completed — every transition logged. |
| Five audit types | Internal, remote navigation, incident investigation, pre-purchase, and ship-recycling audits. |
| Per-vessel access | Clients see only the specific ships they're granted — not everything their company touches. |
| Self-serve reports | Clients download their own final reports and upload feedback. No more chasing links. |
| Audit log | Every change — stage, file, access grant — is recorded with who did it and when. |

Files moved to proper object storage with resumable uploads and short-lived signed download links. Notifications fire automatically when a report is ready or feedback comes in.

## What we learned (again)

- **Replace the workflow, don't just digitize it.** The win wasn't putting the spreadsheet online. It was collapsing three tools into one and making the client self-serve.
- **Design for the actual user, not the average one.** Building for a specific non-technical expert made the product *better* for everyone — clearer, calmer, harder to get wrong.
- **Earn the right to add intelligence.** With the workflow now structured and the data clean, the obvious next steps — summarizing reports, flagging anomalies across inspections — become genuinely easy. That's not an accident; it's the payoff for getting the foundation right first.

This is what we mean by custom solutions: we don't hand over a prototype and leave. We build the thing, put it in production, and operate it — to the same standard we hold our own products.

Have a workflow that's outgrown its spreadsheet? [That's a good place to start a conversation.](/contact)`,
};
