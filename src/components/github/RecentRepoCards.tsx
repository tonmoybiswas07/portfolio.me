"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaFolder,
  FaStar,
  FaCodeBranch,
  FaExternalLinkAlt,
  FaCheckCircle,
} from "react-icons/fa";
import { GithubRepo } from "@/types/github";

interface RecentRepoCardsProps {
  repos: GithubRepo[];
}

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  C: "#555555",
  "C++": "#F34B7D",
  Python: "#3572A5",
  HTML: "#E34C26",
  CSS: "#563D7C",
  Default: "#22D3EE",
};

export const RecentRepoCards: React.FC<RecentRepoCardsProps> = ({ repos }) => {
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
      if (diffDays < 30) return `${diffDays} days ago`;
      return past.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-800 bg-[#0B1220] text-[#22D3EE]">
            <FaFolder size={13} />
          </div>
          <h3 className="text-base font-bold text-[#F8FAFC]">
            Active Repositories
          </h3>
        </div>
        <span className="font-mono text-xs text-[#94A3B8]">
          Updated Recently
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {repos.map((repo, idx) => {
          const langColor =
            LANGUAGE_COLORS[repo.language || ""] || LANGUAGE_COLORS.Default;

          return (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-800/80 bg-[#151F32] p-5 shadow-xl transition-all duration-300 hover:border-[#22D3EE]/40 hover:shadow-2xl hover:shadow-[#0B1220]/80"
            >
              {/* Header: Title & Link */}
              <div>
                <div className="flex items-start justify-between gap-3">
                  <a
                    href={repo.htmlUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm sm:text-base font-bold text-[#F8FAFC] transition-colors group-hover:text-[#22D3EE]"
                  >
                    <span className="line-clamp-1">{repo.name}</span>
                    <FaExternalLinkAlt
                      size={11}
                      className="shrink-0 text-[#94A3B8] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#22D3EE]"
                    />
                  </a>

                  {/* Stars / Forks Badges */}
                  <div className="flex items-center gap-2 shrink-0">
                    {repo.stargazersCount > 0 && (
                      <span className="flex items-center gap-1 font-mono text-[11px] text-[#94A3B8]">
                        <FaStar size={10} className="text-amber-400" />
                        <span>{repo.stargazersCount}</span>
                      </span>
                    )}
                    {repo.forksCount > 0 && (
                      <span className="flex items-center gap-1 font-mono text-[11px] text-[#94A3B8]">
                        <FaCodeBranch size={10} className="text-[#22D3EE]" />
                        <span>{repo.forksCount}</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="mt-2 text-xs leading-relaxed text-[#94A3B8] line-clamp-2">
                  {repo.description || "Open source project repository on GitHub."}
                </p>

                {/* Topics / Tags */}
                {repo.topics && repo.topics.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {repo.topics.slice(0, 3).map((topic) => (
                      <span
                        key={topic}
                        className="rounded-md border border-slate-800 bg-[#0B1220]/60 px-2 py-0.5 font-mono text-[10px] text-[#94A3B8]"
                      >
                        #{topic}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Latest Commit Snippet & Language Footer */}
              <div className="mt-4 border-t border-slate-800/80 pt-3">
                {repo.latestCommit && (
                  <div className="mb-2.5 rounded-lg border border-slate-800/50 bg-[#0B1220]/40 p-2 text-[11px]">
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <FaCheckCircle size={10} className="text-[#22D3EE] shrink-0" />
                      <span className="font-mono text-[10px] text-[#22D3EE]">
                        Latest Commit
                      </span>
                      <span className="text-slate-600">•</span>
                      <span className="text-slate-500">
                        {formatTimeAgo(repo.latestCommit.date)}
                      </span>
                    </div>
                    <p className="mt-1 font-mono text-xs text-[#F8FAFC] line-clamp-1">
                      {repo.latestCommit.message}
                    </p>
                  </div>
                )}

                <div className="flex items-center justify-between text-[11px] text-[#94A3B8]">
                  <div className="flex items-center gap-1.5">
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: langColor }}
                    />
                    <span className="font-mono text-xs text-[#F8FAFC]">
                      {repo.language || "TypeScript"}
                    </span>
                  </div>

                  <span className="font-mono text-[10px] text-slate-500">
                    Updated {formatTimeAgo(repo.updatedAt)}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentRepoCards;
