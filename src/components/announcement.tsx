import Link from "next/link";
import { announcement } from "@/config/site";
import { Container } from "@/components/container";

export function Announcement() {
  if (!announcement.enabled) return null;

  return (
    <aside aria-label="Announcement" className="border-b border-ink/10 bg-stone">
      <Container className="flex flex-col gap-2 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
        <p className="text-sm leading-relaxed text-ink">
          <span className="mb-1 block text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-taupe-deep sm:mb-0 sm:mr-3 sm:inline">
            {announcement.eyebrow}
          </span>
          {announcement.message}
        </p>
        <Link
          href={announcement.href}
          className="shrink-0 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-ink underline decoration-taupe decoration-1 underline-offset-[5px] hover:decoration-ink"
        >
          {announcement.cta}
        </Link>
      </Container>
    </aside>
  );
}
