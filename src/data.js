export const developers = [
  { id: "DEV-001", name: "Ava Chen", managerId: "MGR-01", manager: "Rina Kapoor", team: "Payments API", type: "backend", level: "SDE2" },
  { id: "DEV-002", name: "Noah Patel", managerId: "MGR-01", manager: "Rina Kapoor", team: "Payments API", type: "backend", level: "SDE1" },
  { id: "DEV-006", name: "Ishan Mehta", managerId: "MGR-01", manager: "Rina Kapoor", team: "Payments API", type: "backend", level: "SDE3" },
  { id: "DEV-003", name: "Mia Lopez", managerId: "MGR-02", manager: "Samir Gupta", team: "Checkout Web", type: "frontend", level: "SDE1" },
  { id: "DEV-004", name: "Lucas Reed", managerId: "MGR-02", manager: "Samir Gupta", team: "Checkout Web", type: "frontend", level: "SDE2" },
  { id: "DEV-008", name: "Zara Khan", managerId: "MGR-02", manager: "Samir Gupta", team: "Checkout Web", type: "frontend", level: "SDE1" },
  { id: "DEV-005", name: "Emma Roy", managerId: "MGR-03", manager: "Priya Nair", team: "Mobile Growth", type: "mobile", level: "SDE1" },
  { id: "DEV-007", name: "Owen Brooks", managerId: "MGR-03", manager: "Priya Nair", team: "Mobile Growth", type: "mobile", level: "SDE2" },
];

export const metrics = [
  { devId: "DEV-001", month: "2026-03", issuesDone: 2, mergedPRs: 2, deployments: 2, escapedBugs: 0, avgCycleDays: 3.95, avgLeadDays: 2.40, bugRatePct: 0, pattern: "Healthy flow" },
  { devId: "DEV-001", month: "2026-04", issuesDone: 2, mergedPRs: 2, deployments: 2, escapedBugs: 0, avgCycleDays: 3.90, avgLeadDays: 3.35, bugRatePct: 0, pattern: "Healthy flow" },
  { devId: "DEV-002", month: "2026-03", issuesDone: 2, mergedPRs: 2, deployments: 2, escapedBugs: 0, avgCycleDays: 5.90, avgLeadDays: 4.30, bugRatePct: 0, pattern: "Healthy flow" },
  { devId: "DEV-002", month: "2026-04", issuesDone: 2, mergedPRs: 2, deployments: 2, escapedBugs: 1, avgCycleDays: 5.40, avgLeadDays: 3.75, bugRatePct: 50, pattern: "Quality watch" },
  { devId: "DEV-006", month: "2026-03", issuesDone: 2, mergedPRs: 2, deployments: 2, escapedBugs: 0, avgCycleDays: 3.75, avgLeadDays: 2.35, bugRatePct: 0, pattern: "Healthy flow" },
  { devId: "DEV-006", month: "2026-04", issuesDone: 2, mergedPRs: 2, deployments: 2, escapedBugs: 1, avgCycleDays: 3.70, avgLeadDays: 2.35, bugRatePct: 50, pattern: "Quality watch" },
  { devId: "DEV-003", month: "2026-03", issuesDone: 2, mergedPRs: 2, deployments: 2, escapedBugs: 1, avgCycleDays: 4.05, avgLeadDays: 3.85, bugRatePct: 50, pattern: "Quality watch" },
  { devId: "DEV-003", month: "2026-04", issuesDone: 2, mergedPRs: 2, deployments: 2, escapedBugs: 0, avgCycleDays: 3.05, avgLeadDays: 3.55, bugRatePct: 0, pattern: "Healthy flow" },
  { devId: "DEV-004", month: "2026-03", issuesDone: 2, mergedPRs: 2, deployments: 2, escapedBugs: 0, avgCycleDays: 3.85, avgLeadDays: 2.10, bugRatePct: 0, pattern: "Healthy flow" },
  { devId: "DEV-004", month: "2026-04", issuesDone: 2, mergedPRs: 2, deployments: 2, escapedBugs: 0, avgCycleDays: 3.55, avgLeadDays: 2.90, bugRatePct: 0, pattern: "Healthy flow" },
  { devId: "DEV-008", month: "2026-03", issuesDone: 2, mergedPRs: 2, deployments: 2, escapedBugs: 0, avgCycleDays: 3.80, avgLeadDays: 3.15, bugRatePct: 0, pattern: "Healthy flow" },
  { devId: "DEV-008", month: "2026-04", issuesDone: 2, mergedPRs: 2, deployments: 2, escapedBugs: 1, avgCycleDays: 3.85, avgLeadDays: 3.40, bugRatePct: 50, pattern: "Quality watch" },
  { devId: "DEV-005", month: "2026-03", issuesDone: 2, mergedPRs: 2, deployments: 2, escapedBugs: 1, avgCycleDays: 5.95, avgLeadDays: 4.95, bugRatePct: 50, pattern: "Quality watch" },
  { devId: "DEV-005", month: "2026-04", issuesDone: 2, mergedPRs: 2, deployments: 2, escapedBugs: 0, avgCycleDays: 6.50, avgLeadDays: 4.70, bugRatePct: 0, pattern: "Needs review" },
  { devId: "DEV-007", month: "2026-03", issuesDone: 2, mergedPRs: 2, deployments: 2, escapedBugs: 1, avgCycleDays: 4.55, avgLeadDays: 4.30, bugRatePct: 50, pattern: "Quality watch" },
  { devId: "DEV-007", month: "2026-04", issuesDone: 2, mergedPRs: 2, deployments: 2, escapedBugs: 0, avgCycleDays: 4.80, avgLeadDays: 3.65, bugRatePct: 0, pattern: "Healthy flow" },
];

export const managerSummary = [
  { managerId: "MGR-01", manager: "Rina Kapoor", month: "2026-03", teamSize: 3, avgLeadDays: 3.02, avgCycleDays: 4.53, avgBugRatePct: 0, signal: "Healthy flow" },
  { managerId: "MGR-01", manager: "Rina Kapoor", month: "2026-04", teamSize: 3, avgLeadDays: 3.15, avgCycleDays: 4.33, avgBugRatePct: 33, signal: "Watch bottlenecks" },
  { managerId: "MGR-02", manager: "Samir Gupta", month: "2026-03", teamSize: 3, avgLeadDays: 3.03, avgCycleDays: 3.90, avgBugRatePct: 17, signal: "Watch bottlenecks" },
  { managerId: "MGR-02", manager: "Samir Gupta", month: "2026-04", teamSize: 3, avgLeadDays: 3.28, avgCycleDays: 3.48, avgBugRatePct: 17, signal: "Watch bottlenecks" },
  { managerId: "MGR-03", manager: "Priya Nair", month: "2026-03", teamSize: 2, avgLeadDays: 4.63, avgCycleDays: 5.25, avgBugRatePct: 50, signal: "Watch bottlenecks" },
  { managerId: "MGR-03", manager: "Priya Nair", month: "2026-04", teamSize: 2, avgLeadDays: 4.18, avgCycleDays: 5.65, avgBugRatePct: 0, signal: "Healthy flow" },
];

export const months = [
  { id: "2026-03", label: "March 2026", shortLabel: "Mar" },
  { id: "2026-04", label: "April 2026", shortLabel: "Apr" },
];
