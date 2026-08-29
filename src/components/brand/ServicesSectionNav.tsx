import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import type { ServiceDetail } from "@/data/services";

export function ServicesSectionNav({ services }: { services: ServiceDetail[] }) {
  const [active, setActive] = useState(services[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: 0 },
    );
    for (const s of services) {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [services]);

  return (
    <nav aria-label="Services page sections" className="lg:sticky lg:top-28">
      <ul className="flex gap-2 overflow-x-auto border-b border-gray-400 pb-3 lg:flex-col lg:gap-0 lg:overflow-visible lg:border-b-0 lg:pb-0">
        {services.map((s) => {
          const isActive = active === s.id;
          return (
            <li key={s.id} className="shrink-0 lg:shrink">
              <a
                href={`#${s.id}`}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "block whitespace-nowrap px-4 py-2 text-base lg:whitespace-normal lg:border-l-4 lg:py-3",
                  isActive
                    ? "border-red bg-gray-100 font-bold text-navy lg:bg-transparent"
                    : "border-gray-400 text-ink hover:text-red-dark",
                )}
              >
                {s.eyebrow}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
