type ButtonVariant = "primary" | "secondary" | "light" | "ghost";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-ink text-ivory hover:bg-[#3c3633]",
  secondary:
    "border border-ink/20 bg-transparent text-ink hover:border-ink hover:bg-white",
  light: "bg-ivory text-ink hover:bg-white",
  ghost: "border border-ivory/30 bg-transparent text-ivory hover:border-ivory",
};

export function buttonClasses(variant: ButtonVariant, className = "") {
  return `inline-flex min-h-11 items-center justify-center gap-2 px-5 py-3 text-center text-[0.72rem] font-semibold uppercase tracking-[0.14em] transition-colors duration-300 ${variants[variant]} ${className}`;
}
