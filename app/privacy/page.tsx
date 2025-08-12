"use client";

import { ArrowLeft, Shield, Eye } from "lucide-react";
import Link from "next/link";

export default function privacy() {
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
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Privacy Policy</h1>
                <p className="text-sm text-gray-600">Last updated: August 13, 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-sm border p-8">
          <div className="prose prose-gray max-w-none">
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">Information We Collect</h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                We collect information you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-1">
                <li>Name, email address, and phone number</li>
                <li>Project details and design specifications</li>
                <li>Payment and billing information</li>
                <li>Communication preferences</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">How We Use Your Information</h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-1">
                <li>Provide printing and design services</li>
                <li>Process payments and fulfill orders</li>
                <li>Communicate about your projects</li>
                <li>Send service updates and promotional materials</li>
                <li>Improve our services and customer experience</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">Information Sharing</h2>
              <p className="text-gray-600 leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. 
                We may share information with trusted partners who assist in operating our business, 
                provided they agree to keep this information confidential.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">Data Security</h2>
              <p className="text-gray-600 leading-relaxed">
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. However, no method of transmission 
                over the internet is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">File Storage</h2>
              <p className="text-gray-600 leading-relaxed">
                Design files and project materials are stored securely for a period of 6 months after 
                project completion for potential reprints. Files are then permanently deleted unless 
                otherwise requested.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">Your Rights</h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-1">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">Contact Us</h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                For questions about this Privacy Policy, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600 mb-2"><strong>Tsavol Print Limited</strong></p>
                <p className="text-gray-600 mb-1">Email: info@tsavolprintlimited.co.ke</p>
                <p className="text-gray-600 mb-1">Phone: +254 794 788 684</p>
                <p className="text-gray-600">Address: Amkay Plaza Mezzanine Floor, Suite M2 No.2, Mombasa</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}