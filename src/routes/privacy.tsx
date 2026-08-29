import { createFileRoute } from "@tanstack/react-router";
import { ProsePage, ProseSection } from "@/components/brand/ProsePage";
import { legalPages } from "@/data/company";

const page = legalPages.privacy;
const title = `${page.title} | CivicActions`;

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: page.description },
      { property: "og:title", content: title },
      { property: "og:description", content: page.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ProsePage title={page.title} intro={page.description}>
      {page.sections.map((section) => (
        <ProseSection key={section.heading} heading={section.heading} paragraphs={section.paragraphs} />
      ))}
    </ProsePage>
  );
}
