import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { Eyebrow } from "@/components/eyebrow";
import { PageHeader } from "@/components/page-header";
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
      <PageHeader
        eyebrow="Services"
        title="People operations,"
        accent="put into working order."
      >
        Four areas of support for growing businesses — from the foundation itself to benefits, communication, and a careful look at what is already in place.
      </PageHeader>

      <nav aria-label="On this page" className="border-b border-ink/10">
        <Container className="flex flex-wrap gap-x-6 gap-y-3 py-5">
          {services.map((service) => (
            <a
              key={service.id}
              href={`#${service.id}`}
              className="text-sm text-ink-soft transition-colors hover:text-ink"
            >
              <span className="mr-2 text-[0.68rem] font-semibold tracking-[0.14em] text-taupe-deep">
                {service.number}
              </span>
              {service.name}
            </a>
          ))}
        </Container>
      </nav>

      {services.map((service, index) => {
        const tone =
          index === 1 ? "bg-stone" : index === 2 ? "bg-white" : "bg-ivory";
        return (
          <section
            key={service.id}
            id={service.id}
            className={`scroll-mt-28 border-b border-ink/10 ${tone}`}
          >
            <Container className="py-16 sm:py-24 lg:py-28">
              <div
                className={`grid gap-10 lg:grid-cols-12 lg:gap-16 ${
                  index === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className={index === 3 ? "lg:col-span-12" : "lg:col-span-5"}>
                  <p className="font-display text-5xl font-semibold tracking-[-0.05em] text-taupe-deep sm:text-6xl">
                    {service.number}
                  </p>
                  <h2
                    className={`mt-4 font-display font-semibold tracking-[-0.04em] text-ink ${
                      index === 3
                        ? "max-w-4xl text-4xl sm:text-6xl"
                        : "text-3xl sm:text-4xl"
                    }`}
                  >
                    {service.name}
                  </h2>
                  {index === 3 ? (
                    <p className="mt-5 max-w-2xl font-serif text-3xl italic leading-snug text-taupe-deep sm:text-4xl">
                      {service.headline}
                    </p>
                  ) : null}
                </div>
                <div className={index === 3 ? "lg:col-span-12" : "lg:col-span-7"}>
                  {index !== 3 ? (
                    <p className="font-serif text-3xl italic leading-snug text-taupe-deep sm:text-4xl">
                      {service.headline}
                    </p>
                  ) : null}
                  <p className={`max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg ${index === 3 ? "" : "mt-6"}`}>
                    {service.description}
                  </p>
                  <ul
                    className={`mt-8 grid border-t border-ink/15 ${
                      index === 2 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2"
                    }`}
                  >
                    {service.capabilities.map((item) => (
                      <li
                        key={item}
                        className="border-b border-ink/15 py-3 pr-4 text-sm leading-relaxed text-ink sm:text-base"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-col gap-6 border-t border-ink/10 pt-6 sm:flex-row sm:items-end sm:justify-between">
                    <p className="max-w-md">
                      <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-taupe-deep">
                        Best for
                      </span>
                      <span className="mt-2 block text-base leading-relaxed text-ink">
                        {service.bestFor}
                      </span>
                    </p>
                    <ButtonLink
                      href={`/contact?service=${service.id}`}
                      variant={index === 1 ? "primary" : "secondary"}
                      className="w-full shrink-0 sm:w-auto"
                    >
                      {service.cta}
                    </ButtonLink>
                  </div>
                </div>
              </div>
            </Container>
          </section>
        );
      })}

      <section className="bg-ivory">
        <Container className="py-16 sm:py-24">
          <Eyebrow>Often part of the work</Eyebrow>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-4xl">
            Practical details that sit inside the four services.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft">
            These are not separate offerings. They show up across infrastructure, benefits, communications, and audits, wherever a growing business needs them.
          </p>
          <ul className="mt-8 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
            {relatedWork.map((item) => (
              <li key={item} className="bg-ivory px-1 py-4 text-base text-ink">
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="theme-dark bg-charcoal text-ivory">
        <Container className="flex flex-col gap-8 py-16 sm:py-20 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              Not sure where to begin?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-beige">
              Start with a conversation about how your people operations work today.
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
