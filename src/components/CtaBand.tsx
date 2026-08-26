import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { company, whatsappLink } from "@/data/company";
import { trackEvent } from "@/lib/analytics";

export function CtaBand({
  heading = "Need security cover? Speak to our control room.",
  body = "Our control room is contactable 24/7. Call us, WhatsApp us, or send an enquiry and we will come back to you with a tailored solution.",
}: {
  heading?: string;
  body?: string;
}) {
  return (
    <section className="bg-ink text-ink-foreground">
      <div className="container-x grid gap-8 py-16 md:grid-cols-12 md:items-center md:py-20">
        <div className="md:col-span-7">
          <span className="eyebrow text-primary">Talk to us</span>
          <h2 className="mt-4 text-3xl leading-[1.05] sm:text-4xl">{heading}</h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-muted">{body}</p>
        </div>
        <div className="flex flex-wrap gap-3 md:col-span-5 md:justify-end">
          <a
            href={`tel:${company.controlRoom.tel}`}
            onClick={() => trackEvent("phone_click", { location: "cta_band" })}
            className="btn-base btn-primary"
          >
            <Phone className="size-4" aria-hidden="true" /> {company.controlRoom.label}
          </a>
          <a
            href={whatsappLink("Hi Seek Security, I'd like to enquire about security services.")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("whatsapp_click", { location: "cta_band" })}
            className="btn-base btn-outline-light"
          >
            WhatsApp
          </a>
          <Link to="/contact" className="btn-base btn-outline-light">
            Request a quote
          </Link>
        </div>
      </div>
    </section>
  );
}
