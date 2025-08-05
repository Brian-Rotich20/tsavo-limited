"use client";
import React, { useEffect, useState } from 'react';
import { CreditCard, FileText, Sticker, Monitor } from 'lucide-react';

interface ServiceIconProps {
  icon: React.ReactNode;
  label: string;
  delay: number;
}

const ServiceIcon: React.FC<ServiceIconProps> = ({ icon, label, delay }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`flex flex-col items-center p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg transform transition-all duration-700 ease-out ${
        isVisible 
          ? 'translate-x-0 opacity-100' 
          : 'translate-x-8 opacity-0'
      } hover:scale-105 hover:shadow-xl`}
    >
      <div className="w-12 h-12 mb-3 text-blue-600 flex items-center justify-center">
        {icon}
      </div>
      <span className="text-sm font-medium text-gray-700 text-center">{label}</span>
    </div>
  );
};

const HeroSection: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const services = [
    { icon: <CreditCard size={32} />, label: 'Business Cards', delay: 200 },
    { icon: <FileText size={32} />, label: 'Brochures', delay: 400 },
    { icon: <Sticker size={32} />, label: 'Custom Stickers', delay: 600 },
    { icon: <Monitor size={32} />, label: 'Cyber Services', delay: 800 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%), 
                           url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e5e7eb' fill-opacity='0.1'%3E%3Ccircle cx='6' cy='6' r='3'/%3E%3Ccircle cx='30' cy='6' r='3'/%3E%3Ccircle cx='54' cy='6' r='3'/%3E%3Ccircle cx='18' cy='18' r='3'/%3E%3Ccircle cx='42' cy='18' r='3'/%3E%3Ccircle cx='6' cy='30' r='3'/%3E%3Ccircle cx='30' cy='30' r='3'/%3E%3Ccircle cx='54' cy='30' r='3'/%3E%3Ccircle cx='18' cy='42' r='3'/%3E%3Ccircle cx='42' cy='42' r='3'/%3E%3Ccircle cx='6' cy='54' r='3'/%3E%3Ccircle cx='30' cy='54' r='3'/%3E%3Ccircle cx='54' cy='54' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />
      
      {/* Workspace Elements - Decorative */}
      <div className="absolute inset-0">
        {/* Business Cards Stack */}
        <div className="absolute top-20 left-10 transform -rotate-12">
          <div className="w-20 h-12 bg-white rounded shadow-lg border border-gray-200 opacity-80"></div>
          <div className="w-20 h-12 bg-blue-50 rounded shadow-lg border border-gray-200 opacity-70 -mt-11 ml-1"></div>
          <div className="w-20 h-12 bg-purple-50 rounded shadow-lg border border-gray-200 opacity-60 -mt-11 ml-2"></div>
        </div>

        {/* Brochure */}
        <div className="absolute top-32 right-16 transform rotate-6">
          <div className="w-16 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded shadow-lg border border-gray-200 opacity-70"></div>
        </div>

        {/* Stickers */}
        <div className="absolute bottom-32 left-16">
          <div className="w-8 h-8 bg-yellow-200 rounded-full shadow-md opacity-80 animate-pulse"></div>
          <div className="w-6 h-6 bg-green-200 rounded-full shadow-md opacity-70 -mt-6 ml-6 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="w-7 h-7 bg-pink-200 rounded-full shadow-md opacity-75 -mt-4 ml-2 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Computer/Monitor representation */}
        <div className="absolute bottom-20 right-20 transform -rotate-3">
          <div className="w-16 h-10 bg-gray-800 rounded-t shadow-lg opacity-60"></div>
          <div className="w-20 h-2 bg-gray-600 rounded-b -mt-0 -ml-2 opacity-60"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 
            className={`text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight transform transition-all duration-1000 ease-out ${
              isLoaded 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-8 opacity-0'
            }`}
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              High-Quality Prints.
            </span>
            <br />
            <span className="text-gray-800">Fast Turnaround.</span>
          </h1>

          {/* Subheading */}
          <p 
            className={`text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed transform transition-all duration-1000 ease-out ${
              isLoaded 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            We design and print business cards, brochures, stickers, and more — with cyber services to support your digital needs.
          </p>

          {/* Service Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <ServiceIcon
                key={index}
                icon={service.icon}
                label={service.label}
                delay={service.delay + 600}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
      
      {/* Floating Elements Animation */}
      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '2s', animationDuration: '3s' }}></div>
      <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-purple-400 rounded-full opacity-50 animate-bounce" style={{ animationDelay: '4s', animationDuration: '4s' }}></div>
      <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-yellow-400 rounded-full opacity-40 animate-bounce" style={{ animationDelay: '6s', animationDuration: '5s' }}></div>
    </section>
  );
};

export default HeroSection;