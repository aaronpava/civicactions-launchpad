import { createFileRoute, notFound } from "@tanstack/react-router";
import { CaseStudyDetail } from "@/components/brand/CaseStudyDetail";
import { PageStub } from "@/components/brand/PageStub";
import { getCaseStudy } from "@/data/caseStudies";

export const Route = createFileRoute("/case-studies/$slug")({
  loader: ({ params }) => {
    const study = getCaseStudy(params.slug);
    if (!study) throw notFound();
    return { client: study.client, title: study.title, summary: study.summary };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Case study not found | CivicActions" }, { name: "robots", content: "noindex" }],
      };
    }
    const pageTitle = `${loaderData.title} | CivicActions`;
    return {
      meta: [
        { title: pageTitle },
        { name: "description", content: loaderData.summary },
        { property: "og:title", content: pageTitle },
        { property: "og:description", content: loaderData.summary },
        { name: "twitter:title", content: pageTitle },
        { name: "twitter:description", content: loaderData.summary },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: CaseStudyNotFound,
  component: Page,
});

function CaseStudyNotFound() {
  return (
    <PageStub
      title="Case study not found"
      intro="We couldn't find that case study. Browse all of our work instead."
    />
  );
}

function Page() {
  const { slug } = Route.useParams();
  const study = getCaseStudy(slug);
  if (!study) return <CaseStudyNotFound />;
  return <CaseStudyDetail study={study} />;
}
