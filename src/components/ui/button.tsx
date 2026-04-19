import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface BaseButtonProps {
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
}

interface LinkButtonProps extends BaseButtonProps {
  href: string;
}

interface NativeButtonProps extends BaseButtonProps {
  href?: never;
  type?: ComponentPropsWithoutRef<"button">["type"];
  disabled?: boolean;
}

type ButtonProps = LinkButtonProps | NativeButtonProps;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border border-transparent bg-[linear-gradient(135deg,#4F46E5,#7C3AED)] text-white shadow-[0_10px_30px_rgba(99,102,241,0.4),inset_0_1px_0_rgba(255,255,255,0.35)] hover:shadow-[0_14px_42px_rgba(99,102,241,0.48),inset_0_1px_0_rgba(255,255,255,0.42)] hover:brightness-110 hover:-translate-y-0.5",
  secondary:
    "bg-white/80 text-[var(--color-midnight)] border border-[var(--color-border-strong)] hover:bg-white",
  ghost:
    "bg-transparent text-[var(--color-midnight)] border border-transparent hover:bg-white/70",
};

const baseClassName =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface)] disabled:pointer-events-none disabled:opacity-70";

export function Button(props: ButtonProps) {
  const variant = props.variant ?? "primary";
  const className = `${baseClassName} ${variantClasses[variant]} ${props.className ?? ""}`;
  const linkProps = props as LinkButtonProps;

  if (typeof linkProps.href === "string") {
    return (
      <Link href={linkProps.href} className={className}>
        {props.children}
      </Link>
    );
  }

  const nativeProps = props as NativeButtonProps;
  return (
    <button
      type={nativeProps.type ?? "button"}
      className={className}
      disabled={nativeProps.disabled}
    >
      {props.children}
    </button>
  );
}
