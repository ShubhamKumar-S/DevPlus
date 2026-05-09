import { Line, LineChart, ResponsiveContainer } from "recharts";

export default function MetricCard({
  label,
  value,
  unit,
  subtitle,
  trend = [],
  delay = 0,
  tone = "default",
  className = "",
}) {
  const toneClass =
    tone === "success"
      ? "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950"
      : "border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800";
  const valueClass =
    tone === "success"
      ? "text-green-700 dark:text-green-400"
      : "text-slate-950 dark:text-white";

  return (
    <article
      className={`min-h-[156px] flex-1 rounded-lg border p-4 shadow-sm animate-countUp transition-all duration-300 ease-[ease] hover:-translate-y-0.5 hover:border-indigo-300 dark:hover:border-indigo-500 ${toneClass} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex h-full flex-col justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase text-slate-500 dark:text-slate-400">{label}</p>
          <div className="mt-2 flex items-baseline gap-1">
            <span className={`text-3xl font-bold ${valueClass}`}>{value}</span>
            {unit ? <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">{unit}</span> : null}
          </div>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{subtitle}</p>
        </div>

        <div className="h-11">
          {trend.length > 1 ? (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trend} margin={{ top: 8, right: 4, bottom: 4, left: 4 }}>
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="var(--chart-spark)"
                  strokeWidth={3}
                  dot={false}
                  isAnimationActive={false}
                />
              </LineChart>
            </ResponsiveContainer>
          ) : null}
        </div>
      </div>
    </article>
  );
}
