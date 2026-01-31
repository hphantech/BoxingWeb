import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  showDivider?: boolean;
  id?: string;
}

export default function Section({
  children,
  className,
  showDivider = true,
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-24 px-6",
        showDivider && "border-b border-white/5",
        className
      )}
    >
      <div className="container mx-auto max-w-7xl">
        {children}
      </div>
    </section>
  );
}
