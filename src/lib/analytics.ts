/**
 * Lightweight GA4 helper.
 *
 * The Measurement ID comes from the VITE_GA_ID environment variable; nothing is
 * hardcoded. When it is not configured, tracking calls are silent no-ops so the
 * site works unchanged until a real ID is supplied.
 */

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const GA_ID = import.meta.env["VITE_GA_ID"] as string | undefined;

let initialised = false;

export function initAnalytics() {
  if (initialised || typeof window === "undefined" || !GA_ID) return;
  initialised = true;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = (...args: unknown[]) => {
    window.dataLayer!.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_ID, { send_page_view: false });
}

export function trackPageView(path: string) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", "page_view", { page_path: path });
}

export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", name, params);
}
