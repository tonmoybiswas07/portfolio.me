import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/ContactSection";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { FaArrowLeft } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Contact | Tonmoy Biswas",
  description:
    "Get in touch with Tonmoy Biswas for developer opportunities, collaborations, or inquiries.",
};

export default function ContactPage() {
  return (
    <div className="pt-16 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-4">
        <Link href="/#contact">
          <Button variant="ghost" size="sm" className="gap-2 text-[#94A3B8]">
            <FaArrowLeft size={10} />
            <span>Back to Single Page Experience</span>
          </Button>
        </Link>
      </div>
      <ContactSection />
    </div>
  );
}
