export interface GithubUser {
  login: string;
  name: string;
  avatarUrl: string;
  htmlUrl: string;
  bio: string;
  publicRepos: number;
  followers: number;
  following: number;
  location: string;
  blog: string;
  createdAt: string;
}

export interface LatestCommit {
  message: string;
  date: string;
  sha: string;
  htmlUrl?: string;
}

export interface GithubRepo {
  id: number;
  name: string;
  fullName: string;
  description: string | null;
  htmlUrl: string;
  homepage: string | null;
  language: string | null;
  stargazersCount: number;
  forksCount: number;
  topics: string[];
  updatedAt: string;
  pushedAt: string;
  isFork: boolean;
  latestCommit?: LatestCommit | null;
}

export interface GithubEvent {
  id: string;
  type: string;
  repoName: string;
  repoUrl: string;
  createdAt: string;
  payloadSummary: string;
  actionDetails?: string;
}

export interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export interface ContributionMonth {
  name: string;
  firstWeekIndex: number;
}

export interface GithubStats {
  totalContributionsLastYear: number;
  totalContributionsCurrentYear: number;
  currentYear: number;
  currentStreak: number;
  longestStreak: number;
  activeDaysCount: number;
  totalPublicRepos: number;
  totalStars: number;
  mostActiveDay: {
    date: string;
    count: number;
  } | null;
}

export interface GithubDataResponse {
  success: boolean;
  user: GithubUser;
  stats: GithubStats;
  contributions: ContributionDay[];
  recentRepos: GithubRepo[];
  recentEvents: GithubEvent[];
  updatedAt: string;
  isFallback?: boolean;
}
