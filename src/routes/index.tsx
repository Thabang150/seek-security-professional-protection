import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone, ShieldCheck } from "lucide-react";
import { CtaBand } from "@/components/CtaBand";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { company, differentiators, images, serviceAreas, services, whatsappLink } from "@/data/company";
import { trackEvent } from "@/lib/analytics";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Seek Security | Armed Response & Guarding, Centurion" },
      {
        name: "description",
        content:
          "Centurion-based private security since 2019: armed response, guarding, VIP protection, escorts, CCTV and alarm monitoring. Control room contactable 24/7.",
      },
      { property: "og:title", content: "Seek Security | Armed Response & Guarding, Centurion" },
      {
        property: "og:description",
        content:
          "Professional, family-run private security from Pierre van Ryneveld, Centurion. Control room 24/7.",
      },
      { property: "og:image", content: images.hero.url },
      { name: "twitter:image", content: images.hero.url },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SecurityService",
          name: company.name,
          foundingDate: String(company.founded),
          telephone: company.controlRoom.tel,
          address: {
            "@type": "PostalAddress",
            streetAddress: company.address.street,
            addressLocality: `${company.address.suburb}, ${company.address.city}`,
            postalCode: company.address.postalCode,
            addressCountry: "ZA",
          },
          areaServed: serviceAreas.base,
          openingHours: "Mo-Su 00:00-23:59",
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="relative bg-ink text-ink-foreground">
        <img
          src={images.hero.url}
          alt="Seek Security response vehicles and officers deployed at a residential property"
          className="absolute inset-0 size-full object-cover opacity-35"
        />
        <div className="relative container-x py-24 md:py-32">
          <span className="eyebrow text-primary">Private security since {company.founded}</span>
          <h1 className="mt-5 max-w-4xl text-4xl leading-[1.02] sm:text-6xl">
            Security cover you can rely on, day and night
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
            {company.name} protects homes, businesses and sites from our {company.base} base —
            armed response, guarding, escorts and monitoring, coordinated by a control room
            contactable 24/7.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={`tel:${company.controlRoom.tel}`}
              onClick={() => trackEvent("phone_click", { location: "hero" })}
              className="btn-base btn-primary"
            >
              <Phone className="size-4" aria-hidden="true" /> Control room {company.controlRoom.label}
            </a>
            <a
              href={whatsappLink("Hi Seek Security, I'd like to enquire about security services.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("whatsapp_click", { location: "hero" })}
              className="btn-base btn-outline-light"
            >
              WhatsApp us
            </a>
            <Link to="/contact" className="btn-base btn-outline-light">
              Request a quote
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="eyebrow text-primary">What we do</span>
              <h2 className="mt-4 max-w-2xl text-3xl sm:text-4xl">
                A full security capability under one control room
              </h2>
            </div>
            <Link to="/services" className="btn-base btn-outline-dark">
              All services <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-10 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((s, i) => (
              <Reveal key={s.slug} delay={i * 50}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group flex h-full flex-col bg-card p-7 transition-colors hover:bg-accent"
                >
                  <ShieldCheck className="size-6 text-primary" aria-hidden="true" />
                  <h3 className="mt-4 text-xl">{s.title}</h3>
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
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-x grid gap-12 md:grid-cols-12 md:items-center">
          <div className="md:col-span-6">
            <img
              src={images.guards.url}
              alt="Seek Security officers on duty"
              className="w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="md:col-span-6">
            <span className="eyebrow text-primary">Why Seek Security</span>
            <h2 className="mt-4 text-3xl sm:text-4xl">Discipline, technology and accountability</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Founded in {company.founded} by {company.founders}, the company draws on military,
              security and corporate security experience.
            </p>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2">
              {differentiators.slice(0, 4).map((d) => (
                <li key={d.title}>
                  <h3 className="text-base">{d.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.body}</p>
                </li>
              ))}
            </ul>
            <Link to="/about" className="btn-base btn-outline-dark mt-8">
              More about us
            </Link>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-x grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <span className="eyebrow text-primary">Get a quote</span>
            <h2 className="mt-4 text-3xl sm:text-4xl">Tell us what needs protecting</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">{serviceAreas.note}</p>
            <Link to="/service-areas" className="btn-base btn-outline-dark mt-8">
              Service areas
            </Link>
          </div>
          <div className="md:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
