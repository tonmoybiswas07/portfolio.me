import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "cyan" | "success" | "neutral";
  dot?: boolean;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  dot = true,
  className = "",
}) => {
  const variantStyles = {
    default: "border-slate-800 bg-[#151F32]/80 text-[#94A3B8]",
    cyan: "border-[#22D3EE]/30 bg-[#22D3EE]/10 text-[#22D3EE]",
    success: "border-emerald-500/25 bg-emerald-500/10 text-emerald-300",
    neutral: "border-slate-800/80 bg-[#0B1220]/60 text-[#94A3B8]",
  };

  const dotStyles = {
    default: "bg-[#22D3EE]",
    cyan: "bg-[#22D3EE]",
    success: "bg-emerald-400",
    neutral: "bg-slate-400",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-xs font-medium backdrop-blur-md",
        variantStyles[variant],
        className
      )}
    >
      {dot && (
        <span className="relative flex h-1.5 w-1.5">
          {variant === "success" && (
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
          )}
          <span className={cn("relative inline-flex h-1.5 w-1.5 rounded-full", dotStyles[variant])} />
        </span>
      )}
      <span>{children}</span>
    </div>
  );
};

export default Badge;
