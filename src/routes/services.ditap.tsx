import { createFileRoute } from "@tanstack/react-router";
import { PageStub } from "@/components/brand/PageStub";

export const Route = createFileRoute("/services/ditap")({
  head: () => ({
    meta: [
      { title: "DITAP | CivicActions" },
      { name: "description", content: "Digital IT Acquisition Professional training for federal acquisition staff." },
      { property: "og:title", content: "DITAP | CivicActions" },
      { property: "og:description", content: "Digital IT Acquisition Professional training for federal acquisition staff." },
    ],
  }),
  component: Page,
});

function Page() {
  return <PageStub title="DITAP training" intro="Digital IT Acquisition Professional training for federal acquisition staff." />;
}
