import { createFileRoute } from "@tanstack/react-router";
import { PageStub } from "@/components/brand/PageStub";

export const Route = createFileRoute("/sustainability")({
  head: () => ({
    meta: [
      { title: "Sustainability | CivicActions" },
      { name: "description", content: "Our environmental commitments." },
      { property: "og:title", content: "Sustainability | CivicActions" },
      { property: "og:description", content: "Our environmental commitments." },
    ],
  }),
  component: Page,
});

function Page() {
  return <PageStub title="Sustainability" intro="Our environmental commitments." />;
}
