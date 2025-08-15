'use client';
import React, { useState, useRef, useEffect } from 'react';

interface Service {
  id: number;
  title: string;
  description: string;
  color: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Screen Printing & Embroidery",
    description: "Custom prints on T-shirts, polo shirts, hoodies, towels, and more. Bulk orders available with high-quality finishes.",
    color: "from-orange-500 to-red-600"
  },
  {
    id: 2,
    title: "Signage & Large Format Printing",
    description: "3D/2D signs, lightboxes, banners, and custom outdoor displays with professional, durable finishes.",
    color: "from-orange-500 to-red-600"
  },
  {
    id: 3,
    title: "Branding Solutions",
    description: "Vehicle wraps, office branding, stationery, and promotional items designed to boost your brand visibility.",
    color: "from-orange-500 to-red-600"
  },
  {
    id: 4,
    title: "Creative Design",
    description: "Logos, brochures, flyers, and marketing materials with fast turnaround and professional layouts.",
    color: "ffrom-orange-500 to-red-600"
  },
  {
    id: 5,
    title: "Offset Printing",
    description: "High-quality, cost-effective printing for bulk projects with excellent color accuracy and paper variety.",
    color: "from-orange-500 to-red-600"
  },
  {
    id: 6,
    title: "Digital Printing",
    description: "Quick printing for brochures, books, invitations, menus, and corporate stationery.",
    color: "from-orange-500 to-red-600"
  }
];

const ServiceCard: React.FC<{ service: Service; index: number; isVisible: boolean }> = ({ 
  service, 
  index, 
  isVisible 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-700 hover:scale-105 hover:shadow-lg ${
        isVisible 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-12 opacity-0'
      }`}
      style={{ 
        transitionDelay: isVisible ? `${index * 150}ms` : '0ms' 
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
      
      {/* Top gradient bar */}
      <div className={`h-1 w-full bg-gradient-to-r ${service.color}`} />

      <div className="relative p-4">
        {/* Title */}
        <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors duration-300">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
          {service.description}
        </p>
      </div>

      {/* Corner decoration */}
      <div className={`absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl ${service.color} opacity-10 rounded-bl-full transform transition-all duration-500 ${
        isHovered ? 'scale-125' : 'scale-100'
      }`} />
    </div>
  );
};

const OurServices: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(services.length).fill(false));
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger animation for all cards
            setVisibleCards(new Array(services.length).fill(true));
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-5xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
              Our Services
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-yellow-600 mx-auto rounded-full" />
          </div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto leading-relaxed">
            From custom printing to comprehensive branding solutions, we deliver professional results 
            that elevate your business and bring your vision to life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              index={index}
              isVisible={visibleCards[index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;