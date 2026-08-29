import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { EyebrowLabel } from "./EyebrowLabel";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  as: As = "h2",
  className,
  tone = "navy",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  as?: "h1" | "h2" | "h3";
  className?: string;
  tone?: "navy" | "white";
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow ? (
        <EyebrowLabel className={tone === "white" ? "text-white" : undefined}>
          {eyebrow}
        </EyebrowLabel>
      ) : null}
      <As
        className={cn(
          "mt-2 text-3xl md:text-4xl",
          As === "h1" && "text-[length:inherit]",
          tone === "white" && "text-white",
        )}
      >
        {title}
      </As>
      {intro ? (
        <p className={cn("mt-4", tone === "white" ? "text-white/90" : "text-ink")}>{intro}</p>
      ) : null}
    </div>
  );
}
