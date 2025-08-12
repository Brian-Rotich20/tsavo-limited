"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const services = [
  { title: "Vehicle Branding", image: "/vehicle-branding2.jpg" },
  { title: "Brochures", image: "/brochure1.jpg" },
  { title: "Shirt Branding", image: "/shirt4.jpg" },
  { title: "Rollup Banners", image: "/roll.jpg" },
  { title: "Teardrop Banners", image: "/teardrop-banner.jpeg" },
  { title: "Label Stickers", image: "/label.jpeg" },
  { title: "Business Cards  ", image: "/business-cards1.jpg" },
  { title: "Adhesive Posters", image: "/adhesive-posters.jpg" },
];

const ServicesSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const cardWidth = 260; // includes margin/gap

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const newIndex =
        direction === "left"
          ? Math.max(activeIndex - 1, 0)
          : Math.min(activeIndex + 1, services.length - 1);
      setActiveIndex(newIndex);
      scrollRef.current.scrollTo({
        left: newIndex * cardWidth,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // Only add wheel scroll for desktop (md and above)
    const handleWheelScroll = (e: WheelEvent) => {
      // Check if screen is mobile (less than 768px)
      if (window.innerWidth < 768) return;
      
      if (Math.abs(e.deltaY) < Math.abs(e.deltaX)) return; // Skip horizontal gestures

      const direction = e.deltaY > 0 ? 1 : -1;
      const newIndex = Math.min(
        Math.max(activeIndex + direction, 0),
        services.length - 1
      );
      setActiveIndex(newIndex);
      el.scrollTo({
        left: newIndex * cardWidth,
        behavior: "smooth",
      });
    };

    el.addEventListener("wheel", handleWheelScroll);

    return () => {
      el.removeEventListener("wheel", handleWheelScroll);
    };
  }, [activeIndex]);

  return (
    <section className="relative py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
          Our Printing Services
        </h2>

        <div className="relative">
          {/* Chevron Left - Hidden on mobile */}
          <button
            onClick={() => scroll("left")}
            className="absolute z-20 -left-4 top-1/2 -translate-y-1/2 bg-gradient-to-r from-pink-600 to-red-600 text-white rounded-full p-3 shadow-lg hover:scale-105 transition hidden md:flex items-center cursor-pointer justify-center"
            aria-label="Scroll Left"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Cards - Now freely scrollable on mobile */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto md:overflow-hidden space-x-5 snap-x snap-mandatory scroll-smooth px-2 scrollbar-hide"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {services.map((service, idx) => (
              <div
                key={idx}
                className="snap-start min-w-[240px] bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group"
              >
                <div className="w-full h-40 relative">
                  <Image
                    src={service.image}
                    alt={service.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-2xl group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-base font-semibold text-gray-800 group-hover:text-red-600 transition-colors duration-200">
                    {service.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Chevron Right - Hidden on mobile */}
          <button
            onClick={() => scroll("right")}
            className="absolute z-20 -right-4 top-1/2 -translate-y-1/2 bg-gradient-to-r from-pink-600 to-red-600 text-white rounded-full p-3 shadow-lg hover:scale-105 transition cursor-pointer hidden md:flex items-center justify-center"
            aria-label="Scroll Right"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Pagination Dots - Hidden on mobile to keep it clean */}
        <div className="hidden md:flex justify-center mt-8 space-x-2 cursor-pointer">
          {services.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setActiveIndex(i);
                if (scrollRef.current) {
                  scrollRef.current.scrollTo({
                    left: i * cardWidth,
                    behavior: "smooth",
                  });
                }
              }}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "bg-red-600 scale-110"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Mobile scroll indicator */}
        <div className="md:hidden text-center mt-4">
          <p className="text-sm text-gray-500">← Swipe to explore more services →</p>
        </div>
      </div>
      
      <style jsx>{`
        .scrollbar-hide {
          -webkit-overflow-scrolling: touch;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;