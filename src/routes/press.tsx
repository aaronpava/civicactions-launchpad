import { createFileRoute } from "@tanstack/react-router";
import { CtaBanner } from "@/components/brand/CtaBanner";
import { mediaContact, pressIntro, pressItems } from "@/data/company";

const title = "Press | CivicActions";
const description =
  "Press mentions and media coverage of CivicActions' work with government agencies, plus how to reach our media contact.";

export const Route = createFileRoute("/press")({
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
        <h1 className="text-navy">Press</h1>
        <p className="mt-6 max-w-2xl text-ink">{pressIntro}</p>
      </section>

      <section aria-labelledby="press-list-heading" className="container-1200 pb-16">
        <h2 id="press-list-heading" className="text-3xl text-navy md:text-4xl">
          In the news
        </h2>
        <ul className="mt-8 divide-y divide-gray-400 border-y border-gray-400">
          {pressItems.map((item) => (
            <li key={item.headline} className="py-6">
              <p className="eyebrow text-red">
                {item.outlet} · {item.date}
              </p>
              <h3 className="mt-2 text-xl">
                <a
                  href={item.href}
                  className="text-navy underline decoration-1 underline-offset-4 hover:text-red"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {item.headline}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </h3>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="media-contact-heading" className="bg-gray-100 py-16">
        <div className="container-1200 max-w-3xl">
          <h2 id="media-contact-heading" className="text-3xl text-navy md:text-4xl">
            {mediaContact.title}
          </h2>
          <p className="mt-5 text-ink">{mediaContact.body}</p>
          <p className="mt-5 text-base text-ink">
            <a
              href={`mailto:${mediaContact.email}`}
              className="text-red underline decoration-1 underline-offset-4 hover:text-red-dark"
            >
              {mediaContact.email}
            </a>
            {" · "}
            <a
              href="tel:+15104087510"
              className="text-red underline decoration-1 underline-offset-4 hover:text-red-dark"
            >
              {mediaContact.phone}
            </a>
          </p>
        </div>
      </section>

      <CtaBanner color="navy" />
    </>
  );
}
