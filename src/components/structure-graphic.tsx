const lines = [
  { top: "12%", w: "86%", sw: "42%", shift: "1.4rem", d: "0.04s" },
  { top: "28%", w: "64%", sw: "78%", shift: "-1rem", d: "0.16s" },
  { top: "44%", w: "92%", sw: "36%", shift: "2rem", d: "0.28s" },
  { top: "60%", w: "74%", sw: "50%", shift: "-1.35rem", d: "0.4s" },
  { top: "76%", w: "84%", sw: "44%", shift: "0.8rem", d: "0.52s" },
  { top: "90%", w: "58%", sw: "70%", shift: "-0.7rem", d: "0.64s" },
];

type StructureGraphicProps = {
  mode?: "align" | "scatter" | "animate";
  compact?: boolean;
};

export function StructureGraphic({
  mode = "align",
  compact = false,
}: StructureGraphicProps) {
  const state =
    mode === "animate" ? "is-animated" : mode === "scatter" ? "is-scattered" : "";

  return (
    <div
      className={`structure ${state} ${compact ? "is-compact" : ""}`}
      aria-hidden="true"
    >
      <span className="structure-spine" />
      {lines.map((line) => (
        <span key={line.top}>
          <span
            className="structure-line"
            style={
              {
                "--top": line.top,
                "--w": line.w,
                "--sw": line.sw,
                "--shift": line.shift,
                "--d": line.d,
              } as React.CSSProperties
            }
          />
          <span
            className="structure-node"
            style={{ "--top": line.top } as React.CSSProperties}
          />
        </span>
      ))}
    </div>
  );
}
