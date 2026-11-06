import Link from "next/link";
import { BrandLockup } from "@/components/brand-lockup";
import { Container } from "@/components/container";
import { company, nav } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-ivory">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <BrandLockup />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink-soft">
              {company.positioning}
            </p>
          </div>
          <nav aria-label="Footer" className="grid grid-cols-2 gap-8 lg:col-span-4">
            <ul className="space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-ink-soft transition-colors hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-3">
              <li>
                <a
                  href={company.linkedin}
                  className="text-sm text-ink-soft transition-colors hover:text-ink"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Company LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={company.founderLinkedin}
                  className="text-sm text-ink-soft transition-colors hover:text-ink"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Tamara on LinkedIn
                </a>
              </li>
            </ul>
          </nav>
          <div className="lg:col-span-3 lg:text-right">
            <p className="text-sm leading-relaxed text-ink">{company.location}</p>
            <p className="mt-2 text-sm text-ink-soft">Remote support available</p>
            <p className="mt-2 text-sm text-ink-soft">Established {company.founded}</p>
          </div>
        </div>
        <div className="mt-14 overflow-hidden border-t border-ink/10 pt-8">
          <p
            aria-hidden="true"
            className="font-display text-[clamp(4.5rem,16vw,9.5rem)] font-semibold leading-none tracking-[-0.06em] text-ink/[0.06]"
          >
            muzyhr
          </p>
          <div className="mt-6 flex flex-col gap-2 text-xs leading-relaxed text-ink-soft sm:flex-row sm:items-end sm:justify-between">
            <p>© 2026 muzyhr. Independent, founder-led consulting.</p>
            <p className="max-w-sm sm:text-right">
              Design preview for review. Not an official published site, and not yet handling live enquiries.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
