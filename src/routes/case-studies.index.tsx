import { createFileRoute } from "@tanstack/react-router";
import { PageStub } from "@/components/brand/PageStub";

export const Route = createFileRoute("/case-studies/")({
  head: () => ({
    meta: [
      { title: "Case Studies | CivicActions" },
      { name: "description", content: "How we help agencies deliver trusted public services." },
      { property: "og:title", content: "Case Studies | CivicActions" },
      { property: "og:description", content: "How we help agencies deliver trusted public services." },
    ],
  }),
  component: Page,
});

function Page() {
  return <PageStub title="Case studies" intro="How we help agencies deliver trusted public services." />;
}
