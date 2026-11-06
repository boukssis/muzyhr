import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { Eyebrow } from "@/components/eyebrow";
import { PageHeader } from "@/components/page-header";
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
      <PageHeader
        eyebrow="Our approach"
        title="Structure that"
        accent="supports growth."
      >
        Simple, practical HR systems designed around the needs of growing businesses.
      </PageHeader>

      <section>
        <Container className="py-16 sm:py-24 lg:py-28">
          <div className="max-w-2xl">
            <Eyebrow>Why an independent consultant</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-5xl">
              A founder who works directly on the systems.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-soft sm:text-lg">
              muzyhr is not a recruitment firm and not a software product. It is founder-led consulting for businesses whose people operations need to catch up with their growth. You work with Tamara Siziba — including remotely — on the processes, documents, and benefits administration that make everyday HR easier to run.
            </p>
          </div>

          <div className="mt-14 grid lg:grid-cols-2">
            <div className="border border-ink/10 p-7 sm:p-10">
              <h3 className="font-display text-2xl font-semibold tracking-[-0.03em] text-ink">
                Reactive HR
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                The business is moving, and the people systems are still catching up one question at a time.
              </p>
              <ul className="mt-8 space-y-4">
                {reactiveHr.map((item) => (
                  <li key={item} className="border-t border-ink/10 pt-4 text-lg text-ink">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="theme-dark border border-charcoal bg-charcoal p-7 text-ivory sm:p-10 lg:-ml-px">
              <h3 className="font-display text-2xl font-semibold tracking-[-0.03em]">
                Organized HR
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-beige">
                The same work, with a structure other people can follow.
              </p>
              <ul className="mt-8 space-y-4">
                {organizedHr.map((item) => (
                  <li key={item} className="border-t border-ivory/15 pt-4 text-lg">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-ink/10 bg-white">
        <Container className="py-16 sm:py-24 lg:py-28">
          <Eyebrow>An illustrative sequence</Eyebrow>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-5xl">
            From the current state to a structure the business can use.
          </h2>
          <ol className="relative mt-14 grid gap-12 lg:grid-cols-4 lg:gap-8">
            <span
              aria-hidden="true"
              className="absolute left-0 right-0 top-3 hidden h-px bg-ink/15 lg:block"
            />
            {steps.map((step) => (
              <li key={step.number} className="relative">
                <span className="relative z-10 inline-flex bg-white pr-3 font-display text-sm font-semibold tracking-[0.16em] text-taupe-deep">
                  {step.number}
                </span>
                <h3 className="mt-4 font-display text-2xl font-semibold tracking-[-0.03em] text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft sm:text-base">
                  {step.detail}
                </p>
              </li>
            ))}
          </ol>
          <p className="mt-12 max-w-2xl text-sm leading-relaxed text-ink-soft">
            This is a useful way to describe an engagement. It is not a proprietary methodology, and it is not a commitment to a fixed set of deliverables.
          </p>
        </Container>
      </section>

      <section>
        <Container className="py-16 sm:py-24 lg:py-28">
          <Eyebrow>Shaped around the business</Eyebrow>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-5xl">
            Different companies need different kinds of help.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
            Some need a foundation built once. Others need a process tightened, a set of documents written, or steady help as the team grows. muzyhr does not publish packages or rates. The shape of the work is agreed in conversation.
          </p>
          <ol className="mt-12 divide-y divide-ink/10 border-y border-ink/10">
            {engagementShapes.map((item, index) => (
              <li key={item.title} className="grid gap-3 py-7 sm:grid-cols-[8rem_1fr] sm:gap-8 sm:py-8">
                <span className="text-[0.72rem] font-semibold tracking-[0.16em] text-taupe-deep">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-semibold tracking-[-0.03em] text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-base leading-relaxed text-ink-soft">
                    {item.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="theme-dark bg-charcoal text-ivory">
        <Container className="flex flex-col gap-8 py-16 sm:py-20 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              When the plan is clear, the work can start.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-beige">
              Tell Tamara what is working, what is scattered, and where you want people operations to be more reliable.
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
