"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaGraduationCap,
  FaHome,
  FaLaptopCode,
  FaUser,
  FaGithub,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { PiShoppingBagOpenFill } from "react-icons/pi";
import { navItems } from "@/data/socials";

const iconsMap: Record<string, React.ReactNode> = {
  Home: <FaHome size={17} />,
  About: <FaUser size={15} />,
  Skills: <FaCode size={17} />,
  Projects: <FaLaptopCode size={17} />,
  Experience: <PiShoppingBagOpenFill size={17} />,
  Education: <FaGraduationCap size={17} />,
  Contact: <IoMdMail size={17} />,
  Activity: <FaGithub size={17} />,
};

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.sectionId);
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      history.pushState(null, "", `#${sectionId}`);
    }
  };

  return (
    <>
      {/* =====================================================
          DESKTOP SIDEBAR
      ===================================================== */}
      <header className="fixed left-6 top-1/2 z-50 hidden -translate-y-1/2 md:block">
        <div className="relative">
          <nav className="relative overflow-hidden rounded-2xl border border-slate-800/80 bg-[#151F32]/90 px-2 py-3 shadow-2xl shadow-black/70 backdrop-blur-2xl">
            {/* Top Hairline Highlight */}
            <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#22D3EE]/40 to-transparent" />

            {/* Logo */}
            <div className="mb-3 flex justify-center">
              <a
                href="#hero"
                onClick={(e) => handleNavClick(e, "hero")}
                aria-label="Tonmoy Home"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-[#0B1220]/60 transition-all duration-300 hover:border-[#22D3EE]/40 hover:bg-[#1C2B44]"
              >
                <span className="text-base font-bold text-[#F8FAFC]">
                  T<span className="text-[#22D3EE]">.</span>
                </span>
              </a>
            </div>

            {/* Divider */}
            <div className="mx-2 mb-3 h-px bg-slate-800/80" />

            {/* Navigation Items */}
            <ul className="flex flex-col gap-1.5">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.sectionId;

                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.sectionId)}
                      aria-label={item.label}
                      className="group/item relative flex items-center"
                    >
                      {/* Active Background Pill */}
                      {isActive && (
                        <motion.div
                          layoutId="side-nav-active"
                          className="absolute inset-0 rounded-xl border border-[#22D3EE]/25 bg-[#22D3EE]/10"
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 30,
                          }}
                        />
                      )}

                      {/* Navigation Icon */}
                      <div
                        className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-xl transition-colors duration-200 ${
                          isActive
                            ? "text-[#22D3EE]"
                            : "text-[#94A3B8] group-hover/item:text-[#F8FAFC]"
                        }`}
                      >
                        {iconsMap[item.label] || <FaHome size={17} />}
                      </div>

                      {/* Hover Tooltip */}
                      <div className="pointer-events-none absolute left-[54px] flex translate-x-[-6px] items-center opacity-0 transition-all duration-200 group-hover/item:translate-x-0 group-hover/item:opacity-100 z-50">
                        <div className="relative whitespace-nowrap rounded-lg border border-slate-800 bg-[#151F32] px-3 py-1.5 shadow-xl backdrop-blur-xl">
                          <span className="absolute -left-1 top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 border-b border-l border-slate-800 bg-[#151F32]" />
                          <div className="relative flex items-center gap-2">
                            <span className="font-mono text-[9px] text-[#22D3EE] font-medium">
                              0{index + 1}
                            </span>
                            <span className="text-xs font-medium text-[#F8FAFC]">
                              {item.label}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Active Dot */}
                      {isActive && (
                        <motion.span
                          layoutId="side-nav-dot"
                          className="absolute right-0.5 top-1/2 z-20 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#22D3EE]"
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Divider */}
            <div className="mx-2 my-3 h-px bg-slate-800/80" />

            {/* Status Indicator */}
            <div className="flex items-center justify-center">
              <div
                className="relative flex h-8 w-8 items-center justify-center rounded-lg border border-slate-800 bg-[#0B1220]/40"
                title="Available for opportunities"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22D3EE] opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#22D3EE]" />
                </span>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* =====================================================
          MOBILE FLOATING NAV
      ===================================================== */}
      <header className="fixed bottom-4 left-1/2 z-50 w-full -translate-x-1/2 px-3 md:hidden">
        <div className="mx-auto w-fit">
          <nav className="relative rounded-2xl border border-slate-800/80 bg-[#151F32]/95 px-2 py-1.5 shadow-2xl shadow-black/80 backdrop-blur-2xl">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.sectionId;

                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.sectionId)}
                      aria-label={item.label}
                      className="group relative block"
                    >
                      <div className="relative flex flex-col items-center">
                        {isActive && (
                          <motion.div
                            layoutId="mobile-nav-active"
                            className="absolute inset-0 rounded-xl border border-[#22D3EE]/25 bg-[#22D3EE]/10"
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 30,
                            }}
                          />
                        )}

                        <div
                          className={`relative z-10 flex h-9 w-9 items-center justify-center rounded-xl transition-colors duration-200 ${
                            isActive
                              ? "text-[#22D3EE]"
                              : "text-[#94A3B8] group-hover:text-[#F8FAFC]"
                          }`}
                        >
                          {iconsMap[item.label] || <FaHome size={16} />}
                        </div>

                        {isActive && (
                          <motion.span
                            layoutId="mobile-nav-dot"
                            className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#22D3EE]"
                          />
                        )}
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
