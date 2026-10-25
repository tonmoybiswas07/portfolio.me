"use client";

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ContributionDay } from "@/types/github";

interface ContributionHeatmapProps {
  contributions: ContributionDay[];
  totalContributions: number;
}

interface WeekDayCell {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

const MONTH_NAMES = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const LEVEL_COLORS: Record<number, string> = {
  0: "bg-[#131C2E] border-slate-800/80 hover:border-slate-600",
  1: "bg-[#0E4A5C] border-[#0E4A5C] hover:border-[#157E96]",
  2: "bg-[#157E96] border-[#157E96] hover:border-[#1BB2CF]",
  3: "bg-[#1BB2CF] border-[#1BB2CF] hover:border-[#22D3EE] shadow-sm shadow-[#1BB2CF]/20",
  4: "bg-[#22D3EE] border-[#22D3EE] hover:brightness-110 shadow-md shadow-[#22D3EE]/30",
};

export const ContributionHeatmap: React.FC<ContributionHeatmapProps> = ({
  contributions,
  totalContributions,
}) => {
  const [hoveredCell, setHoveredCell] = useState<{
    date: string;
    count: number;
    x: number;
    y: number;
  } | null>(null);

  // Group contributions into 7-day columns (weeks)
  const { weeks, monthLabels } = useMemo(() => {
    if (!contributions || contributions.length === 0) {
      return { weeks: [], monthLabels: [] };
    }

    // Sort ascending
    const sorted = [...contributions].sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );

    const weeksArray: (WeekDayCell | null)[][] = [];
    let currentWeek: (WeekDayCell | null)[] = [];

    // Determine the start day of week (0 = Sunday, 1 = Monday, etc.)
    const firstDate = new Date(sorted[0].date);
    const firstDayOfWeek = firstDate.getDay();

    // Pad first week with nulls for days before firstDate
    for (let i = 0; i < firstDayOfWeek; i++) {
      currentWeek.push(null);
    }

    const monthLabelsList: { name: string; weekIndex: number }[] = [];
    let lastMonth = -1;

    sorted.forEach((day) => {
      const d = new Date(day.date);
      const month = d.getMonth();

      // Check for month label at the start of a week or month change
      if (month !== lastMonth) {
        monthLabelsList.push({
          name: MONTH_NAMES[month],
          weekIndex: weeksArray.length,
        });
        lastMonth = month;
      }

      currentWeek.push({
        date: day.date,
        count: day.count,
        level: day.level,
      });

      if (currentWeek.length === 7) {
        weeksArray.push(currentWeek);
        currentWeek = [];
      }
    });

    if (currentWeek.length > 0) {
      // Pad end of last week
      while (currentWeek.length < 7) {
        currentWeek.push(null);
      }
      weeksArray.push(currentWeek);
    }

    return { weeks: weeksArray, monthLabels: monthLabelsList };
  }, [contributions]);

  const formatDate = (dateStr: string) => {
    try {
      const d = new Date(dateStr);
      return d.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-800/80 bg-[#151F32] p-5 sm:p-6 shadow-xl">
      {/* Header Info */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between pb-5 border-b border-slate-800/80">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-base font-bold text-[#F8FAFC] sm:text-lg">
              Contribution Heatmap
            </h3>
            <span className="font-mono text-xs px-2 py-0.5 rounded-full border border-[#22D3EE]/30 bg-[#22D3EE]/10 text-[#22D3EE] font-semibold">
              {totalContributions.toLocaleString()} Total
            </span>
          </div>
          <p className="mt-1 text-xs text-[#94A3B8]">
            Interactive daily commit and activity graph across the past 52 weeks
          </p>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-2 text-xs text-[#94A3B8]">
          <span className="text-[11px] font-mono">Less</span>
          <div className="flex gap-1 items-center">
            {[0, 1, 2, 3, 4].map((lvl) => (
              <span
                key={lvl}
                className={`h-3 w-3 rounded-sm border ${LEVEL_COLORS[lvl]}`}
                title={`Level ${lvl}`}
              />
            ))}
          </div>
          <span className="text-[11px] font-mono">More</span>
        </div>
      </div>

      {/* Mobile Scroll Hint */}
      <div className="mt-2 text-right md:hidden">
        <span className="font-mono text-[10px] text-[#22D3EE]/80 animate-pulse">
          ← Scroll horizontally to explore calendar →
        </span>
      </div>

      {/* Heatmap Grid Container */}
      <div className="relative mt-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-slate-800">
        <div className="min-w-[760px] select-none">
          {/* Month labels row */}
          <div className="relative mb-2 flex h-4 text-[10px] font-mono text-[#94A3B8]">
            <div className="w-8 shrink-0" />
            <div className="relative flex-1">
              {monthLabels.map((ml, idx) => (
                <span
                  key={`${ml.name}-${idx}`}
                  className="absolute"
                  style={{
                    left: `${(ml.weekIndex / Math.max(weeks.length, 1)) * 100}%`,
                  }}
                >
                  {ml.name}
                </span>
              ))}
            </div>
          </div>

          {/* Days Grid with Weekday Labels */}
          <div className="flex">
            {/* Weekday indicators */}
            <div className="flex flex-col justify-between py-0.5 pr-2 text-[10px] font-mono text-slate-500 w-8 shrink-0">
              <span className="h-3 leading-3">Sun</span>
              <span className="h-3 leading-3">Tue</span>
              <span className="h-3 leading-3">Thu</span>
              <span className="h-3 leading-3">Sat</span>
            </div>

            {/* Weeks Columns */}
            <div className="flex gap-[3.5px] flex-1">
              {weeks.map((week, wIdx) => (
                <div key={wIdx} className="flex flex-col gap-[3.5px]">
                  {week.map((day, dIdx) => {
                    if (!day) {
                      return (
                        <div
                          key={`empty-${wIdx}-${dIdx}`}
                          className="h-3 w-3 rounded-sm bg-transparent"
                        />
                      );
                    }

                    return (
                      <div
                        key={day.date}
                        onMouseEnter={(e) => {
                          const rect = e.currentTarget.getBoundingClientRect();
                          setHoveredCell({
                            date: day.date,
                            count: day.count,
                            x: rect.left + rect.width / 2,
                            y: rect.top,
                          });
                        }}
                        onMouseLeave={() => setHoveredCell(null)}
                        className={`h-3 w-3 rounded-sm border transition-all duration-150 cursor-pointer ${
                          LEVEL_COLORS[day.level]
                        }`}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Tooltip */}
        <AnimatePresence>
          {hoveredCell && (
            <motion.div
              initial={{ opacity: 0, y: 4, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              style={{
                position: "fixed",
                left: hoveredCell.x,
                top: hoveredCell.y - 10,
                transform: "translate(-50%, -100%)",
                pointerEvents: "none",
                zIndex: 100,
              }}
              className="whitespace-nowrap rounded-lg border border-slate-700/80 bg-[#0B1220]/95 px-3 py-1.5 shadow-2xl backdrop-blur-md"
            >
              <p className="font-mono text-xs font-semibold text-[#F8FAFC]">
                <span className="text-[#22D3EE]">
                  {hoveredCell.count === 0
                    ? "No contributions"
                    : `${hoveredCell.count} contribution${
                        hoveredCell.count > 1 ? "s" : ""
                      }`}
                </span>
              </p>
              <p className="text-[10px] text-[#94A3B8]">
                {formatDate(hoveredCell.date)}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Quick Summary Pill Bar */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-800/80 pt-4 text-xs text-[#94A3B8]">
        <div className="flex flex-wrap items-center gap-4">
          <span className="inline-flex items-center gap-1.5 font-mono text-[11px]">
            <span className="h-2 w-2 rounded-full bg-[#22D3EE]" />
            Electric Cyan Intensity
          </span>
          <span className="hidden sm:inline text-slate-600">•</span>
          <span className="font-mono text-[11px] text-[#94A3B8]">
            Real-time GitHub sync
          </span>
        </div>
        <div className="font-mono text-[11px] text-[#22D3EE]">
          52 Weeks of Consistent Coding
        </div>
      </div>
    </div>
  );
};

export default ContributionHeatmap;
