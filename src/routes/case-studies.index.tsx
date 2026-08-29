import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { AngledBand } from "@/components/brand/AngledBand";
import { CaseStudyPhotoTile } from "@/components/brand/CaseStudyTile";
import { caseStudies, moreClients, serviceCategories } from "@/data/caseStudies";
import type { ServiceCategory } from "@/data/caseStudies";

const title = "Case Studies | CivicActions";
const description =
  "Our work impacts the daily lives of millions of people. See how we've helped agencies build resilient services at scale.";

export const Route = createFileRoute("/case-studies/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  const [selected, setSelected] = useState<ServiceCategory[]>([]);

  const shown = useMemo(
    () =>
      selected.length === 0
        ? caseStudies
        : caseStudies.filter((study) => study.categories.some((c) => selected.includes(c))),
    [selected],
  );

  function toggle(category: ServiceCategory) {
    setSelected((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    );
  }

  return (
    <>
      <AngledBand color="red" className="pt-16 pb-24">
        <div className="container-1200">
          <div className="max-w-2xl bg-white p-8 md:p-12 lg:ml-[8%]">
            <h1 className="text-navy">Work that makes a difference</h1>
            <p className="mt-6 text-ink">
              Our work impacts the daily lives of millions of people. See how we've helped agencies
              build resilient services at scale.
            </p>
          </div>
        </div>
      </AngledBand>

      <section aria-labelledby="filter-heading" className="container-1200 py-12">
        <h2 id="filter-heading" className="eyebrow text-red">
          Filter by service category
        </h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {serviceCategories.map((category) => (
            <div key={category} className="flex items-start gap-3">
              <input
                type="checkbox"
                id={`filter-${category}`}
                checked={selected.includes(category)}
                onChange={() => toggle(category)}
                className="mt-1 size-5 shrink-0 rounded-none border border-navy accent-red"
              />
              <label htmlFor={`filter-${category}`} className="text-ink">
                {category}
              </label>
            </div>
          ))}
        </div>

        <p aria-live="polite" className="mt-6 text-base text-ink">
          Showing {shown.length} of {caseStudies.length} case studies
        </p>

        <ul className="mt-8 grid list-none grid-cols-1 gap-6 p-0 md:grid-cols-2">
          {shown.map((study) => (
            <li key={study.slug}>
              <CaseStudyPhotoTile
                study={{
                  client: study.client,
                  title: study.title,
                  slug: study.slug,
                  image: study.image,
                  imageAlt: study.imageAlt,
                }}
              />
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="more-clients-heading" className="container-1200 border-t border-gray-400 py-14">
        <h2 id="more-clients-heading" className="text-3xl text-navy">
          More clients
        </h2>
        <div className="mt-8 grid gap-10 md:grid-cols-3">
          {moreClients.map((group) => (
            <div key={group.category}>
              <h3 className="eyebrow text-red">{group.category}</h3>
              <ul className="mt-4 space-y-2">
                {group.clients.map((client) => (
                  <li key={client} className="text-base text-ink">
                    {client}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
