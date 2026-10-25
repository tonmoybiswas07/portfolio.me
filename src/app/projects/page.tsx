import type { Metadata } from "next";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { FaArrowLeft } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Projects | Tonmoy Biswas",
  description:
    "Explore featured projects built by Tonmoy Biswas, including PAWMART, English Janala, and Appify App Store.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-16 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-4">
        <Link href="/#projects">
          <Button variant="ghost" size="sm" className="gap-2 text-[#94A3B8]">
            <FaArrowLeft size={10} />
            <span>Back to Single Page Experience</span>
          </Button>
        </Link>
      </div>
      <ProjectsSection />
    </div>
  );
}
