"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaCode,
  FaCompass,
  FaFileAlt,
  FaLaptopCode,
  FaMapMarkerAlt,
  FaRocket,
} from "react-icons/fa";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const pillars = [
  {
    icon: <FaCode size={18} className="text-[#22D3EE]" />,
    title: "Clean Architecture",
    description:
      "Strict typing, reusable components, and maintainable project structures designed to scale gracefully.",
  },
  {
    icon: <FaLaptopCode size={18} className="text-[#22D3EE]" />,
    title: "Pixel-Perfect UI/UX",
    description:
      "Designing responsive interfaces that feel fluid, aesthetic, and intuitive across any screen resolution.",
  },
  {
    icon: <FaRocket size={18} className="text-[#22D3EE]" />,
    title: "Performance & SEO",
    description:
      "Optimizing load times, server-side rendering, asset delivery, and accessibility compliance.",
  },
  {
    icon: <FaCompass size={18} className="text-[#22D3EE]" />,
    title: "Full-Stack Reliability",
    description:
      "Bridging interactive frontend experiences with secure, robust RESTful APIs and MongoDB databases.",
  },
];

export const AboutSection = () => {
  return (
    <section
      id="about"
      aria-label="About Section"
      className="relative px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          badge="ABOUT ME"
          title="Architecting Clean Code & Experiences"
          description="A look into my background, development principles, and technical approach to building modern web applications."
        />

        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 items-start">
          {/* Profile Card / Visual Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <div className="relative w-full max-w-sm">
              {/* Outer Cyan Accent Border Ring */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-b from-[#22D3EE]/30 via-slate-800 to-transparent blur-sm" />

              <div className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-[#151F32] p-5 shadow-2xl">
                {/* Profile Image with next/image */}
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-slate-800 bg-[#0B1220]">
                  <Image
                    src="/images/tonmoy-profile.jpeg"
                    alt="Tonmoy Biswas - Frontend & MERN Developer"
                    fill
                    className="object-cover object-center transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 400px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/80 via-transparent to-transparent" />
                  
                  {/* Floating badge inside image */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-xl border border-slate-700/60 bg-[#151F32]/90 px-3.5 py-2 backdrop-blur-md">
                    <div className="flex items-center gap-2 text-xs font-medium text-[#F8FAFC]">
                      <FaMapMarkerAlt size={12} className="text-[#22D3EE]" />
                      <span>Dhaka, Bangladesh</span>
                    </div>
                    <span className="font-mono text-[10px] text-[#22D3EE] font-semibold">
                      GMT+6
                    </span>
                  </div>
                </div>

                {/* Profile Info Details */}
                <div className="mt-5 space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                    <span className="text-xs text-[#94A3B8]">Specialization</span>
                    <span className="font-mono text-xs font-semibold text-[#F8FAFC]">
                      Frontend &amp; MERN
                    </span>
                  </div>

                  <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                    <span className="text-xs text-[#94A3B8]">Education</span>
                    <span className="font-mono text-xs font-semibold text-[#F8FAFC]">
                      Computer Technology
                    </span>
                  </div>

                  <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                    <span className="text-xs text-[#94A3B8]">Work Status</span>
                    <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-emerald-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Available for Hire
                    </span>
                  </div>

                  <div className="pt-2">
                    <a
                      href="/cv.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full block"
                    >
                      <Button variant="secondary" className="w-full gap-2">
                        <FaFileAlt size={13} className="text-[#22D3EE]" />
                        <span>Download Resume (PDF)</span>
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bio Story & Core Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Story Card */}
            <Card className="border-slate-800/80 bg-[#151F32]">
              <h3 className="text-xl font-bold text-[#F8FAFC] sm:text-2xl">
                Dedicated to Crafting Exceptional Web Products
              </h3>

              <div className="mt-4 space-y-3.5 text-sm leading-relaxed text-[#94A3B8] sm:text-base">
                <p>
                  I am a passionate software developer specializing in the
                  JavaScript ecosystem, particularly <strong className="text-[#F8FAFC]">React</strong>,{" "}
                  <strong className="text-[#F8FAFC]">Next.js</strong>,{" "}
                  <strong className="text-[#F8FAFC]">TypeScript</strong>, and the{" "}
                  <strong className="text-[#F8FAFC]">MERN Stack</strong>. My focus is on writing
                  declarative, accessible, and high-performance code that elevates user satisfaction.
                </p>
                <p>
                  Throughout my development journey, I have built real-world applications ranging
                  from full-fledged e-commerce platforms with Stripe payments to interactive
                  educational apps with dynamic progression. I believe in continuous iteration,
                  thoughtful design tokens, and clean separation of concerns.
                </p>
              </div>
            </Card>

            {/* Core Pillars Grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              {pillars.map((pillar) => (
                <Card
                  key={pillar.title}
                  className="border-slate-800/80 bg-[#151F32] p-5 hover:border-[#22D3EE]/30"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-[#0B1220] shadow-inner">
                      {pillar.icon}
                    </div>
                    <h4 className="text-sm font-bold text-[#F8FAFC]">
                      {pillar.title}
                    </h4>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-[#94A3B8]">
                    {pillar.description}
                  </p>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
