import { Link } from "@tanstack/react-router";

export type CaseStudy = {
  slug: string;
  client: string;
  title: string;
  summary: string;
};

/** Gray card variant used on the case studies index. */
export function CaseStudyTile({ study }: { study: CaseStudy }) {
  return (
    <article className="flex h-full flex-col bg-gray-200 p-8">
      <p className="eyebrow text-red-dark">{study.client}</p>
      <h3 className="mt-3 text-2xl">
        <Link
          to="/case-studies/$slug"
          params={{ slug: study.slug }}
          className="text-navy underline decoration-1 underline-offset-4 hover:text-red-dark"
        >
          {study.title}
        </Link>
      </h3>
      <p className="mt-4 text-base text-ink">{study.summary}</p>
    </article>
  );
}

export type PhotoCaseStudy = {
  client: string;
  title: string;
  href?: string;
  slug?: string;
  image: string;
  imageAlt: string;
};

/**
 * 4:3 photograph tile with a navy scrim across the bottom third.
 * Only the headline is a link, keeping the link list sane for screen readers.
 */
export function CaseStudyPhotoTile({ study }: { study: PhotoCaseStudy }) {
  const headline = <span className="text-white">{study.title}</span>;
  return (
    <article className="relative aspect-[4/3] overflow-hidden">
      <img
        src={study.image}
        alt={study.imageAlt}
        width={1024}
        height={768}
        loading="lazy"
        className="absolute inset-0 size-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-navy via-navy/70 to-transparent"
      />
      <div className="absolute inset-x-0 bottom-0 p-6">
        <p className="eyebrow text-white/90">{study.client}</p>
        <h3 className="mt-2 font-serif text-xl leading-snug md:text-2xl">
          {study.slug ? (
            <Link
              to="/case-studies/$slug"
              params={{ slug: study.slug }}
              className="text-white underline-offset-4 hover:underline"
            >
              {headline}
            </Link>
          ) : study.href ? (
            <Link to={study.href} className="text-white underline-offset-4 hover:underline">
              {headline}
            </Link>
          ) : (
            headline
          )}
        </h3>
      </div>
    </article>
  );
}
