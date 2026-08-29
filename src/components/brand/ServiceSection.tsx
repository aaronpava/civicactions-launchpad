import { Link } from "@tanstack/react-router";
import type { ServiceDetail } from "@/data/services";
import { ButtonLink } from "./Button";
import { HomeServiceIcon } from "./HomeServiceIcon";

function Check() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="square"
      aria-hidden
      className="mt-1.5 size-4 shrink-0 text-red-dark"
    >
      <path d="M4 10.5l4 4 8-9" />
    </svg>
  );
}

export function ServiceSection({ service }: { service: ServiceDetail }) {
  const headingId = `${service.id}-heading`;
  return (
    <section id={service.id} aria-labelledby={headingId} className="scroll-mt-32 py-12 first:pt-4">
      <div className="flex items-center gap-3">
        <HomeServiceIcon icon={service.icon} className="size-6 shrink-0 text-red-dark" />
        <p className="eyebrow text-red-dark">{service.eyebrow}</p>
      </div>

      <h2 id={headingId} className="mt-4 text-3xl text-navy md:text-4xl">
        {service.headline}
      </h2>
      <p className="mt-5 max-w-3xl text-ink">{service.intro}</p>

      <h3 className="mt-10 text-xl text-navy">How we've helped others</h3>
      <ul className="mt-4 space-y-5">
        {service.helped.map((item) => (
          <li key={`${item.client}-${item.result}`}>
            <p className="text-base font-bold text-navy">{item.client}</p>
            {item.href ? (
              <Link to={item.href} className="text-red-dark underline">
                {item.result}
              </Link>
            ) : (
              <p className="text-red-dark underline">{item.result}</p>
            )}
            {item.note ? <p className="mt-2 max-w-3xl text-ink">&ldquo;{item.note}&rdquo;</p> : null}
          </li>
        ))}
      </ul>

      <div className="mt-8 bg-gray-100 p-6 md:p-8">
        <h3 className="text-xl text-navy">How we can help you:</h3>
        <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
          {service.capabilities.map((cap) => (
            <li key={cap} className="flex gap-3 text-ink">
              <Check />
              <span>{cap}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <ButtonLink to={service.cta.to}>{service.cta.label}</ButtonLink>
      </div>
    </section>
  );
}
