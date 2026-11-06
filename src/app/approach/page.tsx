import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { Eyebrow } from "@/components/eyebrow";
import { engagementShapes, organizedHr, reactiveHr, steps } from "@/config/site";
import { pageMeta } from "@/lib/metadata";

export const metadata = pageMeta({
  title: "Our approach",
  description:
    "How an independent people operations consultant helps growing businesses replace reactive HR with clearer workflows, documentation, and repeatable processes.",
  path: "/approach",
});

export default function ApproachPage() {
  return (
    <>
      <header className="overflow-hidden bg-charcoal text-ivory">
        <Container className="grid gap-8 py-16 sm:py-20 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-8">
            <Eyebrow tone="light">Our approach</Eyebrow>
            <h1 className="display mt-5 uppercase">
              Structure that
              <span className="mt-2 block font-serif text-[0.78em] font-normal normal-case italic text-taupe">
                supports growth.
              </span>
            </h1>
          </div>
          <p className="max-w-sm self-end text-base leading-relaxed text-beige lg:col-span-4">
            Simple, practical HR systems designed around the needs of growing businesses.
          </p>
        </Container>
      </header>

      <section>
        <Container className="grid gap-10 py-16 sm:py-24 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="display-sm text-ink">You work directly with the founder.</h2>
          </div>
          <div className="max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg lg:col-span-6 lg:col-start-7">
            <p>
              muzyhr is founder-led consulting for businesses whose people operations need to catch up with their growth. Tamara Siziba works with you — including remotely — on the processes, documents, and benefits administration that make everyday HR easier to run.
            </p>
            <p className="mt-4">
              The work can be a focused project or ongoing help. It is shaped around the business in front of her.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-y border-ink/10" aria-label="Reactive and organized HR">
        <div className="grid lg:grid-cols-2">
          <div className="bg-stone px-6 py-12 sm:px-10 lg:px-16 lg:py-20">
            <h2 className="font-display text-3xl font-semibold tracking-[-0.04em] text-ink">Reactive HR</h2>
            <ul className="mt-8 space-y-4">
              {reactiveHr.map((item) => (
                <li key={item} className="border-t border-ink/15 pt-4 font-display text-xl tracking-[-0.03em] text-ink">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="theme-dark bg-charcoal px-6 py-12 text-ivory sm:px-10 lg:px-16 lg:py-20">
            <h2 className="font-display text-3xl font-semibold tracking-[-0.04em]">Organized HR</h2>
            <ul className="mt-8 space-y-4">
              {organizedHr.map((item) => (
                <li key={item} className="border-t border-white/15 pt-4 font-display text-xl tracking-[-0.03em]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section>
        <Container className="py-16 sm:py-24 lg:py-28">
          <Eyebrow>How the work unfolds</Eyebrow>
          <h2 className="display-sm mt-5 max-w-xl text-ink">Four stages. One direction.</h2>
          <ol className="timeline mt-14 grid gap-10 lg:grid-cols-4 lg:gap-8 lg:pt-10">
            {steps.map((step) => (
              <li key={step.number} className="relative pl-0 lg:pt-8">
                <span className="mb-4 hidden size-2.5 bg-ivory ring-1 ring-taupe-deep lg:absolute lg:-top-[0.2rem] lg:block" aria-hidden="true" />
                <p className="font-display text-4xl font-semibold tracking-[-0.05em] text-taupe">{step.number}</p>
                <h3 className="mt-3 font-display text-2xl font-semibold uppercase tracking-[-0.03em] text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-ink">{step.summary}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.detail}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-16 sm:py-24">
          <h2 className="display-sm max-w-xl text-ink">The shape of the work depends on the business.</h2>
          <ul className="mt-10 grid gap-px bg-ink/10 sm:grid-cols-2">
            {engagementShapes.map((item, index) => (
              <li key={item.title} className="bg-white p-6 sm:p-8">
                <span className="text-[0.68rem] font-semibold tracking-[0.16em] text-taupe-deep">0{index + 1}</span>
                <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.03em] text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft sm:text-base">{item.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="theme-dark bg-charcoal text-ivory">
        <Container className="flex flex-col gap-8 py-16 sm:flex-row sm:items-end sm:justify-between sm:py-20">
          <h2 className="display-sm max-w-xl">Tell us where the structure is missing.</h2>
          <ButtonLink href="/contact" variant="light">
            Let’s talk HR
          </ButtonLink>
        </Container>
      </section>
    </>
  );
}
