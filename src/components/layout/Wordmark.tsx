import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Wordmark({ className }: { className?: string }) {
  return (
    <Link to="/" aria-label="CivicActions home page" className="inline-block">
      <span
        className={cn("font-serif font-black tracking-tight text-red", className)}
        style={{ fontSize: "2rem", letterSpacing: "-0.03em" }}
      >
        CivicActions
      </span>
    </Link>
  );
}
