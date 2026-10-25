import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className = "", children, ...props }, ref) => {
    const variants = {
      primary:
        "bg-[#22D3EE] text-[#0B1220] font-semibold shadow-md shadow-[#22D3EE]/20 hover:bg-[#06B6D4] hover:shadow-lg hover:shadow-[#22D3EE]/30 transition-all duration-200",
      secondary:
        "border border-slate-700/80 bg-[#151F32] text-[#F8FAFC] hover:bg-[#1C2B44] hover:border-[#22D3EE]/30 transition-all duration-200",
      outline:
        "border border-slate-800 bg-transparent text-[#94A3B8] hover:text-[#F8FAFC] hover:border-slate-700 transition-all duration-200",
      ghost:
        "text-[#94A3B8] hover:text-[#22D3EE] hover:bg-[#151F32]/60 transition-all duration-200",
    };

    const sizes = {
      sm: "px-3.5 py-1.5 text-xs rounded-lg gap-1.5",
      md: "px-5 py-2.5 text-xs sm:text-sm rounded-xl gap-2",
      lg: "px-6 py-3.5 text-sm sm:text-base rounded-xl gap-2.5 font-semibold",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed select-none active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE]/50",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
