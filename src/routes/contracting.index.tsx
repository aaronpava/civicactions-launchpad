import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBanner } from "@/components/brand/CtaBanner";
import { contracting } from "@/data/company";

const title = "Contracting | CivicActions";
const description =
  "Contract vehicles, NAICS codes, business identifiers, and past performance for agencies looking to put CivicActions teams to work.";

export const Route = createFileRoute("/contracting/")({
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
        <h1 className="text-navy">{contracting.title}</h1>
        <p className="mt-6 max-w-3xl text-ink">{contracting.intro}</p>
      </section>

      <section aria-labelledby="vehicles-heading" className="container-1200 pb-16">
        <h2 id="vehicles-heading" className="text-3xl text-navy md:text-4xl">
          Contract vehicles
        </h2>
        <ul className="mt-8 grid gap-8 md:grid-cols-2">
          {contracting.vehicles.map((vehicle) => (
            <li key={vehicle.name} className="border border-gray-400 p-6">
              <h3 className="text-xl text-navy">{vehicle.name}</h3>
              <p className="eyebrow mt-2 text-red">{vehicle.number}</p>
              <p className="mt-3 text-base text-ink">{vehicle.description}</p>
              {vehicle.name === "NASA SEWP VI" ? (
                <p className="mt-4 text-base">
                  <Link
                    to="/contracting/sewp-vi"
                    className="text-red underline decoration-1 underline-offset-4 hover:text-red-dark"
                  >
                    How to order through SEWP VI
                  </Link>
                </p>
              ) : null}
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="codes-heading" className="bg-gray-100 py-16">
        <div className="container-1200 grid gap-12 lg:grid-cols-3">
          <div>
            <h2 id="codes-heading" className="text-2xl text-navy md:text-3xl">
              NAICS codes
            </h2>
            <ul className="mt-5 space-y-3 text-base text-ink">
              {contracting.naics.map((item) => (
                <li key={item.code}>
                  <span className="font-bold text-navy">{item.code}</span> — {item.label}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl text-navy md:text-3xl">Business identifiers</h2>
            <dl className="mt-5 space-y-3 text-base text-ink">
              {contracting.identifiers.map((item) => (
                <div key={item.label}>
                  <dt className="eyebrow text-red">{item.label}</dt>
                  <dd className="mt-1">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <h2 className="text-2xl text-navy md:text-3xl">Socioeconomic status</h2>
            <ul className="mt-5 space-y-3 text-base text-ink">
              {contracting.socioeconomic.map((item) => (
                <li key={item} className="border-l-4 border-teal pl-4">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="past-performance-heading" className="container-1200 py-16">
        <h2 id="past-performance-heading" className="text-3xl text-navy md:text-4xl">
          Past performance
        </h2>
        <ul className="mt-8 divide-y divide-gray-400 border-y border-gray-400">
          {contracting.pastPerformance.map((item) => (
            <li key={item.client} className="py-6">
              <h3 className="text-xl text-navy">{item.client}</h3>
              <p className="mt-2 text-base text-ink">{item.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <CtaBanner
        color="navy"
        headline="Ready to talk scope?"
        subline="We'll help you find the right contract path."
        primary={{ label: "Contact us", to: "/contact" }}
        secondary={{ label: "See our work", to: "/case-studies" }}
      />
    </>
  );
}
