import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { Eyebrow } from "@/components/eyebrow";
import { Logo } from "@/components/logo";
import { StructureSwitch } from "@/components/structure-switch";
import { WorkflowVisual } from "@/components/workflow-visual";
import { company, experience, expertise, problems, services, steps } from "@/config/site";
import { pageMeta } from "@/lib/metadata";

function line(x: number, y: number, rotate: number, delay: number) {
  return {
    "--x": `${x}px`,
    "--y": `${y}px`,
    "--r": `${rotate}deg`,
    "--delay": `${delay}s`,
  } as React.CSSProperties;
}

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
      <section className="hero-stage relative overflow-hidden border-b border-ink/10">
        <p className="hero-mark" aria-hidden="true">
          <span className="m">m</span>
          <span className="hr">hr</span>
        </p>
        <span className="hero-line top-[18%] left-[6%] w-40 sm:w-64" style={line(30, -18, -12, 0.1)} aria-hidden="true" />
        <span className="hero-line top-[32%] right-[8%] w-28 sm:w-52" style={line(-40, 16, 9, 0.25)} aria-hidden="true" />
        <span className="hero-line bottom-[22%] left-[18%] hidden w-72 sm:block" style={line(20, 24, 6, 0.4)} aria-hidden="true" />
        <span className="hero-line top-[58%] right-[22%] hidden w-40 lg:block" style={line(-24, -20, -8, 0.55)} aria-hidden="true" />
        <Container className="relative z-10 grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-12 lg:gap-10 lg:py-24">
          <div className="lg:col-span-7">
            <p className="hero-rise text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-taupe-deep">
              People operations, made simple.
            </p>
            <h1 className="mt-5 text-ink">
              <span
                className="hero-rise display block uppercase"
                style={{ animationDelay: "0.12s" }}
              >
                Your business
              </span>
              <span
                className="hero-rise display block uppercase"
                style={{ animationDelay: "0.24s" }}
              >
                is growing.
              </span>
              <span
                className="hero-rise mt-4 block font-serif text-[clamp(2.15rem,1.1rem+3.6vw,4.35rem)] italic leading-[1.02] tracking-[-0.03em] text-taupe-deep"
                style={{ animationDelay: "0.4s" }}
              >
                Your HR should too.
              </span>
            </h1>
            <p
              className="hero-rise mt-7 max-w-md text-base leading-relaxed text-ink-soft sm:text-lg"
              style={{ animationDelay: "0.52s" }}
            >
              Less admin chaos. Clearer processes. People operations built to grow with your business.
            </p>
            <div
              className="hero-rise mt-8 flex flex-col gap-3 sm:flex-row"
              style={{ animationDelay: "0.64s" }}
            >
              <ButtonLink href="/contact">Let’s talk HR</ButtonLink>
              <ButtonLink href="/services" variant="secondary">
                Explore our services
              </ButtonLink>
            </div>
          </div>
          <div className="lg:col-span-5">
            <WorkflowVisual />
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
        <Container className="py-16 sm:py-24 lg:py-28">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <h2 className="display-sm uppercase text-ink lg:col-span-7">
              The business is growing.
              <span className="mt-2 block font-serif text-[0.78em] font-normal normal-case italic tracking-[-0.03em] text-taupe-deep">
                The processes aren’t.
              </span>
            </h2>
            <p className="max-w-sm text-base leading-relaxed text-ink-soft lg:col-span-4 lg:col-start-9">
              Growth is welcome. The strain shows up in ordinary places, long before anyone calls it an HR problem.
            </p>
          </div>
          <ol className="mt-12 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-6">
            {problems.map((item, index) => (
              <li
                key={item}
                className={`bg-ivory p-6 transition-colors duration-300 hover:bg-beige sm:p-7 ${
                  index === 0 ? "lg:col-span-4" : "lg:col-span-2"
                } ${index > 1 ? "sm:col-span-1" : ""} ${index === 4 ? "sm:col-span-2" : ""}`}
              >
                <span className="text-[0.68rem] font-semibold tracking-[0.16em] text-taupe-deep">
                  0{index + 1}
                </span>
                <p className="mt-4 max-w-xl font-display text-xl font-semibold leading-snug tracking-[-0.03em] text-ink sm:text-2xl">
                  {item}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="rise border-y border-ink/10 bg-white">
        <Container className="grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-5">
            <Eyebrow>From chaos to clarity</Eyebrow>
            <h2 className="display-sm mt-5 text-ink">
              Less chaos.
              <span className="mt-2 block font-serif text-[0.86em] italic text-taupe-deep">
                More clarity.
              </span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink-soft sm:text-lg">
              muzyhr builds the people operations structure a growing business needs — clear processes, organized information, and practical support that makes everyday HR easier.
            </p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <StructureSwitch />
          </div>
        </Container>
      </section>

      <section className="rise">
        <Container className="py-16 sm:py-24 lg:py-28">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <h2 className="display-sm max-w-xl text-ink">
              The foundation your people operations need.
            </h2>
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-ink"
            >
              All services
              <ArrowRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
          <ol className="mt-10 border-t border-ink/15">
            {services.map((service) => (
              <li key={service.id}>
                <Link href={`/services#${service.id}`} className="service-row grid gap-4 py-7 sm:grid-cols-12 sm:items-center sm:gap-6">
                  <span className="font-display text-sm font-semibold tracking-[0.14em] text-taupe-deep sm:col-span-1">
                    {service.number}
                  </span>
                  <span className="font-display text-2xl font-semibold tracking-[-0.03em] text-ink sm:col-span-4 sm:text-[1.65rem]">
                    {service.name}
                  </span>
                  <span className="text-sm leading-relaxed text-ink-soft sm:col-span-6 sm:text-base">
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
        <Container className="grid gap-12 py-16 sm:py-24 lg:grid-cols-12 lg:items-center lg:py-28">
          <div className="border border-ink/10 bg-ivory p-8 sm:p-10 lg:col-span-5">
            <Logo className="brand-logo-lg" />
            <p className="mt-8 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-taupe-deep">
              Founder
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-[-0.04em] text-ink sm:text-5xl">
              Tamara Siziba
            </h2>
            <p className="mt-3 text-sm text-ink-soft">Founder of muzyhr · Montréal</p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Eyebrow>Meet the person behind muzyhr</Eyebrow>
            <p className="mt-5 font-serif text-2xl italic leading-snug text-ink sm:text-3xl">
              Her work in Group Benefits and Group Retirement Services showed how much the employee experience depends on the systems behind it.
            </p>
            <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
              Small businesses were often growing faster than their HR. Tamara created muzyhr in January 2026 so those businesses could build clearer processes, stronger documentation, and people operations that can scale. Clients work directly with her, including remotely.
            </p>
            <div className="mt-8">
              <ButtonLink href="/about" variant="secondary">
                Meet Tamara
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section className="rise bg-white">
        <Container className="py-16 sm:py-24">
          <Eyebrow>Real-world experience</Eyebrow>
          <h2 className="display-sm mt-5 max-w-2xl text-ink">
            Built from practical HR experience.
          </h2>
          <ul className="mt-10 grid gap-px bg-ink/10 sm:grid-cols-2">
            {experience.map((item, index) => (
              <li key={item} className="bg-white p-6 sm:p-8">
                <span className="text-[0.68rem] font-semibold tracking-[0.16em] text-taupe-deep">
                  0{index + 1}
                </span>
                <p className="mt-4 font-display text-xl font-semibold leading-snug tracking-[-0.03em] text-ink">
                  {item}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-ink-soft">
            Highlights from Tamara’s work. Not client case studies, and not measured results.
          </p>
        </Container>
      </section>

      <section className="rise">
        <Container className="py-16 sm:py-24 lg:py-28">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <h2 className="display-sm max-w-xl text-ink">Good HR starts with a clear plan.</h2>
            <ButtonLink href="/approach" variant="secondary">
              See the approach
            </ButtonLink>
          </div>
          <ol className="timeline mt-12 grid gap-8 lg:grid-cols-4 lg:gap-6 lg:pt-8">
            {steps.map((step) => (
              <li key={step.number} className="relative lg:pt-8">
                <span className="mb-4 block size-2 bg-ink lg:absolute lg:-top-1" aria-hidden="true" />
                <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-taupe-deep">{step.number}</p>
                <h3 className="mt-2 font-display text-2xl font-semibold tracking-[-0.03em] text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{step.summary}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="theme-dark bg-charcoal text-ivory">
        <Container className="grid items-end gap-10 py-16 sm:py-24 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-taupe">
              {company.name}
            </p>
            <h2 className="display-sm mt-4 max-w-3xl">
              Your next stage of growth deserves a stronger HR foundation.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-beige">
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
