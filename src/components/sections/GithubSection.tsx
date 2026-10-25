"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaUsers, FaBook } from "react-icons/fa";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { GithubStatsCards } from "@/components/github/GithubStatsCards";
import { ContributionHeatmap } from "@/components/github/ContributionHeatmap";
import { RecentRepoCards } from "@/components/github/RecentRepoCards";
import { GithubActivityFeed } from "@/components/github/GithubActivityFeed";
import { GithubSkeleton } from "@/components/github/GithubSkeleton";
import { GithubDataResponse } from "@/types/github";

export const GithubSection = () => {
  const [data, setData] = useState<GithubDataResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;
    const fetchGithubData = async () => {
      try {
        const res = await fetch("/api/github");
        if (res.ok) {
          const json = await res.json();
          if (isMounted) setData(json);
        }
      } catch (err) {
        console.error("Failed to load GitHub activity:", err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchGithubData();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section
      id="github"
      aria-label="GitHub Activity Section"
      className="relative px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          badge="OPEN SOURCE & CODE ACTIVITY"
          title="My GitHub Journey"
          description="Every commit tells a story of learning, building, and growing."
        />

        {loading ? (
          <GithubSkeleton />
        ) : data ? (
          <div className="space-y-10">
            {/* 1. Metric Cards */}
            <GithubStatsCards stats={data.stats} />

            {/* 2. Interactive Heatmap */}
            <ContributionHeatmap
              contributions={data.contributions}
              totalContributions={data.stats.totalContributionsLastYear}
            />

            {/* 3. Dual Section: Recent Repos + Live Activity Feed */}
            <div className="grid gap-8 lg:grid-cols-12 items-start">
              <div className="lg:col-span-7">
                <RecentRepoCards repos={data.recentRepos} />
              </div>
              <div className="lg:col-span-5">
                <GithubActivityFeed events={data.recentEvents} />
              </div>
            </div>

            {/* 4. GitHub Profile CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-gradient-to-r from-[#151F32] via-[#0E1726] to-[#151F32] p-6 sm:p-8 shadow-2xl"
            >
              {/* Subtle Ambient Glow */}
              <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-[#22D3EE]/5 blur-3xl pointer-events-none" />

              <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-2xl border-2 border-[#22D3EE]/40 bg-[#0B1220] shadow-lg shrink-0">
                    <Image
                      src={data.user.avatarUrl}
                      alt={data.user.name}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="text-lg font-bold text-[#F8FAFC]">
                        {data.user.name}
                      </h4>
                      <span className="font-mono text-xs text-[#22D3EE]">
                        @{data.user.login}
                      </span>
                    </div>

                    <p className="mt-1 text-xs text-[#94A3B8] max-w-md line-clamp-2">
                      {data.user.bio}
                    </p>

                    <div className="mt-2 flex items-center gap-4 text-xs text-slate-400 font-mono">
                      <span className="flex items-center gap-1.5">
                        <FaBook size={11} className="text-[#22D3EE]" />
                        <span>{data.user.publicRepos} Repositories</span>
                      </span>
                      <span className="flex items-center gap-1.5">
                        <FaUsers size={11} className="text-[#22D3EE]" />
                        <span>{data.user.followers} Followers</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <a
                    href={data.user.htmlUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="primary" size="md" className="gap-2">
                      <FaGithub size={16} />
                      <span>View GitHub Profile</span>
                      <FaExternalLinkAlt size={10} />
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default GithubSection;
