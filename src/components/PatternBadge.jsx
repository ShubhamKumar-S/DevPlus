import { patternColors } from "../utils/colors";

export default function PatternBadge({ pattern, size = "sm" }) {
  const colors = patternColors(pattern);
  const sizeClass = size === "lg" ? "px-4 py-2 text-sm sm:text-base" : "px-3 py-1 text-xs";

  return (
    <span className={`inline-flex items-center rounded-full border font-semibold ${sizeClass} ${colors.bg} ${colors.text} ${colors.border}`}>
      {pattern}
    </span>
  );
}
