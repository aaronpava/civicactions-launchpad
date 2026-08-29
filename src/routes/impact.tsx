import { createFileRoute } from "@tanstack/react-router";
import { CtaBanner } from "@/components/brand/CtaBanner";
import { impact } from "@/data/company";

const title = "Impact | CivicActions";
const description =
  "How we measure public benefit: mission, impact numbers, sustainability commitments, and the open source work we contribute back.";

export const Route = createFileRoute("/impact")({
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
  return (
    <>
      <section className="container-1200 py-14 md:py-20">
        <h1 className="text-navy">{impact.title}</h1>
        <p className="mt-6 max-w-3xl text-ink">{impact.intro}</p>
      </section>

      <section aria-labelledby="impact-stats-heading" className="bg-navy py-14">
        <div className="container-1200">
          <h2 id="impact-stats-heading" className="sr-only">
            Impact by the numbers
          </h2>
          <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {impact.stats.map((stat) => (
              <li key={stat.label}>
                <p className="font-serif text-4xl text-white md:text-5xl">{stat.value}</p>
                <p className="mt-3 text-base text-white/90">{stat.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="impact-mission-heading" className="container-1200 py-16">
        <div className="max-w-3xl">
          <h2 id="impact-mission-heading" className="text-3xl text-navy md:text-4xl">
            {impact.mission.title}
          </h2>
          {impact.mission.body.map((paragraph) => (
            <p key={paragraph.slice(0, 30)} className="mt-5 text-ink">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section aria-labelledby="impact-sustainability-heading" className="bg-gray-100 py-16">
        <div className="container-1200 grid gap-12 lg:grid-cols-2">
          <div>
            <h2 id="impact-sustainability-heading" className="text-3xl text-navy md:text-4xl">
              {impact.sustainability.title}
            </h2>
            <ul className="mt-6 space-y-4">
              {impact.sustainability.items.map((item) => (
                <li key={item.slice(0, 30)} className="border-l-4 border-teal pl-4 text-base text-ink">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl text-navy md:text-4xl">{impact.openSource.title}</h2>
            <p className="mt-5 text-ink">{impact.openSource.body}</p>
            <ul className="mt-6 space-y-4">
              {impact.openSource.items.map((item) => (
                <li key={item.slice(0, 30)} className="border-l-4 border-red pl-4 text-base text-ink">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBanner color="navy" />
    </>
  );
}
