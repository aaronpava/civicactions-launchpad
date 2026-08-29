import { Link } from "@tanstack/react-router";

export type CaseStudy = {
  slug: string;
  client: string;
  title: string;
  summary: string;
};

export function CaseStudyTile({ study }: { study: CaseStudy }) {
  return (
    <article className="flex h-full flex-col bg-gray-200 p-8">
      <p className="eyebrow text-red">{study.client}</p>
      <h3 className="mt-3 text-2xl">
        <Link
          to="/case-studies/$slug"
          params={{ slug: study.slug }}
          className="text-navy underline decoration-1 underline-offset-4 hover:text-red"
        >
          {study.title}
        </Link>
      </h3>
      <p className="mt-4 text-base text-ink">{study.summary}</p>
    </article>
  );
}
