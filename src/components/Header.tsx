import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { company, images } from "@/data/company";
import { trackEvent } from "@/lib/analytics";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/service-areas", label: "Service Areas" },
  { to: "/faq", label: "FAQs" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-ink/95 backdrop-blur-sm border-b border-ink-border">
      <div className="container-x flex h-18 items-center justify-between gap-6 py-3">
        <Link to="/" className="flex items-center" aria-label={`${company.name} home`}>
          <img src={images.logo.url} alt={`${company.name} logo`} className="h-9 w-auto md:h-10" />
        </Link>

        <nav aria-label="Main" className="hidden lg:flex items-center gap-7">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="font-display text-xs tracking-[0.14em] uppercase text-ink-muted transition-colors hover:text-ink-foreground data-[status=active]:text-ink-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={`tel:${company.controlRoom.tel}`}
            onClick={() => trackEvent("phone_click", { location: "header" })}
            className="btn-base btn-primary"
          >
            <Phone className="size-4" aria-hidden="true" />
            {company.controlRoom.label}
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex size-11 items-center justify-center rounded-sm border border-ink-border text-ink-foreground"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className="lg:hidden border-t border-ink-border bg-ink">
          <nav aria-label="Mobile" className="container-x flex flex-col py-3">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="border-b border-ink-border py-4 font-display text-sm tracking-[0.14em] uppercase text-ink-foreground"
              >
                {item.label}
              </Link>
            ))}
            <div className="grid gap-3 py-5 sm:grid-cols-2">
              <a
                href={`tel:${company.controlRoom.tel}`}
                onClick={() => trackEvent("phone_click", { location: "mobile_nav" })}
                className="btn-base btn-primary"
              >
                <Phone className="size-4" aria-hidden="true" /> Control Room
              </a>
              <a href={`tel:${company.office.tel}`} className="btn-base btn-outline-light">
                Office {company.office.label}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
