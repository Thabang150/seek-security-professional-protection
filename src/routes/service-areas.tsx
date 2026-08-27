import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone } from "lucide-react";
import { CtaBand } from "@/components/CtaBand";
import { company, serviceAreas } from "@/data/company";
import { trackEvent } from "@/lib/analytics";

export const Route = createFileRoute("/service-areas")({
  head: () => ({
    meta: [
      { title: "Service Areas | Seek Security, Centurion" },
      {
        name: "description",
        content:
          "Seek Security operates from Pierre van Ryneveld, Centurion. Call our 24/7 control room to confirm security cover for your address or site.",
      },
      { property: "og:title", content: "Service Areas | Seek Security, Centurion" },
      {
        property: "og:description",
        content: "Based in Pierre van Ryneveld, Centurion. Call the control room to confirm cover.",
      },
    ],
  }),
  component: ServiceAreasPage,
});

function ServiceAreasPage() {
  return (
    <>
      <section className="bg-ink text-ink-foreground">
        <div className="container-x py-16 md:py-24">
          <span className="eyebrow text-primary">Where we work</span>
          <h1 className="mt-4 max-w-3xl text-4xl leading-[1.03] sm:text-5xl">
            Based in Centurion, deployed where you need us
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-muted">
            {serviceAreas.note}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <h2 className="text-2xl">Base of operations</h2>
            <div className="mt-4 flex gap-3 text-sm leading-relaxed text-muted-foreground">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <address className="not-italic">
                {company.address.street}
                <br />
                {company.address.suburb}, {company.address.city}, {company.address.postalCode}
                <br />
                {company.address.country}
              </address>
            </div>
            <a
              href={`tel:${company.controlRoom.tel}`}
              onClick={() => trackEvent("phone_click", { location: "service_areas" })}
              className="btn-base btn-primary mt-8"
            >
              <Phone className="size-4" aria-hidden="true" /> Confirm cover — {company.controlRoom.label}
            </a>
          </div>
          <div className="md:col-span-6">
            <iframe
              title={`Map showing ${company.name} in ${serviceAreas.base}`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                `${company.address.street}, ${company.address.suburb}, ${company.address.city}, ${company.address.postalCode}`,
              )}&output=embed`}
              loading="lazy"
              className="h-80 w-full border border-border"
            />
          </div>
        </div>
      </section>

      <CtaBand heading="Not sure if we cover your address? Ask the control room." />
    </>
  );
}
