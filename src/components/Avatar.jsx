import { avatarColor } from "../utils/avatarColor";

export default function Avatar({ name, size = "md", className = "" }) {
  const color = avatarColor(name);
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const sizes = {
    sm: "h-9 w-9 text-xs",
    md: "h-11 w-11 text-sm",
    lg: "h-16 w-16 text-xl",
  };

  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full font-bold shadow-sm ring-1 ring-white/60 ${sizes[size]} ${className}`}
      style={{ backgroundColor: color.bg, color: color.text }}
      aria-hidden="true"
    >
      {initials}
    </div>
  );
}
