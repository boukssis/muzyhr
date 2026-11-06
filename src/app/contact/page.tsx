import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";
import { company, deliveryEnabled } from "@/config/site";
import { pageMeta } from "@/lib/metadata";

export const metadata = pageMeta({
  title: "Contact",
  description:
    "Talk with Tamara Siziba about HR infrastructure, benefits administration, employee communications, or an HR audit for your growing business in Montréal or remotely.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="border-b border-ink/10">
      <Container className="grid gap-12 py-14 sm:py-20 lg:grid-cols-12 lg:gap-16 lg:py-24">
        <div className="lg:col-span-5">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-taupe-deep">
            Contact
          </p>
          <h1 className="mt-5 text-ink">
            <span className="block font-display text-[clamp(2.15rem,8vw,3.85rem)] font-semibold uppercase leading-[0.94] tracking-[-0.04em]">
              Let’s make HR
            </span>
            <span className="mt-3 block font-serif text-[clamp(2.15rem,2.8vw,3.35rem)] italic leading-none tracking-[-0.03em] text-taupe-deep">
              feel easier.
            </span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ink-soft sm:text-lg">
            Tell us about your business and the support you’re looking for. We’ll explore how muzyhr could help.
          </p>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink">
            You work with Tamara Siziba directly. Founder-led consulting from Montréal, with remote support available.
          </p>
          <dl className="mt-10 space-y-5 border-t border-ink/10 pt-8 text-sm">
            <div>
              <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-taupe-deep">
                Location
              </dt>
              <dd className="mt-2 text-ink">Montréal, Québec</dd>
              <dd className="mt-1 text-ink-soft">Remote support available</dd>
            </div>
            <div>
              <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-taupe-deep">
                LinkedIn
              </dt>
              <dd className="mt-2 flex flex-col gap-2">
                <a
                  href={company.linkedin}
                  className="text-ink underline decoration-taupe underline-offset-4 hover:decoration-ink"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  muzyhr
                </a>
                <a
                  href={company.founderLinkedin}
                  className="text-ink underline decoration-taupe underline-offset-4 hover:decoration-ink"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Tamara Siziba
                </a>
              </dd>
            </div>
          </dl>
          <svg viewBox="0 0 280 72" className="mt-12 hidden h-16 w-full max-w-xs text-taupe lg:block" aria-hidden="true">
            <line x1="4" y1="36" x2="276" y2="36" stroke="currentColor" strokeWidth="1" />
            <circle cx="20" cy="36" r="4" fill="#25211F" />
            <circle cx="104" cy="18" r="3" fill="#51443E" />
            <circle cx="168" cy="50" r="3" fill="#51443E" />
            <circle cx="252" cy="36" r="4" fill="#25211F" />
          </svg>
        </div>
        <div className="lg:col-span-7">
          <ContactForm deliveryEnabled={deliveryEnabled()} />
        </div>
      </Container>
    </section>
  );
}
