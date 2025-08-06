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
    const amount = dir === "left" ? -300 : 300;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="bg-[#f8f8f8] py-16 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Left - Banner cards */}
        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black text-white p-2 rounded-full"
          >
            <ChevronLeft size={18} />
          </button>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto no-scrollbar gap-6 pl-10 pr-10 scroll-smooth"
          >
            {banners.map((item) => (
              <div
                key={item.id}
                className="min-w-[200px] bg-white rounded-xl shadow hover:shadow-lg transition"
              >
                <div className="relative h-44 w-full rounded-t-xl overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-4 space-y-2 text-center">
                  <h3 className="text-sm font-semibold text-gray-800">{item.title}</h3>
                  <button className="text-sm text-black font-medium hover:underline">
                    Order Now →
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black text-white p-2 rounded-full"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Right - Description */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-black rounded-full" />
            <hr className="flex-1 border-t border-gray-300" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Event Banners</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Let your customers know you are still open for business. From X banners, roll-up
            banners to Media Wall banners. Whether it’s for a grand opening, a special sale, or
            an upcoming event, our banners are the perfect canvas to broadcast your brand and
            captivate your customers.
          </p>

          <button className="mt-6 bg-black text-white px-6 py-2 rounded hover:bg-gray-900 text-sm">
            View all banner products →
          </button>
        </div>
      </div>
    </section>
  );
}
