'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

const PrintingHeroSection: React.FC = () => {
 
  const imageData = '/hero3.jpeg';

  return (
    <div className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Image - More Visible at Top */}
      <div className="absolute inset-0">
        <img 
          src={imageData}
          alt="Professional printing workspace" 
          className="absolute inset-0 w-full h-full object-cover object-left-top"
        />
        {/* Gradient Overlay - Lighter at top to keep image visible */}
        <div className="absolute inset-0 bg-gradient-to-b from-orange-600/30 via-orange-700/60 to-orange-800/90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800/60 via-orange-700/40 to-orange-600/20"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-8 lg:gap-12 relative z-10 py-8 lg:py-0">
        {/* Left Content */}
        <div className="flex-1 text-white space-y-4 sm:space-y-6 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight drop-shadow-lg">
            Tsavol Print Limited
          </h1>
          
          <div className="space-y-2 sm:space-y-3.5">
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <CheckCircle className="text-green-400 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
              <span className="text-sm sm:text-lg lg:text-xl drop-shadow">Professional Designing & Printing Services</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <CheckCircle className="text-green-400 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
              <span className="text-sm sm:text-lg lg:text-xl drop-shadow">Office and Vehicle Branding Solutions</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <CheckCircle className="text-green-400 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
              <span className="text-sm sm:text-lg lg:text-xl drop-shadow">Large Format Printing & Signage</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <CheckCircle className="text-green-400 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
              <span className="text-sm sm:text-lg lg:text-xl drop-shadow">Custom Uniforms & Promotional Items</span>
            </div>
          </div>

          {/* Stats with Vertical Dividers - Responsive */}
          <div className="flex items-center justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8 pt-6 lg:pt-8">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg">500+</div>
              <div className="text-sm sm:text-lg lg:text-xl text-blue-200 drop-shadow">Projects</div>
            </div>
            
            {/* Vertical Divider */}
            <div className="h-12 sm:h-16 w-px bg-white/40"></div>
            
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg">200+</div>
              <div className="text-sm sm:text-lg lg:text-xl text-blue-200 drop-shadow">Happy Clients</div>
            </div>
            
            {/* Vertical Divider */}
            <div className="h-12 sm:h-16 w-px bg-white/40"></div>
            
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg">5+</div>
              <div className="text-sm sm:text-lg lg:text-xl text-blue-200 drop-shadow">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Right Content Card */}
        <div className="flex-1 w-full max-w-xl lg:max-w-lg xl:max-w-xl">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 sm:p-8 ml-0 lg:ml-4 xl:ml-12 relative overflow-hidden">
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-200"></div>
            </div>
            
            {/* Content */}
            <div className="relative z-10">
              <div className="text-center mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-orange-600 mb-2">
                  Get Your Project Started
                </h2>
                <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full"></div>
              </div>

              <div className="space-y-4 sm:space-y-5">
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  <strong className="text-orange-700">Tsavol Print & E-Design Ltd</strong> is a reliable print shop, owned and managed by a{' '}
                  <strong className="text-orange-700">Reliable, Innovative, Versatile, Focused</strong> team of professionals engaged solely in Designing, Printing, Branding services and related products in the printing world.
                </p>
                
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  We offer a wide range of printing services, including Office and Vehicles branding, banners and Stickers Printing (Large format), 3D and 2D Signage's, Staff ID cards and Other Related Printed Stationers, Fliers, brochures and catalogue-shirts, Uniforms, Caps, Umbrellas Printing (Screen and Embroidery), Tear drops, roll up stands and Other Promotional Items.
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-orange-50 p-4 sm:p-5 rounded-xl border-l-4 border-orange-400">
                  <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">Our Commitment</h3>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                    Our customer support strategy is based on total, non-compromise customer satisfaction. We continually strive to offer a complete package of service delivery and support solutions to meet our customers' needs. We value above all our long-term customer relationships.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintingHeroSection;