import Image from "next/image";
import { cn } from "@/lib/utils";

interface ContentItem {
  id: string;
  src: string;
  alt: string;
  type?: "image" | "video";
}

interface ContentGridProps {
  items: ContentItem[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export default function ContentGrid({
  items,
  columns = 3,
  className,
}: ContentGridProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
  };

  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-4",
        gridCols[columns],
        className
      )}
    >
      {items.map((item) => (
        <div
          key={item.id}
          className="relative aspect-[4/3] overflow-hidden group cursor-pointer"
        >
          {item.type === "video" ? (
            <video
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={item.src} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        </div>
      ))}
    </div>
  );
}
