import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { Eyebrow } from "@/components/eyebrow";
import { Logo } from "@/components/logo";
import { MhrEffect } from "@/components/mhr-effect";
import { StructureSwitch } from "@/components/structure-switch";
import { experience, expertise, services } from "@/config/site";
import { pageMeta } from "@/lib/metadata";

const pains = [
  "Onboarding feels different every time.",
  "Important information lives everywhere.",
  "Your HR processes can't keep up.",
];

export const metadata = pageMeta({
  title: "muzyhr — HR infrastructure for growing businesses",
  description:
    "Practical HR support for growing businesses in Montréal and across Canada. People operations consulting for benefits administration, employee onboarding, HR infrastructure, and process improvement. Remote support available.",
  path: "/",
  absolute: true,
});

export default function HomePage() {
  return (
    <>
      <section className="hero-stage relative border-b border-ink/10 lg:flex lg:min-h-[calc(100dvh-var(--header-h))] lg:items-center">
        <Container className="relative z-10 grid items-center gap-8 py-10 sm:py-14 lg:grid-cols-12 lg:gap-6 lg:py-8">
          <div className="lg:col-span-6">
            <p className="hero-rise text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-taupe-deep">
              People operations, made simple.
            </p>
            <h1 className="mt-5 text-ink">
              <span className="hero-rise display block uppercase" style={{ animationDelay: "0.12s" }}>
                Your business
              </span>
              <span className="hero-rise display block uppercase" style={{ animationDelay: "0.24s" }}>
                is growing.
              </span>
              <span
                className="hero-rise mt-4 block font-serif text-[clamp(2.15rem,1.1rem+3.6vw,4.15rem)] italic leading-[1.02] tracking-[-0.03em] text-taupe-deep"
                style={{ animationDelay: "0.4s" }}
              >
                Your HR should too.
              </span>
            </h1>
            <p
              className="hero-rise mt-6 max-w-md text-base leading-relaxed text-ink-soft sm:text-lg"
              style={{ animationDelay: "0.52s" }}
            >
              Less admin chaos. Clearer processes. HR systems built to grow with your business.
            </p>
            <div className="hero-rise mt-8 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "0.64s" }}>
              <ButtonLink href="/contact">Let’s talk HR</ButtonLink>
              <ButtonLink href="/services" variant="secondary">
                Explore services
              </ButtonLink>
            </div>
          </div>
          <div className="lg:col-span-6">
            <MhrEffect replayable />
          </div>
        </Container>
      </section>

      <section aria-label="Areas of support" className="bg-charcoal text-ivory">
        <Container className="flex flex-wrap gap-x-8 gap-y-3 py-4">
          {expertise.map((item) => (
            <p key={item} className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-beige">
              {item}
            </p>
          ))}
        </Container>
      </section>

      <section className="rise">
        <Container className="py-14 sm:py-20">
          <h2 className="display-sm max-w-xl uppercase text-ink">
            Growth is exciting.
            <span className="mt-2 block font-serif text-[0.86em] font-normal normal-case italic text-taupe-deep">
              HR chaos isn’t.
            </span>
          </h2>
          <ol className="relative mt-10 max-w-3xl border-l border-taupe/70 pl-6 sm:pl-8">
            {pains.map((item, index) => (
              <li key={item} className="relative pb-8 last:pb-0">
                <span className="absolute -left-[1.7rem] top-2 size-2 rounded-full bg-ink sm:-left-[2.2rem]" aria-hidden="true" />
                <p className="font-display text-[clamp(1.35rem,1rem+1.4vw,2rem)] font-semibold leading-snug tracking-[-0.03em] text-ink">
                  <span className="mr-3 text-[0.68rem] font-semibold tracking-[0.14em] text-taupe-deep">0{index + 1}</span>
                  {item}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="rise border-y border-ink/10 bg-white">
        <Container className="grid gap-10 py-14 sm:py-20 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <Eyebrow>The mhr effect</Eyebrow>
            <h2 className="display-sm mt-4 text-ink">
              The same business.
              <span className="mt-2 block font-serif text-[0.82em] italic text-taupe-deep">
                A better way to run HR.
              </span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-soft">
              See how organized people operations can change the way your business works.
            </p>
          </div>
          <div className="lg:col-span-8">
            <StructureSwitch />
          </div>
        </Container>
      </section>

      <section className="rise">
        <Container className="py-14 sm:py-20">
          <div className="flex items-end justify-between gap-6">
            <h2 className="display-sm max-w-md text-ink">Four ways in.</h2>
            <Link
              href="/services"
              className="group inline-flex min-h-11 items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-ink"
            >
              All services
              <ArrowRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
          <ol className="mt-8 border-t border-ink/15">
            {services.map((service) => (
              <li key={service.id}>
                <Link href={`/services#${service.id}`} className="service-row grid grid-cols-[2.5rem_1fr_auto] items-center gap-3 py-5 sm:grid-cols-12 sm:gap-6 sm:py-6">
                  <span className="font-display text-sm font-semibold tracking-[0.14em] text-taupe-deep sm:col-span-1">
                    {service.number}
                  </span>
                  <span className="font-display text-xl font-semibold tracking-[-0.03em] text-ink sm:col-span-4 sm:text-2xl">
                    {service.name}
                  </span>
                  <span className="col-span-2 hidden text-sm leading-relaxed text-ink-soft sm:col-span-6 sm:block sm:text-base">
                    {service.homeSummary}
                  </span>
                  <ArrowRight aria-hidden className="arrow size-5 text-ink sm:col-span-1 sm:justify-self-end" />
                </Link>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="rise bg-stone">
        <Container className="grid items-center gap-8 py-14 sm:py-20 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo className="brand-logo" />
            <h2 className="mt-6 font-display text-4xl font-semibold tracking-[-0.04em] text-ink">Tamara Siziba</h2>
            <p className="mt-2 text-sm text-taupe-deep">Founder · Montréal</p>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <p className="font-serif text-2xl italic leading-snug text-ink sm:text-3xl">
              After working in Group Benefits and Group Retirement Services, Tamara started muzyhr so growing businesses could build HR that keeps up.
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft">
              Founder-led support from Montréal, including remotely. Clients work with her directly.
            </p>
            <div className="mt-6">
              <ButtonLink href="/about" variant="secondary">
                Meet Tamara
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section className="rise">
        <Container className="py-14 sm:py-16">
          <h2 className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-taupe-deep">
            Practical experience
          </h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {experience.map((item) => (
              <li key={item} className="border-t border-ink/10 pt-3 text-base leading-snug text-ink">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-ink-soft">From Tamara’s work. Not client results.</p>
        </Container>
      </section>

      <section className="theme-dark bg-charcoal text-ivory">
        <Container className="flex flex-col items-start gap-8 py-16 sm:py-20 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="display-sm max-w-3xl uppercase">
            Ready to put your HR
            <span className="mt-2 block font-serif text-[0.82em] font-normal normal-case italic text-taupe">
              in working order?
            </span>
          </h2>
          <ButtonLink href="/contact" variant="light">
            Let’s talk HR
          </ButtonLink>
        </Container>
      </section>
    </>
  );
}
