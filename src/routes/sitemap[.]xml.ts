import { createFileRoute } from "@tanstack/react-router";
import { services } from "@/data/company";

const staticPaths = ["/", "/services", "/about", "/service-areas", "/faq", "/contact"];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: ({ request }) => {
        const origin = new URL(request.url).origin;
        const paths = [...staticPaths, ...services.map((s) => `/services/${s.slug}`)];
        const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemap.org/schemas/sitemap/0.9">
${paths
  .map(
    (p) =>
      `  <url><loc>${origin}${p}</loc><changefreq>monthly</changefreq><priority>${p === "/" ? "1.0" : "0.7"}</priority></url>`,
  )
  .join("\n")}
</urlset>`;
        return new Response(body, {
          headers: { "content-type": "application/xml; charset=utf-8" },
        });
      },
    },
  },
});
