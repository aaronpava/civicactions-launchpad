import { createFileRoute } from "@tanstack/react-router";
import { PageStub } from "@/components/brand/PageStub";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team | CivicActions" },
      { name: "description", content: "A fully remote team of designers, engineers, and strategists." },
      { property: "og:title", content: "Team | CivicActions" },
      { property: "og:description", content: "A fully remote team of designers, engineers, and strategists." },
    ],
  }),
  component: Page,
});

function Page() {
  return <PageStub title="Our team" intro="A fully remote team of designers, engineers, and strategists." />;
}
