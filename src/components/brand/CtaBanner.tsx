import { cn } from "@/lib/utils";
import { ButtonLink } from "./Button";

export function CtaBanner({
  color = "navy",
  headline = "Let's build a public success story.",
  subline = "Get in touch to start.",
  primary = { label: "Put us to work", to: "/contact" },
  secondary = { label: "Join our team", to: "/careers" },
}: {
  color?: "red" | "navy";
  headline?: string;
  subline?: string;
  primary?: { label: string; to: string };
  secondary?: { label: string; to: string };
}) {
  return (
    <section
      aria-labelledby="cta-banner-heading"
      className={cn("w-full py-14", color === "red" ? "bg-red" : "bg-navy")}
    >
      <div className="container-1200 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="min-w-0">
          <h2 id="cta-banner-heading" className="text-3xl text-white md:text-4xl">
            {headline}
          </h2>
          <p className="mt-3 text-white">{subline}</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <ButtonLink to={primary.to} tone="white" variant="solid">
            {primary.label}
          </ButtonLink>
          <ButtonLink to={secondary.to} tone="white" variant="outline">
            {secondary.label}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
