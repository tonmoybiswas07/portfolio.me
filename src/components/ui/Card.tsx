import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  hoverEffect = true,
  ...props
}) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-slate-800/80 bg-[#151F32] p-6 shadow-xl transition-all duration-300",
        hoverEffect && "hover:border-[#22D3EE]/30 hover:shadow-2xl hover:shadow-[#0B1220]/80",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
