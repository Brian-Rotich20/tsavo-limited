"use client";
import {
  Facebook,
  Twitter,
  Instagram,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Logo */}
        <div className="flex-shrink-0 flex flex-col">
          <div className="text-3xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
            Tsavo
          </div>
          <div className="text-sm text-gray-500 -mt-1">
            Print & E-design Ltd
          </div>
          <p className="text-sm italic text-green-800 font-semibold mt-3">
            Home of Creativity
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-base font-semibold mb-3 text-orange-600">
            Contact Us
          </h3>
          <div className="space-y-2 text-sm">
            <p className="flex items-start gap-2">
              <Phone size={12} className="mt-0.5 flex-shrink-0" />
              <span>
                +254 794 788 684
                <br />
                +254 782 788 684
              </span>
            </p>
            <p className="flex items-start gap-2">
              <MapPin size={12} className="mt-0.5 flex-shrink-0" />
              <span>
                Amkay Plaza Mezzanine Floor, Suite M2 No.2
                <br />
                Behind Nyali Plaza (Cinemax), Mombasa
              </span>
            </p>
            <p className="flex items-start gap-2">
              <Mail size={12} className="mt-0.5 flex-shrink-0" />
              <span>info@tsavolprintlimited.co.ke</span>
            </p>
          </div>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-base font-semibold mb-3 text-orange-600">
            Categories
          </h3>
          <ul className="space-y-1.5 text-sm">
            <li>Marketing Materials</li>
            <li>Business Essentials</li>
            <li>Stickers & Labels</li>
            <li>Banners & Signage</li>
            <li>Promotional Items</li>
            <li>Apparel & Branding</li>
            <li>Specialty Items</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-base font-semibold mb-3 text-orange-600">
            Quick Links
          </h3>
          <ul className="space-y-1.5 text-sm">
            <li>
              <Link href="/faq" className="hover:text-blue-600">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-red-600">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-red-600">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-base font-semibold mb-3 text-blue-900">
            Follow Us
          </h3>
          <div className="flex items-center space-x-3">
            <a
              href="https://facebook.com"
              target="_blank"
              aria-label="Facebook"
              className="text-blue-700 hover:text-blue-900 transition-colors"
            >
              <Facebook size={16} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              aria-label="Twitter"
              className="text-blue-500 hover:text-blue-700 transition-colors"
            >
              <Twitter size={16} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              aria-label="Instagram"
              className="text-pink-600 hover:text-pink-800 transition-colors"
            >
              <Instagram size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-3 text-center text-sm text-gray-600">
        &copy; {new Date().getFullYear()} Tsavo Print & E-Design Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
