'use client';
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Menu, X, ShoppingCart } from 'lucide-react';

interface DropdownItem {
  name: string;
  href: string;
}

interface NavItem {
  name: string;
  href?: string;
  dropdown?: DropdownItem[];
}

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const navigationItems: NavItem[] = [
    {
      name: 'Marketing Materials',
      dropdown: [
        { name: 'Brochures', href: '/marketing/brochures' },
        { name: 'Flyers', href: '/marketing/flyers' },
        { name: 'Leaflets', href: '/marketing/leaflets' },
        { name: 'Catalogues', href: '/marketing/catalogues' },
        { name: 'Company Reports', href: '/marketing/reports' },
        { name: 'Newsletters', href: '/marketing/newsletters' },
      ]
    },
    {
      name: 'Business Essentials',
      dropdown: [
        { name: 'Business Cards', href: '/business/cards' },
        { name: 'Letterheads', href: '/business/letterheads' },
        { name: 'Envelopes', href: '/business/envelopes' },
        { name: 'Corporate Books', href: '/business/books' },
        { name: 'Office Books', href: '/business/office-books' },
        { name: 'Desk File Holders', href: '/business/desk-holders' },
      ]
    },
    {
      name: 'Stickers & Labels',
      dropdown: [
        { name: 'Vinyl Stickers', href: '/stickers/vinyl' },
        { name: 'Label Stickers', href: '/stickers/labels' },
        { name: 'Can & Tin Stickers', href: '/stickers/can-tin' },
        { name: 'Adhesive Posters', href: '/stickers/adhesive-posters' },
        { name: 'Adhesive Print & Cuts', href: '/stickers/print-cuts' },
        { name: 'ID Tags', href: '/stickers/id-tags' },
      ]
    },
    {
      name: 'Banners & Signage',
      dropdown: [
        { name: 'Rollup Banners', href: '/banners/rollup' },
        { name: 'Teardrop Banners', href: '/banners/teardrop' },
        { name: 'Road Signage', href: '/banners/road' },
        { name: 'Outdoor Globe Branding', href: '/banners/outdoor-globe' },
        { name: 'Window Signage', href: '/banners/window' },
        { name: '3D Signage', href: '/banners/3d' },
        { name: 'Wall Posters', href: '/banners/wall-posters' },
        { name: 'Safety Signs', href: '/banners/safety' },
        { name: 'Lightboxes', href: '/banners/lightboxes' },
        { name: 'Transparent Signage', href: '/banners/transparent' },
      ]
    },
    {
      name: 'Promotional Items',
      dropdown: [
        { name: 'Mugs & Water Bottles', href: '/promo/mugs-bottles' },
        { name: 'Ball Pen Branding', href: '/promo/pens' },
        { name: 'Clock Branding', href: '/promo/clocks' },
        { name: 'Picture Frames', href: '/promo/frames' },
        { name: 'Flash & Key Holders', href: '/promo/flash-keys' },
        { name: 'Flash/Bottle Branding', href: '/promo/flash-bottles' },
        { name: 'Diary & Notebooks', href: '/promo/diaries' },
        { name: 'Umbrellas', href: '/promo/umbrellas' },
        { name: 'Coupons', href: '/promo/coupons' },
        { name: 'Event Tickets', href: '/promo/tickets' },
      ]
    },
    {
      name: 'Apparel & Branding',
      dropdown: [
        { name: 'Embroidery', href: '/apparel/embroidery' },
        { name: 'Screen Printing', href: '/apparel/screen-printing' },
        { name: 'Woolen Bag Branding', href: '/apparel/bag-branding' },
        { name: 'Backpack Branding', href: '/apparel/backpack' },
        { name: 'Reflective Jackets', href: '/apparel/jackets' },
        { name: 'Corporate Campaigns', href: '/apparel/campaigns' },
      ]
    },
    {
      name: 'Vehicle Branding',
      dropdown: [
        { name: 'Fleet Branding', href: '/vehicle/fleet' },
        { name: 'Partial Vehicle Branding', href: '/vehicle/partial' },
        { name: 'Motorbike Branding', href: '/vehicle/motorbike' },
      ]
    },
    {
      name: 'Specialty Items',
      dropdown: [
        { name: 'Calendars', href: '/specialty/calendars' },
        { name: 'Eulogy', href: '/specialty/eulogy' },
        { name: 'Loyalty Card Stamps', href: '/specialty/loyalty-stamps' },
        { name: 'Portable Notices', href: '/specialty/notices' },
        { name: 'Snapper Frames', href: '/specialty/snapper-frames' },
        { name: 'Packaging', href: '/specialty/packaging' },
      ]
    },
  ];

  const handleMouseEnter = (itemName: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(itemName);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <nav className="bg-white shadow-lg relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex flex-col">
            <div className="text-3xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              Tsavo
            </div>
            <div className="text-xs text-gray-500 -mt-1">
              Print & E-design Ltd
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center px-3 py-2 text-xs font-medium text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-red-600 hover:to-orange-600 rounded-md transition-all duration-200 group">
                  {item.name}
                  {item.dropdown && (
                    <ChevronDown size={14} className="ml-1 transform group-hover:rotate-180 transition-transform duration-200" />
                  )}
                </button>

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-1 z-50">
                    {item.dropdown.map((dropdownItem) => (
                      <a
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className="block px-3 py-1.5 text-xs text-gray-700 hover:bg-gradient-to-r hover:from-red-600 hover:to-orange-600 hover:text-white transition-all duration-200 border-b border-gray-50 last:border-b-0"
                      >
                        {dropdownItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Cart, Contact, Feedback and Mobile Menu Button */}
          <div className="flex items-center space-x-2">
            {/* Contact Button */}
            <button className="hidden sm:block px-3 py-1.5 text-xs font-medium text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-red-600 hover:to-orange-600 rounded-md transition-all duration-200 border border-gray-300">
              Contact
            </button>

            {/* Feedback Button */}
            <button className="hidden sm:block px-3 py-1.5 text-xs font-medium text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-red-600 hover:to-orange-600 rounded-md transition-all duration-200 border border-gray-300">
              Feedback
            </button>

            {/* Cart Icon */}
            <button className="relative p-2 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-red-600 hover:to-orange-600 rounded-md transition-all duration-200">
              <ShoppingCart size={18} />
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-red-600 hover:to-orange-600 rounded-md transition-all duration-200"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-y-0 left-0 w-3/4 bg-white shadow-xl border-r border-gray-200 z-40 overflow-y-auto">
          <div className="px-4 py-6 space-y-3">
            {/* Mobile Contact & Feedback Buttons */}
            <div className="flex space-x-2 mb-4 pb-4 border-b border-gray-200">
              <button className="flex-1 px-3 py-2 text-xs font-medium text-white bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-orange-600 rounded-md transition-all duration-200 border border-transparent">
              Contact
            </button>
              <button className="flex-1 px-3 py-2 text-xs font-medium text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-red-600 hover:to-orange-600 rounded-md transition-all duration-200 border border-gray-300">
                Feedback
              </button>
            </div>

            {navigationItems.map((item) => (
              <div key={item.name} className="border-b border-gray-100 pb-3 last:border-b-0">
                <div className="font-semibold text-gray-800 px-2 py-2 text-sm bg-gray-50 rounded-md mb-2">
                  {item.name}
                </div>
                {item.dropdown && (
                  <div className="pl-3 space-y-1">
                    {item.dropdown.map((dropdownItem) => (
                      <a
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className="block px-3 py-2 text-xs text-gray-600 hover:text-white hover:bg-gradient-to-r hover:from-red-600 hover:to-orange-600 rounded-md transition-all duration-200 border-b border-gray-50 last:border-b-0"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {dropdownItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;