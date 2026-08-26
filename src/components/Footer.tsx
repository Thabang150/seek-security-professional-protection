import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Radio } from "lucide-react";
import { company, images, services, whatsappLink } from "@/data/company";
import { trackEvent } from "@/lib/analytics";

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="container-x grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <img src={images.logo.url} alt={`${company.name} logo`} className="h-10 w-auto" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-muted">
            A South African private security company based in {company.base}, founded in{" "}
            {company.founded} by {company.founders}.
          </p>
        </div>

        <div className="md:col-span-4">
          <h2 className="font-display text-xs tracking-[0.18em]">Services</h2>
          <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
            {services.slice(0, 10).map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="text-sm text-ink-muted transition-colors hover:text-ink-foreground"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <h2 className="font-display text-xs tracking-[0.18em]">Contact</h2>
          <ul className="mt-5 space-y-4 text-sm text-ink-muted">
            <li className="flex gap-3">
              <Radio className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <span>
                Control room 24/7
                <br />
                <a
                  href={`tel:${company.controlRoom.tel}`}
                  onClick={() => trackEvent("phone_click", { location: "footer" })}
                  className="text-ink-foreground hover:text-primary"
                >
                  {company.controlRoom.label}
                </a>
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <span>
                Office
                <br />
                <a
                  href={`tel:${company.office.tel}`}
                  className="text-ink-foreground hover:text-primary"
                >
                  {company.office.label}
                </a>
              </span>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <address className="not-italic">
                {company.address.street}
                <br />
                {company.address.suburb}, {company.address.city}, {company.address.postalCode}
              </address>
            </li>
          </ul>
          <a
            href={whatsappLink("Hi Seek Security, I'd like to enquire about security services.")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("whatsapp_click", { location: "footer" })}
            className="btn-base btn-outline-light mt-6"
          >
            WhatsApp us
          </a>
        </div>
      </div>

      <div className="border-t border-ink-border">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <p>Security services from {company.base}.</p>
        </div>
      </div>
    </footer>
  );
}
