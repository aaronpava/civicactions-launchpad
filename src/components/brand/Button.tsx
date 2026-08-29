import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type ButtonTone = "red" | "white" | "navy";
export type ButtonVariant = "solid" | "outline";

const base =
  "nav-label inline-flex items-center justify-center gap-2 rounded-none px-6 py-3.5 transition-colors";

const styles: Record<ButtonTone, Record<ButtonVariant, string>> = {
  red: {
    solid: "bg-red text-white hover:bg-red-dark",
    outline: "border border-red text-red-dark hover:bg-red hover:text-white",
  },
  white: {
    solid: "bg-white text-navy hover:bg-gray-200",
    outline: "border border-white text-white hover:bg-white hover:text-navy",
  },
  navy: {
    solid: "bg-navy text-white hover:bg-ink",
    outline: "border border-navy text-navy hover:bg-navy hover:text-white",
  },
};

type BaseProps = {
  children: ReactNode;
  tone?: ButtonTone;
  variant?: ButtonVariant;
  className?: string;
};

export function Button({
  children,
  tone = "red",
  variant = "solid",
  className,
  ...rest
}: BaseProps & ComponentProps<"button">) {
  return (
    <button className={cn(base, styles[tone][variant], className)} {...rest}>
      {children}
    </button>
  );
}

export function ButtonLink({
  children,
  tone = "red",
  variant = "solid",
  className,
  to,
  ...rest
}: BaseProps & { to: string } & Omit<ComponentProps<typeof Link>, "to" | "children">) {
  return (
    <Link to={to} className={cn(base, styles[tone][variant], className)} {...rest}>
      {children}
    </Link>
  );
}
