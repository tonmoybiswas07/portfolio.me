"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaFire, FaTrophy, FaCalendarCheck, FaCodeBranch } from "react-icons/fa";
import { GithubStats } from "@/types/github";

interface GithubStatsCardsProps {
  stats: GithubStats;
}

export const GithubStatsCards: React.FC<GithubStatsCardsProps> = ({ stats }) => {
  const cards = [
    {
      label: "Total Contributions",
      value: stats.totalContributionsLastYear.toLocaleString(),
      subtext: `${stats.totalContributionsCurrentYear} in ${stats.currentYear}`,
      icon: <FaCalendarCheck size={18} className="text-[#22D3EE]" />,
      badge: "Last 365 Days",
      accent: "from-[#22D3EE]/20 to-transparent",
    },
    {
      label: "Current Streak",
      value: `${stats.currentStreak} ${stats.currentStreak === 1 ? "Day" : "Days"}`,
      subtext: stats.currentStreak > 0 ? "Daily Streak Active" : "Start a streak today",
      icon: <FaFire size={20} className="text-amber-400" />,
      badge: stats.currentStreak > 0 ? "Active" : "Ready",
      accent: "from-amber-400/20 to-transparent",
      badgeColor: "text-amber-400 border-amber-400/30 bg-amber-400/10",
    },
    {
      label: "Longest Streak",
      value: `${stats.longestStreak} ${stats.longestStreak === 1 ? "Day" : "Days"}`,
      subtext: "Personal Best Run",
      icon: <FaTrophy size={18} className="text-[#22D3EE]" />,
      badge: "Record",
      accent: "from-[#22D3EE]/20 to-transparent",
    },
    {
      label: "Public Repositories",
      value: stats.totalPublicRepos.toString(),
      subtext: `${stats.activeDaysCount} active commit days`,
      icon: <FaCodeBranch size={18} className="text-[#22D3EE]" />,
      badge: "Open Source",
      accent: "from-[#22D3EE]/20 to-transparent",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((card, idx) => (
        <motion.div
          key={card.label}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: idx * 0.08 }}
          className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-[#151F32] p-5 shadow-xl transition-all duration-300 hover:border-[#22D3EE]/30 hover:shadow-2xl hover:shadow-[#0B1220]/80"
        >
          {/* Subtle Top Gradient Accent on Hover */}
          <div
            className={`absolute -top-12 left-1/2 h-24 w-32 -translate-x-1/2 rounded-full bg-gradient-to-b ${card.accent} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100`}
          />

          <div className="relative flex items-center justify-between">
            <span className="text-xs font-medium text-[#94A3B8]">
              {card.label}
            </span>
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-800 bg-[#0B1220]/80 shadow-inner">
              {card.icon}
            </div>
          </div>

          <div className="relative mt-3">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black tracking-tight text-[#F8FAFC] sm:text-3xl font-mono">
                {card.value}
              </span>
            </div>

            <div className="mt-2 flex items-center justify-between border-t border-slate-800/80 pt-2 text-[11px]">
              <span className="text-[#94A3B8]">{card.subtext}</span>
              <span
                className={`font-mono text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full border ${
                  card.badgeColor ||
                  "text-[#22D3EE] border-[#22D3EE]/30 bg-[#22D3EE]/10"
                }`}
              >
                {card.badge}
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default GithubStatsCards;
