"use client";

import { useEffect } from "react";
import { Container } from "@/components/container";
import { buttonClasses } from "@/components/button-styles";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section>
      <Container className="py-24 sm:py-32">
        <h1 className="max-w-[14ch] font-display text-4xl font-semibold tracking-[-0.04em] text-ink sm:text-6xl">
          Something went wrong on this page.
        </h1>
        <p className="mt-6 max-w-md text-base leading-relaxed text-ink-soft">
          The page didn’t load correctly. You can try again.
        </p>
        <button type="button" onClick={reset} className={`${buttonClasses("primary")} mt-8`}>
          Try again
        </button>
      </Container>
    </section>
  );
}
