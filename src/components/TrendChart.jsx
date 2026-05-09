import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { months } from "../data";

function labelForMonth(month) {
  return months.find((item) => item.id === month)?.shortLabel ?? month;
}

export default function TrendChart({ data, selectedMonth }) {
  const chartData = data.map((row) => ({
    label: labelForMonth(row.month),
    lead: row.avgLeadDays,
    cycle: row.avgCycleDays,
    active: row.month === selectedMonth,
  }));

  return (
    <section className="surface rounded-lg p-5">
      <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-base font-bold text-slate-950 dark:text-white">Lead Time vs Cycle Time</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">Grouped by month, selected month emphasized.</p>
        </div>
      </div>

      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} margin={{ top: 8, right: 8, bottom: 0, left: 0 }} barGap={8}>
            <CartesianGrid vertical={false} stroke="var(--chart-grid)" strokeDasharray="3 3" />
            <XAxis
              dataKey="label"
              tick={{ fill: "var(--chart-axis)", fontSize: 12 }}
              tickLine={false}
              axisLine={{ stroke: "var(--chart-grid)" }}
            />
            <YAxis
              width={40}
              tick={{ fill: "var(--chart-axis)", fontSize: 12 }}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}d`}
            />
            <Tooltip
              cursor={{ fill: "var(--chart-muted)", opacity: 0.18 }}
              contentStyle={{
                backgroundColor: "var(--tooltip-bg)",
                borderColor: "var(--tooltip-border)",
                color: "var(--tooltip-text)",
                borderRadius: 8,
              }}
              labelStyle={{ color: "var(--tooltip-text)", fontWeight: 700 }}
              formatter={(value, name) => [`${Number(value).toFixed(2)} days`, name]}
            />
            <Legend wrapperStyle={{ color: "var(--tooltip-text)", fontSize: 12 }} iconType="circle" />
            <Bar dataKey="lead" name="Lead Time" radius={[6, 6, 0, 0]}>
              {chartData.map((entry) => (
                <Cell key={`lead-${entry.label}`} fill="var(--chart-lead)" opacity={entry.active ? 1 : 0.35} />
              ))}
            </Bar>
            <Bar dataKey="cycle" name="Cycle Time" radius={[6, 6, 0, 0]}>
              {chartData.map((entry) => (
                <Cell key={`cycle-${entry.label}`} fill="var(--chart-cycle)" opacity={entry.active ? 1 : 0.35} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
