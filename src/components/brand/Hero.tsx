import type { ReactNode } from "react";
import { CircleMotif } from "./CircleMotif";

export function Hero({
  title,
  intro,
  eyebrow,
  actions,
  withMotif = true,
}: {
  title: ReactNode;
  intro?: ReactNode;
  eyebrow?: string;
  actions?: ReactNode;
  withMotif?: boolean;
}) {
  return (
    <section className="container-1200 py-14 md:py-20">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
        <div className="min-w-0">
          {eyebrow ? <p className="eyebrow mb-4 text-red-dark">{eyebrow}</p> : null}
          <h1 className="text-navy">{title}</h1>
          {intro ? <p className="mt-6 max-w-2xl text-ink">{intro}</p> : null}
          {actions ? <div className="mt-8 flex flex-wrap gap-4">{actions}</div> : null}
        </div>
        {withMotif ? (
          <div className="flex justify-center lg:justify-end">
            <CircleMotif priority alt="The dome of the United States Capitol" />
          </div>
        ) : null}
      </div>
    </section>
  );
}
