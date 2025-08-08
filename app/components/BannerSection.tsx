"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const banners = [
  { id: 1, title: "Rollup Banners", image: "/rollup.jpg" },
  { id: 2, title: "Teardrop Banners", image: "/teardrop-banner.jpeg" },
  { id: 3, title: "Wall Posters", image: "/wall-posters.jpeg" },
  { id: 4, title: "3D Signage", image: "/3d.jpeg" },
];

export default function BannerSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = dir === "left" ? -250 : 250; // smaller scroll for mobile
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="bg-[#f8f8f8] py-12 px-4 sm:px-6 lg:py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-10 items-start">
        {/* Left - Banner cards */}
        <div className="relative">
          {/* Left arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-1 top-1/2 -translate-y-1/2 z-10 bg-black/80 text-white p-2 rounded-full hover:bg-black hidden sm:flex"
          >
            <ChevronLeft size={18} />
          </button>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto no-scrollbar gap-4 sm:gap-6 pl-1 pr-1 sm:pl-10 sm:pr-10 scroll-smooth"
          >
            {banners.map((item) => (
              <div
                key={item.id}
                className="min-w-[160px] sm:min-w-[200px] bg-white rounded-xl shadow hover:shadow-lg transition flex-shrink-0"
              >
                <div className="relative h-36 sm:h-44 w-full rounded-t-xl overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-3 sm:p-4 space-y-1 sm:space-y-2 text-center">
                  <h3 className="text-xs sm:text-sm font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <button className="text-xs sm:text-sm text-black font-medium hover:underline">
                    Order Now →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-1 top-1/2 -translate-y-1/2 z-10 bg-black/80 text-white p-2 rounded-full hover:bg-black hidden sm:flex"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Right - Description */}
        <div className="text-center md:text-left">
          <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
            <div className="w-3 h-3 bg-black rounded-full" />
            <hr className="flex-1 border-t border-gray-300 hidden sm:block" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
            Event Banners
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-lg mx-auto md:mx-0">
            Let your customers know you are still open for business. From X banners, roll-up
            banners to Media Wall banners. Whether it’s for a grand opening, a special sale, or
            an upcoming event, our banners are the perfect canvas to broadcast your brand and
            captivate your customers.
          </p>

          <button className="mt-6 bg-black text-white px-5 py-2 rounded hover:bg-gray-900 text-xs sm:text-sm">
            View all banner products →
          </button>
        </div>
      </div>
    </section>
  );
}
