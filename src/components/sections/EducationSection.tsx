"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaBookOpen,
  FaCalendarAlt,
  FaGraduationCap,
  FaUniversity,
} from "react-icons/fa";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { educationData } from "@/data/education";

export const EducationSection = () => {
  return (
    <section
      id="education"
      aria-label="Education Section"
      className="relative px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          badge="ACADEMIC BACKGROUND"
          title="Formal Education &amp; Credentials"
          description="Rigorous foundations in computer science, software architecture, mathematics, and engineering fundamentals."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {educationData.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="flex h-full flex-col justify-between border-slate-800/80 bg-[#151F32] p-6 sm:p-8 hover:border-[#22D3EE]/30">
                <div>
                  {/* Top Bar with Number & Duration */}
                  <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                    <div className="flex items-center gap-2">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-800 bg-[#0B1220] text-[#22D3EE]">
                        <FaGraduationCap size={16} />
                      </div>
                      <span className="font-mono text-xs font-bold text-[#22D3EE]">
                        QUALIFICATION {item.number}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 rounded-full border border-slate-700 bg-[#0B1220] px-3 py-1 font-mono text-[11px] text-[#94A3B8]">
                      <FaCalendarAlt size={10} className="text-[#22D3EE]" />
                      <span>{item.duration}</span>
                    </div>
                  </div>

                  {/* Degree & Institution */}
                  <div className="mt-4">
                    <h3 className="text-xl font-bold text-[#F8FAFC]">
                      {item.title}
                    </h3>

                    <div className="mt-1 flex items-center gap-2 text-xs font-medium text-[#94A3B8]">
                      <FaUniversity size={12} className="text-[#22D3EE]" />
                      <span>{item.institution}</span>
                    </div>

                    <div className="mt-2 flex flex-wrap items-center gap-2">
                      <span className="rounded-full border border-[#22D3EE]/30 bg-[#22D3EE]/10 px-2.5 py-0.5 font-mono text-xs font-semibold text-[#22D3EE]">
                        {item.gpa}
                      </span>
                      <span className="font-mono text-xs text-[#94A3B8]">
                        {item.stream}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-xs leading-relaxed text-[#94A3B8] sm:text-sm">
                    {item.description}
                  </p>
                </div>

                {/* Coursework & Major Subjects */}
                <div className="mt-6 border-t border-slate-800/80 pt-4">
                  <div className="flex items-center gap-1.5 font-mono text-xs text-[#F8FAFC] mb-2.5">
                    <FaBookOpen size={11} className="text-[#22D3EE]" />
                    <span>Core Coursework:</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {item.subjects.map((subject) => (
                      <span
                        key={subject}
                        className="rounded-md border border-slate-800 bg-[#0B1220]/70 px-2.5 py-1 font-mono text-xs text-[#94A3B8]"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
