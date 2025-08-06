// Goals.js
"use client"

export default function Goals() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-200/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-indigo-200/20 to-transparent rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-light text-slate-800 tracking-wide mb-2">
              Our Goals
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Main Content Card */}
          <div className="flex-1 bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500">
            <h3 className="text-xl md:text-2xl font-bold uppercase text-slate-800 mb-6 leading-tight">
              OUR GOAL IS NOT ONLY TO CREATE BRANDS, BUT TO REVEAL THEM.
            </h3>
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>
                We reveal what your customers love about you — your strengths, your value, your business advantage,
                to capture more customers and hence build trust. You're bringing something great to the world.
                Something that makes customers' lives richer, better and more meaningful.
                We reveal what that something is and then communicate it in a way that engages countless more customers.
                We don't make anything up. Whether you're a well-established company or a brand-new start up,
                the truth is you're bringing something great to the world. Let us reveal your greatness and build your
                business through a perfect storm of smart strategy and beautiful design.
              </p>
              <p>
                People think in pictures and not in words. When a person has an unmet need or desire
                they actually play ideas inside their head and see that need or desire being fulfilled in a certain way.
                Our job is to understand your customers' needs and hence make your brand the star — so that they see you
                as the only one that fulfills their needs and desires.
              </p>
            </div>
          </div>

          {/* Decorative Side Element */}
          <div className="flex-shrink-0 hidden lg:block">
            <div className="w-64 h-64 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-full animate-pulse"></div>
              <div className="absolute inset-4 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full"></div>
              <div className="absolute inset-8 bg-white/40 rounded-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">T</span>
                  </div>
                  <p className="text-slate-600 font-medium">Reveal</p>
                  <p className="text-slate-600 font-medium">Greatness</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}