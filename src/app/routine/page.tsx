import Section from "@/components/Section";
import ContentGrid from "@/components/ContentGrid";

export default function RoutinePage() {
  // Placeholder content - replace with actual data
  const beforeItems = [
    {
      id: "1",
      src: "/images/routine/before-1.jpg",
      alt: "Before training",
      type: "image" as const,
    },
    {
      id: "2",
      src: "/images/routine/before-2.jpg",
      alt: "Preparation",
      type: "image" as const,
    },
    {
      id: "3",
      src: "/images/routine/before-3.jpg",
      alt: "Warm up",
      type: "image" as const,
    },
  ];

  const duringItems = [
    {
      id: "4",
      src: "/videos/during-1.mp4",
      alt: "Training session",
      type: "video" as const,
    },
    {
      id: "5",
      src: "/images/routine/during-1.jpg",
      alt: "In the ring",
      type: "image" as const,
    },
    {
      id: "6",
      src: "/images/routine/during-2.jpg",
      alt: "Sparring",
      type: "image" as const,
    },
  ];

  const afterItems = [
    {
      id: "7",
      src: "/images/routine/after-1.jpg",
      alt: "Recovery",
      type: "image" as const,
    },
    {
      id: "8",
      src: "/images/routine/after-2.jpg",
      alt: "Reflection",
      type: "image" as const,
    },
    {
      id: "9",
      src: "/videos/after-1.mp4",
      alt: "Post training",
      type: "video" as const,
    },
  ];

  return (
    <div className="pt-20">
      {/* Before Section */}
      <Section id="before">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
            BEFORE
          </h2>
          <p className="text-white/50 text-sm font-light tracking-widest uppercase">
            Preparation. Focus. Intention.
          </p>
        </div>
        <ContentGrid items={beforeItems} columns={3} />
      </Section>

      {/* During Section */}
      <Section id="during">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
            DURING
          </h2>
          <p className="text-white/50 text-sm font-light tracking-widest uppercase">
            Intensity. Technique. Perseverance.
          </p>
        </div>
        <ContentGrid items={duringItems} columns={3} />
      </Section>

      {/* After Section */}
      <Section id="after" showDivider={false}>
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
            AFTER
          </h2>
          <p className="text-white/50 text-sm font-light tracking-widest uppercase">
            Recovery. Reflection. Growth.
          </p>
        </div>
        <ContentGrid items={afterItems} columns={3} />
      </Section>
    </div>
  );
}
