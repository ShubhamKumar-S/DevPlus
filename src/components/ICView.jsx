import { useMemo, useState } from "react";

import { developers, metrics, months } from "../data";
import { interpretMetrics } from "../utils/interpret";
import { getNextSteps } from "../utils/nextSteps";
import Avatar from "./Avatar";
import InsightBox from "./InsightBox";
import MetricCard from "./MetricCard";
import PatternBadge from "./PatternBadge";
import TrendChart from "./TrendChart";

function trendFor(rows, key) {
  return rows.map((row) => ({ month: row.month, value: row[key] }));
}

function monthLabel(monthId) {
  return months.find((month) => month.id === monthId)?.label ?? monthId;
}

export default function ICView() {
  const [selectedDevId, setSelectedDevId] = useState(developers[0].id);
  const [selectedMonth, setSelectedMonth] = useState(months[1].id);

  const selectedDeveloper = developers.find((developer) => developer.id === selectedDevId) ?? developers[0];
  const developerMetrics = useMemo(
    () => metrics.filter((metric) => metric.devId === selectedDeveloper.id).sort((a, b) => a.month.localeCompare(b.month)),
    [selectedDeveloper.id],
  );
  const selectedMetric = developerMetrics.find((metric) => metric.month === selectedMonth) ?? developerMetrics[0];

  const metricCards = [
    {
      label: "Lead Time for Changes",
      value: selectedMetric.avgLeadDays.toFixed(1),
      unit: "days",
      subtitle: "PR opened to prod",
      trend: trendFor(developerMetrics, "avgLeadDays"),
    },
    {
      label: "Cycle Time",
      value: selectedMetric.avgCycleDays.toFixed(1),
      unit: "days",
      subtitle: "In progress to done",
      trend: trendFor(developerMetrics, "avgCycleDays"),
    },
    {
      label: "Bug Rate",
      value: selectedMetric.bugRatePct,
      unit: "%",
      subtitle: "Escaped bugs / issues",
      trend: trendFor(developerMetrics, "bugRatePct"),
    },
    {
      label: "Deployment Frequency",
      value: selectedMetric.deployments,
      unit: "deploys",
      subtitle: "Successful prod deploys",
      trend: trendFor(developerMetrics, "deployments"),
    },
    {
      label: "PR Throughput",
      value: selectedMetric.mergedPRs,
      unit: "PRs",
      subtitle: "Merged this month",
      trend: trendFor(developerMetrics, "mergedPRs"),
    },
  ];

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:flex-row lg:px-8">
      <aside className="surface rounded-lg p-3 lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:w-72 lg:overflow-y-auto">
        <div className="mb-3 px-2">
          <p className="text-xs font-bold uppercase text-slate-500 dark:text-slate-400">Developers</p>
        </div>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
          {developers.map((developer) => {
            const active = developer.id === selectedDevId;
            return (
              <button
                key={developer.id}
                type="button"
                onClick={() => setSelectedDevId(developer.id)}
                className={`flex items-center gap-3 rounded-lg border p-3 text-left transition-all duration-300 ease-[ease] hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
                  active
                    ? "border-indigo-300 bg-indigo-50 text-slate-950 dark:border-indigo-700 dark:bg-indigo-950 dark:text-white"
                    : "border-transparent text-slate-700 hover:border-slate-200 hover:bg-slate-50 dark:text-slate-300 dark:hover:border-slate-700 dark:hover:bg-slate-700/50"
                }`}
              >
                <Avatar name={developer.name} size="sm" />
                <span className="min-w-0">
                  <span className="block truncate text-sm font-bold">{developer.name}</span>
                  <span className="block text-xs text-slate-500 dark:text-slate-400">{developer.level}</span>
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-6 border-t border-slate-200 pt-4 dark:border-slate-700">
          <p className="mb-3 px-2 text-xs font-bold uppercase text-slate-500 dark:text-slate-400">Month</p>
          <div className="grid gap-2">
            {months.map((month) => {
              const active = month.id === selectedMonth;
              return (
                <button
                  key={month.id}
                  type="button"
                  onClick={() => setSelectedMonth(month.id)}
                  className={`pill-button ${
                    active
                      ? "border-indigo-500 bg-indigo-500 text-white dark:border-indigo-400 dark:bg-indigo-400 dark:text-slate-950"
                      : "border-slate-200 bg-white text-slate-600 hover:border-indigo-300 hover:text-indigo-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-indigo-500 dark:hover:text-indigo-300"
                  }`}
                >
                  {month.label}
                </button>
              );
            })}
          </div>
        </div>
      </aside>

      <main className="min-w-0 flex-1">
        <section key={`${selectedDeveloper.id}-${selectedMonth}`} className="animate-fadeUp space-y-6">
          <header className="flex flex-col gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <Avatar name={selectedDeveloper.name} size="lg" />
              <div>
                <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">{monthLabel(selectedMonth)}</p>
                <h1 className="text-2xl font-bold text-slate-950 dark:text-white sm:text-3xl">{selectedDeveloper.name}</h1>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {selectedDeveloper.level} / {selectedDeveloper.team} / {selectedDeveloper.type}
                </p>
              </div>
            </div>
            <PatternBadge pattern={selectedMetric.pattern} size="lg" />
          </header>

          <div className="flex flex-wrap gap-4">
            {metricCards.map((card, index) => (
              <MetricCard
                key={card.label}
                label={card.label}
                value={card.value}
                unit={card.unit}
                subtitle={card.subtitle}
                trend={card.trend}
                delay={index * 60}
                className="min-w-[190px]"
              />
            ))}
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <InsightBox
              title="What's likely happening"
              accent="indigo"
              items={interpretMetrics(selectedMetric, selectedDeveloper)}
            />
            <InsightBox
              title="Suggested next steps"
              accent="amber"
              numbered
              items={getNextSteps(selectedMetric)}
            />
          </div>

          <TrendChart data={developerMetrics} selectedMonth={selectedMonth} />
        </section>
      </main>
    </div>
  );
}
