import type { Metadata } from "next";
import { SkillsSection } from "@/components/sections/SkillsSection";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { FaArrowLeft } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Skills & Stack | Tonmoy Biswas",
  description:
    "Comprehensive skills matrix and technology stack of Tonmoy Biswas across Frontend, Backend, Database, and DevOps.",
};

export default function SkillsPage() {
  return (
    <div className="pt-16 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-4">
        <Link href="/#skills">
          <Button variant="ghost" size="sm" className="gap-2 text-[#94A3B8]">
            <FaArrowLeft size={10} />
            <span>Back to Single Page Experience</span>
          </Button>
        </Link>
      </div>
      <SkillsSection />
    </div>
  );
}
