"use client"

export default function Goals() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#0F1B40] to-[#1E5631] text-white">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-start gap-12">
        {/* Left Text Section */}
        <div className="bg-white text-[#0F1B40] p-6 md:p-10 rounded-xl shadow-lg max-w-2xl">
          <h3 className="text-lg font-bold uppercase text-[#1E113D] mb-4">
            OUR GOAL IS NOT ONLY TO CREATE BRANDS, BUT TO REVEAL THEM.
          </h3>
          <p className="text-sm leading-relaxed">
            We reveal what your customers love about you — your strengths, your value, your business advantage,
            to capture more customers and hence build trust. You're bringing something great to the world.
            Something that makes customers' lives richer, better and more meaningful.
            We reveal what that something is and then communicate it in a way that engages countless more customers.
            We don’t make anything up. Whether you're a well-established company or a brand-new start up,
            the truth is you're bringing something great to the world. Let us reveal your greatness and build your
            business through a perfect storm of smart strategy and beautiful design.

            <br /><br />
            People think in pictures and not in words. When a person has an unmet need or desire
            they actually play ideas inside their head and see that need or desire being fulfilled in a certain way.
            Our job is to understand your customers’ needs and hence make your brand the star — so that they see you
            as the only one that fulfills their needs and desires.
          </p>
        </div>

        {/* Right Decorative Section (Optional) */}
        <div className="hidden md:block flex-1 relative">
          {/* Add abstract line art here if needed */}
          {/* You could use SVG or CSS art here */}
          <div className="w-full h-full bg-[url('/abstract-shape.svg')] bg-no-repeat bg-center bg-contain"></div>
        </div>
      </div>

      {/* Section Title */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 text-center">
        <h2 className="text-5xl font-light text-white tracking-wide">Goals</h2>
      </div>
    </section>
  )
}
