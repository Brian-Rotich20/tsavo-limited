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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Logo Section - Full width on mobile, centered */}
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-8">
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

        {/* Main Content Grid - 2x2 on mobile, 4 columns on large screens */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Contact Info */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-orange-600">
              Contact Us
            </h3>
            <div className="space-y-3 text-sm leading-relaxed">
              <div className="flex items-start gap-3">
                <Phone size={14} className="mt-0.5 flex-shrink-0 text-orange-500" />
                <div>
                  +254 794 788 684
                  <br />
                  +254 782 788 684
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={14} className="mt-0.5 flex-shrink-0 text-orange-500" />
                <div>
                  Amkay Plaza Mezzanine Floor, Suite M2 No.2
                  <br />
                  Behind Nyali Plaza (Cinemax), Mombasa
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={14} className="mt-0.5 flex-shrink-0 text-orange-500" />
                <div>info@tsavolprintlimited.co.ke</div>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-600">
              Categories
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-orange-600 transition-colors cursor-pointer">
                Marketing Materials
              </li>
              <li className="hover:text-orange-600 transition-colors cursor-pointer">
                Business Essentials
              </li>
              <li className="hover:text-orange-600 transition-colors cursor-pointer">
                Stickers & Labels
              </li>
              <li className="hover:text-orange-600 transition-colors cursor-pointer">
                Banners & Signage
              </li>
              <li className="hover:text-orange-600 transition-colors cursor-pointer">
                Promotional Items
              </li>
              <li className="hover:text-orange-600 transition-colors cursor-pointer">
                Apparel & Branding
              </li>
              <li className="hover:text-orange-600 transition-colors cursor-pointer">
                Specialty Items
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-600">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  href="/faq" 
                  className="hover:text-blue-600 transition-colors duration-200"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link 
                  href="/terms" 
                  className="hover:text-red-600 transition-colors duration-200"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link 
                  href="/privacy" 
                  className="hover:text-red-600 transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-900">
              Follow Us
            </h3>
            <div className="flex items-center space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-blue-700 hover:text-blue-900 transition-all duration-200 hover:scale-110"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-blue-500 hover:text-blue-700 transition-all duration-200 hover:scale-110"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-pink-600 hover:text-pink-800 transition-all duration-200 hover:scale-110"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-100 py-4 text-center text-sm text-gray-600 border-t border-gray-200">
        &copy; {new Date().getFullYear()} Tsavo Print & E-Design Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;