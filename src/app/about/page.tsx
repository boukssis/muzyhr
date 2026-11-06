import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { Logo } from "@/components/logo";
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
      <header>
        <Container className="grid gap-10 py-16 sm:py-20 lg:grid-cols-12 lg:items-end lg:py-24">
          <h1 className="display uppercase text-ink lg:col-span-7">
            Meet the person
            <span className="mt-2 block font-serif text-[0.7em] font-normal normal-case italic text-taupe-deep">
              behind muzyhr.
            </span>
          </h1>
          <p className="max-w-sm text-base leading-relaxed text-ink-soft lg:col-span-4 lg:col-start-9">
            Founder-led HR consulting, established in Montréal in 2026. Remote support available.
          </p>
        </Container>
      </header>

      <section className="border-y border-ink/10 bg-stone">
        <Container className="grid gap-12 py-14 sm:py-20 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-4">
            <div className="border border-ink/10 bg-ivory p-8">
              <Logo className="brand-logo-lg" />
              <h2 className="mt-8 font-display text-4xl font-semibold tracking-[-0.04em] text-ink">
                {company.founder}
              </h2>
              <p className="mt-2 text-sm font-medium text-taupe-deep">Founder</p>
              <p className="mt-6 text-sm leading-relaxed text-ink">
                Montréal, Canada
                <span className="mt-1 block text-ink-soft">Working with growing businesses, including remotely.</span>
              </p>
              <a
                href={company.founderLinkedin}
                className="mt-6 inline-flex text-sm font-medium text-ink underline decoration-taupe underline-offset-4 hover:decoration-ink"
                rel="noopener noreferrer"
                target="_blank"
              >
                Tamara on LinkedIn
              </a>
            </div>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <p className="font-serif text-2xl italic leading-snug text-ink sm:text-[2rem]">
              After working in benefits and retirement services, Tamara saw how much the employee experience depends on the systems behind it. She created muzyhr to help growing businesses build those systems with clarity and intention.
            </p>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-ink-soft sm:text-lg">
              <p>
                Her experience spans Group Benefits, Group Retirement Services, benefits administration, employee communications, and HR processes. A pattern kept showing up: small businesses often grow faster than the HR systems supporting them.
              </p>
              <p>
                Policies sit in different places. Onboarding changes from one person to the next. Benefits become complicated. A process lives in someone’s memory. HR stays reactive.
              </p>
              <p>
                muzyhr is her response — clearer processes, stronger documentation, organized benefits administration, and people operations that can scale. Clients work directly with Tamara.
              </p>
            </div>
            <div className="mt-10 border-t border-ink/15 pt-6">
              <h3 className="font-display text-xl font-semibold tracking-[-0.03em] text-ink">
                A simple belief
              </h3>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-soft">
                Clear systems make everyday HR easier for the business and for the people in it. The work is practical: documents, workflows, communication, and administration that a growing team can keep using.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-16 sm:py-24">
          <h2 className="display-sm max-w-md text-ink">Where her work has centred.</h2>
          <ul className="mt-10 grid sm:grid-cols-2">
            {focusAreas.map((area, index) => (
              <li key={area} className="flex items-baseline gap-4 border-t border-ink/10 py-5">
                <span className="text-[0.72rem] font-semibold tracking-[0.14em] text-taupe-deep">
                  0{index + 1}
                </span>
                <span className="font-display text-2xl tracking-[-0.03em] text-ink">{area}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="theme-dark bg-charcoal text-ivory">
        <Container className="flex flex-col gap-8 py-16 sm:flex-row sm:items-end sm:justify-between sm:py-20">
          <div className="max-w-xl">
            <h2 className="display-sm">If growth is outrunning the HR systems, let’s talk.</h2>
          </div>
          <ButtonLink href="/contact" variant="light">
            Let’s talk HR
          </ButtonLink>
        </Container>
      </section>
    </>
  );
}
