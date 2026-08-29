import { createFileRoute } from "@tanstack/react-router";
import { PageStub } from "@/components/brand/PageStub";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | CivicActions" },
      { name: "description", content: "Get in touch with CivicActions." },
      { property: "og:title", content: "Contact | CivicActions" },
      { property: "og:description", content: "Get in touch with CivicActions." },
    ],
  }),
  component: Page,
});

function Page() {
  return <PageStub title="Contact us" intro="Get in touch with CivicActions." />;
}
