"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { MhrEffect } from "@/components/mhr-effect";

const points = [
  {
    before: {
      title: "Inconsistent onboarding",
      text: "Every employee receives a different experience.",
    },
    after: {
      title: "Consistent onboarding",
      text: "A clear, repeatable process for every new employee.",
    },
  },
  {
    before: {
      title: "Scattered documents",
      text: "Policies and files are spread across tools and inboxes.",
    },
    after: {
      title: "Organized employee records",
      text: "Documents are structured and easier to access appropriately.",
    },
  },
  {
    before: {
      title: "Confusing benefits administration",
      text: "Important tasks and updates are handled reactively.",
    },
    after: {
      title: "Coordinated benefits processes",
      text: "Defined workflows for enrolment, communication and administration.",
    },
  },
  {
    before: {
      title: "Unclear responsibilities",
      text: "Processes depend on individuals remembering what to do.",
    },
    after: {
      title: "Clear responsibilities",
      text: "Documented processes with understandable ownership.",
    },
  },
  {
    before: {
      title: "Repeated HR confusion",
      text: "The same administrative problems keep resurfacing.",
    },
    after: {
      title: "Proactive process improvement",
      text: "Regular review of workflows and opportunities to improve.",
    },
  },
] as const;

export function StructureSwitch() {
  const [mode, setMode] = useState<"before" | "after">("before");
  const reduce = useReducedMotion();
  const baseId = useId();
  const organized = mode === "after";

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
        {(
          [
            ["before", "Without structure"],
            ["after", "With mhr"],
          ] as const
        ).map(([key, label]) => {
          const selected = mode === key;
          return (
            <button
              key={key}
              id={`${baseId}-${key}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`${baseId}-panel`}
              className={`relative z-10 min-h-11 px-2 text-[0.68rem] font-semibold uppercase tracking-[0.12em] transition-colors sm:text-[0.72rem] ${
                selected ? "text-ivory" : "text-ink-soft hover:text-ink"
              }`}
              onClick={() => setMode(key)}
            >
              {label}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`${baseId}-panel`}
        aria-labelledby={`${baseId}-${mode}`}
        className="mt-6 grid items-center gap-8 lg:grid-cols-2 lg:gap-10"
      >
        <MhrEffect clear={organized} />
        <ol className="border-t border-ink/10">
          {points.map((point, index) => {
            const item = point[mode];
            return (
              <li key={point.before.title} className="grid grid-cols-[1.75rem_1.25rem_1fr] gap-2 border-b border-ink/10 py-3.5">
                <span className="pt-1 text-[0.68rem] font-semibold tracking-[0.14em] text-taupe-deep">
                  0{index + 1}
                </span>
                <span className="pt-1" aria-hidden="true">
                  {organized ? (
                    <Check className="size-4 text-taupe-deep" strokeWidth={1.75} />
                  ) : (
                    <span className="mt-0.5 block size-3.5 rounded-full border border-line" />
                  )}
                </span>
                <div className="grid min-h-[4.6rem]">
                  <AnimatePresence initial={false}>
                    <motion.div
                      key={mode}
                      className="col-start-1 row-start-1"
                      initial={reduce ? false : { opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={reduce ? undefined : { opacity: 0 }}
                      transition={{ duration: reduce ? 0 : 0.28 }}
                    >
                      <p className="font-display text-base font-semibold leading-snug tracking-[-0.03em] text-ink sm:text-lg">
                        {item.title}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-ink-soft">{item.text}</p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
