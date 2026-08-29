import { createFileRoute } from "@tanstack/react-router";
import { PageStub } from "@/components/brand/PageStub";

export const Route = createFileRoute("/feedback")({
  head: () => ({
    meta: [
      { title: "Feedback | CivicActions" },
      { name: "description", content: "Tell us how we can improve." },
      { property: "og:title", content: "Feedback | CivicActions" },
      { property: "og:description", content: "Tell us how we can improve." },
    ],
  }),
  component: Page,
});

function Page() {
  return <PageStub title="Feedback" intro="Tell us how we can improve." />;
}
