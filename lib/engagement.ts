// Client-side engagement tracking. Persists across in-site navigations via
// sessionStorage; visit number lives in localStorage.

const SESSION_KEY = "aio:engagement";
const VISIT_KEY = "aio:visit-number";

export type EngagementState = {
  startedAt: number;
  maxScroll: number; // 0..1
  sections: string[];
  visitNumber: number;
};

function isClient() {
  return typeof window !== "undefined";
}

function read(): EngagementState | null {
  if (!isClient()) return null;
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    return raw ? (JSON.parse(raw) as EngagementState) : null;
  } catch {
    return null;
  }
}

function write(state: EngagementState) {
  if (!isClient()) return;
  try {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(state));
  } catch {
    // sessionStorage may be unavailable (private mode, etc.) — ignore
  }
}

export function ensureSession(): EngagementState {
  const existing = read();
  if (existing) return existing;

  // First page load of this session: bump visit number
  let visitNumber = 1;
  try {
    const stored = parseInt(localStorage.getItem(VISIT_KEY) ?? "0", 10);
    visitNumber = (Number.isFinite(stored) ? stored : 0) + 1;
    localStorage.setItem(VISIT_KEY, String(visitNumber));
  } catch {
    // localStorage unavailable — treat as 1st visit
  }

  const fresh: EngagementState = {
    startedAt: Date.now(),
    maxScroll: 0,
    sections: [],
    visitNumber,
  };
  write(fresh);
  return fresh;
}

export function markSectionViewed(id: string) {
  const s = read();
  if (!s) return;
  if (!s.sections.includes(id)) {
    s.sections.push(id);
    write(s);
  }
}

export function recordScroll(pct: number) {
  const s = read();
  if (!s) return;
  if (pct > s.maxScroll) {
    s.maxScroll = pct;
    write(s);
  }
}

export function getEngagement(): EngagementState | null {
  return read();
}
