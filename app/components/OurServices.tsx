'use client';
import React from 'react';
import { Shirt, Signpost, Target, PenTool, Printer, FileText } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const services: Service[] = [
  {
    id: 1,
    title: "Screen Printing & Embroidery",
    description: "Custom prints on T-shirts, polo shirts, hoodies, towels, and more. Bulk orders available with high-quality finishes.",
    icon: Shirt
  },
  {
    id: 2,
    title: "Signage & Large Format Printing",
    description: "3D/2D signs, lightboxes, banners, and custom outdoor displays with professional, durable finishes.",
    icon: Signpost
  },
  {
    id: 3,
    title: "Branding Solutions",
    description: "Vehicle wraps, office branding, stationery, and promotional items designed to boost your brand visibility.",
    icon: Target
  },
  {
    id: 4,
    title: "Creative Design",
    description: "Logos, brochures, flyers, and marketing materials with fast turnaround and professional layouts.",
    icon: PenTool
  },
  {
    id: 5,
    title: "Offset Printing",
    description: "High-quality, cost-effective printing for bulk projects with excellent color accuracy and paper variety.",
    icon: Printer
  },
  {
    id: 6,
    title: "Digital Printing",
    description: "Quick printing for brochures, books, invitations, menus, and corporate stationery.",
    icon: FileText
  }
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  const IconComponent = service.icon;
  
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md hover:border-orange-300 transition-all duration-200">
      <div className="mb-4">
        <IconComponent className="w-8 h-8 text-orange-500" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">
        {service.title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        {service.description}
      </p>
    </div>
  );
};

const OurServices: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From custom printing to comprehensive branding solutions, we deliver professional results 
            that elevate your business.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
            />
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Need something specific? We offer custom solutions tailored to your needs.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
            Get Quote
          </button>
        </div>
        
      </div>
    </section>
  );
};

export default OurServices;