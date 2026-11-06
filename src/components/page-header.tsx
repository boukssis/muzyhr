import { Container } from "@/components/container";
import { Eyebrow } from "@/components/eyebrow";

export function PageHeader({
  eyebrow,
  title,
  accent,
  children,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  children?: React.ReactNode;
}) {
  return (
    <header className="border-b border-ink/10">
      <Container className="py-16 sm:py-20 lg:py-28">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-5 max-w-[12ch] font-display text-[2.35rem] font-semibold leading-[0.96] tracking-[-0.045em] text-ink min-[390px]:text-5xl sm:text-6xl lg:text-7xl">
          {title}
          {accent ? (
            <span className="mt-3 block font-serif text-[0.92em] font-normal italic leading-[1.05] tracking-[-0.03em] text-taupe-deep">
              {accent}
            </span>
          ) : null}
        </h1>
        {children ? (
          <div className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
            {children}
          </div>
        ) : null}
      </Container>
    </header>
  );
}
