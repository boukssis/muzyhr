import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { Eyebrow } from "@/components/eyebrow";
import { Logo } from "@/components/logo";
import { StructureGraphic } from "@/components/structure-graphic";
import {
  company,
  experience,
  expertise,
  problems,
  services,
  steps,
} from "@/config/site";
import { pageMeta } from "@/lib/metadata";

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
      <section className="relative overflow-hidden border-b border-ink/10">
        <div aria-hidden="true" className="hero-grid pointer-events-none absolute inset-y-0 right-0 hidden w-[46%] lg:block" />
        <Container className="relative grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-12 lg:gap-8 lg:py-24">
          <div className="lg:col-span-7">
            <Eyebrow>HR infrastructure & people operations</Eyebrow>
            <h1 className="mt-6 text-ink">
              <span className="block font-display text-[1.85rem] font-semibold uppercase leading-[0.92] tracking-[-0.045em] min-[390px]:text-[2.15rem] sm:text-6xl lg:text-[5.15rem]">
                Your business
              </span>
              <span className="block font-display text-[1.85rem] font-semibold uppercase leading-[0.92] tracking-[-0.045em] min-[390px]:text-[2.15rem] sm:text-6xl lg:text-[5.15rem]">
                is growing.
              </span>
              <span className="mt-4 block font-serif text-[1.8rem] font-normal italic leading-[1.05] tracking-[-0.03em] text-taupe-deep min-[390px]:text-[2.05rem] sm:mt-6 sm:text-5xl lg:text-[4.15rem]">
                Your HR should
              </span>
              <span className="block font-serif text-[1.8rem] font-normal italic leading-[1.05] tracking-[-0.03em] text-taupe-deep min-[390px]:text-[2.05rem] sm:text-5xl lg:text-[4.15rem]">
                grow with it.
              </span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
              Practical HR support for growing businesses. From onboarding and employee benefits to organized systems and smoother everyday operations.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" className="w-full sm:w-auto">
                Build your HR foundation
              </ButtonLink>
              <ButtonLink href="/services" variant="secondary" className="w-full sm:w-auto">
                Explore our services
              </ButtonLink>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-4 gap-y-2">
              {expertise.map((item) => (
                <li
                  key={item}
                  className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-taupe-deep"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <figure className="lg:col-span-5 lg:border-l lg:border-ink/10 lg:pl-10">
            <StructureGraphic mode="animate" />
            <figcaption className="mt-5 max-w-xs text-[0.68rem] font-semibold uppercase leading-relaxed tracking-[0.16em] text-taupe-deep">
              Scattered processes, brought into a clear structure
            </figcaption>
          </figure>
        </Container>
      </section>

      <section className="rise border-b border-ink/10">
        <Container className="grid gap-12 py-20 sm:py-28 lg:grid-cols-12 lg:gap-16 lg:py-32">
          <div className="lg:col-span-5">
            <Eyebrow>When business growth outpaces HR</Eyebrow>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-[0.98] tracking-[-0.04em] text-ink sm:text-5xl">
              Growth is exciting.
              <span className="mt-2 block font-serif text-[0.92em] font-normal italic tracking-[-0.03em] text-taupe-deep">
                HR chaos isn’t.
              </span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink-soft sm:text-lg">
              When a company grows, people operations often stay informal for longer than they should. The strain shows up in ordinary, fixable places.
            </p>
            <div className="mt-10 hidden lg:block">
              <StructureGraphic mode="scatter" compact />
            </div>
          </div>
          <ol className="lg:col-span-6 lg:col-start-7">
            {problems.map((item, index) => (
              <li key={item} className="border-t border-ink/10 py-5 last:border-b">
                <div className="grid grid-cols-[2.5rem_1fr] gap-4 sm:grid-cols-[3.5rem_1fr]">
                  <span className="pt-1 text-[0.72rem] font-semibold tracking-[0.14em] text-taupe-deep">
                    0{index + 1}
                  </span>
                  <p className="font-display text-xl leading-snug tracking-[-0.03em] text-ink sm:text-2xl">
                    {item}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="rise bg-white">
        <Container className="grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-12 lg:py-32">
          <div className="lg:col-span-6">
            <Eyebrow>A clearer way of working</Eyebrow>
            <h2 className="mt-5 font-display text-4xl font-semibold uppercase leading-[0.92] tracking-[-0.045em] text-ink sm:text-6xl lg:text-7xl">
              Less chaos.
              <span className="mt-3 block font-serif text-[0.86em] font-normal normal-case italic tracking-[-0.03em] text-taupe-deep">
                More clarity.
              </span>
            </h2>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
              muzyhr builds the people operations structure your business needs to grow confidently — with clear processes, organized information, and practical support that makes everyday HR easier.
            </p>
          </div>
          <figure className="lg:col-span-5 lg:col-start-8">
            <StructureGraphic mode="align" />
            <figcaption className="mt-5 max-w-sm text-sm leading-relaxed text-ink-soft">
              {company.promise}
            </figcaption>
          </figure>
        </Container>
      </section>

      <section className="rise">
        <Container className="py-20 sm:py-28 lg:py-32">
          <div className="max-w-3xl">
            <Eyebrow>Four core services</Eyebrow>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-[0.98] tracking-[-0.04em] text-ink sm:text-5xl">
              The foundation your people operations need.
            </h2>
          </div>
          <div className="mt-12">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/services#${service.id}`}
                className="service-row group grid grid-cols-[auto_1fr_auto] items-start gap-x-4 gap-y-2 border-t border-ink/10 py-7 last:border-b sm:grid-cols-[4.5rem_1fr_auto] sm:items-center sm:gap-x-8 sm:py-8"
              >
                <span className="pt-1 text-[0.72rem] font-semibold tracking-[0.14em] text-taupe-deep sm:pt-0">
                  {service.number}
                </span>
                <span>
                  <span className="block font-display text-2xl leading-tight tracking-[-0.03em] text-ink sm:text-[1.7rem]">
                    {service.name}
                  </span>
                  <span className="mt-2 block max-w-2xl text-sm leading-relaxed text-ink-soft sm:text-base">
                    {service.homeSummary}
                  </span>
                </span>
                <ArrowUpRight
                  aria-hidden
                  className="arrow mt-1 h-5 w-5 text-ink sm:mt-0"
                  strokeWidth={1.25}
                />
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="rise border-y border-ink/10 bg-stone">
        <Container className="grid gap-10 py-20 sm:py-28 lg:grid-cols-12 lg:items-end lg:py-32">
          <div className="lg:col-span-5">
            <Eyebrow>Meet the person behind muzyhr</Eyebrow>
            <h2 className="mt-5 font-serif text-5xl italic leading-[0.95] tracking-[-0.03em] text-ink sm:text-6xl">
              Tamara Siziba
            </h2>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-taupe-deep">
              Founder of muzyhr
            </p>
            <div className="mt-8">
              <ButtonLink href="/about" variant="secondary">
                Meet Tamara
              </ButtonLink>
            </div>
          </div>
          <div className="max-w-xl space-y-5 text-base leading-relaxed text-ink-soft sm:text-lg lg:col-span-6 lg:col-start-7">
            <p>
              Tamara founded muzyhr in Montréal in January 2026. The practice is independent and founder-led, with support available remotely.
            </p>
            <p>
              Her background in Group Benefits and Group Retirement Services, together with benefits administration, employee communications, and HR processes, shaped how she sees the link between HR systems and the employee experience.
            </p>
            <p>
              Growing businesses were often moving faster than their people operations. muzyhr is her response: practical structure, clearer documentation, and support that can scale with the company.
            </p>
          </div>
        </Container>
      </section>

      <section className="rise">
        <Container className="py-20 sm:py-28 lg:py-32">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <Eyebrow>How we work</Eyebrow>
              <h2 className="mt-5 font-display text-4xl font-semibold leading-[0.98] tracking-[-0.04em] text-ink sm:text-5xl">
                Good HR starts with a clear plan.
              </h2>
            </div>
            <ButtonLink href="/approach" variant="secondary">
              See the approach
            </ButtonLink>
          </div>
          <ol className="mt-14 grid gap-10 border-t border-ink/10 pt-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <li key={step.number}>
                <span className="font-display text-sm font-semibold tracking-[0.16em] text-taupe-deep">
                  {step.number}
                </span>
                <h3 className="mt-4 font-display text-2xl font-semibold tracking-[-0.03em] text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft sm:text-base">
                  {step.summary}
                </p>
              </li>
            ))}
          </ol>
          <p className="mt-10 max-w-2xl text-sm leading-relaxed text-ink-soft">
            An illustrative way of working, shaped around each business. It is not a fixed methodology, a published package, or a promise of specific results.
          </p>
        </Container>
      </section>

      <section className="rise bg-white">
        <Container className="py-20 sm:py-28 lg:py-32">
          <Eyebrow>Real-world experience</Eyebrow>
          <h2 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-[0.98] tracking-[-0.04em] text-ink sm:text-5xl">
            Built from practical HR experience.
          </h2>
          <ul className="mt-12 grid border-t border-ink/10 sm:grid-cols-2">
            {experience.map((item) => (
              <li
                key={item}
                className="border-b border-ink/10 py-6 pr-6 text-lg leading-snug text-ink sm:py-8 sm:text-xl sm:[&:nth-child(odd)]:border-r sm:[&:nth-child(odd)]:pr-8"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-ink-soft">
            Experience highlights from Tamara’s work — not client case studies, and not measured results.
          </p>
        </Container>
      </section>

      <section className="theme-dark bg-charcoal text-ivory">
        <Container className="grid items-end gap-10 py-20 sm:py-28 lg:grid-cols-12 lg:py-32">
          <div className="lg:col-span-8">
            <Logo tone="inverse" className="brand-logo" />
            <h2 className="mt-8 max-w-[16ch] font-display text-4xl font-semibold leading-[0.98] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Your next stage of growth deserves a{" "}
              <span className="font-serif font-normal italic text-taupe">
                stronger HR foundation.
              </span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-beige sm:text-lg">
              Let’s make people operations simpler, more organized, and ready for what’s next.
            </p>
          </div>
          <div className="lg:col-span-4 lg:justify-self-end">
            <ButtonLink href="/contact" variant="light">
              Let’s talk about your business
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
