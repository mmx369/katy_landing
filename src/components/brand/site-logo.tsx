import Image from "next/image";
import Link from "next/link";

interface SiteLogoProps {
  linked?: boolean;
  priority?: boolean;
  onNavigate?: () => void;
  className?: string;
  size?: "xs" | "sm" | "md";
  variant?: "mark" | "full";
}

const dimensions = {
  mark: {
    xs: { width: 36, height: 37 },
    sm: { width: 44, height: 45 },
    md: { width: 54, height: 55 },
  },
  full: {
    xs: { width: 132, height: 30 },
    sm: { width: 158, height: 36 },
    md: { width: 184, height: 42 },
  },
} as const;

const srcMap = {
  mark: "/logo-decode-mark.png",
  full: "/logo-decode-full.png",
} as const;

export function SiteLogo({
  linked = true,
  priority = false,
  onNavigate,
  className,
  size = "md",
  variant = "full",
}: SiteLogoProps) {
  const { width, height } = dimensions[variant][size];

  const content = (
    <Image
      src={srcMap[variant]}
      alt="Decode"
      width={width}
      height={height}
      className={`inline-block h-auto max-w-none ${className ?? ""}`}
      style={{ width: `${width}px` }}
      priority={priority}
    />
  );

  if (!linked) {
    return content;
  }

  return (
    <Link href="/" aria-label="Decode - на главную" onClick={onNavigate}>
      {content}
    </Link>
  );
}
