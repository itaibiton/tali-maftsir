import * as React from "react";

import { cn } from "../lib/utils";

type PrimaryCtaLinkProps = React.ComponentPropsWithoutRef<"a"> & {
  icon?: React.ReactNode;
  variant?: "primary" | "secondary";
};

export function PrimaryCtaLink({
  children,
  icon,
  variant = "primary",
  className,
  ...props
}: PrimaryCtaLinkProps) {
  return (
    <a
      {...props}
      className={cn(
        "group max-w-fit relative inline-flex items-center gap-3 px-8 py-4 text-lg md:text-xl font-semibold rounded-full transition-all",
        variant === "primary"
          ? "text-white bg-gradient-to-l from-[var(--color-primary)] to-[var(--color-primary-dark)] shadow-[0_4px_20px_rgba(143,188,143,0.4)] hover:shadow-[0_6px_30px_rgba(143,188,143,0.5)]"
          : "text-[var(--color-secondary-foreground)] bg-[var(--color-secondary)] border border-[var(--color-secondary-foreground)]/15 shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_22px_rgba(0,0,0,0.12)]",
        className,
      )}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      {icon ? <span className="relative z-10">{icon}</span> : null}
    </a>
  );
}
