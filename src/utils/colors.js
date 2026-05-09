export function patternColors(pattern) {
  if (pattern === "Healthy flow")
    return { bg: "bg-green-50 dark:bg-green-950", text: "text-green-700 dark:text-green-400", border: "border-green-200 dark:border-green-800" };
  if (pattern === "Quality watch" || pattern === "Watch bottlenecks")
    return { bg: "bg-amber-50 dark:bg-amber-950", text: "text-amber-700 dark:text-amber-400", border: "border-amber-200 dark:border-amber-800" };
  return { bg: "bg-red-50 dark:bg-red-950", text: "text-red-700 dark:text-red-400", border: "border-red-200 dark:border-red-800" };
}
