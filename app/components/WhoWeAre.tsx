'use client';
import React, { useState, useRef, useEffect } from 'react';

const WhoWeAre: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);



  return (
    <section ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
          
          {/* Image Section - Left side on larger screens */}
          <div className={`lg:w-1/2 flex justify-center lg:justify-start transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
          }`}>
            <div className="relative group">
              {/* Image container with enhanced styling */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="get-to-know.jpeg" 
                  alt="Tsavol Print & E-Design Ltd Team"
                  className="w-[400px] h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-80" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full opacity-60" />
              <div className="absolute top-1/2 -left-6 w-4 h-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-70 animate-pulse" />
            </div>
          </div>

          {/* Content Section - Right side on larger screens */}
          <div className={`lg:w-1/2 transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
          }`} style={{ transitionDelay: '300ms' }}>
            
            {/* Header */}
            <div className="mb-8">
              <h2 className="text-sm lg:text-2xl font-bold text-gray-800 mb-4">
                <span className="bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                  Tsavol Print & E-Design Ltd
                </span>
              </h2>
              <div className="inline-block">
                <h3 className="text-xl lg:text-2xl font-semibold text-gray-700 mb-2">
                  GET TO KNOW US...
                </h3>
                <div className="h-1 w-16 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-full" />
              </div>
            </div>

            {/* Main Description */}
            <div className={`mb-8 transform transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`} style={{ transitionDelay: '500ms' }}>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Tsavol Print & E-Design Ltd is a reliable print shop, owned and managed by a 
                <span className="font-semibold text-gray-700"> Reliable, Innovative, Versatile, Focused </span>
                team of professionals engaged solely in Designing, Printing, Branding services and related products in the printing world.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We offer a wide range of printing services, including Office and Vehicles branding, banners and Stickers Printing (Large format), 3D and 2D Signage's, Staff ID cards and Other Related Printed Stationers, Fliers, brochures and catalogue-shirts, Uniforms, Caps, Umbrellas Printing (Screen and Embroidery), Tear drops, roll up stands and Other Promotional Items.
              </p>
            </div>

            {/* Customer Support Philosophy */}
            <div className={`bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border border-blue-100 transform transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`} style={{ transitionDelay: '700ms' }}>
              <div className="flex items-start">
                <div className="w-1 h-16 bg-gradient-to-b from-orange-600 to-yellow-600 rounded-full mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">Our Commitment</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Our customer support strategy is based on total, non-compromise customer satisfaction. 
                    We continually strive to offer a complete package of service delivery and support solutions 
                    to meet our customers' needs. We value above all our long-term customer relationships.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;