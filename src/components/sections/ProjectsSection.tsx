"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowUpRightFromSquare,
  FaCheck,
  FaGithub,
  FaGlobe,
  FaLayerGroup,
  FaXmark,
} from "react-icons/fa6";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { projectsData } from "@/data/projects";
import { Project } from "@/types";

export const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterOptions = [
    { id: "all", label: "All Projects" },
    { id: "fullstack", label: "Full Stack (MERN)" },
    { id: "frontend", label: "Frontend & EdTech" },
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "fullstack") return project.tags.includes("Node.js") || project.tags.includes("MongoDB");
    if (activeFilter === "frontend") return !project.tags.includes("Node.js");
    return true;
  });

  return (
    <section
      id="projects"
      aria-label="Projects Section"
      className="relative px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          badge="PORTFOLIO HIGHLIGHTS"
          title="Featured Engineering Work"
          description="Handcrafted web applications built with a focus on real-world utility, responsive UI, and clean code."
        />

        {/* Filter Buttons */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setActiveFilter(opt.id)}
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all duration-200 cursor-pointer ${
                activeFilter === opt.id
                  ? "bg-[#22D3EE] text-[#0B1220] font-semibold shadow-md shadow-[#22D3EE]/25"
                  : "border border-slate-800 bg-[#151F32] text-[#94A3B8] hover:border-slate-700 hover:text-[#F8FAFC]"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="flex h-full flex-col justify-between border-slate-800/80 bg-[#151F32] p-6 hover:border-[#22D3EE]/40">
                {/* Upper section */}
                <div>
                  {/* Window Bar Header */}
                  <div className="mb-4 flex items-center justify-between border-b border-slate-800/80 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
                      <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
                      <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
                    </div>

                    <div className="flex items-center gap-1 font-mono text-[11px] text-[#22D3EE]">
                      <FaGlobe size={10} />
                      <span className="truncate max-w-[140px]">{project.domain}</span>
                    </div>

                    <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-mono text-[9px] font-medium text-emerald-400">
                      {project.status}
                    </span>
                  </div>

                  {/* Badge & Title */}
                  <div className="mb-2">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#94A3B8]">
                      {project.badge}
                    </span>
                    <h3 className="text-xl font-bold text-[#F8FAFC]">
                      {project.title}
                    </h3>
                    <p className="text-xs font-medium text-[#22D3EE]">
                      {project.role}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-xs leading-relaxed text-[#94A3B8]">
                    {project.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="mt-4 space-y-1.5 border-t border-slate-800/60 pt-3">
                    {project.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-[11px] text-[#94A3B8]"
                      >
                        <FaCheck size={9} className="mt-1 shrink-0 text-[#22D3EE]" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom section: Tags & Links */}
                <div className="mt-6 border-t border-slate-800/80 pt-4">
                  {/* Tech stack tags */}
                  <div className="mb-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-slate-800 bg-[#0B1220]/60 px-2 py-0.5 font-mono text-[10px] text-[#F8FAFC]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex items-center gap-2.5">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        variant="primary"
                        size="sm"
                        className="w-full gap-1.5 font-medium"
                      >
                        <span>Live Demo</span>
                        <FaArrowUpRightFromSquare size={10} />
                      </Button>
                    </a>

                    <a
                      href={project.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        variant="secondary"
                        size="sm"
                        className="w-full gap-1.5"
                      >
                        <FaGithub size={11} className="text-[#22D3EE]" />
                        <span>Code</span>
                      </Button>
                    </a>

                    <button
                      onClick={() => setSelectedProject(project)}
                      title="View Details"
                      className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-800 bg-[#151F32] text-[#94A3B8] transition-colors hover:border-[#22D3EE]/40 hover:text-[#22D3EE] cursor-pointer"
                    >
                      <FaLayerGroup size={12} />
                    </button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Project Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="fixed inset-0 bg-[#0B1220]/80 backdrop-blur-md"
              />

              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="relative z-10 w-full max-w-xl overflow-hidden rounded-2xl border border-slate-800 bg-[#151F32] p-6 shadow-2xl"
              >
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div>
                    <span className="font-mono text-xs uppercase text-[#22D3EE]">
                      {selectedProject.badge}
                    </span>
                    <h3 className="text-xl font-bold text-[#F8FAFC]">
                      {selectedProject.title}
                    </h3>
                  </div>

                  <button
                    onClick={() => setSelectedProject(null)}
                    aria-label="Close modal"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-800 bg-[#0B1220] text-[#94A3B8] transition-colors hover:text-[#F8FAFC] cursor-pointer"
                  >
                    <FaXmark size={13} />
                  </button>
                </div>

                <div className="mt-4 space-y-4">
                  <div>
                    <p className="text-xs font-medium text-[#94A3B8]">
                      Role &amp; Domain
                    </p>
                    <p className="text-sm font-semibold text-[#F8FAFC]">
                      {selectedProject.role} &bull; {selectedProject.domain}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-medium text-[#94A3B8]">
                      Overview
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-[#F8FAFC]">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-medium text-[#94A3B8]">
                      Key Highlights &amp; Features
                    </p>
                    <ul className="mt-2 space-y-2">
                      {selectedProject.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-xs text-[#F8FAFC]"
                        >
                          <FaCheck
                            size={10}
                            className="mt-0.5 shrink-0 text-[#22D3EE]"
                          />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-xs font-medium text-[#94A3B8]">
                      Technologies Used
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {selectedProject.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-slate-800 bg-[#0B1220] px-2.5 py-1 font-mono text-xs text-[#22D3EE]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-3 border-t border-slate-800 pt-4">
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button variant="primary" size="sm" className="w-full gap-2">
                      <span>Visit Live Demo</span>
                      <FaArrowUpRightFromSquare size={11} />
                    </Button>
                  </a>
                  <a
                    href={selectedProject.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button variant="secondary" size="sm" className="w-full gap-2">
                      <FaGithub size={12} className="text-[#22D3EE]" />
                      <span>View GitHub</span>
                    </Button>
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsSection;
