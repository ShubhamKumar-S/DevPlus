import { useMemo, useState } from "react";

import { developers, managerSummary, metrics, months } from "../data";
import Avatar from "./Avatar";
import InsightBox from "./InsightBox";
import MetricCard from "./MetricCard";
import PatternBadge from "./PatternBadge";

function trendFor(rows, key) {
  return rows.map((row) => ({ month: row.month, value: row[key] }));
}

function managerInterpretation(summary) {
  if (summary.avgBugRatePct === 0 && summary.signal === "Healthy flow") {
    return `${summary.manager}'s team is moving with stable delivery signals and no escaped bug pressure this month. Keep the current release rhythm, then use the individual rows to spot any cycle-time drag before it grows.`;
  }

  return `${summary.manager}'s team is shipping, but the signal points to delivery friction or quality pressure across the group. Use the individual breakdown to separate review wait time from defect risk before changing goals.`;
}

export default function ManagerView() {
  const managers = useMemo(
    () => managerSummary.filter((summary, index, all) => all.findIndex((item) => item.managerId === summary.managerId) === index),
    [],
  );
  const [selectedManagerId, setSelectedManagerId] = useState(managers[0].managerId);
  const [selectedMonth, setSelectedMonth] = useState(months[1].id);

  const selectedManager = managers.find((manager) => manager.managerId === selectedManagerId) ?? managers[0];
  const managerRows = managerSummary
    .filter((summary) => summary.managerId === selectedManager.managerId)
    .sort((a, b) => a.month.localeCompare(b.month));
  const summary = managerRows.find((row) => row.month === selectedMonth) ?? managerRows[0];
  const teamDevelopers = developers.filter((developer) => developer.managerId === selectedManager.managerId);
  const teamMetrics = teamDevelopers.map((developer) => ({
    developer,
    metric: metrics.find((metric) => metric.devId === developer.id && metric.month === selectedMonth),
  }));

  const summaryCards = [
    {
      label: "Team Size",
      value: summary.teamSize,
      unit: "ICs",
      subtitle: "Active contributors",
      trend: trendFor(managerRows, "teamSize"),
    },
    {
      label: "Avg Lead Time",
      value: summary.avgLeadDays.toFixed(1),
      unit: "days",
      subtitle: "PR opened to prod",
      trend: trendFor(managerRows, "avgLeadDays"),
    },
    {
      label: "Avg Cycle Time",
      value: summary.avgCycleDays.toFixed(1),
      unit: "days",
      subtitle: "In progress to done",
      trend: trendFor(managerRows, "avgCycleDays"),
    },
    {
      label: "Avg Bug Rate",
      value: Math.round(summary.avgBugRatePct),
      unit: "%",
      subtitle: "Escaped bugs / issues",
      trend: trendFor(managerRows, "avgBugRatePct"),
      tone: summary.avgBugRatePct === 0 ? "success" : "default",
    },
  ];

  return (
    <main className="mx-auto max-w-7xl space-y-6 px-4 py-6 sm:px-6 lg:px-8">
      <section className="surface rounded-lg p-4">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-bold uppercase text-slate-500 dark:text-slate-400">Manager View</p>
            <h1 className="mt-1 text-2xl font-bold text-slate-950 dark:text-white">Team delivery signals</h1>
          </div>

          <div className="flex flex-col gap-3 md:flex-row md:items-center">
            <div className="flex flex-wrap gap-2">
              {managers.map((manager) => {
                const active = manager.managerId === selectedManager.managerId;
                return (
                  <button
                    key={manager.managerId}
                    type="button"
                    onClick={() => setSelectedManagerId(manager.managerId)}
                    className={`pill-button ${
                      active
                        ? "border-indigo-500 bg-indigo-500 text-white dark:border-indigo-400 dark:bg-indigo-400 dark:text-slate-950"
                        : "border-slate-200 bg-white text-slate-600 hover:border-indigo-300 hover:text-indigo-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-indigo-500 dark:hover:text-indigo-300"
                    }`}
                  >
                    {manager.manager}
                  </button>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-2">
              {months.map((month) => {
                const active = month.id === selectedMonth;
                return (
                  <button
                    key={month.id}
                    type="button"
                    onClick={() => setSelectedMonth(month.id)}
                    className={`pill-button ${
                      active
                        ? "border-slate-900 bg-slate-900 text-white dark:border-white dark:bg-white dark:text-slate-950"
                        : "border-slate-200 bg-white text-slate-600 hover:border-slate-400 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-slate-500"
                    }`}
                  >
                    {month.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section key={`${selectedManager.managerId}-${selectedMonth}`} className="animate-fadeUp space-y-6">
        <div className="flex flex-col gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">{summary.manager}</p>
            <h2 className="mt-1 text-xl font-bold text-slate-950 dark:text-white">{months.find((month) => month.id === selectedMonth)?.label}</h2>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Team size {summary.teamSize} across {teamDevelopers[0]?.team}</p>
          </div>
          <PatternBadge pattern={summary.signal} size="lg" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {summaryCards.map((card, index) => (
            <MetricCard
              key={card.label}
              label={card.label}
              value={card.value}
              unit={card.unit}
              subtitle={card.subtitle}
              trend={card.trend}
              tone={card.tone}
              delay={index * 70}
            />
          ))}
        </div>

        <section className="surface overflow-hidden rounded-lg">
          <div className="border-b border-slate-200 p-5 dark:border-slate-700">
            <h2 className="text-base font-bold text-slate-950 dark:text-white">Individual breakdown</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[780px] text-left">
              <thead className="bg-slate-50 text-xs font-bold uppercase text-slate-500 dark:bg-slate-900/60 dark:text-slate-400">
                <tr>
                  <th className="px-5 py-3">Developer</th>
                  <th className="px-5 py-3">Level</th>
                  <th className="px-5 py-3">Cycle Time</th>
                  <th className="px-5 py-3">Lead Time</th>
                  <th className="px-5 py-3">PRs</th>
                  <th className="px-5 py-3">Deploys</th>
                  <th className="px-5 py-3">Bug Rate</th>
                  <th className="px-5 py-3">Pattern</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                {teamMetrics.map(({ developer, metric }, index) => (
                  <tr
                    key={developer.id}
                    className="animate-fadeUp bg-white text-sm dark:bg-slate-800"
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <Avatar name={developer.name} size="sm" />
                        <div>
                          <p className="font-bold text-slate-950 dark:text-white">{developer.name}</p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">{developer.team}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-slate-600 dark:text-slate-300">{developer.level}</td>
                    <td className="px-5 py-4 font-semibold text-slate-700 dark:text-slate-200">{metric.avgCycleDays.toFixed(1)}d</td>
                    <td className="px-5 py-4 font-semibold text-slate-700 dark:text-slate-200">{metric.avgLeadDays.toFixed(1)}d</td>
                    <td className="px-5 py-4 text-slate-600 dark:text-slate-300">{metric.mergedPRs}</td>
                    <td className="px-5 py-4 text-slate-600 dark:text-slate-300">{metric.deployments}</td>
                    <td className={`px-5 py-4 font-bold ${metric.bugRatePct > 0 ? "text-red-600 dark:text-red-400" : "text-green-700 dark:text-green-400"}`}>
                      {metric.bugRatePct}%
                    </td>
                    <td className="px-5 py-4">
                      <PatternBadge pattern={metric.pattern} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <InsightBox title="Team signal" accent="purple" body={managerInterpretation(summary)} />
      </section>
    </main>
  );
}
