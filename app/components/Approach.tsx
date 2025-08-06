"use client"

import { Monitor, PenTool, BrainCircuit } from "lucide-react"

export default function Approach() {
  const steps = [
    {
      title: "DISCOVERY",
      icon: <Monitor className="w-10 h-10" />,
      description:
        "Our process begins with discovery. We engage you to uncover the truths of your business and your vision for it. And we interview your customers and audit your competitors to understand how your business is perceived today and why.",
    },
    {
      title: "STRATEGY",
      icon: <PenTool className="w-10 h-10" />,
      description:
        "We then create a brand strategy. Your Story Architecture is the foundation of a brand that aligns your message to captivate prospects and turn them into customers and your Message Inventory positions your brand to vanquish your competitors.",
    },
    {
      title: "CREATIVITY",
      icon: <BrainCircuit className="w-10 h-10" />,
      description:
        "Once we refine the interior, animating spirit of your brand, then and only then do we unleash our world-class creative talent to create the external, customer-facing assets that represent your brand.",
    },
  ]

  return (
    <section className="py-20 bg-white text-center">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-medium mb-2">Our Approach</h2>
        <p className="text-xl font-medium text-orange-600">Our approach is geared towards one thing, <span className="font-bold">Efficiency</span></p>

        <div className="mt-16 grid gap-12 sm:grid-cols-1 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-6">
              <div className="bg-gradient-to-r from-orange-700 to-orange-400 text-white rounded-full p-4">
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold tracking-wide">{step.title}</h3>
              <div className="w-12 border-b-4 border-orange-700 rounded-full mb-2"></div>
              <p className="text-sm text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
