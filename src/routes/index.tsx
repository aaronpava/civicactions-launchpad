import { Link, createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/brand/Hero";
import { ButtonLink } from "@/components/brand/Button";
import { CtaBanner } from "@/components/brand/CtaBanner";
import { CaseStudyPhotoTile } from "@/components/brand/CaseStudyTile";
import { HomeServiceIcon } from "@/components/brand/HomeServiceIcon";
import {
  clientLogos,
  homeServices,
  homeCaseStudies,
  homeQuote,
  homeInsights,
  teamMosaic,
} from "@/data/home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CivicActions — Trusted public services through open technology" },
      {
        name: "description",
        content:
          "A fully remote professional services firm helping U.S. government agencies deliver trusted public services through open technology and human-centered design.",
      },
      {
        property: "og:title",
        content: "CivicActions — Trusted public services through open technology",
      },
      {
        property: "og:description",
        content:
          "We help government deliver trusted public services through open technology and design.",
      },
      {
        name: "twitter:title",
        content: "CivicActions — Trusted public services through open technology",
      },
      {
        name: "twitter:description",
        content:
          "We help government deliver trusted public services through open technology and design.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),

  component: Index,
});

const avatarHues = [210, 4, 174, 96, 32, 260];

function Index() {
  return (
    <>
      {/* 1. Hero — white */}
      <Hero
        title="We help government deliver trusted public services through open technology and design."
        actions={<ButtonLink to="/case-studies">See our work</ButtonLink>}
      />

      {/* 2. Client logos — white */}
      <section aria-labelledby="clients-heading" className="container-1200 pb-16">
        <h2 id="clients-heading" className="font-serif text-xl font-normal text-ink md:text-2xl">
          Trusted by organizations that serve the people.
        </h2>
        <ul className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-6">
          {clientLogos.map((logo) => (
            <li key={logo.name}>
              <img
                src={logo.src}
                alt={logo.name}
                width={512}
                height={512}
                loading="lazy"
                className="size-16 opacity-40 grayscale md:size-20"
              />
            </li>
          ))}
        </ul>
      </section>

      {/* 3. Services — navy */}
      <section aria-labelledby="services-heading" className="w-full bg-navy py-16 md:py-20">
        <div className="container-1200">
          <h2 id="services-heading" className="text-white">
            Digital first. Data driven. Human centered.
          </h2>
          <p className="mt-6 max-w-3xl text-white">
            Bringing government services up to today&apos;s standards requires new ways of
            thinking and working.
          </p>
          <p className="mt-4 max-w-3xl text-white">
            We can help you improve how people, process, and technology work together at your
            agency for lasting digital transformation.
          </p>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {homeServices.map((service) => (
              <li key={service.title}>
                <Link
                  to={service.to}
                  className="flex h-full items-center gap-4 border border-white/40 px-6 py-5 text-white transition-colors hover:bg-white/10"
                >
                  <HomeServiceIcon icon={service.icon} />
                  <span className="font-bold">{service.title}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <ButtonLink to="/services" tone="white" variant="outline">
              Explore services
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* 4. Case studies — white */}
      <section aria-labelledby="work-heading" className="container-1200 py-16 md:py-20">
        <h2 id="work-heading" className="max-w-3xl text-navy">
          Resilient agencies. Accessible services. Happier people.
        </h2>
        <p className="mt-6 max-w-3xl text-ink">
          Working for the greater good is in our DNA. From healthcare to science to education
          and beyond, we partner with agencies to solve hard problems and improve outcomes for
          government and the public.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {homeCaseStudies.map((study) => (
            <CaseStudyPhotoTile key={study.title} study={study} />
          ))}
          <Link
            to="/case-studies"
            className="flex aspect-[4/3] items-center justify-center bg-navy p-8 text-center font-serif text-2xl text-white transition-colors hover:bg-ink md:text-3xl"
          >
            View more work →
          </Link>
        </div>
      </section>

      {/* 5. Testimonial — white */}
      <section aria-label="Client testimonial" className="container-1200 pb-16 md:pb-20">
        <figure className="mx-auto max-w-[900px] text-center">
          <blockquote className="font-serif text-2xl leading-snug text-navy md:text-3xl">
            <span aria-hidden="true">&ldquo;</span>
            {homeQuote.quote}
            <span aria-hidden="true">&rdquo;</span>
          </blockquote>
          <figcaption className="mt-6 text-base text-ink">
            <span className="font-bold">{homeQuote.attribution}</span>, {homeQuote.role}
          </figcaption>
        </figure>
      </section>

      {/* 6. Insights — navy */}
      <section aria-labelledby="insights-heading" className="w-full bg-navy py-16 md:py-20">
        <div className="container-1200">
          <h2 id="insights-heading" className="text-white">
            Learn with us.
          </h2>
          <p className="mt-4 text-white">Thoughts and takeaways from our work in the field.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {homeInsights.map((insight) =>
              insight.image ? (
                <article key={insight.title} className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={insight.image}
                    alt={insight.imageAlt ?? ""}
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
                    <h3 className="font-serif text-xl leading-snug">
                      <Link
                        to={insight.href}
                        className="text-white underline-offset-4 hover:underline"
                      >
                        {insight.title}
                      </Link>
                    </h3>
                    <p className="mt-2 text-sm text-white/90">{insight.description}</p>
                  </div>
                </article>
              ) : (
                <article
                  key={insight.title}
                  className="flex aspect-[4/3] flex-col justify-end bg-white/10 p-6"
                >
                  <h3 className="font-serif text-xl leading-snug">
                    <Link
                      to={insight.href}
                      className="text-white underline-offset-4 hover:underline"
                    >
                      {insight.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm text-white/90">{insight.description}</p>
                </article>
              ),
            )}
          </div>
          <div className="mt-10">
            <ButtonLink to="/insights" tone="white" variant="outline">
              Explore posts and videos
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* 7. Team — white */}
      <section aria-labelledby="team-heading" className="container-1200 py-16 md:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 id="team-heading" className="text-navy">
              Our people make the difference.
            </h2>
            <p className="mt-6 text-ink">
              We are leaders in civic tech and design, committed to working in ways that make
              life better for our clients and each other.
            </p>
            <div className="mt-8">
              <ButtonLink to="/team" tone="red" variant="outline">
                Meet our team
              </ButtonLink>
            </div>
          </div>
          <ul
            aria-label="Team member portraits"
            className="grid grid-cols-6 gap-px bg-gray-400"
          >
            {teamMosaic.map((member, i) => (
              <li
                key={member.name}
                className="flex aspect-square items-center justify-center text-xs font-bold text-white"
                style={{
                  backgroundColor: `hsl(${avatarHues[i % avatarHues.length]} 35% 38%)`,
                }}
                title={member.name}
              >
                <span aria-hidden="true">{member.initials}</span>
                <span className="sr-only">{member.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 8. Closing CTA — red */}
      <CtaBanner color="red" />
    </>
  );
}
