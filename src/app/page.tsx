import FullscreenHeroVideo from "@/components/FullscreenHeroVideo";
import Section from "@/components/Section";

export default function Home() {
  return (
    <>
      {/* Hero Video Section */}
      <div className="relative">
        <FullscreenHeroVideo
          videoSrc="/videos/hero.mp4"
          posterSrc="/images/hero-poster.jpg"
        />
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center px-6">
            <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6">
              BOXING
            </h1>
            <p className="text-lg md:text-xl text-white/70 font-light tracking-wide max-w-2xl">
              The journey. The discipline. The craft.
            </p>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">
            Documentary. Discipline. Design.
          </h2>
          <p className="text-white/60 text-lg font-light leading-relaxed">
            We capture the raw essence of boxing—the early mornings, the sweat,
            the dedication. Through media and apparel, we tell the story of
            those who step into the ring.
          </p>
        </div>
      </Section>
    </>
  );
}
