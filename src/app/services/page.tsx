import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { Eyebrow } from "@/components/eyebrow";
import { ServiceVisual } from "@/components/service-visual";
import { relatedWork, services } from "@/config/site";
import { pageMeta } from "@/lib/metadata";

export const metadata = pageMeta({
  title: "Services",
  description:
    "HR infrastructure, benefits administration, employee communications, and HR audits for growing businesses. Founder-led people operations consulting from Montréal, with remote support.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <header className="border-b border-ink/10 bg-stone">
        <Container className="grid gap-8 py-16 sm:py-20 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-7">
            <Eyebrow>Services</Eyebrow>
            <h1 className="display mt-5 uppercase text-ink">
              Four ways
              <span className="mt-2 block font-serif text-[0.72em] font-normal normal-case italic text-taupe-deep">
                to bring HR into order.
              </span>
            </h1>
          </div>
          <p className="max-w-sm self-end text-base leading-relaxed text-ink-soft lg:col-span-4 lg:col-start-9">
            Practical support for growing businesses — infrastructure, benefits, communication, and a clear look at what is already in place.
          </p>
        </Container>
      </header>

      <nav aria-label="Services on this page" className="border-b border-ink/10 bg-ivory">
        <Container className="grid sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <a
              key={service.id}
              href={`#${service.id}`}
              className="group flex items-start justify-between gap-4 border-b border-ink/10 px-1 py-5 transition-colors hover:bg-beige/50 sm:border-b-0 sm:px-4 sm:odd:border-r lg:border-r lg:last:border-r-0"
            >
              <span>
                <span className="block text-[0.68rem] font-semibold tracking-[0.16em] text-taupe-deep">
                  {service.number}
                </span>
                <span className="mt-2 block font-display text-lg font-semibold leading-snug tracking-[-0.03em] text-ink">
                  {service.name}
                </span>
              </span>
              <ArrowRight
                aria-hidden
                className="mt-1 size-4 shrink-0 text-ink transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          ))}
        </Container>
      </nav>

      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`scroll-mt-28 border-b border-ink/10 ${index % 2 === 1 ? "bg-white" : "bg-ivory"}`}
        >
          <Container className="grid items-start gap-10 py-16 sm:py-20 lg:grid-cols-12 lg:gap-16 lg:py-24">
            <div className={`lg:col-span-5 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
              <p className="font-display text-5xl font-semibold tracking-[-0.05em] text-taupe sm:text-6xl">
                {service.number}
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-4xl">
                {service.name}
              </h2>
              <p className="mt-4 font-serif text-2xl italic leading-snug text-taupe-deep sm:text-3xl">
                {service.headline}
              </p>
              <p className="mt-5 max-w-md text-base leading-relaxed text-ink-soft">
                {service.description}
              </p>
            </div>
            <div className={`lg:col-span-7 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
              <ServiceVisual id={service.id} />
              <ul className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
                {service.capabilities.map((item) => (
                  <li key={item.name} className="grid gap-1 py-4 sm:grid-cols-12 sm:gap-6">
                    <p className="font-medium text-ink sm:col-span-5">{item.name}</p>
                    <p className="text-sm leading-relaxed text-ink-soft sm:col-span-7 sm:text-base">
                      {item.detail}
                    </p>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                <p className="max-w-sm">
                  <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-taupe-deep">
                    Best for
                  </span>
                  <span className="mt-2 block text-base leading-relaxed text-ink">{service.bestFor}</span>
                </p>
                <ButtonLink href={`/contact?service=${service.id}`} className="w-full shrink-0 sm:w-auto">
                  {service.cta}
                </ButtonLink>
              </div>
            </div>
          </Container>
        </section>
      ))}

      <section>
        <Container className="py-16 sm:py-20">
          <h2 className="display-sm max-w-xl text-ink">Also part of the work.</h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft">
            Onboarding, vendor coordination, files, documentation, and workflows show up inside the four services. They are not a separate menu.
          </p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {relatedWork.map((item) => (
              <li key={item} className="border border-ink/15 bg-white px-4 py-2 text-sm text-ink">
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="theme-dark bg-charcoal text-ivory">
        <Container className="flex flex-col gap-8 py-16 sm:flex-row sm:items-end sm:justify-between sm:py-20">
          <div className="max-w-xl">
            <h2 className="display-sm">Not sure where to begin?</h2>
            <p className="mt-4 text-base leading-relaxed text-beige">
              Start with how people operations work in the business today.
            </p>
          </div>
          <ButtonLink href="/contact" variant="light">
            Let’s talk HR
          </ButtonLink>
        </Container>
      </section>
    </>
  );
}
