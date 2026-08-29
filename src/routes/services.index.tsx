import { createFileRoute } from "@tanstack/react-router";
import { PageStub } from "@/components/brand/PageStub";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services | CivicActions" },
      { name: "description", content: "Design, technology, consulting, and training services for government agencies." },
      { property: "og:title", content: "Services | CivicActions" },
      { property: "og:description", content: "Design, technology, consulting, and training services for government agencies." },
    ],
  }),
  component: Page,
});

function Page() {
  return <PageStub title="Services" intro="Design, technology, consulting, and training services for government agencies." />;
}
