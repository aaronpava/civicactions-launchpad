import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBanner } from "@/components/brand/CtaBanner";
import { Quote } from "@/components/brand/Quote";
import {
  benefits,
  benefitsIntro,
  careersHero,
  careersTestimonials,
  careersVideo,
  culturePosts,
  eeoStatement,
  hiringClosing,
  hiringSteps,
  openPositions,
  whatWeLookFor,
  whoWeAre,
} from "@/data/careers";

const title = "Careers | CivicActions";
const description =
  "Join a fully remote team building modern, accessible government services. See our benefits, hiring process, and open positions.";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <section className="container-1200 py-14 md:py-20">
        <h1 className="max-w-3xl text-navy">{careersHero.title}</h1>
        <p className="mt-6 max-w-2xl text-ink">{careersHero.body}</p>
        <p className="mt-8">
          <a
            href="#open-positions"
            className="nav-label inline-flex items-center bg-red px-6 py-3.5 text-white transition-colors hover:bg-red-dark"
          >
            {careersHero.ctaLabel}
          </a>
        </p>
      </section>

      <section aria-labelledby="careers-video-heading" className="container-1200 pb-16">
        <h2 id="careers-video-heading" className="sr-only">
          Life at CivicActions
        </h2>
        <figure>
          <div className="flex aspect-video w-full items-center justify-center bg-gray-200">
            <p className="eyebrow text-navy">Video coming soon</p>
          </div>
          <figcaption className="mt-4 max-w-3xl text-base text-ink">{careersVideo.caption}</figcaption>
        </figure>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container-1200 grid gap-12 lg:grid-cols-2">
          {[whoWeAre, whatWeLookFor].map((block) => (
            <div key={block.title}>
              <h2 className="text-3xl text-navy md:text-4xl">{block.title}</h2>
              <p className="mt-5 text-ink">{block.body}</p>
              <p className="mt-5">
                <Link
                  to={block.linkTo}
                  className="text-red underline decoration-1 underline-offset-4 hover:text-red-dark"
                >
                  {block.linkLabel}
                </Link>
              </p>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="benefits-heading" className="container-1200 py-16">
        <h2 id="benefits-heading" className="text-3xl text-navy md:text-4xl">
          What we offer
        </h2>
        <p className="mt-5 max-w-3xl text-ink">{benefitsIntro}</p>
        <ul className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <li key={benefit.title} className="border border-gray-400 p-6">
              <h3 className="text-xl text-navy">{benefit.title}</h3>
              <p className="mt-3 text-base text-ink">{benefit.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="careers-quote-1" className="border-t border-gray-400 py-16">
        <div className="container-1200 max-w-3xl">
          <h2 id="careers-quote-1" className="sr-only">
            What our team says
          </h2>
          <Quote {...careersTestimonials[0]!} />
        </div>
      </section>

      <section id="open-positions" aria-labelledby="open-positions-heading" className="bg-navy py-16">
        <div className="container-1200">
          <h2 id="open-positions-heading" className="text-3xl text-white md:text-4xl">
            Open positions
          </h2>
          <p className="mt-5 max-w-3xl text-white/90">{eeoStatement}</p>
          {openPositions.length === 0 ? (
            <p className="mt-8 text-white">No positions are currently open. Please check back again soon!</p>
          ) : (
            <ul className="mt-8 divide-y divide-white/30 border-y border-white/30">
              {openPositions.map((position) => (
                <li key={position.to} className="py-6">
                  <h3 className="text-xl text-white">
                    <Link to={position.to} className="underline underline-offset-4">
                      {position.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-base text-white/90">{position.location}</p>
                  <p className="mt-2 text-base text-white/90">{position.summary}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <section aria-labelledby="hiring-process-heading" className="container-1200 py-16">
        <h2 id="hiring-process-heading" className="text-3xl text-navy md:text-4xl">
          Decided to apply? We're rooting for you!
        </h2>
        <ol className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {hiringSteps.map((step, index) => (
            <li key={step.title} className="border-t-4 border-red pt-5">
              <p className="font-serif text-3xl text-red">{index + 1}</p>
              <h3 className="mt-2 text-xl text-navy">{step.title}</h3>
              <p className="mt-3 text-base text-ink">{step.body}</p>
            </li>
          ))}
        </ol>
        <p className="mt-10 max-w-3xl text-ink">{hiringClosing}</p>
      </section>

      <section aria-labelledby="culture-posts-heading" className="bg-gray-100 py-16">
        <div className="container-1200">
          <h2 id="culture-posts-heading" className="text-3xl text-navy md:text-4xl">
            Explore our culture
          </h2>
          <ul className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {culturePosts.map((post) => (
              <li key={post.to} className="border-t border-gray-400 pt-5">
                <Link
                  to={post.to}
                  className="text-lg text-navy underline decoration-1 underline-offset-4 hover:text-red"
                >
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="careers-quote-2" className="py-16">
        <div className="container-1200 max-w-3xl">
          <h2 id="careers-quote-2" className="sr-only">
            More from our team
          </h2>
          <Quote {...careersTestimonials[1]!} />
        </div>
      </section>

      <CtaBanner
        color="navy"
        headline="Help us build the future."
        subline="Let's create better government services together."
        primary={{ label: "See open positions", to: "/careers" }}
        secondary={{ label: "Meet our team", to: "/team" }}
      />
    </>
  );
}
