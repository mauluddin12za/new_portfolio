import { ComponentType } from "react";

export function ContactItem({
  icon: Icon,
  label,
  value,
}: {
  icon: ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="size-10 grid place-items-center rounded-xl bg-primary/10 ring-1 ring-primary/20 shrink-0">
        <Icon className="size-4 text-primary" />
      </div>

      <div>
        <div className="text-xs text-muted-foreground uppercase tracking-wider">
          {label}
        </div>

        <div className="font-medium">{value}</div>
      </div>
    </div>
  );
}
