import Link from "next/link";
import { BrandLockup } from "@/components/brand-lockup";
import { Container } from "@/components/container";
import { company, nav, preview } from "@/config/site";

export function Footer() {
  return (
    <footer className="theme-dark bg-charcoal text-ivory">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <BrandLockup tone="inverse" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-beige">
              {company.positioning}
            </p>
          </div>
          <nav aria-label="Footer" className="lg:col-span-4">
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-beige transition-colors hover:text-ivory">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="space-y-3 text-sm lg:col-span-3 lg:text-right">
            <p>
              <a
                href={company.linkedin}
                className="text-beige transition-colors hover:text-ivory"
                rel="noopener noreferrer"
                target="_blank"
              >
                Company LinkedIn
              </a>
            </p>
            <p>
              <a
                href={company.founderLinkedin}
                className="text-beige transition-colors hover:text-ivory"
                rel="noopener noreferrer"
                target="_blank"
              >
                Tamara on LinkedIn
              </a>
            </p>
            <p className="text-ivory">{company.locality}, {company.region}</p>
            <p className="text-beige">Remote support available</p>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs leading-relaxed text-beige sm:flex-row sm:items-end sm:justify-between">
          <p>© 2026 muzyhr. Independent, founder-led consulting.</p>
          <p>
            <span className="font-semibold uppercase tracking-[0.14em] text-taupe">{preview.label}</span>
            <span className="mx-2 text-white/30" aria-hidden="true">
              ·
            </span>
            {preview.note}
          </p>
        </div>
      </Container>
    </footer>
  );
}
