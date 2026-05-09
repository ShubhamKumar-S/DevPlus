const accentClasses = {
  indigo: "border-l-indigo-500 dark:border-l-indigo-400",
  amber: "border-l-amber-500 dark:border-l-amber-400",
  purple: "border-l-purple-500 dark:border-l-purple-400",
};

export default function InsightBox({ title, items = [], accent = "indigo", numbered = false, body }) {
  return (
    <section className={`surface rounded-lg border-l-4 p-5 ${accentClasses[accent]}`}>
      <h2 className="text-base font-bold text-slate-950 dark:text-white">{title}</h2>
      {body ? (
        <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{body}</p>
      ) : numbered ? (
        <ol className="mt-4 space-y-3">
          {items.map((item, index) => (
            <li key={item} className="flex gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-xs font-bold text-amber-700 dark:bg-amber-950 dark:text-amber-300">
                {index + 1}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      ) : (
        <div className="mt-3 space-y-3">
          {items.map((item) => (
            <p key={item} className="text-sm leading-6 text-slate-600 dark:text-slate-300">
              {item}
            </p>
          ))}
        </div>
      )}
    </section>
  );
}
