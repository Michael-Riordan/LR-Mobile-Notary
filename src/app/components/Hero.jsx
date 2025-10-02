import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[550px] md:h-[600px] text-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/NotaryHero.jpg"
        alt="Tools Spread Across Table"
        className="object-cover"
        fill
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70 flex flex-col items-center justify-center text-white px-4">
        
        {/* Headline */}
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 mt-24 leading-tight">
          Reliable Notary Services, When You Need Them Most.
        </h1>

        <p className="text-xl md:w-1/2">
            Serving Glendale, Phoenix, Peoria, and surrounding Arizona communities.
            Evenings and weekends available. Homes, hospitals, offices, or your favorite coffee shop.
        </p>

        {/* CTAs */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          {/* Call Now button */}
          <a href="tel:+13473061553">
            <button className="px-6 py-3 mt-14 bg-blue-900 text-white font-semibold rounded-full shadow-lg hover:bg-blue-950 transition transform hover:scale-105 active:scale-95">
              📞 Call Now
            </button>
          </a>

          <span className="hidden md:inline font-semibold mt-14 text-white">
            Or text: <span className="underline">(347) 306-1553</span>
          </span>
        </div>
      </div>
    </section>
  )
}