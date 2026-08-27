import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Radio } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { company, whatsappLink } from "@/data/company";
import { trackEvent } from "@/lib/analytics";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Seek Security | Centurion Control Room 24/7" },
      {
        name: "description",
        content:
          "Contact Seek Security in Pierre van Ryneveld, Centurion. Control room 071 324 0605 (24/7), office 012 881 8091, or send an enquiry for a tailored security quote.",
      },
      { property: "og:title", content: "Contact Seek Security | Centurion" },
      {
        property: "og:description",
        content: "Call the 24/7 control room, WhatsApp us, or request a tailored security quote.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="bg-ink text-ink-foreground">
        <div className="container-x py-16 md:py-24">
          <span className="eyebrow text-primary">Contact</span>
          <h1 className="mt-4 max-w-3xl text-4xl leading-[1.03] sm:text-5xl">
            Speak to our control room
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-muted">
            Our control room is contactable 24/7. Tell us what needs to be secured and we will come
            back to you with a tailored solution.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <h2 className="text-2xl">Direct lines</h2>
            <ul className="mt-6 space-y-6 text-sm">
              <li className="flex gap-3">
                <Radio className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                <span>
                  <span className="font-display text-xs tracking-[0.14em] uppercase">
                    Control room — 24/7
                  </span>
                  <br />
                  <a
                    href={`tel:${company.controlRoom.tel}`}
                    onClick={() => trackEvent("phone_click", { location: "contact_page" })}
                    className="text-base text-primary"
                  >
                    {company.controlRoom.label}
                  </a>
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                <span>
                  <span className="font-display text-xs tracking-[0.14em] uppercase">Office</span>
                  <br />
                  <a href={`tel:${company.office.tel}`} className="text-base text-primary">
                    {company.office.label}
                  </a>
                </span>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                <address className="not-italic leading-relaxed text-muted-foreground">
                  {company.address.street}
                  <br />
                  {company.address.suburb}, {company.address.city}, {company.address.postalCode}
                  <br />
                  {company.address.country}
                </address>
              </li>
            </ul>
            <a
              href={whatsappLink("Hi Seek Security, I'd like to enquire about security services.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("whatsapp_click", { location: "contact_page" })}
              className="btn-base btn-outline-dark mt-8"
            >
              WhatsApp the control room
            </a>
          </div>

          <div className="md:col-span-7">
            <h2 className="text-2xl">Request a quote</h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
