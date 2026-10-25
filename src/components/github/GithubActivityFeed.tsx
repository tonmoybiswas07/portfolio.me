"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaCodeBranch,
  FaArrowRight,
  FaHistory,
  FaCheck,
  FaStar,
} from "react-icons/fa";
import { GithubEvent } from "@/types/github";

interface GithubActivityFeedProps {
  events: GithubEvent[];
}

export const GithubActivityFeed: React.FC<GithubActivityFeedProps> = ({
  events,
}) => {
  const formatTimeAgo = (dateStr: string) => {
    try {
      const now = new Date();
      const past = new Date(dateStr);
      const diffMs = now.getTime() - past.getTime();
      const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
      const diffDays = Math.floor(diffHours / 24);

      if (diffHours < 1) return "Just now";
      if (diffHours < 24) return `${diffHours}h ago`;
      if (diffDays === 1) return "Yesterday";
      if (diffDays < 30) return `${diffDays}d ago`;
      return past.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
    } catch {
      return dateStr;
    }
  };

  const getEventIcon = (type: string) => {
    switch (type) {
      case "PushEvent":
        return <FaCodeBranch size={12} className="text-[#22D3EE]" />;
      case "WatchEvent":
        return <FaStar size={12} className="text-amber-400" />;
      case "CreateEvent":
        return <FaCheck size={12} className="text-emerald-400" />;
      default:
        return <FaHistory size={12} className="text-[#22D3EE]" />;
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-800 bg-[#0B1220] text-[#22D3EE]">
            <FaHistory size={13} />
          </div>
          <h3 className="text-base font-bold text-[#F8FAFC]">
            Recent Public Activity
          </h3>
        </div>
        <div className="flex items-center gap-1.5 font-mono text-[10px] text-[#22D3EE]">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22D3EE] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#22D3EE]" />
          </span>
          <span>Live Feed</span>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-800/80 bg-[#151F32] p-5 shadow-xl">
        <div className="space-y-3.5">
          {events.slice(0, 6).map((event, idx) => (
            <motion.div
              key={event.id || idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="group flex items-start gap-3 border-b border-slate-800/60 pb-3 last:border-0 last:pb-0"
            >
              <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-slate-800 bg-[#0B1220]/80">
                {getEventIcon(event.type)}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center justify-between gap-1">
                  <a
                    href={event.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs font-semibold text-[#F8FAFC] transition-colors hover:text-[#22D3EE] truncate max-w-[200px] sm:max-w-xs"
                  >
                    {event.repoName}
                  </a>
                  <span className="font-mono text-[10px] text-slate-500 shrink-0">
                    {formatTimeAgo(event.createdAt)}
                  </span>
                </div>

                <p className="mt-0.5 text-xs text-[#94A3B8] line-clamp-1">
                  {event.payloadSummary}
                </p>
              </div>

              <a
                href={event.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${event.repoName} on GitHub`}
                className="opacity-0 transition-opacity group-hover:opacity-100 text-[#22D3EE] shrink-0 p-1"
              >
                <FaArrowRight size={10} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GithubActivityFeed;
