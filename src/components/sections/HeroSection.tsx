"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCheck,
  FaCopy,
  FaDownload,
  FaTerminal,
} from "react-icons/fa";
import { Button } from "@/components/ui/Button";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";

export const HeroSection = () => {
  const [copied, setCopied] = useState(false);
  const email = "tonmoybiswas13900@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      history.pushState(null, "", `#${sectionId}`);
    }
  };

  return (
    <section
      id="hero"
      aria-label="Hero Section"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-20 pb-16 sm:px-6 sm:pt-24 lg:px-8"
    >
      {/* Background Interactive Beams */}
      <BackgroundBeams className="opacity-30" />

      {/* Subtle Radial Atmosphere Light */}
      <div className="pointer-events-none absolute left-1/2 top-1/4 -z-10 h-[500px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#22D3EE]/5 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* LEFT: Introduction & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Status Pill */}
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#22D3EE]/25 bg-[#151F32]/80 px-3.5 py-1.5 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22D3EE] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#22D3EE]" />
              </span>
              <span className="font-mono text-xs font-medium tracking-wide text-[#22D3EE]">
                OPEN TO NEW OPPORTUNITIES
              </span>
            </div>

            {/* Name & Main Heading */}
            <h1 className="text-4xl font-extrabold tracking-tight text-[#F8FAFC] sm:text-5xl lg:text-6xl">
              Hi, I&apos;m{" "}
              <span className="relative inline-block text-[#F8FAFC]">
                Tonmoy Biswas
                <span className="absolute -bottom-1 left-0 h-[3px] w-full bg-gradient-to-r from-[#22D3EE] via-[#22D3EE]/60 to-transparent" />
              </span>
            </h1>

            {/* Tagline / Subheading */}
            <p className="mt-4 text-xl font-medium text-[#22D3EE] sm:text-2xl">
              Frontend &amp; MERN Stack Developer
            </p>

            {/* Summary */}
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#94A3B8] sm:text-lg">
              Passionate about building highly responsive, intuitive, and
              performance-optimized web applications with Next.js, TypeScript,
              and modern full-stack architectures.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <Button
                variant="primary"
                onClick={() => scrollToSection("projects")}
                className="gap-2 font-medium"
              >
                <span>View Projects</span>
                <FaArrowRight size={12} />
              </Button>

              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <Button variant="secondary" className="gap-2">
                  <FaDownload size={12} className="text-[#22D3EE]" />
                  <span>Resume / CV</span>
                </Button>
              </a>

              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
              >
                Contact Me
              </Button>
            </div>

            {/* Quick Stats Banner */}
            <div className="mt-12 grid grid-cols-3 gap-4 border-t border-slate-800/80 pt-8">
              <div>
                <p className="font-mono text-2xl font-bold text-[#F8FAFC] sm:text-3xl">
                  3<span className="text-[#22D3EE]">+</span>
                </p>
                <p className="mt-1 text-xs text-[#94A3B8] sm:text-sm">
                  Years Coding
                </p>
              </div>
              <div>
                <p className="font-mono text-2xl font-bold text-[#F8FAFC] sm:text-3xl">
                  15<span className="text-[#22D3EE]">+</span>
                </p>
                <p className="mt-1 text-xs text-[#94A3B8] sm:text-sm">
                  Projects Built
                </p>
              </div>
              <div>
                <p className="font-mono text-2xl font-bold text-[#F8FAFC] sm:text-3xl">
                  100<span className="text-[#22D3EE]">%</span>
                </p>
                <p className="mt-1 text-xs text-[#94A3B8] sm:text-sm">
                  Responsive UI
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Modern Code / Terminal Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Glow Behind Terminal */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#22D3EE]/20 to-transparent blur-xl opacity-50" />

            {/* Terminal Window */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-800/90 bg-[#151F32] shadow-2xl">
              {/* Header Bar */}
              <div className="flex items-center justify-between border-b border-slate-800/80 bg-[#0B1220]/70 px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#EF4444]/80" />
                  <span className="h-3 w-3 rounded-full bg-[#F59E0B]/80" />
                  <span className="h-3 w-3 rounded-full bg-[#10B981]/80" />
                </div>

                <div className="flex items-center gap-1.5 font-mono text-xs text-[#94A3B8]">
                  <FaTerminal size={11} className="text-[#22D3EE]" />
                  <span>developer.ts</span>
                </div>

                <button
                  onClick={handleCopyEmail}
                  title="Copy Email Address"
                  aria-label="Copy developer email"
                  className="flex items-center gap-1.5 rounded-lg border border-slate-800 bg-[#151F32] px-2.5 py-1 text-[11px] font-mono text-[#94A3B8] transition-colors hover:border-[#22D3EE]/40 hover:text-[#22D3EE] cursor-pointer"
                >
                  {copied ? (
                    <>
                      <FaCheck size={10} className="text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <FaCopy size={10} />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              {/* Code Content */}
              <div className="p-5 font-mono text-xs leading-relaxed sm:text-sm">
                <div className="text-[#94A3B8]">
                  <span className="text-[#22D3EE]">const</span>{" "}
                  <span className="text-[#F8FAFC]">developer</span>:{" "}
                  <span className="text-[#22D3EE]">DeveloperProfile</span> = &#123;
                </div>

                <div className="pl-4 text-[#94A3B8]">
                  <div>
                    <span className="text-slate-400">name:</span>{" "}
                    <span className="text-emerald-300">&quot;Tonmoy Biswas&quot;</span>,
                  </div>
                  <div>
                    <span className="text-slate-400">role:</span>{" "}
                    <span className="text-emerald-300">&quot;Frontend &amp; MERN Stack Developer&quot;</span>,
                  </div>
                  <div>
                    <span className="text-slate-400">location:</span>{" "}
                    <span className="text-emerald-300">&quot;Dhaka, Bangladesh&quot;</span>,
                  </div>
                  <div>
                    <span className="text-slate-400">status:</span>{" "}
                    <span className="text-[#22D3EE]">&quot;Ready for Impact&quot;</span>,
                  </div>
                  <div>
                    <span className="text-slate-400">coreStack:</span> [
                    <span className="text-emerald-300">&quot;Next.js&quot;</span>,{" "}
                    <span className="text-emerald-300">&quot;TypeScript&quot;</span>,{" "}
                    <span className="text-emerald-300">&quot;React&quot;</span>,{" "}
                    <span className="text-emerald-300">&quot;Node.js&quot;</span>,{" "}
                    <span className="text-emerald-300">&quot;Tailwind CSS&quot;</span>,{" "}
                    <span className="text-emerald-300">&quot;MongoDB&quot;</span>
                    ],
                  </div>
                  <div>
                    <span className="text-slate-400">availableForHire:</span>{" "}
                    <span className="text-[#22D3EE]">true</span>,
                  </div>
                </div>

                <div className="text-[#94A3B8]">&#125;;</div>

                {/* Interactive Status Footer */}
                <div className="mt-5 rounded-xl border border-slate-800 bg-[#0B1220]/60 p-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#94A3B8]">Contact:</span>
                    <a
                      href={`mailto:${email}`}
                      className="text-[#22D3EE] hover:underline"
                    >
                      {email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
