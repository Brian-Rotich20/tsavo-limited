'use client';
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Menu, X, ShoppingCart, Phone, Mail, MapPin } from 'lucide-react';

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
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

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
        { name: 'Safety Signs', href: '/signage/safety' },
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
        { name: 'Embroidery', href: '/apparel/embroidery' },
        { name: 'Screen Printing', href: '/apparel/screen-printing' },
        { name: 'Reflective Jackets', href: '/apparel/jackets' },
        { name: 'Bag Branding', href: '/apparel/bags' },
        { name: 'Vehicle Branding', href: '/apparel/vehicle' },
      ]
    }
  ];

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
      <div className="bg-gradient-to-r from-gray-100 to-gray-200 text-grey-200 font-semibold py-1 hidden md:block">
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
              <a 
                href="/" 
                className="px-4 py-2 text-sm font-medium text-grey-900 hover:bg-black hover:text-white rounded-md transition-all duration-200"
              >
                Home
              </a>

              {/* Categories Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => handleMouseEnter('categories')}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center px-4 py-2 text-sm font-medium text-grey-900 hover:bg-black hover:text-white rounded-md transition-all duration-200">
                  Our Services
                  <ChevronDown size={16} className="ml-1 transform group-hover:rotate-180 transition-transform duration-200" />
                </button>

                {/* Mega Dropdown Menu */}
                {activeDropdown === 'categories' && (
                  <div className="absolute top-full left-0 mt-1 w-96 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50">
                    <div className="grid grid-cols-2 gap-4 px-4">
                      {categories.map((category) => (
                        <div key={category.name} className="space-y-2">
                          <h3 className="text-sm font-semibold text-gray-800 border-b border-gray-200 pb-1">
                            {category.name}
                          </h3>
                          <ul className="space-y-1">
                            {category.items.map((item) => (
                              <li key={item.name}>
                                <a
                                  href={item.href}
                                  className="block text-xs text-grey-900 hover:bg-black hover:text-white  px-2 py-1 rounded transition-colors duration-150"
                                >
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* About Link */}
              <a 
                href="/about" 
                className="px-4 py-2 text-sm font-medium  text-grey-900 hover:bg-black hover:text-white  rounded-md transition-all duration-200"
              >
                About
              </a>

              {/* Contact Link */}
              <a 
                href="/contact" 
                className="px-4 py-2 text-sm font-medium text-grey-900 hover:bg-black hover:text-white  rounded-md transition-all duration-200"
              >
                Contact
              </a>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-3">
              {/* Get Quote Button */}
              <button className="hidden sm:block px-4 py-2 text-sm font-medium text-white bg-black hover:bg-gray-900 rounded-md transition-all duration-200 shadow-md">
                Feedback
              </button>

              {/* Cart Icon */}
              <button className="relative p-2 text-grey-900 hover:bg-black hover:text-white  rounded-md transition-all duration-200">
                <ShoppingCart size={20} />
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                  0
                </span>
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
        <div className="lg:hidden fixed inset-0  bg-opacity-50 z-40" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-y-0 left-0 w-80 max-w-full bg-white shadow-xl z-50 overflow-y-auto">
          <div className="px-4 py-6">
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
              <button className="w-full mt-3 px-4 py-2 text-sm font-medium text-grey-900 bg-black text-white rounded-md">
              Feedback
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <div className="space-y-1 mb-6">
              <a href="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 rounded-md">
                Home
              </a>
              <a href="/about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 rounded-md">
                About
              </a>
              <a href="/contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 rounded-md">
                Contact
              </a>
            </div>

            {/* Mobile Categories */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">
                Our Services
              </h3>
              {categories.map((category) => (
                <div key={category.name} className="border-b border-gray-100 pb-4 last:border-b-0">
                  <div className="font-medium text-gray-800 bg-gray-50 px-3 py-2 rounded-md mb-2 text-sm">
                    {category.name}
                  </div>
                  <div className="grid grid-cols-1 gap-1 pl-2">
                    {category.items.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-red-600 hover:bg-gray-50 rounded-md transition-colors duration-150"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;