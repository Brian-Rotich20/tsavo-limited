'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

const PrintingHeroSection: React.FC = () => {
  // Use a static image path instead of loading from the file system
  const imageData = '/hero3.jpeg'; // Place hero3.jpeg in your public folder

  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-700 via-orange-700 to-orange-500 flex items-center">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1 text-white space-y-6">
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            Tsavol Print Limited
          </h1>
          
          <div className="space-y-3.5">
            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-400 w-6 h-6 flex-shrink-0" />
              <span className="text-xl">Professional Designing & Printing Services</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-400 w-6 h-6 flex-shrink-0" />
              <span className="text-xl">Office and Vehicle Branding Solutions</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-400 w-6 h-6 flex-shrink-0" />
              <span className="text-xl">Large Format Printing & Signage</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-400 w-6 h-6 flex-shrink-0" />
              <span className="text-xl">Custom Uniforms & Promotional Items</span>
            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-8 pt-8">
            <div>
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-xl text-blue-200">Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">200+</div>
              <div className="text-xl text-blue-200">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">5+</div>
              <div className="text-xl text-blue-200">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Right Content Card with Background Image */}
        <div className="flex-1 max-w-xl">
          <div className="bg-white rounded-2xl shadow-2xl p-8 ml-4 lg:ml-12 relative overflow-hidden">
            {/* Background Image */}
            {imageData && (
              <div className="absolute inset-0 opacity-15">
                <img 
                  src={imageData}
                  alt="Professional printing workspace" 
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            
            {/* Content overlay */}
            <div className="relative z-10">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-orange-600 mb-2">
                  Get Your Project Started
                </h2>
              </div>

              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  <strong>Tsavol Print & E-Design Ltd</strong> is a reliable print shop, owned and managed by a{' '}
                  <strong>Reliable, Innovative, Versatile, Focused</strong> team of professionals engaged solely in Designing, Printing, Branding services and related products in the printing world.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  We offer a wide range of printing services, including Office and Vehicles branding, banners and Stickers Printing (Large format), 3D and 2D Signage's, Staff ID cards and Other Related Printed Stationers, Fliers, brochures and catalogue-shirts, Uniforms, Caps, Umbrellas Printing (Screen and Embroidery), Tear drops, roll up stands and Other Promotional Items.
                </p>

                <div className="bg-blue-50 p-4 rounded-lg bg-opacity-90">
                  <h3 className="font-bold text-gray-900 mb-2">Our Commitment</h3>
                  <p className="text-gray-700 text-sm">
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