import Link from "next/link";
import { Logo } from "@/components/logo";

type BrandLockupProps = {
  tone?: "default" | "inverse";
  priority?: boolean;
};

export function BrandLockup({
  tone = "default",
  priority = false,
}: BrandLockupProps) {
  const ink = tone === "inverse" ? "text-ivory" : "text-ink";
  const tag = tone === "inverse" ? "text-taupe" : "text-taupe-deep";

  return (
    <Link href="/" className="flex min-w-0 items-center gap-3">
      <Logo tone={tone} priority={priority} />
      <span className="flex min-w-0 flex-col leading-none">
        <span
          className={`font-display text-[1.05rem] font-semibold tracking-[-0.04em] ${ink}`}
        >
          muzyhr
        </span>
        <span
          className={`mt-1 hidden text-[0.62rem] font-medium uppercase tracking-[0.16em] sm:block ${tag}`}
        >
          People operations
        </span>
      </span>
    </Link>
  );
}
