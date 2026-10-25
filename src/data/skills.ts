import { SkillCategory } from "@/types";

export const skillsData: SkillCategory[] = [
  {
    title: "Frontend Development",
    number: "01",
    description: "Building responsive, accessible, and high-performance user interfaces.",
    skills: [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Backend & APIs",
    number: "02",
    description: "Architecting RESTful services, middleware, and backend logic.",
    skills: ["Node.js", "Express.js", "REST APIs", "Postman"],
  },
  {
    title: "Database Management",
    number: "03",
    description: "Designing schemas, querying documents, and managing data integrity.",
    skills: ["MongoDB", "Mongoose ODM"],
  },
  {
    title: "Auth & Security",
    number: "04",
    description: "Securing routes, session management, and role-based permissions.",
    skills: ["JWT", "Role Based Access Control", "Better Auth"],
  },
  {
    title: "AI & Modern Engineering",
    number: "05",
    description: "Leveraging intelligent workflows, version control, and problem solving.",
    skills: [
      "AI Integration",
      "AI Assisted Coding",
      "Problem Solving",
      "Git & GitHub",
    ],
  },
  {
    title: "Payment & Testing",
    number: "06",
    description: "Handling transactions, checkout gateways, and quality assurance.",
    skills: ["Stripe", "SSLCommerz", "Testing"],
  },
];
