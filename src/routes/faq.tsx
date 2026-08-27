import { createFileRoute } from "@tanstack/react-router";
import { CtaBand } from "@/components/CtaBand";
import { company, serviceAreas } from "@/data/company";

const faqs = [
  {
    q: "How quickly can I reach someone?",
    a: `Our control room is contactable 24/7 on ${company.controlRoom.label}. The office is reachable on ${company.office.label} during office hours.`,
  },
  {
    q: "Where is Seek Security based?",
    a: `${company.address.street}, ${company.address.suburb}, ${company.address.city}, ${company.address.postalCode}. ${serviceAreas.note}`,
  },
  {
    q: "Do you tailor security to my property?",
    a: "Yes. Security is specified around your property, risk and routine rather than sold as a fixed package. We assess the site and recommend the right mix of officers, response and technology.",
  },
  {
    q: "What experience does the company have?",
    a: `${company.name} was founded in ${company.founded} by ${company.founders} and draws on military, security and corporate security experience.`,
  },
  {
    q: "Do you offer both guarding and technology?",
    a: "Yes. We provide manned guarding, armed and rapid response, escorts and VIP protection, alongside offsite CCTV and alarm monitoring, vehicle tracking and equipment installation.",
  },
  {
    q: "Do you provide training?",
    a: "Yes. We offer PSIRA security guard training delivered by instructors with industry experience.",
  },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Security FAQs | Seek Security, Centurion" },
      {
        name: "description",
        content:
          "Answers to common questions about Seek Security: control room hours, service areas around Centurion, tailored security packages, PSIRA training and more.",
      },
      { property: "og:title", content: "Security FAQs | Seek Security" },
      {
        property: "og:description",
        content: "Common questions about our control room, coverage, services and training.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <section className="bg-ink text-ink-foreground">
        <div className="container-x py-16 md:py-24">
          <span className="eyebrow text-primary">FAQs</span>
          <h1 className="mt-4 max-w-3xl text-4xl leading-[1.03] sm:text-5xl">
            Questions clients ask us
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="container-x max-w-3xl divide-y divide-border border-y border-border">
          {faqs.map((f) => (
            <details key={f.q} className="group py-6">
              <summary className="cursor-pointer list-none text-lg leading-snug marker:hidden">
                {f.q}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
