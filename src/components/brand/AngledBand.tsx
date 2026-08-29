import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const fills = {
  red: "bg-red text-white",
  navy: "bg-navy text-white",
  gray: "bg-gray-100 text-ink",
} as const;

export type BandColor = keyof typeof fills;

/** Full-bleed band whose bottom edge is cut on a shallow ~2.5deg diagonal. */
export function AngledBand({
  children,
  color = "red",
  className,
}: {
  children: ReactNode;
  color?: BandColor;
  className?: string | undefined;
}) {
  return (
    <div
      className={cn("relative w-full pb-16", fills[color], className)}
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 2.5vw))" }}
    >
      {children}
    </div>
  );
}
