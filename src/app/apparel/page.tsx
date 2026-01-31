import Section from "@/components/Section";
import Image from "next/image";

export default function ApparelPage() {
  return (
    <div className="pt-20">
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 text-center">
            <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-6">
              APPAREL
            </h1>
            <p className="text-white/50 text-sm font-light tracking-widest uppercase">
              Minimal. Functional. Essential.
            </p>
          </div>

          {/* Product Placeholder */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="/images/apparel/product-1.jpg"
                alt="Boxing Apparel Product"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-light tracking-tight mb-2">
                  Essential Tee
                </h2>
                <p className="text-white/40 text-sm font-light tracking-wide uppercase mb-4">
                  $XX.XX
                </p>
              </div>
              <p className="text-white/60 font-light leading-relaxed">
                Minimal design. Premium quality. Built for movement.
                The foundation of your training wardrobe.
              </p>
              <div className="pt-4">
                <button
                  disabled
                  className="px-8 py-3 bg-white/10 border border-white/20 text-white/40 cursor-not-allowed text-sm font-light tracking-wide uppercase"
                >
                  Coming Soon
                </button>
              </div>
            </div>
          </div>

          {/* Additional Placeholder Products */}
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="space-y-4">
                <div className="relative aspect-[3/4] overflow-hidden bg-white/5">
                  <div className="absolute inset-0 flex items-center justify-center text-white/20 text-sm">
                    Product {item + 1}
                  </div>
                </div>
                <div>
                  <p className="text-white/40 text-sm font-light">Product Name</p>
                  <p className="text-white/20 text-xs font-light">$XX.XX</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
