import { createFileRoute } from "@tanstack/react-router";
import { PageStub } from "@/components/brand/PageStub";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Impact | CivicActions" },
      { name: "description", content: "How our work serves the public good." },
      { property: "og:title", content: "Impact | CivicActions" },
      { property: "og:description", content: "How our work serves the public good." },
    ],
  }),
  component: Page,
});

function Page() {
  return <PageStub title="Our impact" intro="How our work serves the public good." />;
}
