import { useRef, useState } from "react";
import { Check, Send } from "lucide-react";
import { company, services, whatsappLink } from "@/data/company";
import { trackEvent } from "@/lib/analytics";

type Fields = {
  name: string;
  phone: string;
  email: string;
  service: string;
  location: string;
  message: string;
};

const empty: Fields = {
  name: "",
  phone: "",
  email: "",
  service: "",
  location: "",
  message: "",
};

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const phoneRe = /^[+\d][\d\s()-]{7,19}$/;

function validate(v: Fields) {
  const e: Partial<Record<keyof Fields, string>> = {};
  if (!v.name.trim()) e.name = "Please enter your name.";
  else if (v.name.trim().length > 80) e.name = "Name is too long.";
  if (!v.phone.trim()) e.phone = "Please enter a contact number.";
  else if (!phoneRe.test(v.phone.trim())) e.phone = "Please enter a valid phone number.";
  if (v.email.trim() && !emailRe.test(v.email.trim()))
    e.email = "Please enter a valid email address.";
  if (!v.service) e.service = "Please select the service you need.";
  if (!v.location.trim()) e.location = "Please tell us the area or address.";
  else if (v.location.trim().length > 120) e.location = "Location is too long.";
  if (v.message.trim().length > 1000) e.message = "Please keep your message under 1000 characters.";
  return e;
}

/**
 * Enquiries are handed off through the company's existing channels — WhatsApp to
 * the control room, with an email fallback. No CRM, database or lead store.
 * A honeypot field plus a minimum time-on-form check provide lightweight spam
 * protection; a Turnstile/reCAPTCHA site key can be dropped in via
 * VITE_TURNSTILE_SITE_KEY when the company supplies one.
 */
export function ContactForm() {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [sent, setSent] = useState(false);
  const [started, setStarted] = useState(false);
  const honeypot = useRef("");
  const mountedAt = useRef(Date.now());

  const set = (key: keyof Fields) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    if (!started) {
      setStarted(true);
      trackEvent("contact_form_start");
    }
    setValues((prev) => ({ ...prev, [key]: event.target.value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (honeypot.current || Date.now() - mountedAt.current < 2500) return;

    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const first = document.querySelector<HTMLElement>("[aria-invalid='true']");
      first?.focus();
      return;
    }

    const summary = [
      `New enquiry from the ${company.name} website`,
      `Name: ${values.name.trim()}`,
      `Phone: ${values.phone.trim()}`,
      values.email.trim() ? `Email: ${values.email.trim()}` : null,
      `Service: ${values.service}`,
      `Area / address: ${values.location.trim()}`,
      values.message.trim() ? `Details: ${values.message.trim()}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    trackEvent("contact_form_submit", { service: values.service });
    trackEvent("quote_request", { service: values.service });
    window.open(whatsappLink(summary), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  if (sent) {
    return (
      <div
        role="status"
        className="border border-border bg-card p-8 text-center sm:p-10"
      >
        <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Check className="size-6" aria-hidden="true" />
        </span>
        <h3 className="mt-5 text-xl">Enquiry ready to send</h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          Your details have been passed to WhatsApp addressed to our control room. If the WhatsApp
          window did not open, call us on{" "}
          <a href={`tel:${company.controlRoom.tel}`} className="font-medium text-primary">
            {company.controlRoom.label}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => {
            setValues(empty);
            setSent(false);
            mountedAt.current = Date.now();
          }}
          className="btn-base btn-outline-dark mt-6"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="border border-border bg-card p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Full name" error={errors.name}>
          <input
            id="name"
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={set("name")}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={inputClass(Boolean(errors.name))}
          />
        </Field>

        <Field id="phone" label="Contact number" error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={set("phone")}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={inputClass(Boolean(errors.phone))}
          />
        </Field>

        <Field id="email" label="Email address" hint="Optional" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            value={values.email}
            onChange={set("email")}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={inputClass(Boolean(errors.email))}
          />
        </Field>

        <Field id="service" label="Service required" error={errors.service}>
          <select
            id="service"
            name="service"
            value={values.service}
            onChange={set("service")}
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? "service-error" : undefined}
            className={inputClass(Boolean(errors.service))}
          >
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Other / not sure">Other / not sure</option>
          </select>
        </Field>

        <div className="sm:col-span-2">
          <Field
            id="location"
            label="Area or address to be secured"
            error={errors.location}
          >
            <input
              id="location"
              name="location"
              autoComplete="address-level2"
              value={values.location}
              onChange={set("location")}
              aria-invalid={Boolean(errors.location)}
              aria-describedby={errors.location ? "location-error" : undefined}
              className={inputClass(Boolean(errors.location))}
            />
          </Field>
        </div>

        <div className="sm:col-span-2">
          <Field id="message" label="Details" hint="Optional" error={errors.message}>
            <textarea
              id="message"
              name="message"
              rows={5}
              maxLength={1000}
              value={values.message}
              onChange={set("message")}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
              className={inputClass(Boolean(errors.message))}
            />
          </Field>
        </div>
      </div>

      {/* Honeypot: hidden from users, filled by most bots */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="company-website">Website</label>
        <input
          id="company-website"
          name="company-website"
          tabIndex={-1}
          autoComplete="off"
          onChange={(e) => {
            honeypot.current = e.target.value;
          }}
        />
      </div>

      <button type="submit" className="btn-base btn-primary mt-7 w-full sm:w-auto">
        <Send className="size-4" aria-hidden="true" /> Send enquiry
      </button>
      <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
        Sending opens WhatsApp to our control room with your details filled in. Prefer email? Write
        to us via{" "}
        <a href={`tel:${company.office.tel}`} className="underline">
          {company.office.label}
        </a>{" "}
        during office hours.
      </p>
    </form>
  );
}

function inputClass(invalid: boolean) {
  return [
    "w-full rounded-sm border bg-background px-3.5 py-3 text-base text-foreground",
    "transition-colors placeholder:text-muted-foreground",
    invalid ? "border-destructive" : "border-input",
  ].join(" ");
}

function Field({
  id,
  label,
  hint,
  error,
  children,
}: {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 flex items-baseline justify-between gap-2 font-display text-xs tracking-[0.12em] uppercase"
      >
        {label}
        {hint && <span className="font-sans text-[0.7rem] normal-case tracking-normal text-muted-foreground">{hint}</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-2 text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
