import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { company, deliveryEnabled } from "@/config/site";
import { pageMeta } from "@/lib/metadata";

export const metadata = pageMeta({
  title: "Contact",
  description:
    "Request a conversation with Tamara Siziba about HR infrastructure, benefits administration, employee communications, onboarding, or an HR audit for your growing business.",
  path: "/contact",
});

export default function ContactPage() {
  const canDeliver = deliveryEnabled();

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let’s get your HR"
        accent="working for you."
      >
        Tell us a little about your business and where you need support. Let’s explore how muzyhr could help you build a stronger HR foundation.
      </PageHeader>

      <section>
        <Container className="grid gap-14 py-14 sm:py-20 lg:grid-cols-12 lg:gap-16 lg:py-24">
          <div className="lg:col-span-4">
            <h2 className="font-display text-2xl font-semibold tracking-[-0.03em] text-ink">
              A direct conversation.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              Share the context, not a confidential employee file. Tamara will use what you send to understand whether muzyhr is the right support.
            </p>
            <dl className="mt-10 space-y-6 text-sm">
              <div>
                <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-taupe-deep">
                  Company
                </dt>
                <dd className="mt-2">
                  <a
                    href={company.linkedin}
                    className="text-ink underline decoration-taupe underline-offset-4 hover:decoration-ink"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    muzyhr on LinkedIn
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-taupe-deep">
                  Founder
                </dt>
                <dd className="mt-2">
                  <a
                    href={company.founderLinkedin}
                    className="text-ink underline decoration-taupe underline-offset-4 hover:decoration-ink"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Tamara Siziba on LinkedIn
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-taupe-deep">
                  Location
                </dt>
                <dd className="mt-2 text-ink">Montréal, Québec</dd>
                <dd className="mt-1 text-ink-soft">Remote support available</dd>
              </div>
            </dl>
          </div>
          <div className="lg:col-span-8">
            <ContactForm deliveryEnabled={canDeliver} />
          </div>
        </Container>
      </section>
    </>
  );
}
