import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CtaBanner } from "@/components/brand/CtaBanner";
import { getPost, relatedPosts } from "@/data/insights";

export const Route = createFileRoute("/insights/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { title: post.title, excerpt: post.excerpt };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Post not found | CivicActions" }, { name: "robots", content: "noindex" }],
      };
    }
    const pageTitle = `${loaderData.title} | CivicActions`;
    return {
      meta: [
        { title: pageTitle },
        { name: "description", content: loaderData.excerpt },
        { property: "og:title", content: pageTitle },
        { property: "og:description", content: loaderData.excerpt },
        { name: "twitter:title", content: pageTitle },
        { name: "twitter:description", content: loaderData.excerpt },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: PostNotFound,
  component: Page,
});

function PostNotFound() {
  return (
    <section className="container-1200 py-16 md:py-24">
      <h1 className="text-navy">Post not found</h1>
      <p className="mt-6 max-w-2xl text-ink">
        We couldn't find that post.{" "}
        <Link to="/insights" className="text-red-dark underline decoration-1 underline-offset-4">
          Browse all insights
        </Link>
        .
      </p>
    </section>
  );
}

function Page() {
  const { slug } = Route.useParams();
  const post = getPost(slug);
  if (!post) return <PostNotFound />;
  const related = relatedPosts(post);

  return (
    <>
      <article className="container-1200 py-14 md:py-20">
        <div className="max-w-[680px]">
          <p className="eyebrow text-red-dark">{post.topic}</p>
          <h1 className="mt-3 text-navy">{post.title}</h1>
          <p className="mt-6 text-base text-ink">
            By {post.author} · <time dateTime={post.date}>{post.displayDate}</time>
          </p>
          <div className="mt-10 space-y-6">
            {post.body.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="text-ink">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>

      <section aria-labelledby="related-posts-heading" className="border-t border-gray-400 py-16">
        <div className="container-1200">
          <h2 id="related-posts-heading" className="text-3xl text-navy md:text-4xl">
            Related posts
          </h2>
          <ul className="mt-8 grid gap-8 md:grid-cols-3">
            {related.map((item) => (
              <li key={item.slug} className="border-t border-gray-400 pt-5">
                <p className="eyebrow text-red-dark">{item.topic}</p>
                <h3 className="mt-2 text-xl">
                  <Link
                    to="/insights/$slug"
                    params={{ slug: item.slug }}
                    className="text-navy underline decoration-1 underline-offset-4 hover:text-red-dark"
                  >
                    {item.title}
                  </Link>
                </h3>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner color="navy" />
    </>
  );
}
