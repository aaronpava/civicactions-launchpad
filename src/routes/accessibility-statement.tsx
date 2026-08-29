import { createFileRoute } from "@tanstack/react-router";
import { PageStub } from "@/components/brand/PageStub";

export const Route = createFileRoute("/accessibility-statement")({
  head: () => ({
    meta: [
      { title: "Accessibility Statement | CivicActions" },
      { name: "description", content: "Our commitment to WCAG 2.1 AA and Section 508." },
      { property: "og:title", content: "Accessibility Statement | CivicActions" },
      { property: "og:description", content: "Our commitment to WCAG 2.1 AA and Section 508." },
    ],
  }),
  component: Page,
});

function Page() {
  return <PageStub title="Accessibility statement" intro="Our commitment to WCAG 2.1 AA and Section 508." />;
}
