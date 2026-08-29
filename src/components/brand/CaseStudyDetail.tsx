import { CaseStudyPhotoTile } from "./CaseStudyTile";
import { CtaBanner } from "./CtaBanner";
import { EyebrowLabel } from "./EyebrowLabel";
import { caseStudies } from "@/data/caseStudies";
import type { CaseStudyEntry } from "@/data/caseStudies";

const fallbackDetail = (study: CaseStudyEntry) => ({
  atAGlance: {
    services: study.categories.join(", "),
    timeline: "Multi-year engagement",
    contractVehicle: "Available on request",
  },
  challenge: [
    `${study.client} needed public-facing services that people could use without specialized knowledge, on systems their own staff could maintain.`,
    "Legacy tools, scattered content, and manual processes made everyday updates slow and made it hard to measure whether the service was working for the public.",
  ],
  whatWeDid: {
    paragraphs: [
      study.summary,
      "We worked in small increments alongside agency staff, testing with real users and documenting decisions so the agency can operate and extend the work on its own.",
    ],
    activities: [
      "Research and discovery with staff and members of the public",
      "Accessibility testing on every release",
      "Automated deployment, monitoring, and security patching",
      "Training and documentation for agency teams",
    ],
  },
  impact: [
    { value: "AA", label: "WCAG 2.1 conformance target met" },
    { value: "100%", label: "of releases tested with assistive technology" },
    { value: "Open", label: "source tools the agency owns" },
  ],
  quote: {
    text: "The team worked as part of ours, and left us able to keep improving the service after the engagement.",
    name: "Program lead",
    role: study.client,
  },
});

export function CaseStudyDetail({ study }: { study: CaseStudyEntry }) {
  const detail = study.detail ?? fallbackDetail(study);
  const related = caseStudies.filter((s) => s.slug !== study.slug).slice(0, 3);

  return (
    <>
      <section aria-labelledby="case-study-heading" className="container-1200 py-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <EyebrowLabel>{study.client}</EyebrowLabel>
            <h1 id="case-study-heading" className="mt-4 text-navy">
              {study.title}
            </h1>
            <p className="mt-6 text-ink">{study.summary}</p>
          </div>
          <img
            src={study.image}
            alt={study.imageAlt}
            width={1024}
            height={768}
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
      </section>

      <section aria-labelledby="at-a-glance-heading" className="container-1200 pb-12">
        <h2 id="at-a-glance-heading" className="text-2xl text-navy">
          At a glance
        </h2>
        <dl className="mt-5 grid border border-gray-400 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { term: "Client", value: study.client },
            { term: "Services provided", value: detail.atAGlance.services },
            { term: "Timeline", value: detail.atAGlance.timeline },
            { term: "Contract vehicle", value: detail.atAGlance.contractVehicle },
          ].map((row) => (
            <div key={row.term} className="border-gray-400 p-6 not-last:border-b sm:not-last:border-b-0 sm:border-r sm:last:border-r-0">
              <dt className="eyebrow text-red-dark">{row.term}</dt>
              <dd className="mt-2 text-base text-ink">{row.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section aria-labelledby="challenge-heading" className="container-1200 pb-12">
        <h2 id="challenge-heading" className="text-3xl text-navy">
          The challenge
        </h2>
        <div className="mt-5 max-w-3xl space-y-4">
          {detail.challenge.map((p) => (
            <p key={p.slice(0, 24)} className="text-ink">
              {p}
            </p>
          ))}
        </div>
      </section>

      <section aria-labelledby="what-we-did-heading" className="container-1200 pb-12">
        <h2 id="what-we-did-heading" className="text-3xl text-navy">
          What we did
        </h2>
        <div className="mt-5 max-w-3xl space-y-4">
          {detail.whatWeDid.paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className="text-ink">
              {p}
            </p>
          ))}
        </div>
        <ul className="mt-6 max-w-3xl list-disc space-y-2 pl-6">
          {detail.whatWeDid.activities.map((item) => (
            <li key={item} className="text-ink">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="impact-heading" className="bg-navy py-14">
        <div className="container-1200">
          <h2 id="impact-heading" className="text-3xl text-white">
            Impact
          </h2>
          <ul className="mt-8 grid gap-8 md:grid-cols-3">
            {detail.impact.map((stat) => (
              <li key={stat.label} className="border-l-4 border-teal pl-5">
                <p className="font-serif text-4xl leading-tight text-white md:text-5xl">{stat.value}</p>
                <p className="mt-3 text-base text-white">{stat.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-label="Client quote" className="container-1200 py-14">
        <figure className="mx-auto max-w-[900px] text-center">
          <blockquote className="font-serif text-2xl leading-snug text-navy md:text-3xl">
            &ldquo;{detail.quote.text}&rdquo;
          </blockquote>
          <figcaption className="mt-6 text-base text-ink">
            <span className="font-bold text-navy">{detail.quote.name}</span>, {detail.quote.role}
          </figcaption>
        </figure>
      </section>

      <section aria-labelledby="related-heading" className="container-1200 pb-14">
        <h2 id="related-heading" className="text-3xl text-navy">
          Related case studies
        </h2>
        <ul className="mt-8 grid list-none grid-cols-1 gap-6 p-0 md:grid-cols-3">
          {related.map((s) => (
            <li key={s.slug}>
              <CaseStudyPhotoTile
                study={{
                  client: s.client,
                  title: s.title,
                  slug: s.slug,
                  image: s.image,
                  imageAlt: s.imageAlt,
                }}
              />
            </li>
          ))}
        </ul>
      </section>

      <CtaBanner
        color="navy"
        headline="Let's build a public success story."
        subline="Get in touch to start."
        primary={{ label: "Put us to work", to: "/contact" }}
        secondary={{ label: "Join our team", to: "/careers" }}
      />
    </>
  );
}
