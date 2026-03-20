import Link from "next/link";
import { primaryCta, secondaryCta } from "@/lib/site";

type CtaButtonsProps = {
  primaryLabel?: string;
  className?: string;
};

export function CtaButtons({ primaryLabel, className = "" }: CtaButtonsProps) {
  return (
    <div className={`flex flex-col gap-3 sm:flex-row ${className}`.trim()}>
      <Link href={primaryCta.href} className="btn-primary text-center">
        {primaryLabel ?? primaryCta.label}
      </Link>
      <Link
        href={secondaryCta.href}
        target="_blank"
        rel="noreferrer"
        className="btn-secondary text-center"
      >
        {secondaryCta.label}
      </Link>
    </div>
  );
}
