function SunIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20 14.4A7.6 7.6 0 0 1 9.6 4a8 8 0 1 0 10.4 10.4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Navbar({ activeView, onViewChange, darkMode, onToggleDark }) {
  const tabs = [
    { id: "ic", label: "IC Dashboard" },
    { id: "manager", label: "Manager View" },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-gray-900 text-white shadow-sm transition-all duration-300 ease-[ease] dark:bg-gray-950">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <button
            type="button"
            className="flex items-center gap-3 rounded-full text-left focus:outline-none focus:ring-2 focus:ring-indigo-300"
            onClick={() => onViewChange("ic")}
            aria-label="Go to IC dashboard"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500 text-sm font-bold text-white dark:bg-indigo-400 dark:text-gray-950">
              DP
            </span>
            <span>
              <span className="block text-lg font-bold leading-tight">DevPulse</span>
              <span className="block text-xs font-medium text-slate-300">Developer productivity signals</span>
            </span>
          </button>

          <button
            type="button"
            onClick={onToggleDark}
            className="relative inline-flex h-9 w-16 items-center rounded-full border border-white/15 bg-white/10 p-1 text-slate-200 transition-all duration-300 ease-[ease] hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-indigo-300 lg:hidden"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            <span className={`absolute h-7 w-7 rounded-full bg-white transition-transform duration-300 ease-[ease] ${darkMode ? "translate-x-7" : "translate-x-0"}`} />
            <span className={`relative z-10 flex h-7 w-7 items-center justify-center ${darkMode ? "text-slate-400" : "text-indigo-600"}`}>
              <SunIcon />
            </span>
            <span className={`relative z-10 flex h-7 w-7 items-center justify-center ${darkMode ? "text-indigo-600" : "text-slate-400"}`}>
              <MoonIcon />
            </span>
          </button>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between lg:gap-4">
          <div className="inline-flex rounded-full bg-white/10 p-1">
            {tabs.map((tab) => {
              const active = activeView === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => onViewChange(tab.id)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ease-[ease] focus:outline-none focus:ring-2 focus:ring-indigo-300 ${
                    active
                      ? "bg-white text-gray-900 shadow-sm"
                      : "text-slate-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={onToggleDark}
            className="relative hidden h-9 w-16 items-center rounded-full border border-white/15 bg-white/10 p-1 text-slate-200 transition-all duration-300 ease-[ease] hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-indigo-300 lg:inline-flex"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            <span className={`absolute h-7 w-7 rounded-full bg-white transition-transform duration-300 ease-[ease] ${darkMode ? "translate-x-7" : "translate-x-0"}`} />
            <span className={`relative z-10 flex h-7 w-7 items-center justify-center ${darkMode ? "text-slate-400" : "text-indigo-600"}`}>
              <SunIcon />
            </span>
            <span className={`relative z-10 flex h-7 w-7 items-center justify-center ${darkMode ? "text-indigo-600" : "text-slate-400"}`}>
              <MoonIcon />
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}
