import { createFileRoute, Link } from "@tanstack/react-router";
import { TeamDirectory } from "@/components/brand/TeamDirectory";
import { CtaBanner } from "@/components/brand/CtaBanner";
import { teamNote } from "@/data/team";

const title = "Meet the team | CivicActions";
const description =
  "The designers, engineers, researchers, and strategists behind CivicActions — a fully remote team working from 90+ cities in the U.S. and Canada.";

export const Route = createFileRoute("/team")({
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
        <h1 className="max-w-3xl text-navy">Meet the humans of CivicActions</h1>
        <p className="mt-6 max-w-3xl text-ink">
          People who work with us say there's "something magical" about our team. We are good
          listeners, strategic thinkers, honest communicators, and problem solvers. (We're also
          cheerful and kind, which is a nice bonus.) Let's get to know each other!
        </p>
      </section>

      <section aria-labelledby="team-grid-heading" className="container-1200 pb-16 md:pb-24">
        <h2 id="team-grid-heading" className="sr-only">
          Our people
        </h2>
        <TeamDirectory />
      </section>

      <section aria-labelledby="team-remote-heading" className="border-t border-gray-400 py-16">
        <div className="container-1200 max-w-3xl">
          <h2 id="team-remote-heading" className="text-3xl text-navy md:text-4xl">
            {teamNote.headline}
          </h2>
          <p className="mt-5 text-ink">{teamNote.body}</p>
          <p className="mt-6">
            <Link
              to="/careers"
              className="text-red-dark underline decoration-1 underline-offset-4 hover:text-navy"
            >
              {teamNote.linkLabel}
            </Link>
          </p>
        </div>
      </section>

      <CtaBanner color="navy" />
    </>
  );
}
