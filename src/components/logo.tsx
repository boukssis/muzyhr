import Image from "next/image";

type LogoProps = {
  tone?: "default" | "inverse";
  priority?: boolean;
  className?: string;
};

export function Logo({
  tone = "default",
  priority = false,
  className = "brand-logo",
}: LogoProps) {
  return (
    <Image
      src={
        tone === "inverse"
          ? "/brand/mhr-logo-inverse.png"
          : "/brand/mhr-logo.png"
      }
      alt=""
      width={581}
      height={245}
      priority={priority}
      className={className}
    />
  );
}
