import type { Metadata } from "next";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { FaArrowLeft } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Experience | Tonmoy Biswas",
  description:
    "Professional journey, developer training milestones, and open source development experience of Tonmoy Biswas.",
};

export default function ExperiencePage() {
  return (
    <div className="pt-16 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-4">
        <Link href="/#experience">
          <Button variant="ghost" size="sm" className="gap-2 text-[#94A3B8]">
            <FaArrowLeft size={10} />
            <span>Back to Single Page Experience</span>
          </Button>
        </Link>
      </div>
      <ExperienceSection />
    </div>
  );
}
