"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaFacebookF,
  FaInstagram,
  FaArrowUp,
  FaCode,
  FaTwitter,
} from "react-icons/fa";
import { navItems, socialsData } from "@/data/socials";

const socialIconsMap: Record<string, React.ReactNode> = {
  GitHub: <FaGithub size={14} />,
  Twitter: <FaTwitter size={14} />,
  Facebook: <FaFacebookF size={14} />,
  Instagram: <FaInstagram size={14} />,
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      history.pushState(null, "", `#${sectionId}`);
    }
  };

  return (
    <footer className="relative mt-24 border-t border-slate-800/80 bg-[#0B1220] text-[#94A3B8]">
      <div className="relative mx-auto max-w-7xl px-5 pt-16 sm:px-8 lg:px-10">
        {/* Main Footer Columns */}
        <div className="grid gap-12 pb-16 lg:grid-cols-[1.4fr_0.8fr_0.8fr]">
          {/* Brand Info */}
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#22D3EE]/20 bg-[#22D3EE]/5 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-[#22D3EE]" />
              <span className="font-mono text-[10px] tracking-widest text-[#22D3EE]">
                AVAILABLE FOR OPPORTUNITIES
              </span>
            </div>

            <h2 className="text-3xl font-black tracking-tight text-[#F8FAFC] sm:text-4xl">
              TONMOY<span className="text-[#22D3EE]">.</span>
            </h2>

            <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#94A3B8]">
              Frontend &amp; MERN Stack Developer specializing in clean, modern,
              and performance-focused web architectures.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-800 bg-[#151F32] text-[#22D3EE]">
                <FaCode size={14} />
              </div>
              <div>
                <p className="font-mono text-[9px] uppercase tracking-wider text-slate-500">
                  Focus
                </p>
                <p className="text-xs font-medium text-[#F8FAFC]">
                  Frontend &amp; MERN Stack
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <p className="mb-5 font-mono text-xs uppercase tracking-widest text-[#F8FAFC] font-semibold">
              Navigation
            </p>

            <ul className="space-y-2.5">
              {navItems.map((item, index) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.sectionId)}
                    className="group flex items-center gap-2.5 text-xs sm:text-sm text-[#94A3B8] transition-colors hover:text-[#22D3EE]"
                  >
                    <span className="font-mono text-[9px] text-slate-600 transition-colors group-hover:text-[#22D3EE]">
                      0{index + 1}
                    </span>
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <p className="mb-5 font-mono text-xs uppercase tracking-widest text-[#F8FAFC] font-semibold">
              Connect
            </p>

            <div className="grid grid-cols-2 gap-2.5">
              {socialsData.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.platform}
                  className="flex items-center gap-2.5 rounded-xl border border-slate-800 bg-[#151F32]/80 px-3 py-2.5 text-xs text-[#94A3B8] transition-all hover:border-[#22D3EE]/30 hover:bg-[#1C2B44] hover:text-[#F8FAFC]"
                >
                  <span className="text-[#22D3EE]">
                    {socialIconsMap[social.platform] || <FaGithub size={14} />}
                  </span>
                  <span>{social.platform}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-4 border-t border-slate-800/80 py-6 sm:flex-row sm:items-center sm:justify-between text-xs text-slate-500">
          <div>
            <p className="font-mono text-[#94A3B8]">
              &copy; {currentYear} Tonmoy Biswas. Built with Next.js &amp; TypeScript.
            </p>
          </div>

          <div className="flex items-center gap-5">
            <div className="hidden items-center gap-2 sm:flex font-mono text-[11px] text-[#22D3EE]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#22D3EE]" />
              <span>SYSTEM ONLINE</span>
            </div>

            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              aria-label="Back to top"
              className="group flex items-center gap-2 rounded-full border border-slate-800 bg-[#151F32] px-3.5 py-1.5 text-xs text-[#F8FAFC] transition-colors hover:border-[#22D3EE]/40 hover:text-[#22D3EE] cursor-pointer"
            >
              <span>Back to top</span>
              <FaArrowUp
                size={10}
                className="transition-transform group-hover:-translate-y-0.5"
              />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
