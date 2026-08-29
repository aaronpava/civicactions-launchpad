import { createFileRoute } from "@tanstack/react-router";
import { PageStub } from "@/components/brand/PageStub";

export const Route = createFileRoute("/press")({
  head: () => ({
    meta: [
      { title: "Press | CivicActions" },
      { name: "description", content: "News and announcements from CivicActions." },
      { property: "og:title", content: "Press | CivicActions" },
      { property: "og:description", content: "News and announcements from CivicActions." },
    ],
  }),
  component: Page,
});

function Page() {
  return <PageStub title="Press" intro="News and announcements from CivicActions." />;
}
