import Link from "next/link";
import { announcement } from "@/config/site";
import { Container } from "@/components/container";

export function Announcement() {
  if (!announcement.enabled) return null;

  return (
    <aside aria-label="Announcement" className="border-b border-beige bg-beige/70">
      <Container className="flex items-center justify-between gap-4 py-2">
        <p className="min-w-0 text-sm leading-snug text-ink">
          <span className="mr-2 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-taupe-deep">
            {announcement.eyebrow}
          </span>
          <span className="text-ink-soft">{announcement.message}</span>
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
