'use client';
import Link from "next/link"
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp, Menu, X, Phone, Mail, MapPin } from 'lucide-react';

interface DropdownItem {
  name: string;
  href: string;
}

interface Category {
  name: string;
  items: DropdownItem[];
}

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Organized categories for better navigation
  const categories: Category[] = [
    {
      name: 'Print Materials',
      items: [
        { name: 'Brochures & Flyers', href: '/print/brochures' },
        { name: 'Business Cards', href: '/print/business-cards' },
        { name: 'Letterheads & Envelopes', href: '/print/letterheads' },
        { name: 'Catalogues & Reports', href: '/print/catalogues' },
        { name: 'Newsletters', href: '/print/newsletters' },
        { name: 'Office Books', href: '/print/office-books' },
      ]
    },
    {
      name: 'Signage & Banners',
      items: [
        { name: 'Rollup Banners', href: '/signage/rollup' },
        { name: 'Road & Outdoor Signs', href: '/signage/road' },
        { name: 'Window Signage', href: '/signage/window' },
        { name: '3D & Lightboxes', href: '/signage/3d' },
        { name: '3D Signs', href: '/signage/signs' },
        { name: 'Wall Posters', href: '/signage/posters' },
      ]
    },
    {
      name: 'Stickers & Labels',
      items: [
        { name: 'Vinyl Stickers', href: '/stickers/vinyl' },
        { name: 'Product Labels', href: '/stickers/labels' },
        { name: 'Can & Tin Labels', href: '/stickers/can-tin' },
        { name: 'ID Tags', href: '/stickers/id-tags' },
        { name: 'Adhesive Prints', href: '/stickers/adhesive' },
      ]
    },
    {
      name: 'Promotional Items',
      items: [
        { name: 'Mugs & Bottles', href: '/promo/mugs' },
        { name: 'Branded Pens', href: '/promo/pens' },
        { name: 'Corporate Gifts', href: '/promo/gifts' },
        { name: 'Event Tickets', href: '/promo/tickets' },
        { name: 'Calendars', href: '/promo/calendars' },
        { name: 'Umbrellas', href: '/promo/umbrellas' },
      ]
    },
    {
      name: 'Apparel & Branding',
      items: [
        { name: 'Screen Printing', href: '/apparel/screen-printing' },
        { name: 'Reflective Jackets', href: '/apparel/jackets' },
        { name: 'Bag Branding', href: '/apparel/bags' },
        { name: 'Vehicle Branding', href: '/apparel/vehicle' },
        { name: 'T-Shirt Printing', href: '/apparel/t-shirts' },
        { name: 'Bottle Branding', href: '/apparel/bottle' },
      ]
    }
  ];

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (categoryName: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(categoryName);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const toggleMobileDropdown = (categoryName: string) => {
    setActiveMobileDropdown(activeMobileDropdown === categoryName ? null : categoryName);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-black text-white font-mono py-1 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone size={14} />
                <span>+254 700 123 456</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={14} />
                <span>info@tsavoprint.co.ke</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={14} />
                <span>Nairobi, Kenya</span>
              </div>
            </div>
            <div className="text-sm">
              <span className="opacity-75">Mon - Fri: 8AM - 6PM | Sat: 9AM - 4PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-lg relative z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="flex flex-col">
                <div className="text-2xl font-bold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
                  Tsavo 
                </div>
                <div className="text-xs text-pink-600 -mt-1 font-medium">
                 Print & E-design Ltd
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {/* Home Link */}
              <Link 
                href="/" 
                className="px-4 py-2 text-sm font-medium text-gray-900 hover:bg-black hover:text-white rounded-md transition-all duration-200"
              >
                Home
              </Link>

              {/* Categories Dropdown */}
              <div 
                className="relative" 
                onMouseEnter={() => handleMouseEnter('categories')}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-900 hover:bg-black hover:text-white rounded-md transition-all duration-200">
                  Our Services
                  <ChevronDown 
                    size={16} 
                    className={`ml-1 transform transition-transform duration-200 ${
                      activeDropdown === 'categories' ? 'rotate-180' : ''
                    }`} 
                  />
                </button>

                {/* Compact Horizontal Mega Dropdown Menu */}
                {activeDropdown === 'categories' && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 w-[800px] bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50">
                    <div className="px-6">
                      <div className="grid grid-cols-5 gap-4">
                        {categories.map((category) => (
                          <div key={category.name} className="space-y-2">
                            <h3 className="text-xs font-semibold text-gray-800 border-b border-gray-200 pb-1">
                              {category.name}
                            </h3>
                            <ul className="space-y-1">
                              {category.items.map((item) => (
                                <li key={item.name}>
                                  <Link
                                    href={item.href}
                                    className="block text-xs text-gray-900 hover:bg-black hover:text-white px-2 py-1 rounded transition-colors duration-150"
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* About Link */}
              <Link 
                href="/about" 
                className="px-4 py-2 text-sm font-medium text-gray-900 hover:bg-black hover:text-white rounded-md transition-all duration-200"
              >
                About
              </Link>

              {/* Contact Link */}
              <Link 
                href="/contact" 
                className="px-4 py-2 text-sm font-medium text-gray-900 hover:bg-black hover:text-white rounded-md transition-all duration-200"
              >
                Contact
              </Link>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-3">
              {/* Get Quote Button */}
              <button className="hidden sm:block px-4 py-2 text-sm font-medium text-white bg-black hover:bg-gray-900 rounded-md transition-all duration-200 shadow-md">
                Feedback
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-red-600 hover:to-orange-500 rounded-md transition-all duration-200"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-opacity-50 z-40" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      {/* Mobile Menu - Moved to right side */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-y-0 right-0 w-80 max-w-full bg-white shadow-xl z-50 overflow-y-auto">
          <div className="px-4 py-6">
            {/* Logo in Mobile Menu */}
            <div className="flex justify-center mb-6 pb-4 border-b border-gray-200">
              <div className="flex flex-col text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
                  Tsavo 
                </div>
                <div className="text-xs text-pink-600 -mt-1 font-medium">
                 Print & E-design Ltd
                </div>
              </div>
            </div>

            {/* Mobile Contact Info */}
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Phone size={14} />
                  <span>+254 700 123 456</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Mail size={14} />
                  <span>info@tsavoprint.co.ke</span>
                </div>
              </div>
              <button className="w-full mt-3 px-4 py-2 text-sm font-medium text-white bg-black rounded-md">
                Feedback
              </button>
            </div>

            {/* Mobile Navigation Links with Dividers */}
            <div className="space-y-1 mb-6">
              <Link 
                href="/" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <div className="border-t border-gray-200 my-2"></div>
              
              <Link 
                href="/about" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <div className="border-t border-gray-200 my-2"></div>

              {/* OUR CATEGORIES Section */}
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-800 px-3 py-2">
                  OUR CATEGORIES
                </h3>
                {categories.map((category) => (
                  <div key={category.name} className="border-b border-gray-100 pb-2 last:border-b-0">
                    <button
                      onClick={() => toggleMobileDropdown(category.name)}
                      className="w-full flex items-center justify-between px-3 py-2 text-left text-base font-medium text-gray-700 hover:bg-gray-100 rounded-md"
                    >
                      {category.name}
                      {activeMobileDropdown === category.name ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      )}
                    </button>
                    
                    {activeMobileDropdown === category.name && (
                      <div className="ml-4 mt-2 space-y-1">
                        {category.items.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-red-600 hover:bg-gray-50 rounded-md transition-colors duration-150"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="border-t border-gray-200 my-2"></div>
              
              <Link 
                href="/contact" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;