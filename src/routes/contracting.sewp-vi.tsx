import { createFileRoute } from "@tanstack/react-router";
import { PageStub } from "@/components/brand/PageStub";

export const Route = createFileRoute("/contracting/sewp-vi")({
  head: () => ({
    meta: [
      { title: "SEWP VI | CivicActions" },
      { name: "description", content: "Our SEWP VI contract vehicle." },
      { property: "og:title", content: "SEWP VI | CivicActions" },
      { property: "og:description", content: "Our SEWP VI contract vehicle." },
    ],
  }),
  component: Page,
});

function Page() {
  return <PageStub title="SEWP VI" intro="Our SEWP VI contract vehicle." />;
}
