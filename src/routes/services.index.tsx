import { createFileRoute } from "@tanstack/react-router";
import { AngledBand } from "@/components/brand/AngledBand";
import { CtaBanner } from "@/components/brand/CtaBanner";
import { ServiceSection } from "@/components/brand/ServiceSection";
import { ServicesSectionNav } from "@/components/brand/ServicesSectionNav";
import { practices, serviceDetails, servicesHero } from "@/data/services";

const title = "Services | CivicActions";
const description =
  "Design, technology, consulting, and training services that help government agencies deliver modern, accessible public services.";

export const Route = createFileRoute("/services/")({
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
      <AngledBand color="red" className="pt-16 pb-24">
        <div className="container-1200">
          <div className="max-w-2xl bg-white p-8 md:p-12 lg:ml-[8%]">
            <h1 className="text-navy">{servicesHero.title}</h1>
            <p className="mt-6 text-ink">{servicesHero.body}</p>
          </div>
        </div>
      </AngledBand>

      <div className="container-1200 py-12 lg:py-16">
        <div className="lg:grid lg:grid-cols-[260px_1fr] lg:gap-16">
          <div className="sticky top-16 z-10 -mx-4 mb-8 bg-white px-4 lg:static lg:mx-0 lg:mb-0 lg:px-0">
            <ServicesSectionNav services={serviceDetails} />
          </div>
          <div>
            {serviceDetails.map((service) => (
              <ServiceSection key={service.id} service={service} />
            ))}
          </div>
        </div>
      </div>

      <section aria-labelledby="practices-heading" className="border-t border-gray-400 py-16">
        <div className="container-1200">
          <h2 id="practices-heading" className="text-3xl text-navy md:text-4xl">
            {practices.headline}
          </h2>
          <p className="mt-5 max-w-3xl text-ink">{practices.body}</p>
          <ul className="mt-8 flex flex-wrap gap-3">
            {practices.tags.map((tag) => (
              <li key={tag} className="border border-gray-400 bg-gray-100 px-4 py-2 text-base text-navy">
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner
        color="navy"
        headline="Start building public trust."
        subline="Let's create better government services."
        primary={{ label: "Hire us", to: "/contact" }}
        secondary={{ label: "Contracting info", to: "/contracting" }}
      />
    </>
  );
}
