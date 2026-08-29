import { createFileRoute } from "@tanstack/react-router";
import { PageStub } from "@/components/brand/PageStub";

export const Route = createFileRoute("/contracting")({
  head: () => ({
    meta: [
      { title: "Contracting | CivicActions" },
      { name: "description", content: "Contract vehicles and procurement pathways." },
      { property: "og:title", content: "Contracting | CivicActions" },
      { property: "og:description", content: "Contract vehicles and procurement pathways." },
    ],
  }),
  component: Page,
});

function Page() {
  return <PageStub title="Contracting" intro="Contract vehicles and procurement pathways." />;
}
