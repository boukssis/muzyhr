import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { Eyebrow } from "@/components/eyebrow";
import { pageMeta } from "@/lib/metadata";

export const metadata = pageMeta({
  title: "Page not found",
  description: "This page is not part of the muzyhr site.",
  path: "/404",
});

export default function NotFound() {
  return (
    <section>
      <Container className="py-24 sm:py-32">
        <Eyebrow>404</Eyebrow>
        <h1 className="mt-5 max-w-[12ch] font-display text-4xl font-semibold tracking-[-0.04em] text-ink sm:text-6xl">
          This page isn’t part of the structure.
        </h1>
        <p className="mt-6 max-w-md text-base leading-relaxed text-ink-soft">
          The link may be out of date. The rest of the site is where it should be.
        </p>
        <div className="mt-8">
          <ButtonLink href="/">Back to home</ButtonLink>
        </div>
      </Container>
    </section>
  );
}
