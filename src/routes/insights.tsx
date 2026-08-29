import { createFileRoute } from "@tanstack/react-router";
import { PageStub } from "@/components/brand/PageStub";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights | CivicActions" },
      { name: "description", content: "Ideas on open technology and human-centered government." },
      { property: "og:title", content: "Insights | CivicActions" },
      { property: "og:description", content: "Ideas on open technology and human-centered government." },
    ],
  }),
  component: Page,
});

function Page() {
  return <PageStub title="Insights" intro="Ideas on open technology and human-centered government." />;
}
