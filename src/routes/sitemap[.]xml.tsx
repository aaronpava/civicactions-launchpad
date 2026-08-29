import { createFileRoute } from "@tanstack/react-router";
import { caseStudies } from "@/data/caseStudies";
import { posts } from "@/data/insights";

const staticPaths = [
  "/",
  "/services",
  "/services/ditap",
  "/case-studies",
  "/team",
  "/careers",
  "/insights",
  "/impact",
  "/press",
  "/contracting",
  "/contracting/sewp-vi",
  "/contact",
  "/accessibility-statement",
  "/licensing",
  "/privacy",
  "/sustainability",
  "/feedback",
];

function buildSitemap(origin: string) {
  const paths = [
    ...staticPaths,
    ...caseStudies.map((study) => `/case-studies/${study.slug}`),
    ...posts.map((post) => `/insights/${post.slug}`),
  ];

  const urls = paths
    .map((path) => `  <url>\n    <loc>${origin}${path}</loc>\n  </url>`)
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: ({ request }) => {
        const origin = new URL(request.url).origin;
        return new Response(buildSitemap(origin), {
          headers: { "Content-Type": "application/xml; charset=utf-8" },
        });
      },
    },
  },
});
