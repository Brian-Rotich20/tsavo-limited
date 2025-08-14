import React from 'react';

export default function PrintingHeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-500 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-magenta-500 rounded-full blur-2xl"></div>
        <div className="absolute bottom-32 left-20 w-28 h-28 bg-yellow-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh]">
          
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="block text-gray-900 font-serif tracking-tight">High-Quality</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-yellow-600 to-yellow-700 font-serif tracking-tight">
                  Prints.
                </span>
              </h1>
              
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-300 mx-auto lg:mx-0 rounded-full"></div>
              
              <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-2xl font-light">
                We design and print business cards, banners, bronchures, stickers, and more — with 
                <span className="font-medium text-orange-500"> branding services</span> to support your 
                <span className="font-medium text-orange-500"> digital needs</span>.
              </p>
            </div>
          </div>

          {/* Right Images Container */}
          <div className="lg:w-1/2 mt-12 lg:mt-0 relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Image Container - General.png */}
              <div className="relative mb-8">
                <img 
                  src="general.png" 
                  alt="Printing Services" 
                  className="w-[504px] h-[360px] object-cover "
                />
              </div>

              {/* Paint Splash Image */}
              <div className="absolute -bottom-15 -left-16">
                <img 
                  src="spilled-paint.png" 
                  alt="Paint Splash" 
                  className="w-[340px] h-[183px] object-cover "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}