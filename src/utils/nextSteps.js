export function getNextSteps(m) {
  if (m.bugRatePct > 0) return [
    "Identify the root cause of the escaped bug (test gap, edge case, or config) and add a regression test.",
    "Break similar large PRs into smaller, reviewable units to reduce defect surface area."
  ];
  if (m.avgCycleDays > 5.5) return [
    "Scope tickets more tightly — target issues completable within 3–4 days of active work.",
    "Separate your coding time from reviewer wait time to know where the delay actually lives."
  ];
  if (m.avgLeadDays > 4) return [
    "Investigate whether the deployment pipeline queue is inflating your lead time.",
    "Batch related changes into fewer, safer deploys with a senior teammate."
  ];
  return [
    "Keep PRs small and focused — your current rhythm is healthy.",
    "Volunteer to review one extra PR this week to lift the team's overall throughput."
  ];
}
