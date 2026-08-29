import { createFileRoute } from "@tanstack/react-router";
import { PageStub } from "@/components/brand/PageStub";

export const Route = createFileRoute("/licensing")({
  head: () => ({
    meta: [
      { title: "Licensing | CivicActions" },
      { name: "description", content: "Licensing information for CivicActions content." },
      { property: "og:title", content: "Licensing | CivicActions" },
      { property: "og:description", content: "Licensing information for CivicActions content." },
    ],
  }),
  component: Page,
});

function Page() {
  return <PageStub title="Licensing" intro="Licensing information for CivicActions content." />;
}
