import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function EyebrowLabel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string | undefined;
}) {
  return <p className={cn("eyebrow text-red", className)}>{children}</p>;
}
