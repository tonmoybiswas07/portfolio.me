import React from "react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  description,
  align = "center",
  className = "",
}) => {
  const isCenter = align === "center";

  return (
    <div
      className={`mb-12 ${isCenter ? "text-center" : "text-left"} ${className}`}
    >
      {badge && (
        <div className={`mb-3 inline-flex items-center gap-2 rounded-full border border-[#22D3EE]/20 bg-[#22D3EE]/5 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-widest text-[#22D3EE]`}>
          <span className="h-1.5 w-1.5 rounded-full bg-[#22D3EE]" />
          <span>{badge}</span>
        </div>
      )}

      <h2 className="text-3xl font-black tracking-tight text-[#F8FAFC] sm:text-4xl lg:text-5xl">
        {title}
        <span className="text-[#22D3EE]">.</span>
      </h2>

      {description && (
        <p
          className={`mt-3 text-sm leading-relaxed text-[#94A3B8] sm:text-base ${
            isCenter ? "mx-auto max-w-2xl" : "max-w-2xl"
          }`}
        >
          {description}
        </p>
      )}

      <div
        className={`mt-4 h-[2px] w-12 rounded-full bg-[#22D3EE] ${
          isCenter ? "mx-auto" : ""
        }`}
      />
    </div>
  );
};

export default SectionHeading;
