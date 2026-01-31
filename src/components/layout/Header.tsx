import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Header() {
  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50",
      "bg-black/80 backdrop-blur-sm",
      "border-b border-white/5"
    )}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="text-xl font-medium tracking-tight hover:opacity-70 transition-opacity"
          >
            BOXING
          </Link>
          <div className="flex items-center gap-8">
            <Link 
              href="/routine" 
              className="text-sm font-light tracking-wide hover:opacity-70 transition-opacity"
            >
              ROUTINE
            </Link>
            <Link 
              href="/apparel" 
              className="text-sm font-light tracking-wide hover:opacity-70 transition-opacity"
            >
              APPAREL
            </Link>
            <Link 
              href="/access" 
              className="text-sm font-light tracking-wide hover:opacity-70 transition-opacity"
            >
              ACCESS
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
