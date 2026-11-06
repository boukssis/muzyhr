"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { RotateCcw } from "lucide-react";

const nodes = [
  { label: "Onboarding", x: 28, y: -16 },
  { label: "Benefits", x: -26, y: 12 },
  { label: "Employee records", x: 32, y: 6 },
  { label: "HR documents", x: -22, y: 14 },
  { label: "Communication", x: 18, y: -8 },
] as const;

const ease = [0.22, 1, 0.36, 1] as const;

export function WorkflowVisual() {
  const reduce = useReducedMotion();
  const [play, setPlay] = useState(0);

  return (
    <figure>
      <div className="relative overflow-hidden border border-ink/10 bg-white px-4 py-6 sm:px-6 sm:py-8">
        <div aria-hidden="true" className="hero-grid pointer-events-none absolute inset-0 opacity-80" />
        <div className="relative" key={play}>
          <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-taupe-deep">
            People operations
          </p>
          <div className="relative mt-6">
            <motion.span
              aria-hidden="true"
              className="absolute bottom-3 left-[7px] top-3 w-px origin-top bg-taupe-deep"
              initial={reduce ? false : { scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: reduce ? 0 : 0.9, delay: reduce ? 0 : 1.05, ease }}
            />
            <ol className="space-y-3">
              {nodes.map((node, index) => (
                <motion.li
                  key={node.label}
                  className="relative grid grid-cols-[1rem_1fr] items-center gap-4"
                  initial={reduce ? false : { x: node.x, y: node.y }}
                  animate={{ x: 0, y: 0 }}
                  transition={{
                    duration: reduce ? 0 : 1.05,
                    delay: reduce ? 0 : 0.65 + index * 0.1,
                    ease,
                  }}
                >
                  <span aria-hidden="true" className="relative z-10 size-3.5 justify-self-center bg-ink" />
                  <span className="flex min-h-12 items-center justify-between gap-3 border border-line bg-ivory px-3 sm:px-4">
                    <span className="font-display text-sm font-semibold tracking-[-0.03em] text-ink sm:text-base">
                      {node.label}
                    </span>
                    <span className="text-[0.62rem] font-semibold tracking-[0.14em] text-taupe-deep">
                      0{index + 1}
                    </span>
                  </span>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
      <figcaption className="mt-4 flex items-end justify-between gap-4">
        <p className="max-w-[16rem] text-sm leading-relaxed text-ink-soft">
          Scattered processes settle into one workflow the business can repeat.
        </p>
        {reduce ? null : (
          <button
            type="button"
            onClick={() => setPlay((value) => value + 1)}
            className="inline-flex min-h-11 shrink-0 items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-taupe-deep transition-colors hover:text-ink"
          >
            <RotateCcw aria-hidden className="size-3.5" strokeWidth={1.75} />
            Replay
          </button>
        )}
      </figcaption>
    </figure>
  );
}
