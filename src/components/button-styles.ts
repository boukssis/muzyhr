type ButtonVariant = "primary" | "secondary" | "light" | "ghost";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-ink text-ivory hover:bg-[#3d342f]",
  secondary:
    "border border-ink/25 bg-white text-ink hover:border-ink hover:bg-stone",
  light: "bg-ivory text-ink hover:bg-white",
  ghost: "border border-ivory/35 bg-transparent text-ivory hover:border-ivory hover:bg-white/5",
};

export function buttonClasses(variant: ButtonVariant, className = "") {
  return `group inline-flex min-h-11 items-center justify-center gap-2 px-5 py-3 text-center text-[0.72rem] font-semibold uppercase tracking-[0.14em] transition-[background-color,border-color,color] duration-300 ${variants[variant]} ${className}`;
}
