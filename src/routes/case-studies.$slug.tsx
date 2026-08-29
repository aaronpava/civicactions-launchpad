import { createFileRoute } from "@tanstack/react-router";
import { PageStub } from "@/components/brand/PageStub";

export const Route = createFileRoute("/case-studies/$slug")({
  head: () => ({
    meta: [
      { title: "Case study | CivicActions" },
      { name: "description", content: "A CivicActions case study." },
      { property: "og:title", content: "Case study | CivicActions" },
      { property: "og:description", content: "A CivicActions case study." },
    ],
  }),
  component: Page,
});

function Page() {
  const { slug } = Route.useParams();
  return <PageStub title="Case study" intro={`Detail page for "${slug}" is coming soon.`} />;
}
