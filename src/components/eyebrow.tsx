export function Eyebrow({
  children,
  tone = "default",
}: {
  children: React.ReactNode;
  tone?: "default" | "light";
}) {
  return (
    <p
      className={`text-[0.68rem] font-semibold uppercase tracking-[0.18em] ${
        tone === "light" ? "text-taupe" : "text-taupe-deep"
      }`}
    >
      {children}
    </p>
  );
}
