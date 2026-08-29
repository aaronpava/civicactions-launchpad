import { createFileRoute } from "@tanstack/react-router";
import { PageStub } from "@/components/brand/PageStub";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers | CivicActions" },
      { name: "description", content: "Open positions on our fully remote team." },
      { property: "og:title", content: "Careers | CivicActions" },
      { property: "og:description", content: "Open positions on our fully remote team." },
    ],
  }),
  component: Page,
});

function Page() {
  return <PageStub title="Careers" intro="Open positions on our fully remote team." />;
}
