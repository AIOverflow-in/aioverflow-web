import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
  title?: string;
};

/**
 * The AIoverflow mark: a continuous loop that rises past its boundary.
 * It stays legible in one color; the orange point is the "overflow" moment.
 */
export function BrandMark({ className, title }: BrandMarkProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      className={cn("shrink-0", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {title ? <title>{title}</title> : null}
      <circle
        cx="26"
        cy="33"
        r="18.5"
        stroke="currentColor"
        strokeWidth="7"
      />
      <path
        d="M44.5 51.5V13.5H53.5"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="58" cy="13.5" r="4.5" fill="#f97316" />
    </svg>
  );
}
