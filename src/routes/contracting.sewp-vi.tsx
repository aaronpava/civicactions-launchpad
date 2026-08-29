import { createFileRoute } from "@tanstack/react-router";
import { CtaBanner } from "@/components/brand/CtaBanner";
import { sewp } from "@/data/company";

const title = "NASA SEWP VI | CivicActions";
const description =
  "How federal agencies can order CivicActions services through NASA SEWP VI: what the vehicle covers, in-scope services, and a point of contact.";

export const Route = createFileRoute("/contracting/sewp-vi")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
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
        <p className="eyebrow text-red-dark">Contract vehicle</p>
        <h1 className="mt-3 text-navy">{sewp.title}</h1>
        <p className="mt-6 max-w-3xl text-ink">{sewp.intro}</p>
      </section>

      <section aria-labelledby="sewp-what-heading" className="container-1200 pb-16">
        <div className="max-w-3xl">
          <h2 id="sewp-what-heading" className="text-3xl text-navy md:text-4xl">
            What SEWP VI is
          </h2>
          {sewp.what.map((paragraph) => (
            <p key={paragraph.slice(0, 30)} className="mt-5 text-ink">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section aria-labelledby="sewp-order-heading" className="bg-gray-100 py-16">
        <div className="container-1200 grid gap-12 lg:grid-cols-2">
          <div>
            <h2 id="sewp-order-heading" className="text-3xl text-navy md:text-4xl">
              How to order through it
            </h2>
            <ol className="mt-6 space-y-5">
              {sewp.howToOrder.map((step, index) => (
                <li key={step.slice(0, 30)} className="flex gap-4 text-base text-ink">
                  <span aria-hidden="true" className="font-serif text-2xl text-red-dark">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h2 className="text-3xl text-navy md:text-4xl">In-scope services</h2>
            <ul className="mt-6 space-y-3 text-base text-ink">
              {sewp.inScope.map((item) => (
                <li key={item} className="border-l-4 border-red pl-4">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="sewp-contact-heading" className="container-1200 py-16">
        <div className="max-w-3xl">
          <h2 id="sewp-contact-heading" className="text-3xl text-navy md:text-4xl">
            Point of contact
          </h2>
          <p className="mt-5 text-base text-ink">
            <span className="font-bold text-navy">{sewp.contact.name}</span>, {sewp.contact.role}
          </p>
          <p className="mt-3 text-base">
            <a
              href={`mailto:${sewp.contact.email}`}
              className="text-red-dark underline decoration-1 underline-offset-4 hover:text-navy"
            >
              {sewp.contact.email}
            </a>
            {" · "}
            <a
              href="tel:+15104087510"
              className="text-red-dark underline decoration-1 underline-offset-4 hover:text-navy"
            >
              {sewp.contact.phone}
            </a>
          </p>
        </div>
      </section>

      <CtaBanner
        color="navy"
        headline="Have a requirement in mind?"
        subline="Send it over and we'll confirm scope fit."
        primary={{ label: "Contact us", to: "/contact" }}
        secondary={{ label: "All contract vehicles", to: "/contracting" }}
      />
    </>
  );
}
