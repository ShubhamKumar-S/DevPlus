import { useEffect, useState } from "react";

import ICView from "./components/ICView";
import ManagerView from "./components/ManagerView";
import Navbar from "./components/Navbar";

function getSavedDarkMode() {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem("devpulse-dark") === "true";
}

function App() {
  const [activeView, setActiveView] = useState("ic");
  const [darkMode, setDarkMode] = useState(getSavedDarkMode);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    window.localStorage.setItem("devpulse-dark", darkMode ? "true" : "false");
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-100 text-slate-900 transition-all duration-300 ease-[ease] dark:bg-slate-900 dark:text-slate-100">
      <Navbar
        activeView={activeView}
        onViewChange={setActiveView}
        darkMode={darkMode}
        onToggleDark={() => setDarkMode((current) => !current)}
      />
      {activeView === "ic" ? <ICView /> : <ManagerView />}
    </div>
  );
}

export default App;
