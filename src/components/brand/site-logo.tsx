import Image from "next/image";
import Link from "next/link";

interface SiteLogoProps {
  withSignature?: boolean;
  linked?: boolean;
  className?: string;
  size?: "xs" | "sm" | "md";
  variant?: "mark" | "lockup" | "full";
  addEcodeText?: boolean;
}

export function SiteLogo({
  withSignature = false,
  linked = true,
  className,
  size = "md",
  variant,
  addEcodeText = false,
}: SiteLogoProps) {
  const resolvedVariant = variant ?? (withSignature ? "full" : size === "xs" ? "mark" : "lockup");
  const dimensions = {
    mark: {
      xs: { width: 40, height: 34 },
      sm: { width: 50, height: 42 },
      md: { width: 62, height: 52 },
    },
    lockup: {
      xs: { width: 110, height: 48 },
      sm: { width: 126, height: 55 },
      md: { width: 142, height: 62 },
    },
    full: {
      xs: { width: 60, height: 69 },
      sm: { width: 72, height: 83 },
      md: { width: 84, height: 97 },
    },
  } as const;
  const width = dimensions[resolvedVariant][size].width;
  const height = dimensions[resolvedVariant][size].height;
  const srcMap = {
    mark: "/logo-decode-mark.png",
    lockup: "/logo-decode-mark-ecode.png",
    full: "/logo-decode-full.png",
  } as const;
  const src = srcMap[resolvedVariant];

  const content = (
    <div className={`inline-flex shrink-0 items-end gap-0 ${className ?? ""}`}>
      <Image
        src={src}
        alt="Decode"
        width={width}
        height={height}
        className="block max-w-none"
        style={{ width: `${width}px`, height: "auto" }}
        priority
      />
      {addEcodeText ? (
        <span className="-ml-[9px] pb-[2px] text-[18px] font-semibold uppercase leading-none tracking-[-0.02em] text-[#1F2430]">
          E<span className="text-[#6C5CE7]">CODE</span>
        </span>
      ) : null}
    </div>
  );

  if (!linked) {
    return content;
  }

  return (
    <Link href="/" aria-label="Decode - на главную">
      {content}
    </Link>
  );
}
