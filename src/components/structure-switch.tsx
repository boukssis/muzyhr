"use client";

import { useId, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const modes = {
  without: {
    label: "Without structure",
    kicker: "Scattered",
    points: [
      "Onboarding changes with whoever is available.",
      "Documents live across inboxes and shared drives.",
      "Benefits questions start from scratch each time.",
      "Important updates depend on one person’s memory.",
    ],
  },
  with: {
    label: "With structure",
    kicker: "Locked in",
    points: [
      "Every new hire follows the same clear path.",
      "People know where information lives.",
      "Enrolment and vendors follow a set workflow.",
      "Communication goes out the same way each time.",
    ],
  },
} as const;

const ease = [0.22, 1, 0.36, 1] as const;

const strokes = [
  { top: "18%", width: "34%", left: "8%", x: 40, y: 18, r: -18 },
  { top: "42%", width: "46%", left: "40%", x: -30, y: -12, r: 14 },
  { top: "68%", width: "28%", left: "14%", x: 24, y: 20, r: 8 },
  { top: "78%", width: "38%", left: "48%", x: -18, y: -22, r: -11 },
];

export function StructureSwitch() {
  const [mode, setMode] = useState<keyof typeof modes>("without");
  const reduce = useReducedMotion();
  const baseId = useId();
  const organized = mode === "with";
  const current = modes[mode];

  return (
    <div>
      <div
        role="tablist"
        aria-label="Compare people operations"
        className="relative grid grid-cols-2 border border-ink/15 bg-white p-1"
      >
        <span
          aria-hidden="true"
          className="absolute bottom-1 left-1 top-1 w-[calc(50%-4px)] bg-ink transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: organized ? "translateX(100%)" : "translateX(0)" }}
        />
        {(Object.keys(modes) as Array<keyof typeof modes>).map((key) => {
          const selected = mode === key;
          return (
            <button
              key={key}
              id={`${baseId}-${key}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`${baseId}-panel`}
              className={`relative z-10 min-h-11 px-3 text-[0.68rem] font-semibold uppercase tracking-[0.12em] transition-colors sm:text-[0.72rem] ${
                selected ? "text-ivory" : "text-ink-soft hover:text-ink"
              }`}
              onClick={() => setMode(key)}
            >
              {modes[key].label}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`${baseId}-panel`}
        aria-labelledby={`${baseId}-${mode}`}
        className="mt-4 overflow-hidden border border-ink/10 bg-white"
      >
        <div className={`relative h-52 overflow-hidden sm:h-60 ${organized ? "bg-charcoal" : "bg-stone"}`}>
          {strokes.map((stroke) => (
            <motion.span
              key={stroke.top}
              aria-hidden="true"
              className={`absolute h-px ${organized ? "bg-taupe" : "bg-taupe-deep/70"}`}
              style={{ top: stroke.top, left: stroke.left, width: stroke.width }}
              initial={false}
              animate={
                reduce || organized
                  ? { x: 0, y: 0, rotate: 0, opacity: organized ? 0.9 : 0.45 }
                  : { x: stroke.x, y: stroke.y, rotate: stroke.r, opacity: 0.55 }
              }
              transition={{ duration: reduce ? 0 : 0.7, ease }}
            />
          ))}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.span
              aria-hidden="true"
              className={`font-serif text-[6.5rem] leading-none tracking-[-0.06em] sm:text-[8rem] ${
                organized ? "text-ivory" : "text-ink"
              }`}
              initial={false}
              animate={
                reduce || organized
                  ? { x: 0, y: 0, rotate: 0 }
                  : { x: -34, y: 26, rotate: -12 }
              }
              transition={{ duration: reduce ? 0 : 0.75, ease }}
            >
              m
            </motion.span>
            <motion.span
              aria-hidden="true"
              className={`-ml-1 font-serif text-[6.5rem] italic leading-none tracking-[-0.06em] sm:text-[8rem] ${
                organized ? "text-taupe" : "text-taupe-deep"
              }`}
              initial={false}
              animate={
                reduce || organized
                  ? { x: 0, y: 0, rotate: 0 }
                  : { x: 42, y: -30, rotate: 11 }
              }
              transition={{ duration: reduce ? 0 : 0.75, ease }}
            >
              hr
            </motion.span>
          </div>
          <p
            className={`absolute bottom-4 left-5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] ${
              organized ? "text-taupe" : "text-taupe-deep"
            }`}
          >
            {current.kicker}
          </p>
        </div>
        <ol className="grid sm:grid-cols-2">
          {current.points.map((point, index) => (
            <li key={point} className="border-t border-ink/10 px-5 py-4">
              <span className="text-[0.68rem] font-semibold tracking-[0.14em] text-taupe-deep">
                0{index + 1}
              </span>
              <p className="mt-2 font-display text-base font-semibold leading-snug tracking-[-0.03em] text-ink sm:text-lg">
                {point}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
