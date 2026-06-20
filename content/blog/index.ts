import type { BlogPost } from "./types";
import { post as whenAiFits } from "./posts/when-ai-actually-fits";
import { post as agenticAutomation } from "./posts/agentic-automation-that-works";
import { post as maritimeAudits } from "./posts/maritime-audits-spreadsheet-to-platform";

export type { BlogPost } from "./types";

// Source list. Order here doesn't matter — getAllPosts() sorts by date.
const all: BlogPost[] = [whenAiFits, agenticAutomation, maritimeAudits];

export function getAllPosts(): BlogPost[] {
  return [...all].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): BlogPost | undefined {
  return all.find((p) => p.slug === slug);
}

// ~200 words per minute, rounded, floored at 1.
export function readingTimeMinutes(body: string): number {
  const words = body.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

export function formatPostDate(iso: string): string {
  // Deterministic, locale-stable formatting (avoids hydration drift).
  const [y, m, d] = iso.split("-").map(Number);
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  return `${months[m - 1]} ${d}, ${y}`;
}
