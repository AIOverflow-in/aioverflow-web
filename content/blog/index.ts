import type { BlogPost } from "./types";
import { post as maritimeTechDigitizingShipAudits } from "./posts/2026-06-22-maritime-tech-digitizing-ship-audits";
import { post as aiInHealthcareWhatCliniciansTrustReject } from "./posts/2026-06-23-ai-in-healthcare-what-clinicians-trust-reject";
import { post as whyEvalsMatterMoreThanPromptEngineering } from "./posts/2026-06-24-why-evals-matter-more-than-prompt-engineering";
import { post as aiImplementationPlaybookEarlyStageStartups } from "./posts/2026-06-25-ai-implementation-playbook-early-stage-startups";
import { post as reducingClinicalAdminLoadAiScribesIndia } from "./posts/2026-06-26-reducing-clinical-admin-load-ai-scribes-india";
import { post as agenticAiHumanApproval } from "./posts/2026-06-27-agentic-ai-human-approval";
import { post as whyAiProjectsFailOneQuestionPredictsSuccess } from "./posts/2026-06-29-why-ai-projects-fail-one-question-predicts-success";
import { post as agenticAutomationForOperationsTeams2025 } from "./posts/2026-06-30-agentic-automation-for-operations-teams-2025";
import { post as aiClinicalDocumentationReducingBurnout } from "./posts/2026-07-01-ai-clinical-documentation-reducing-burnout";
import { post as howToScopeAnAiProjectCorrectly } from "./posts/2026-07-02-how-to-scope-an-ai-project-correctly";
import { post as hiddenCostsRunningLlmsProduction } from "./posts/2026-07-03-hidden-costs-running-llms-production";
import { post as pharmacyPosSystemsIndiaMoveBeyondExcel } from "./posts/2026-07-06-pharmacy-pos-systems-india-move-beyond-excel";
import { post as documentAutomationUnglamorousHighRoi } from "./posts/2026-07-07-document-automation-unglamorous-high-roi";
import { post as evaluateAiVendorWithoutGettingSoldTo } from "./posts/2026-07-08-evaluate-ai-vendor-without-getting-sold-to";
import { post as differenceBetweenAiAgentsAndCopilots } from "./posts/2026-07-09-difference-between-ai-agents-and-copilots";
import { post as smallVsFrontierModelPracticalGuide } from "./posts/2026-07-10-small-vs-frontier-model-practical-guide";
import { post as aiInHealthcareClinicianTrustIssues } from "./posts/2026-07-13-ai-in-healthcare-clinician-trust-issues";
import { post as evalsVsPromptEngineeringProductionAi } from "./posts/2026-07-14-evals-vs-prompt-engineering-production-ai";
import { post as aiImplementationPlaybookStartups } from "./posts/2026-07-15-ai-implementation-playbook-startups";
import { post as reducingClinicalAdminAiScribesIndianHospitals } from "./posts/2026-07-16-reducing-clinical-admin-ai-scribes-indian-hospitals";
import { post as agenticAiHumanApproval } from "./posts/2026-07-17-agentic-ai-human-approval";
import { post as agenticAutomationOperationsTeams2025 } from "./posts/2026-07-20-agentic-automation-operations-teams-2025";
import { post as aiReducingPhysicianBurnoutClinicalDocs } from "./posts/2026-07-21-ai-reducing-physician-burnout-clinical-docs";
import { post as howToScopeAiProjectBeforeCoding } from "./posts/2026-07-22-how-to-scope-ai-project-before-coding";
import { post as agenticAutomationThatWorks } from "./posts/agentic-automation-that-works";
import { post as maritimeAuditsSpreadsheetToPlatform } from "./posts/maritime-audits-spreadsheet-to-platform";
import { post as whenAiActuallyFits } from "./posts/when-ai-actually-fits";

export type { BlogPost } from "./types";

// Source list. Order here doesn't matter — getAllPosts() sorts by date.
const all: BlogPost[] = [maritimeTechDigitizingShipAudits, aiInHealthcareWhatCliniciansTrustReject, whyEvalsMatterMoreThanPromptEngineering, aiImplementationPlaybookEarlyStageStartups, reducingClinicalAdminLoadAiScribesIndia, agenticAiHumanApproval, whyAiProjectsFailOneQuestionPredictsSuccess, agenticAutomationForOperationsTeams2025, aiClinicalDocumentationReducingBurnout, howToScopeAnAiProjectCorrectly, hiddenCostsRunningLlmsProduction, pharmacyPosSystemsIndiaMoveBeyondExcel, documentAutomationUnglamorousHighRoi, evaluateAiVendorWithoutGettingSoldTo, differenceBetweenAiAgentsAndCopilots, smallVsFrontierModelPracticalGuide, aiInHealthcareClinicianTrustIssues, evalsVsPromptEngineeringProductionAi, aiImplementationPlaybookStartups, reducingClinicalAdminAiScribesIndianHospitals, agenticAiHumanApproval, agenticAutomationOperationsTeams2025, aiReducingPhysicianBurnoutClinicalDocs, howToScopeAiProjectBeforeCoding, agenticAutomationThatWorks, maritimeAuditsSpreadsheetToPlatform, whenAiActuallyFits];

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
