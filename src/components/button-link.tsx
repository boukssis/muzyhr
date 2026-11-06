import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonClasses } from "@/components/button-styles";

type ButtonLinkProps = {
  href: "/" | "/services" | "/approach" | "/about" | "/contact" | `/contact?${string}`;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "light" | "ghost";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  const arrow = variant === "primary" || variant === "light";

  return (
    <Link href={href} className={buttonClasses(variant, className)}>
      {children}
      {arrow ? (
        <ArrowRight aria-hidden className="h-4 w-4" strokeWidth={1.25} />
      ) : null}
    </Link>
  );
}
