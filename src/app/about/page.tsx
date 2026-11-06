import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { Eyebrow } from "@/components/eyebrow";
import { Logo } from "@/components/logo";
import { PageHeader } from "@/components/page-header";
import { company, focusAreas } from "@/config/site";
import { pageMeta } from "@/lib/metadata";

export const metadata = pageMeta({
  title: "About Tamara Siziba",
  description:
    "Tamara Siziba is the founder of muzyhr, an independent HR consultancy in Montréal established in 2026. Her background includes group benefits, group retirement services, benefits administration, and people operations.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="The thinking behind"
        accent="better people operations."
      >
        muzyhr is a founder-led HR consultancy, established in Montréal in 2026.
      </PageHeader>

      <section>
        <Container className="grid gap-12 py-16 sm:py-24 lg:grid-cols-12 lg:gap-16 lg:py-28">
          <div className="lg:col-span-4">
            <Logo className="brand-logo-lg" />
            <h2 className="mt-8 font-display text-4xl font-semibold tracking-[-0.04em] text-ink">
              Tamara Siziba
            </h2>
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-taupe-deep">
              {company.role}
            </p>
            <dl className="mt-8 space-y-4 text-sm leading-relaxed">
              <div>
                <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-taupe-deep">
                  Practice
                </dt>
                <dd className="mt-1 text-ink">Founder-led HR consulting, established in 2026.</dd>
              </div>
              <div>
                <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-taupe-deep">
                  Location
                </dt>
                <dd className="mt-1 text-ink">Montréal, Canada. Remote support available.</dd>
              </div>
            </dl>
            <a
              href={company.founderLinkedin}
              className="mt-8 inline-flex text-sm text-ink underline decoration-taupe underline-offset-4 hover:decoration-ink"
              rel="noopener noreferrer"
              target="_blank"
            >
              Tamara on LinkedIn
            </a>
          </div>
          <div className="max-w-2xl space-y-6 text-base leading-relaxed text-ink-soft sm:text-lg lg:col-span-7 lg:col-start-6">
            <p className="font-serif text-2xl italic leading-snug text-ink sm:text-3xl">
              After working in benefits and retirement services, Tamara saw how much the employee experience depends on the systems behind it. She created muzyhr to help growing businesses build those systems with clarity and intention.
            </p>
            <p>
              Her experience spans Group Benefits, Group Retirement Services, benefits administration, employee communications, and HR and people operations processes. That work made a pattern hard to ignore: small businesses often grow faster than the HR systems supporting them.
            </p>
            <p>
              Policies sit in different places. Onboarding changes from one employee to the next. Benefits administration becomes complicated. Documentation is thin. A process lives in one person’s memory. Vendor coordination is disconnected. HR stays reactive.
            </p>
            <p>
              muzyhr exists to help those businesses establish clearer processes, stronger documentation, organized benefits administration, and people operations that can scale. The consultancy is independent. Clients work directly with Tamara.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-ink/10 bg-white">
        <Container className="py-16 sm:py-24">
          <Eyebrow>Professional focus</Eyebrow>
          <h2 className="mt-5 max-w-xl font-display text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-4xl">
            The areas her work has centred on.
          </h2>
          <ul className="mt-10 grid sm:grid-cols-2">
            {focusAreas.map((area, index) => (
              <li
                key={area}
                className="flex items-baseline gap-4 border-t border-ink/10 py-5"
              >
                <span className="text-[0.72rem] font-semibold tracking-[0.14em] text-taupe-deep">
                  0{index + 1}
                </span>
                <span className="font-display text-2xl tracking-[-0.03em] text-ink">
                  {area}
                </span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="theme-dark bg-charcoal text-ivory">
        <Container className="flex flex-col gap-8 py-16 sm:py-20 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              If the business is growing faster than its HR systems, let’s talk.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-beige">
              A direct conversation with the founder, about the structure your people operations need next.
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
