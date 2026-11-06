"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { RotateCcw } from "lucide-react";

type Point = readonly [number, number];

const view = { w: 420, h: 440 };
const center: Point = [210, 228];
const ease = [0.22, 1, 0.36, 1] as const;

const nodes: { label: string; from: Point; to: Point; lift: number }[] = [
  { label: "Onboarding", from: [132, 78], to: [210, 62], lift: -36 },
  { label: "Documentation", from: [300, 96], to: [86, 150], lift: -36 },
  { label: "Employee files", from: [96, 188], to: [334, 150], lift: -36 },
  { label: "Communication", from: [312, 268], to: [108, 332], lift: 16 },
  { label: "Benefits", from: [150, 348], to: [312, 332], lift: 16 },
];

function round(value: number) {
  return Math.round(value * 10) / 10;
}

function closedCurve(points: Point[], tension: number) {
  const count = points.length;
  let path = "";
  for (let index = 0; index < count; index += 1) {
    const prev = points[(index - 1 + count) % count];
    const current = points[index];
    const next = points[(index + 1) % count];
    const after = points[(index + 2) % count];
    const c1x = current[0] + ((next[0] - prev[0]) / 6) * tension;
    const c1y = current[1] + ((next[1] - prev[1]) / 6) * tension;
    const c2x = next[0] - ((after[0] - current[0]) / 6) * tension;
    const c2y = next[1] - ((after[1] - current[1]) / 6) * tension;
    const segment = `C ${round(c1x)} ${round(c1y)} ${round(c2x)} ${round(c2y)} ${round(next[0])} ${round(next[1])}`;
    path += index === 0 ? `M ${round(current[0])} ${round(current[1])} ${segment}` : ` ${segment}`;
  }
  return `${path} Z`;
}

function spoke(from: Point, clear: boolean) {
  const dx = from[0] - center[0];
  const dy = from[1] - center[1];
  const length = Math.hypot(dx, dy) || 1;
  const stop = clear ? 58 : 100;
  const end: Point = [center[0] + (dx / length) * stop, center[1] + (dy / length) * stop];
  const bend = clear ? (dx < 0 ? -16 : 16) : dx < 0 ? -42 : 48;
  const mx = (from[0] + end[0]) / 2 + bend;
  const my = (from[1] + end[1]) / 2 + bend * 0.12;
  return `M ${round(from[0])} ${round(from[1])} Q ${round(mx)} ${round(my)} ${round(end[0])} ${round(end[1])}`;
}

export function MhrEffect({
  clear,
  replayable = false,
}: {
  /** Omit to play from scattered to clear. Pass a boolean to control the state. */
  clear?: boolean;
  replayable?: boolean;
}) {
  const reduce = useReducedMotion();
  const [run, setRun] = useState(0);
  const controlled = clear !== undefined;
  const showClear = controlled ? clear : true;
  const duration = reduce ? 0 : controlled ? 0.85 : 1.9;
  const points = nodes.map((node) => (showClear ? node.to : node.from));
  const outline = closedCurve(points, showClear ? 1.22 : 0.42);

  return (
    <figure>
      <figcaption className="sr-only">
        HR processes {showClear ? "gathered into a connected system around the mhr mark" : "shown scattered, before they are organized"}.
      </figcaption>
      <div className="relative mx-auto aspect-[420/440] w-full max-w-[36rem]" key={replayable ? run : "compare"}>
        <svg viewBox={`0 0 ${view.w} ${view.h}`} className="absolute inset-0 h-full w-full overflow-visible" aria-hidden="true">
          <motion.path
            fill="#E9DDD4"
            stroke="none"
            initial={controlled || reduce ? false : { d: closedCurve(nodes.map((node) => node.from), 0.42), opacity: 0.28 }}
            animate={{ d: outline, opacity: showClear ? 0.72 : 0.28 }}
            transition={{ duration, ease }}
          />
          <motion.path
            fill="none"
            stroke="#A99689"
            strokeWidth="1.25"
            strokeLinejoin="round"
            initial={controlled || reduce ? false : { d: closedCurve(nodes.map((node) => node.from), 0.42), opacity: 0.35 }}
            animate={{ d: outline, opacity: showClear ? 0.95 : 0.4 }}
            transition={{ duration, ease }}
          />
          {nodes.map((node, index) => {
            const point = showClear ? node.to : node.from;
            return (
              <motion.path
                key={`${node.label}-spoke`}
                fill="none"
                stroke="#51443E"
                strokeWidth="1"
                strokeLinecap="round"
                initial={
                  controlled || reduce
                    ? false
                    : { d: spoke(node.from, false), pathLength: 0.2, opacity: 0.2 }
                }
                animate={{ d: spoke(point, showClear), pathLength: 1, opacity: showClear ? 0.7 : 0.28 }}
                transition={{ duration, delay: reduce ? 0 : 0.08 + index * 0.05, ease }}
              />
            );
          })}
          <motion.circle
            cx={center[0]}
            cy={center[1]}
            fill="#F8F5F1"
            stroke="#A99689"
            strokeWidth="1.25"
            initial={controlled || reduce ? false : { r: 40, opacity: 0.45 }}
            animate={{ r: showClear ? 50 : 38, opacity: showClear ? 1 : 0.55 }}
            transition={{ duration, delay: reduce ? 0 : 0.12, ease }}
          />
          {nodes.map((node, index) => {
            const point = showClear ? node.to : node.from;
            return (
              <motion.g key={`${node.label}-dot`}>
                <motion.circle
                  r="11"
                  fill="#F8F5F1"
                  stroke="#25211F"
                  strokeWidth="1"
                  initial={controlled || reduce ? false : { cx: node.from[0], cy: node.from[1] }}
                  animate={{ cx: point[0], cy: point[1] }}
                  transition={{ duration, delay: reduce ? 0 : index * 0.04, ease }}
                />
                <motion.circle
                  r="3.5"
                  fill="#25211F"
                  initial={controlled || reduce ? false : { cx: node.from[0], cy: node.from[1] }}
                  animate={{ cx: point[0], cy: point[1] }}
                  transition={{ duration, delay: reduce ? 0 : index * 0.04, ease }}
                />
              </motion.g>
            );
          })}
        </svg>
        <div
          className="pointer-events-none absolute grid h-16 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center"
          style={{ left: `${(center[0] / view.w) * 100}%`, top: `${(center[1] / view.h) * 100}%` }}
        >
          <motion.p
            aria-hidden="true"
            className="m-0 font-serif leading-none tracking-[-0.06em]"
            initial={controlled || reduce ? false : { opacity: 0 }}
            animate={{ opacity: showClear ? 1 : 0.4 }}
            transition={{ duration: reduce ? 0 : 0.7, delay: controlled || reduce ? 0 : 0.28, ease }}
          >
            <span className="text-[2.35rem] text-ink sm:text-[2.7rem]">m</span>
            <span className="text-[2.35rem] italic text-taupe sm:text-[2.7rem]">hr</span>
          </motion.p>
        </div>
        {nodes.map((node, index) => {
          const place = showClear ? node.to : node.from;
          return (
            <motion.span
              key={`${node.label}-label`}
              className="absolute whitespace-nowrap rounded-full border border-line bg-white px-2.5 py-1 text-[0.78rem] font-medium leading-none text-ink sm:text-[0.8125rem]"
              initial={
                controlled || reduce
                  ? false
                  : {
                      left: `${(node.from[0] / view.w) * 100}%`,
                      top: `${(node.from[1] / view.h) * 100}%`,
                      x: "-50%",
                      y: node.lift,
                      opacity: 0.7,
                    }
              }
              animate={{
                left: `${(place[0] / view.w) * 100}%`,
                top: `${(place[1] / view.h) * 100}%`,
                x: "-50%",
                y: node.lift,
                opacity: 1,
              }}
              transition={{ duration, delay: reduce ? 0 : index * 0.04, ease }}
            >
              {node.label}
            </motion.span>
          );
        })}
      </div>
      {replayable && !reduce ? (
        <div className="mt-1 flex justify-end">
          <button
            type="button"
            onClick={() => setRun((value) => value + 1)}
            className="inline-flex min-h-11 items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-taupe-deep transition-colors hover:text-ink"
          >
            <RotateCcw aria-hidden className="size-3.5" strokeWidth={1.75} />
            Replay
          </button>
        </div>
      ) : null}
    </figure>
  );
}
