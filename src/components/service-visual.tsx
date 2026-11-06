const frames: Record<string, { caption: string; marks: string[] }> = {
  "hr-infrastructure": {
    caption: "A lifecycle with a place for every step.",
    marks: ["Hire", "Onboard", "Support", "Grow"],
  },
  "benefits-administration": {
    caption: "Enrolment, coordination, then steady support.",
    marks: ["Enrol", "Coordinate", "Support"],
  },
  "employee-communications": {
    caption: "The same message, written so people can use it.",
    marks: ["Announce", "Explain", "Guide"],
  },
  "hr-audit": {
    caption: "A calm review of what is there, and what is not.",
    marks: ["Review", "Find gaps", "Prioritize"],
  },
};

export function ServiceVisual({ id }: { id: string }) {
  const frame = frames[id] ?? frames["hr-infrastructure"];

  return (
    <figure className="border border-ink/10 bg-white p-5 sm:p-7">
      <svg viewBox="0 0 320 92" className="h-16 w-full text-taupe-deep" aria-hidden="true">
        <line x1="16" y1="28" x2="304" y2="28" stroke="currentColor" strokeWidth="1" />
        {frame.marks.map((_, index) => {
          const x = 28 + index * ((264) / Math.max(frame.marks.length - 1, 1));
          return <circle key={index} cx={x} cy="28" r="4.5" fill="#25211F" />;
        })}
      </svg>
      <ol className="-mt-2 grid gap-3" style={{ gridTemplateColumns: `repeat(${frame.marks.length}, minmax(0, 1fr))` }}>
        {frame.marks.map((mark, index) => (
          <li key={mark} className="min-w-0">
            <span className="block text-[0.62rem] font-semibold tracking-[0.14em] text-taupe-deep">
              0{index + 1}
            </span>
            <span className="mt-1 block font-display text-sm font-semibold tracking-[-0.03em] text-ink sm:text-base">
              {mark}
            </span>
          </li>
        ))}
      </ol>
      <figcaption className="mt-5 border-t border-ink/10 pt-4 text-sm leading-relaxed text-ink-soft">
        {frame.caption}
      </figcaption>
    </figure>
  );
}
