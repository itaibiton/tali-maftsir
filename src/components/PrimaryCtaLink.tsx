import * as React from "react";

import { cn } from "../lib/utils";

type PrimaryCtaLinkProps = React.ComponentPropsWithoutRef<"a"> & {
  icon?: React.ReactNode;
  variant?: "primary" | "secondary" | "lime";
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
        "group max-w-fit relative inline-flex items-center gap-3 px-7 py-3.5 text-lg font-bold rounded-full transition-all duration-300 hover:-translate-y-0.5",
        variant === "primary" &&
          "text-white bg-[var(--green-deep)] shadow-[0_4px_0_0_var(--lime)] hover:shadow-[0_6px_0_0_var(--lime)] hover:bg-[var(--green)]",
        variant === "lime" &&
          "text-[var(--green-ink)] bg-[var(--lime)] shadow-[0_4px_0_0_var(--green-deep)] hover:shadow-[0_6px_0_0_var(--green-deep)] hover:bg-[#e2fbaa]",
        variant === "secondary" &&
          "text-[var(--green-deep)] bg-transparent border-2 border-[var(--green-deep)]/25 hover:border-[var(--green-deep)] hover:bg-[var(--lime-soft)]",
        className,
      )}
    >
      <span className="relative z-10">{children}</span>
      {icon ? <span className="relative z-10">{icon}</span> : null}
    </a>
  );
}
