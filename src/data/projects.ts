import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    id: 1,
    title: "PAWMART",
    badge: "E-Commerce & Pet Care",
    description:
      "A complete pet care and e-commerce web platform allowing users to purchase pet foods, accessories, book veterinary consultations, and apply for pet adoption with integrated online payments.",
    domain: "paw-mart07.netlify.app",
    role: "Full Stack Developer",
    status: "Completed",
    live: "https://paw-mart07.netlify.app/",
    source: "https://github.com/tonmoybiswas07/paw_mart_client",
    tags: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Stripe", "Firebase"],
    highlights: [
      "Stripe payment gateway integration for seamless checkouts",
      "Comprehensive pet adoption and inventory management",
      "Role-based authentication & responsive dashboard",
    ],
    featured: true,
  },
  {
    id: 2,
    title: "English Janala",
    badge: "EdTech & Learning App",
    description:
      "An interactive English vocabulary learning platform built to help students and professionals enrich their language skills through structured daily lessons, interactive quizzes, and pronunciation guides.",
    domain: "english-janala515.netlify.app",
    role: "Frontend Developer",
    status: "Completed",
    live: "https://english-janala515.netlify.app/",
    source: "https://github.com/tonmoybiswas07/english_janala",
    tags: ["React.js", "Tailwind CSS", "Framer Motion", "JavaScript", "REST APIs"],
    highlights: [
      "Dynamic vocabulary flashcards with audio playback support",
      "Interactive quizzes with real-time score tracking",
      "Smooth animations and gamified progression milestones",
    ],
    featured: true,
  },
  {
    id: 3,
    title: "Appify App Store",
    badge: "Product Showcase & Hub",
    description:
      "A modern application marketplace and review catalog where users can discover trending apps, filter by categories, explore detailed feature breakdowns, and leave verified ratings.",
    domain: "appify-app1.netlify.app",
    role: "Frontend Developer",
    status: "Completed",
    live: "https://appify-app1.netlify.app/",
    source: "https://github.com/tonmoybiswas07/hero_app_a",
    tags: ["React.js", "Tailwind CSS", "React Router", "Lucide Icons", "REST APIs"],
    highlights: [
      "Real-time category search, filtering, and sorting",
      "Interactive review submission and rating metrics",
      "Modern glassmorphism UI with fluid responsive layouts",
    ],
    featured: true,
  },
];
