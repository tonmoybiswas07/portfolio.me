"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaCheckCircle, FaLaptopCode } from "react-icons/fa";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { experienceData } from "@/data/experience";

export const ExperienceSection = () => {
  return (
    <section
      id="experience"
      aria-label="Experience Section"
      className="relative px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          badge="CAREER &amp; MILESTONES"
          title="Work &amp; Professional Journey"
          description="A chronological timeline of intensive full-stack training, continuous development, and production-ready applications."
        />

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 items-start">
          {/* LEFT: Timeline Column */}
          <div className="relative border-l border-slate-800/90 pl-6 sm:pl-8 space-y-10">
            {experienceData.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative"
              >
                {/* Node Indicator */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-7 w-7 items-center justify-center rounded-full border border-slate-800 bg-[#151F32] shadow-md">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#22D3EE]" />
                </div>

                <Card className="border-slate-800/80 bg-[#151F32] p-6 hover:border-[#22D3EE]/30">
                  {/* Date & Type Badge */}
                  <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                    <span className="flex items-center gap-1.5 font-mono text-xs font-semibold text-[#22D3EE]">
                      <FaCalendarAlt size={11} />
                      <span>{item.date}</span>
                    </span>

                    <span className="rounded-full border border-slate-700 bg-[#0B1220] px-2.5 py-0.5 font-mono text-[10px] text-[#94A3B8]">
                      {item.type}
                    </span>
                  </div>

                  {/* Title & Company */}
                  <h3 className="text-lg font-bold text-[#F8FAFC]">
                    {item.title}
                  </h3>
                  <p className="text-xs font-medium text-[#94A3B8]">
                    {item.company}
                  </p>

                  {/* Description */}
                  <p className="mt-3 text-xs leading-relaxed text-[#94A3B8] sm:text-sm">
                    {item.details}
                  </p>

                  {/* Status */}
                  <div className="mt-4 flex items-center gap-2 border-t border-slate-800/60 pt-3 text-[11px] font-mono text-[#F8FAFC]">
                    <FaCheckCircle size={11} className="text-emerald-400" />
                    <span>Status: {item.status || "Completed"}</span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* RIGHT: Visual Illustration & Developer Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Visual Workspace Card */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-800/80 bg-[#151F32] p-5 shadow-2xl">
              <div className="mb-3 flex items-center justify-between border-b border-slate-800/80 pb-3">
                <div className="flex items-center gap-2 text-xs font-mono text-[#F8FAFC]">
                  <FaLaptopCode size={14} className="text-[#22D3EE]" />
                  <span>workspace.active</span>
                </div>
                <span className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  ONLINE
                </span>
              </div>

              {/* Developer Coding GIF with next/image */}
              <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-slate-800 bg-[#0B1220]">
                <Image
                  src="/images/developer-coding.gif"
                  alt="Developer coding animation"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 500px"
                  unoptimized
                />
              </div>

              <div className="mt-4 text-center">
                <p className="font-mono text-xs uppercase tracking-wider text-[#22D3EE]">
                  Continuous Learning &amp; Building
                </p>
                <p className="mt-1 text-xs text-[#94A3B8]">
                  Every line of code is an opportunity to improve architecture, performance, and user joy.
                </p>
              </div>
            </div>

            {/* Quick Summary Highlights */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="border-slate-800/80 bg-[#151F32] p-4 text-center">
                <p className="font-mono text-xl font-bold text-[#F8FAFC]">
                  1000<span className="text-[#22D3EE]">+</span>
                </p>
                <p className="mt-1 text-xs text-[#94A3B8]">Hours Coding</p>
              </Card>

              <Card className="border-slate-800/80 bg-[#151F32] p-4 text-center">
                <p className="font-mono text-xl font-bold text-[#F8FAFC]">
                  100<span className="text-[#22D3EE]">%</span>
                </p>
                <p className="mt-1 text-xs text-[#94A3B8]">Commitment</p>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
