// Beliefs.js
"use client"

import { CheckCircle, Layers, MonitorSmartphone, RefreshCcw, Award } from "lucide-react"

export default function Belief() {
  const services = [
    {
      title: "BULK PRINTING",
      icon: <Layers className="w-6 h-6" />,
      description: "We design and print in bulk. We assess the volume of work and set a clear deadline for the production and delivery",
      color: "from-blue-600 to-cyan-600"
    },
    {
      title: "COMPETITIVE DESIGN",
      icon: <MonitorSmartphone className="w-6 h-6" />,
      description: "We have creative design ideas within our company because we invest in research and trends to give you an edge in the market",
      color: "from-purple-600 to-pink-600"
    },
    {
      title: "QUICK TURNAROUND",
      icon: <RefreshCcw className="w-6 h-6" />,
      description: "We have quick turn around times for projects that we handle. Once we get your approval, we ensure your timeliness are met",
      color: "from-green-600 to-emerald-600"
    },
    {
      title: "QUALITY",
      icon: <Award className="w-6 h-6" />,
      description: "Our process of work handling and production at Tsavol Print ensures quality work is produced",
      color: "from-orange-600 to-red-600"
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-slate-800 tracking-wide mb-4">
            What We Stand For
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our foundation is built on strong values and unwavering commitment to excellence
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-start">
          
          {/* Left side - Services */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-slate-800 mb-8">Our Capabilities</h3>
            {services.map((item, index) => (
              <div key={index} className="group flex items-start space-x-6 p-6 rounded-2xl hover:bg-slate-50/80 transition-all duration-300">
                <div className={`bg-gradient-to-br ${item.color} text-white p-4 rounded-2xl shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-slate-800 mb-2">{item.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right side - Company Values */}
          <div className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white p-10 rounded-3xl shadow-2xl relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-20 translate-x-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-16 -translate-x-16"></div>
            
            <div className="relative space-y-10">
              <div>
                <h3 className="flex items-center gap-3 text-xl font-semibold mb-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  Our Belief
                </h3>
                <p className="text-slate-200 leading-relaxed">
                  We believe that your business is our business and that if you grow, we grow together.
                  That philosophy is at the center of everything we do. It is why we work hard to deliver
                  the highest quality products and services on time and within budget. It is why we strive
                  to provide all our customers with first class service each and every day. We love what we do.
                  There is no greater satisfaction than delivering a finished product that helps our client
                  reach their goals and objectives. Every day we take ownership of our customers projects and
                  see them through from concept to completion. It is an exciting and rewarding process.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="flex items-center gap-3 text-lg font-semibold mb-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    Our Mission
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Our mission is to provide you with the highest quality products and services possible in a timely fashion at a competitive price.
                  </p>
                </div>

                <div>
                  <h3 className="flex items-center gap-3 text-lg font-semibold mb-3">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    Our Vision
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    To be a Standout one stop; Designing, Printing, Advertising and Branding enterprise by creating a superior client experience.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="flex items-center gap-3 text-lg font-semibold mb-4">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  Our Core Values
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "Honesty and Integrity",
                    "Commitment", 
                    "Innovation",
                    "Inspire",
                    "Teamwork",
                    "Corporate Social Responsibility"
                  ].map((value, index) => (
                    <div key={index} className="flex items-center gap-2 text-slate-300 text-sm">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                      {value}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}