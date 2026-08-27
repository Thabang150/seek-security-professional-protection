import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check, Phone } from "lucide-react";
import { CtaBand } from "@/components/CtaBand";
import { company, services, whatsappLink } from "@/data/company";
import { trackEvent } from "@/lib/analytics";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Service not found | Seek Security" }, { name: "robots", content: "noindex" }],
      };
    }
    const { service } = loaderData;
    const title = `${service.title} in Centurion | Seek Security`;
    return {
      meta: [
        { title },
        { name: "description", content: service.short },
        { property: "og:title", content: title },
        { property: "og:description", content: service.short },
        ...(service.image
          ? [
              { property: "og:image", content: service.image.url },
              { name: "twitter:image", content: service.image.url },
            ]
          : []),
      ],
    };
  },
  component: ServiceDetail,
  notFoundComponent: ServiceNotFound,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();

  return (
    <>
      <section className="relative bg-ink text-ink-foreground">
        {service.image && (
          <img
            src={service.image.url}
            alt={service.alt ?? service.title}
            className="absolute inset-0 size-full object-cover opacity-30"
            loading="eager"
          />
        )}
        <div className="relative container-x py-16 md:py-24">
          <span className="eyebrow text-primary">Service</span>
          <h1 className="mt-4 max-w-3xl text-4xl leading-[1.03] sm:text-5xl">{service.title}</h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-muted">{service.short}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`tel:${company.controlRoom.tel}`}
              onClick={() => trackEvent("phone_click", { location: "service_hero" })}
              className="btn-base btn-primary"
            >
              <Phone className="size-4" aria-hidden="true" /> {company.controlRoom.label}
            </a>
            <a
              href={whatsappLink(`Hi Seek Security, I'd like to enquire about ${service.title}.`)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("whatsapp_click", { location: "service_hero" })}
              className="btn-base btn-outline-light"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="text-lg leading-relaxed">{service.body}</p>
            <ul className="mt-8 space-y-3">
              {service.points.map((p) => (
                <li key={p} className="flex gap-3 text-sm leading-relaxed">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <aside className="md:col-span-5">
            <div className="border border-border bg-card p-7">
              <h2 className="font-display text-xs tracking-[0.18em] uppercase">Other services</h2>
              <ul className="mt-5 grid gap-2.5">
                {services
                  .filter((s) => s.slug !== service.slug)
                  .slice(0, 8)
                  .map((s) => (
                    <li key={s.slug}>
                      <Link
                        to="/services/$slug"
                        params={{ slug: s.slug }}
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {s.title}
                      </Link>
                    </li>
                  ))}
              </ul>
              <Link to="/services" className="btn-base btn-outline-dark mt-6">
                All services
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <CtaBand heading={`Need ${service.title.toLowerCase()}? Speak to our control room.`} />
    </>
  );
}

function ServiceNotFound() {
  return (
    <section className="section">
      <div className="container-x text-center">
        <h1 className="text-3xl">Service not found</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          That service page doesn't exist. Browse everything we offer instead.
        </p>
        <Link to="/services" className="btn-base btn-primary mt-6">
          View all services
        </Link>
      </div>
    </section>
  );
}
