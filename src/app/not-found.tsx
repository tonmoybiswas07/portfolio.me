import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-4 text-center">
      <div className="relative mb-6">
        <span className="font-mono text-8xl font-black text-[#151F32] sm:text-9xl">
          404
        </span>
        <span className="absolute inset-0 flex items-center justify-center font-mono text-2xl font-bold text-[#22D3EE] sm:text-3xl">
          PAGE NOT FOUND
        </span>
      </div>

      <h1 className="max-w-md text-2xl font-bold text-[#F8FAFC] sm:text-3xl">
        Lost in cyberspace?
      </h1>

      <p className="mt-3 max-w-sm text-sm text-[#94A3B8]">
        The page you are looking for doesn&apos;t exist or has been moved to a new URL.
      </p>

      <div className="mt-8 flex gap-3">
        <Link href="/">
          <Button variant="primary">Return Home</Button>
        </Link>
      </div>
    </div>
  );
}
