import { createFileRoute } from "@tanstack/react-router";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { company, differentiators, images } from "@/data/company";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Seek Security | Family-Run Security Since 2019" },
      {
        name: "description",
        content:
          "Seek Security is a South African private security company founded in 2019 by the Orren family, based in Pierre van Ryneveld, Centurion, with military and industry experience.",
      },
      { property: "og:title", content: "About Seek Security | Centurion" },
      {
        property: "og:description",
        content:
          "Founded in 2019 by the Orren family, drawing on military, security and corporate experience.",
      },
      { property: "og:image", content: images.team.url },
      { name: "twitter:image", content: images.team.url },
    ],
  }),
  component: AboutPage,
});

const gallery = [
  { src: images.tacticalTraining.url, alt: "Seek Security tactical training exercise" },
  { src: images.nightResponse.url, alt: "Seek Security response vehicle on scene at night" },
  { src: images.medicalScene.url, alt: "Seek Security medical response on scene" },
  { src: images.fleetSunset.url, alt: "Seek Security response fleet at sunset" },
  { src: images.communityEvent.url, alt: "Seek Security officers at a community event" },
  { src: images.emergencyScene.url, alt: "Seek Security working alongside emergency services" },
];

function AboutPage() {
  return (
    <>
      <section className="bg-ink text-ink-foreground">
        <div className="container-x grid gap-10 py-16 md:grid-cols-12 md:items-center md:py-24">
          <div className="md:col-span-6">
            <span className="eyebrow text-primary">About us</span>
            <h1 className="mt-4 text-4xl leading-[1.03] sm:text-5xl">
              A family-run security company built on discipline
            </h1>
            <p className="mt-5 text-base leading-relaxed text-ink-muted">
              {company.name} is a South African private security company based in {company.base},
              founded in {company.founded} by {company.founders}. The company draws on military,
              security and corporate security experience.
            </p>
          </div>
          <div className="md:col-span-6">
            <img
              src={images.team.url}
              alt={`${company.name} personnel on duty`}
              className="w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-10 md:grid-cols-2">
          <Reveal>
            <div className="border border-border bg-card p-8">
              <h2 className="font-display text-xs tracking-[0.18em] uppercase text-primary">
                Mission
              </h2>
              <p className="mt-4 leading-relaxed">{company.mission}</p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="border border-border bg-card p-8">
              <h2 className="font-display text-xs tracking-[0.18em] uppercase text-primary">
                Vision
              </h2>
              <p className="mt-4 leading-relaxed">{company.vision}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-x">
          <h2 className="text-3xl sm:text-4xl">Why clients stay with us</h2>
          <div className="mt-10 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((d, i) => (
              <Reveal key={d.title} delay={i * 50}>
                <div className="h-full bg-card p-7">
                  <h3 className="text-lg">{d.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-x">
          <span className="eyebrow text-primary">In the field</span>
          <h2 className="mt-4 text-3xl sm:text-4xl">Our people at work</h2>
          <div className="mt-10 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((g, i) => (
              <Reveal key={g.src} delay={i * 40}>
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="aspect-[4/3] w-full bg-card object-cover"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
