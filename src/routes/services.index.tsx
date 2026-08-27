import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { company, services } from "@/data/company";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Security Services in Centurion | Seek Security" },
      {
        name: "description",
        content:
          "Armed response, guarding, VIP protection, escorts, CCTV and alarm monitoring, medical response, tracking and PSIRA training from Seek Security in Centurion.",
      },
      { property: "og:title", content: "Security Services in Centurion | Seek Security" },
      {
        property: "og:description",
        content:
          "A full range of private security services delivered from our Pierre van Ryneveld, Centurion base.",
      },
    ],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <>
      <section className="bg-ink text-ink-foreground">
        <div className="container-x py-16 md:py-24">
          <span className="eyebrow text-primary">Our services</span>
          <h1 className="mt-4 max-w-3xl text-4xl leading-[1.03] sm:text-5xl">
            Security services specified around your risk
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-muted">
            {company.name} delivers manned, mobile and technology-led security from our{" "}
            {company.base} base, coordinated by a control room contactable 24/7.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 40}>
              <Link
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group flex h-full flex-col bg-card p-7 transition-colors hover:bg-accent"
              >
                <h2 className="text-xl">{s.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {s.short}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 font-display text-xs tracking-[0.14em] uppercase text-primary">
                  Read more
                  <ArrowRight
                    className="size-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
