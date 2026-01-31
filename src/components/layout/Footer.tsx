import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className={cn(
      "border-t border-white/5",
      "py-12 px-6"
    )}>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm text-white/40">
            © {new Date().getFullYear()} BOXING. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-sm text-white/40">
            <Link href="#" className="hover:text-white/60 transition-colors">
              Terms
            </Link>
            <Link href="#" className="hover:text-white/60 transition-colors">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
