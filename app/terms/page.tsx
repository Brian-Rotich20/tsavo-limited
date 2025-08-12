"use client";

import { ArrowLeft, FileText, Scale } from "lucide-react";
import Link from "next/link";

export default function terms() {
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
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Scale className="w-4 h-4 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Terms and Conditions</h1>
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
              <h2 className="text-xl font-semibold mb-4 text-gray-900">1. Agreement to Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                By accessing and using Tsavol Print Limited services, you accept and agree to be bound by these Terms and Conditions. 
                If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">2. Services</h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                Tsavol Print Limited provides printing and design services including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-1">
                <li>Business cards, flyers, and marketing materials</li>
                <li>Banners and signage</li>
                <li>Custom design services</li>
                <li>Digital and offset printing</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">3. Orders and Payment</h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                All orders are subject to acceptance by Tsavol Print Limited. Payment terms are as follows:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-1">
                <li>50% deposit required for all custom orders</li>
                <li>Full payment required before delivery</li>
                <li>Prices are subject to change without notice</li>
                <li>Additional charges may apply for rush orders</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">4. File Requirements</h2>
              <p className="text-gray-600 leading-relaxed">
                Customers are responsible for providing print-ready files. We accept AI, PSD, PDF, JPG, and PNG formats. 
                Additional design fees may apply for file corrections or modifications.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">5. Delivery and Returns</h2>
              <p className="text-gray-600 leading-relaxed">
                Standard delivery is 2-5 business days. Rush orders available with additional fees. 
                Returns accepted only for defective products within 48 hours of delivery.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">6. Liability</h2>
              <p className="text-gray-600 leading-relaxed">
                Our liability is limited to the cost of reprinting defective items. We are not responsible for 
                consequential damages, lost profits, or delays beyond our control.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">7. Contact Information</h2>
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