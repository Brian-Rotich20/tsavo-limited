"use client";

import { ArrowLeft, HelpCircle, ChevronDown, Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function FAQPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      category: "Services",
      questions: [
        {
          question: "What printing services do you offer?",
          answer: "We offer business cards, flyers, banners, signage, marketing materials, brochures, and custom printing solutions for all your business needs."
        },
        {
          question: "Do you provide design services?",
          answer: "Yes! Our creative team provides professional design services for all printing materials, logos, branding packages, and marketing campaigns."
        },
        {
          question: "What file formats do you accept?",
          answer: "We accept AI, PSD, PDF, JPG, PNG files. Our team can also work with your existing brand guidelines and create designs from scratch."
        }
      ]
    },
    {
      category: "Orders & Delivery",
      questions: [
        {
          question: "How long does it take to complete a project?",
          answer: "Standard projects take 2-5 business days. Rush orders can be completed in 24-48 hours with additional fees."
        },
        {
          question: "What are your minimum order quantities?",
          answer: "We accommodate orders from as low as 50 pieces for business cards to large volume orders. Contact us for specific requirements."
        },
        {
          question: "Do you offer delivery services?",
          answer: "Yes, we offer delivery within Mombasa and surrounding areas. Shipping options are available for other locations across Kenya."
        }
      ]
    },
    {
      category: "Pricing & Payment",
      questions: [
        {
          question: "How do you calculate pricing?",
          answer: "Pricing depends on material type, quantity, design complexity, and finishing options. Contact us for a detailed quote."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept cash, mobile money (M-Pesa), bank transfers, and credit/debit cards. 50% deposit required for custom orders."
        },
        {
          question: "Can I get a discount for large orders?",
          answer: "Yes, we offer volume discounts for large quantity orders. The more you print, the better the price per unit."
        }
      ]
    },
    {
      category: "Quality & Returns",
      questions: [
        {
          question: "What if I'm not satisfied with the quality?",
          answer: "We guarantee high-quality prints. If you're not satisfied, we'll reprint your order at no additional cost within 48 hours of delivery."
        },
        {
          question: "Do you offer proofs before printing?",
          answer: "Yes, we provide digital proofs for approval before proceeding with production to ensure accuracy and satisfaction."
        },
        {
          question: "Can I make changes after placing an order?",
          answer: "Changes can be made before production begins. Once printing has started, changes may incur additional charges."
        }
      ]
    }
  ];

  const toggleFAQ = (categoryIndex: number, questionIndex: number) => {
    const uniqueIndex = categoryIndex * 100 + questionIndex;
    setOpenFAQ(openFAQ === uniqueIndex ? null : uniqueIndex);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                <HelpCircle className="w-4 h-4 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h1>
                <p className="text-sm text-gray-600">Find answers to common questions</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* FAQ Content */}
          <div className="lg:col-span-2 space-y-6">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-xl shadow-sm border p-6">
                <h2 className="text-lg font-semibold mb-4 text-gray-900">{category.category}</h2>
                <div className="space-y-3">
                  {category.questions.map((faq, questionIndex) => {
                    const uniqueIndex = categoryIndex * 100 + questionIndex;
                    return (
                      <div key={questionIndex} className="border border-gray-200 rounded-lg">
                        <button
                          onClick={() => toggleFAQ(categoryIndex, questionIndex)}
                          className="w-full px-4 py-3 text-left flex justify-between items-center hover:bg-gray-50 rounded-lg"
                        >
                          <span className="font-medium text-gray-900 text-sm">{faq.question}</span>
                          <ChevronDown 
                            className={`w-4 h-4 text-gray-500 transition-transform flex-shrink-0 ml-2 ${
                              openFAQ === uniqueIndex ? 'rotate-180' : ''
                            }`} 
                          />
                        </button>
                        {openFAQ === uniqueIndex && (
                          <div className="px-4 pb-3">
                            <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h3 className="font-semibold mb-4 text-gray-900">Still Have Questions?</h3>
              <p className="text-sm text-gray-600 mb-4">
                Can't find what you're looking for? Our team is here to help.
              </p>
              
              <div className="space-y-3">
                <a 
                  href="tel:+254794788684"
                  className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <Phone className="w-4 h-4 text-blue-600" />
                  <div className="text-sm">
                    <div className="font-medium text-gray-900">Call Us</div>
                    <div className="text-gray-600">+254 794 788 684</div>
                  </div>
                </a>

                <a 
                  href="mailto:info@tsavolprintlimited.co.ke"
                  className="flex items-center gap-3 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                >
                  <Mail className="w-4 h-4 text-green-600" />
                  <div className="text-sm">
                    <div className="font-medium text-gray-900">Email Us</div>
                    <div className="text-gray-600">info@tsavolprintlimited.co.ke</div>
                  </div>
                </a>

                <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                  <MapPin className="w-4 h-4 text-red-600 mt-0.5" />
                  <div className="text-sm">
                    <div className="font-medium text-gray-900">Visit Us</div>
                    <div className="text-gray-600">Amkay Plaza Mezzanine Floor</div>
                    <div className="text-gray-600">Suite M2 No.2, Mombasa</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl p-6 text-white">
              <h3 className="font-semibold mb-2">Need a Custom Quote?</h3>
              <p className="text-sm text-purple-100 mb-4">
                Get a personalized quote for your printing project
              </p>
              <Link 
                href="/contact"
                className="block bg-white text-purple-600 text-center py-2 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors text-sm"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}