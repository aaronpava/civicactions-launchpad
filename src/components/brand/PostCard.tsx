export type Post = {
  title: string;
  date: string;
  excerpt: string;
  href: string;
};

export function PostCard({ post }: { post: Post }) {
  return (
    <article className="flex h-full flex-col border-t border-gray-400 pt-6">
      <p className="eyebrow text-red">{post.date}</p>
      <h3 className="mt-2 text-xl">
        <a
          href={post.href}
          className="text-navy underline decoration-1 underline-offset-4 hover:text-red"
        >
          {post.title}
        </a>
      </h3>
      <p className="mt-3 text-base text-ink">{post.excerpt}</p>
    </article>
  );
}
