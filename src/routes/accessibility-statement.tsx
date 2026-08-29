import { createFileRoute } from "@tanstack/react-router";
import { accessibilityStatement as a11y } from "@/data/company";

const title = "Accessibility statement | CivicActions";
const description =
  "Our WCAG 2.1 AA conformance target, how we test this site, known limitations, and how to report an accessibility barrier.";

export const Route = createFileRoute("/accessibility-statement")({
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

function List({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-4">
      {items.map((item) => (
        <li key={item.slice(0, 40)} className="border-l-4 border-teal pl-4 text-ink">
          {item}
        </li>
      ))}
    </ul>
  );
}

function Page() {
  return (
    <section className="container-1200 py-14 md:py-20">
      <div className="max-w-[680px]">
        <h1 className="text-navy">Accessibility statement</h1>
        <p className="eyebrow mt-4 text-red-dark">Last updated {a11y.updated}</p>
        <p className="mt-6 text-ink">{a11y.intro}</p>

        <div className="mt-12 space-y-12">
          <section>
            <h2 className="text-2xl text-navy md:text-3xl">Conformance status</h2>
            {a11y.conformance.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="mt-4 text-ink">
                {paragraph}
              </p>
            ))}
          </section>

          <section>
            <h2 className="text-2xl text-navy md:text-3xl">How we test</h2>
            <List items={a11y.testing} />
          </section>

          <section>
            <h2 className="text-2xl text-navy md:text-3xl">Known limitations</h2>
            <List items={a11y.limitations} />
          </section>

          <section>
            <h2 className="text-2xl text-navy md:text-3xl">Report a barrier</h2>
            {a11y.reporting.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="mt-4 text-ink">
                {paragraph}
              </p>
            ))}
            <p className="mt-6 text-base">
              <a
                href={`mailto:${a11y.contact.email}`}
                className="text-red-dark underline decoration-1 underline-offset-4 hover:text-navy"
              >
                {a11y.contact.email}
              </a>
              {" · "}
              <a
                href="tel:+15104087510"
                className="text-red-dark underline decoration-1 underline-offset-4 hover:text-navy"
              >
                {a11y.contact.phone}
              </a>
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
