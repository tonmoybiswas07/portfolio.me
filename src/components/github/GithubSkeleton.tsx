import React from "react";

export const GithubSkeleton = () => {
  return (
    <div className="space-y-8 animate-pulse" aria-label="Loading GitHub data">
      {/* Stat Cards Skeleton */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="h-28 rounded-2xl border border-slate-800/80 bg-[#151F32]/60 p-5"
          >
            <div className="flex items-center justify-between">
              <div className="h-4 w-20 rounded bg-slate-800" />
              <div className="h-8 w-8 rounded-lg bg-slate-800" />
            </div>
            <div className="mt-4 h-6 w-16 rounded bg-slate-800" />
          </div>
        ))}
      </div>

      {/* Heatmap Card Skeleton */}
      <div className="rounded-2xl border border-slate-800/80 bg-[#151F32]/60 p-6">
        <div className="flex items-center justify-between pb-4">
          <div className="h-5 w-48 rounded bg-slate-800" />
          <div className="h-4 w-24 rounded bg-slate-800" />
        </div>
        <div className="h-32 w-full rounded-xl bg-slate-800/40" />
      </div>

      {/* Grid Skeleton */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="h-64 rounded-2xl border border-slate-800/80 bg-[#151F32]/60 p-5" />
        <div className="h-64 rounded-2xl border border-slate-800/80 bg-[#151F32]/60 p-5" />
      </div>
    </div>
  );
};

export default GithubSkeleton;
