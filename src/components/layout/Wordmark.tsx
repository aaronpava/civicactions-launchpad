import { Link } from "@tanstack/react-router";
import { CivicActionsLogo } from "@/components/CivicActionsLogo";
import { cn } from "@/lib/utils";

export function Wordmark({ className }: { className?: string }) {
  return (
    <Link to="/" aria-label="CivicActions home page" className="inline-block">
      <CivicActionsLogo
        className={cn("text-red h-auto", className)}
        aria-hidden="true"
      />
    </Link>
  );
}
