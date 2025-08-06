"use client"

import { CheckCircle, Layers, MonitorSmartphone, RefreshCcw, Award } from "lucide-react"

export default function Belief() {
  const services = [
    {
      title: "BULK PRINTING",
      icon: <Layers className="w-8 h-8" />,
      description: "We design and print in bulk. We assess the volume of work and set a clear deadline for the production and delivery",
    },
    {
      title: "COMPETITIVE DESIGN",
      icon: <MonitorSmartphone className="w-8 h-8" />,
      description: "We have creative design ideas within our company because we invest in research and trends to give you an edge in the market",
    },
    {
      title: "QUICK TURNAROUND",
      icon: <RefreshCcw className="w-8 h-8" />,
      description: "We have quick turn around times for projects that we handle. Once we get your approval, we ensure your timeliness are met",
    },
    {
      title: "QUALITY",
      icon: <Award className="w-8 h-8" />,
      description: "Our process of work handling and production at Tsavol Print ensures quality work is produced",
    },
  ]

  return (
    <section className="py-20 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Left side - Services */}
        <div className="space-y-8">
          {services.map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="bg-gradient-to-br from-blue-900 to-purple-700 text-white p-3 rounded-full">
                {item.icon}
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase">{item.title}</h4>
                <p className="text-sm mt-1 text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right side - Belief, Mission, Vision, Values */}
        <div className="bg-green-900 text-white p-8 rounded-xl space-y-8">
          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold"><CheckCircle className="w-5 h-5" /> Our Belief</h3>
            <p className="text-sm mt-2 leading-relaxed">
              We believe that your business is our business and that if you grow, we grow together.
              That philosophy is at the center of everything we do. It is why we work hard to deliver
              the highest quality products and services on time and within budget. It is why we strive
              to provide all our customers with first class service each and every day. We love what we do.
              There is no greater satisfaction than delivering a finished product that helps our client
              reach their goals and objectives. Every day we take ownership of our customers projects and
              see them through from concept to completion. It is an exciting and rewarding process.
            </p>
          </div>

          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold"><CheckCircle className="w-5 h-5" /> Our Mission</h3>
            <p className="text-sm mt-2">
              Our mission is to provide you with the highest quality products and services possible in a timely fashion at a competitive price.
            </p>
          </div>

          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold"><CheckCircle className="w-5 h-5" /> Our Vision</h3>
            <p className="text-sm mt-2">
              To be a Standout one stop; Designing, Printing, Advertising and Branding enterprise by creating a superior client experience.
            </p>
          </div>

          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold"><CheckCircle className="w-5 h-5" /> Our Core Values</h3>
            <ul className="list-disc list-inside text-sm mt-2 space-y-1">
              <li>Honesty and Integrity</li>
              <li>Commitment</li>
              <li>Innovation</li>
              <li>Inspire</li>
              <li>Teamwork</li>
              <li>Corporate Social Responsibility</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
