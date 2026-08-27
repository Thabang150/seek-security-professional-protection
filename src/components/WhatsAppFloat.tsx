import { company, whatsappLink } from "@/data/company";
import { trackEvent } from "@/lib/analytics";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.87 9.87 0 0 0 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2[...]" />
    </svg>
  );
}

export function WhatsAppFloat() {
  if (!company.controlRoom.whatsapp) return null;

  return (
    <a
      href={whatsappLink("Hi Seek Security, I'd like to enquire about security services.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat to Seek Security on WhatsApp"
      onClick={() => trackEvent("whatsapp_click", { location: "floating_button" })}
      className="fixed bottom-5 right-5 z-40 inline-flex size-14 items-center justify-center rounded-full bg-[#1faa53] text-white shadow-lg shadow-black/30 transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1faa53]"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
