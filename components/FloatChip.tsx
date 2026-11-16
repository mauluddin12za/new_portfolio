import { ComponentType } from "react";

export function FloatChip({
  className = "",
  delay = "0s",
  icon: Icon,
  label,
}: {
  className?: string;
  delay?: string;
  icon: ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <div
      className={`absolute glass rounded-full px-3 py-2 flex items-center gap-2 text-xs animate-float ${className}`}
      style={{ animationDelay: delay }}
    >
      <Icon className="size-3.5 text-primary" />
      <span className="font-medium">{label}</span>
    </div>
  );
}
