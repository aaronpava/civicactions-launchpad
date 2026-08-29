import { createFileRoute } from "@tanstack/react-router";
import { PageStub } from "@/components/brand/PageStub";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy | CivicActions" },
      { name: "description", content: "How we handle your information." },
      { property: "og:title", content: "Privacy | CivicActions" },
      { property: "og:description", content: "How we handle your information." },
    ],
  }),
  component: Page,
});

function Page() {
  return <PageStub title="Privacy" intro="How we handle your information." />;
}
