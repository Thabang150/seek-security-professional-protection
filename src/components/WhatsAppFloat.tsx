import { company, whatsappLink } from "@/data/company";
import { trackEvent } from "@/lib/analytics";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.87 9.87 0 0 0 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.03a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.07.81.82-3-.2-.31a8.08 8.08 0 0 1-1.24-4.31c0-4.47 3.64-8.11 8.12-8.11 2.17 0 4.2.85 5.74 2.38a8.06 8.06 0 0 1 2.37 5.74c0 4.48-3.64 8.11-8.11 8.11zm4.45-6.08c-.24-.12-1.44-.71-1.66-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.78.96-.14.16-.29.18-.53.06-.24-.12-1.03-.38-1.96-1.21-.72-.65-1.21-1.44-1.36-1.68-.14-.24-.01-.37.11-.5.11-.11.24-.29.37-.43.12-.14.16-.24.24-.41.08-.16.04-.31-.02-.43-.06-.12-.55-1.32-.75-1.81-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.43.06-.65.31-.22.24-.86.84-.86 2.05 0 1.21.88 2.37 1 2.53.12.16 1.72 2.63 4.18 3.69.58.25 1.04.4 1.4.52.59.19 1.12.16 1.54.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.05.14-1.16-.06-.1-.22-.16-.46-.28z" />
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
      className="fixed bottom-5 left-5 z-40 inline-flex size-14 items-center justify-center rounded-full bg-[#1faa53] text-white shadow-lg shadow-black/30 transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
