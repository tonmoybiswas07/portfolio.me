import type { Metadata } from "next";
import { EducationSection } from "@/components/sections/EducationSection";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { FaArrowLeft } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Education | Tonmoy Biswas",
  description:
    "Academic credentials and engineering education background of Tonmoy Biswas.",
};

export default function EducationPage() {
  return (
    <div className="pt-16 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-4">
        <Link href="/#education">
          <Button variant="ghost" size="sm" className="gap-2 text-[#94A3B8]">
            <FaArrowLeft size={10} />
            <span>Back to Single Page Experience</span>
          </Button>
        </Link>
      </div>
      <EducationSection />
    </div>
  );
}
