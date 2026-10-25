"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { skillsData } from "@/data/skills";
import { FaCheck, FaLayerGroup } from "react-icons/fa";

export const SkillsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Skills" },
    ...skillsData.map((cat) => ({ id: cat.title, label: cat.title })),
  ];

  const filteredCategories =
    selectedCategory === "all"
      ? skillsData
      : skillsData.filter((cat) => cat.title === selectedCategory);

  return (
    <section
      id="skills"
      aria-label="Skills Section"
      className="relative px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          badge="TECHNICAL EXPERTISE"
          title="Skills &amp; Technology Stack"
          description="A categorized matrix of programming languages, frameworks, databases, and engineering tools I leverage to craft reliable applications."
        />

        {/* Category Filter Pills */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-[#22D3EE] text-[#0B1220] font-semibold shadow-md shadow-[#22D3EE]/25"
                    : "border border-slate-800 bg-[#151F32] text-[#94A3B8] hover:border-slate-700 hover:text-[#F8FAFC]"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <Card className="h-full border-slate-800/80 bg-[#151F32] p-6 hover:border-[#22D3EE]/30 flex flex-col justify-between">
                <div>
                  {/* Card Header with category number */}
                  <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-800 bg-[#0B1220] text-[#22D3EE]">
                        <FaLayerGroup size={13} />
                      </div>
                      <h3 className="text-base font-bold text-[#F8FAFC]">
                        {category.title}
                      </h3>
                    </div>
                    <span className="font-mono text-xs font-semibold text-[#22D3EE]">
                      {category.number}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-xs leading-relaxed text-[#94A3B8]">
                    {category.description}
                  </p>
                </div>

                {/* Skill Pills */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-slate-800 bg-[#0B1220]/70 px-2.5 py-1 text-xs font-mono text-[#F8FAFC] transition-colors hover:border-[#22D3EE]/40 hover:text-[#22D3EE]"
                    >
                      <FaCheck size={9} className="text-[#22D3EE]" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Continuous Learning Callout Banner */}
        <div className="mt-12 rounded-2xl border border-slate-800/80 bg-[#151F32]/80 p-6 text-center backdrop-blur-md">
          <p className="font-mono text-xs uppercase tracking-widest text-[#22D3EE] font-semibold">
            DEVELOPER PHILOSOPHY
          </p>
          <p className="mt-2 text-sm text-[#94A3B8] max-w-2xl mx-auto">
            Tools and frameworks evolve rapidly. My core skill is problem-solving: understanding fundamental algorithms, user needs, and software architecture to adopt any tool effectively.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
