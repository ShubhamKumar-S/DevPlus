export function interpretMetrics(m, dev) {
  const firstName = dev.name.split(" ")[0];
  if (m.pattern === "Healthy flow") return [
    `${firstName} is in a solid rhythm — changes reach production quickly with no quality concerns this month.`,
    "A good time to take on higher-complexity work or mentor a junior teammate."
  ];
  if (m.pattern === "Quality watch") return [
    `${firstName}'s delivery speed looks fine, but ${m.escapedBugs} escaped bug signals a gap in test coverage or edge-case handling.`,
    "Dig into the root cause before it becomes a pattern — check test coverage on the impacted PR's change surface."
  ];
  return [
    `Cycle time is elevated at ${m.avgCycleDays.toFixed(1)} days — work is staying in progress longer than usual.`,
    "This may signal scope creep or review delays. A quick sync with the team lead can help isolate the cause."
  ];
}
