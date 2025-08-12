"use client";

import { Phone, Mail, MapPin, Clock, Send, MessageCircle, ChevronDown, User, Headphones, Award } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiry: '',
    message: ''
  });

  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const inquiryTypes = [
    "Printing Services",
    "Design Services", 
    "Business Cards",
    "Banners & Signage",
    "Marketing Materials",
    "Custom Quote",
    "Other"
  ];

  const faqs = [
    {
      question: "What printing services do you offer?",
      answer: "We offer business cards, flyers, banners, signage, marketing materials, and custom printing solutions for all your business needs."
    },
    {
      question: "How long does it take to complete a project?",
      answer: "Standard projects take 2-5 business days. Rush orders can be completed in 24-48 hours with additional fees."
    },
    {
      question: "Do you provide design services?",
      answer: "Yes! Our creative team provides professional design services for all printing materials, logos, and branding packages."
    },
    {
      question: "What file formats do you accept?",
      answer: "We accept AI, PSD, PDF, JPG, PNG files. Our team can also work with your existing brand guidelines."
    }
  ];

  const team = [
    {
      name: "David Kimani",
      role: "Creative Director",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      available: true,
      status: "Currently designing"
    },
    {
      name: "Grace Mwangi", 
      role: "Print Specialist",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face",
      available: true,
      status: "On a client call"
    },
    {
      name: "Peter Mutua",
      role: "Customer Success",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face", 
      available: false,
      status: "Away"
    }
  ];

  const communicationOptions = [
    {
      icon: "📞",
      label: "Voice Call",
      action: "tel:+254794788684",
      color: "bg-blue-500"
    },
    {
      icon: "💬",
      label: "WhatsApp",
      action: "https://wa.me/254794788684",
      color: "bg-green-500"
    },
    {
      icon: "✉️",
      label: "Email",
      action: "mailto:info@tsavolprintlimited.co.ke",
      color: "bg-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-900 via-red-600 to-orange-600 text-white">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              Let's Create Something Amazing Together
            </h1>
            <p className="text-orange-100 max-w-2xl mx-auto">
              Get in touch with our expert team. We're here to bring your vision to life.
            </p>
          </div>

          {/* Team Members */}
          <div className="flex justify-center items-center gap-6 mb-8">
            <div className="text-center">
              <div className="flex -space-x-3 justify-center mb-3">
                {team.map((member, idx) => (
                  <div key={idx} className="relative">
                    <img 
                      src={member.avatar} 
                      alt={member.name}
                      className="w-12 h-12 rounded-full border-3 border-white shadow-lg"
                    />
                    {member.available && (
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                ))}
              </div>
              <p className="text-sm text-orange-100">Our team is online and ready to help</p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
            <div className="text-center">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Award className="w-5 h-5" />
              </div>
              <div className="text-lg font-bold">500+</div>
              <div className="text-xs text-orange-100">Projects</div>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Clock className="w-5 h-5" />
              </div>
              <div className="text-lg font-bold">24h</div>
              <div className="text-xs text-orange-100">Rush Orders</div>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Headphones className="w-5 h-5" />
              </div>
              <div className="text-lg font-bold">24/7</div>
              <div className="text-xs text-orange-100">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6 border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
                <h2 className="text-xl font-semibold">Start Your Project</h2>
              </div>

              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none"
                      placeholder="+254 7XX XXX XXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Service Needed *
                    </label>
                    <select
                      name="inquiry"
                      value={formData.inquiry}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none"
                    >
                      <option value="">Select a service</option>
                      {inquiryTypes.map((type, idx) => (
                        <option key={idx} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none resize-none"
                    placeholder="Tell us about your project, timeline, and any specific requirements..."
                  ></textarea>
                </div>

                <div
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white py-2.5 px-5 rounded-lg font-medium hover:from-red-700 hover:to-orange-700 transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Frequently Asked Questions</h3>
              <div className="space-y-3">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="bg-white rounded-lg border">
                    <button
                      onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                      className="w-full px-4 py-3 text-left flex justify-between items-center hover:bg-gray-50"
                    >
                      <span className="font-medium text-sm">{faq.question}</span>
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform ${
                          openFAQ === idx ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    {openFAQ === idx && (
                      <div className="px-4 pb-3">
                        <p className="text-sm text-gray-600">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-6">
            {/* Contact Details */}
            <div className="bg-white rounded-xl shadow-sm p-6 border">
              <h3 className="font-semibold mb-4">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="text-sm">
                    <div className="font-medium text-gray-900">Call Us</div>
                    <div className="text-gray-600">+254 794 788 684</div>
                    <div className="text-gray-600">+254 782 788 684</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-green-600" />
                  </div>
                  <div className="text-sm">
                    <div className="font-medium text-gray-900">Email</div>
                    <div className="text-gray-600">info@tsavolprintlimited.co.ke</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-red-600" />
                  </div>
                  <div className="text-sm">
                    <div className="font-medium text-gray-900">Visit Us</div>
                    <div className="text-gray-600">Amkay Plaza Mezzanine Floor</div>
                    <div className="text-gray-600">Suite M2 No.2, Mombasa</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-purple-600" />
                  </div>
                  <div className="text-sm">
                    <div className="font-medium text-gray-900">Hours</div>
                    <div className="text-gray-600">Mon-Fri: 8AM-6PM</div>
                    <div className="text-gray-600">Saturday: 9AM-4PM</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Communication Options */}
            <div className="bg-white rounded-xl shadow-sm p-6 border">
              <h3 className="font-semibold mb-4">Get In Touch Now</h3>
              <div className="space-y-3">
                {communicationOptions.map((option, idx) => (
                  <a 
                    key={idx}
                    href={option.action}
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                  >
                    <div className={`w-8 h-8 ${option.color} rounded-lg flex items-center justify-center text-white text-sm flex-shrink-0`}>
                      {option.icon}
                    </div>
                    <div className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                      {option.label}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Active Team Members */}
            <div className="bg-white rounded-xl shadow-sm p-6 border">
              <h3 className="font-semibold mb-4">Team Status</h3>
              <div className="space-y-3">
                {team.map((member, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="relative">
                      <img 
                        src={member.avatar} 
                        alt={member.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
                        member.available ? 'bg-green-400' : 'bg-gray-400'
                      }`}></div>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm">{member.name}</div>
                      <div className="text-xs text-gray-500">{member.role}</div>
                      <div className={`text-xs ${member.available ? 'text-green-600' : 'text-gray-400'}`}>
                        {member.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Action */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-6 text-white">
              <h3 className="font-semibold mb-2">Need Urgent Help?</h3>
              <p className="text-sm text-orange-100 mb-4">
                Call us directly for immediate assistance
              </p>
              <a 
                href="tel:+254794788684"
                className="block bg-white text-orange-600 text-center py-2 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors text-sm"
              >
                Call Now: +254 794 788 684
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}