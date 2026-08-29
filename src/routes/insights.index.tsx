import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { CtaBanner } from "@/components/brand/CtaBanner";
import { cn } from "@/lib/utils";
import { insightTopics, insightsIntro, posts, type InsightTopic } from "@/data/insights";

const title = "Insights | CivicActions";
const description =
  "Thoughts and takeaways from our work in the field: accessibility, Drupal, security and compliance, human-centered design, agile, open source, and remote work.";

export const Route = createFileRoute("/insights/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  const [query, setQuery] = useState("");
  const [topics, setTopics] = useState<InsightTopic[]>([]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((post) => {
      const topicMatch = topics.length === 0 || topics.includes(post.topic);
      const textMatch =
        q === "" ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.author.toLowerCase().includes(q);
      return topicMatch && textMatch;
    });
  }, [query, topics]);

  function toggleTopic(topic: InsightTopic) {
    setTopics((prev) => (prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic]));
  }

  return (
    <>
      <section className="container-1200 py-14 md:py-20">
        <h1 className="text-navy">Insights</h1>
        <p className="mt-6 max-w-2xl text-ink">{insightsIntro}</p>
      </section>

      <section aria-labelledby="insights-filters-heading" className="container-1200 pb-10">
        <h2 id="insights-filters-heading" className="sr-only">
          Search and filter posts
        </h2>
        <div className="max-w-md">
          <label htmlFor="insights-search" className="eyebrow text-red-dark">
            Search posts
          </label>
          <input
            id="insights-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by title, topic, or author"
            className="mt-2 w-full border border-gray-400 px-4 py-3 text-base text-ink"
          />
        </div>
        <div className="mt-8" role="group" aria-label="Filter posts by topic">
          <ul className="flex flex-wrap gap-3">
            {insightTopics.map((topic) => {
              const pressed = topics.includes(topic);
              return (
                <li key={topic}>
                  <button
                    type="button"
                    aria-pressed={pressed}
                    onClick={() => toggleTopic(topic)}
                    className={cn(
                      "nav-label border px-4 py-2.5 transition-colors",
                      pressed
                        ? "border-red bg-red text-white"
                        : "border-gray-400 bg-white text-navy hover:border-red hover:text-red-dark",
                    )}
                  >
                    {topic}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <p className="mt-6 text-base text-ink" aria-live="polite">
          Showing {results.length} of {posts.length} posts
        </p>
      </section>

      <section aria-labelledby="insights-list-heading" className="container-1200 pb-16 md:pb-24">
        <h2 id="insights-list-heading" className="sr-only">
          All posts
        </h2>
        {results.length === 0 ? (
          <p className="text-ink">No posts match that search. Try a different term or clear the filters.</p>
        ) : (
          <ul className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {results.map((post) => (
              <li key={post.slug} className="flex flex-col border-t border-gray-400 pt-6">
                <p className="eyebrow text-red-dark">{post.topic}</p>
                <h3 className="mt-3 text-xl">
                  <Link
                    to="/insights/$slug"
                    params={{ slug: post.slug }}
                    className="text-navy underline decoration-1 underline-offset-4 hover:text-red-dark"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-2 text-base text-ink">
                  {post.author} · <time dateTime={post.date}>{post.displayDate}</time>
                </p>
                <p className="mt-3 line-clamp-2 text-base text-ink">{post.excerpt}</p>
              </li>
            ))}
          </ul>
        )}
      </section>

      <CtaBanner color="navy" />
    </>
  );
}
