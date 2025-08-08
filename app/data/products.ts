export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  features: string[];
  pricing?: string;
  specifications?: string[];
}

export const products: Product[] = [
  // Print Materials
  {
    id: 'brochures',
    name: 'Brochures & Flyers',
    category: 'print',
    image: '/brochure1.jpg',
    description: 'High-quality brochures and flyers designed to showcase your business, products, or services. Perfect for marketing campaigns, trade shows, and promotional activities.',
    features: [
      'Full Color CMYK Printing',
      'Various Paper Types (Glossy, Matt, Textured)',
      'Custom Sizes Available',
      'Single or Double Sided',
      'Fast Turnaround Time',
      'Professional Design Support'
    ],
    specifications: [
      'Paper Weight: 150gsm - 300gsm',
      'Sizes: A4, A5, A6, DL, Custom',
      'Finish: Glossy, Matt, Satin',
      'Quantity: 100 - 10,000+'
    ],
    pricing: 'Starting from KSH 15 per piece'
  },
  {
    id: 'business-cards',
    name: 'Business Cards',
    category: 'print',
    image: '/business-cards1.jpg',
    description: 'Premium business cards that make a lasting first impression. Choose from various finishes and premium paper stocks to reflect your professional brand.',
    features: [
      'Premium Paper Stock',
      'Multiple Finish Options',
      'Standard & Custom Sizes',
      'Single or Double Sided',
      'Embossed & Foil Options',
      'Quick 24-48hr Delivery'
    ],
    specifications: [
      'Standard Size: 85mm x 55mm',
      'Paper Weight: 300gsm - 400gsm',
      'Finish: Matt, Glossy, Velvet',
      'Minimum Order: 100 pieces'
    ],
    pricing: 'Starting from KSH 8 per card'
  },
  {
    id: 'letterheads',
    name: 'Letterheads & Envelopes',
    category: 'print',
    image: '/letterheads.jpg',
    description: 'Professional letterheads and matching envelopes to enhance your corporate identity and business communications.',
    features: [
      'Corporate Branding Integration',
      'Premium Paper Quality',
      'Matching Envelope Sets',
      'Watermark Options',
      'Multiple Color Options',
      'Bulk Ordering Available'
    ],
    specifications: [
      'Letterhead: A4 (210mm x 297mm)',
      'Envelope: DL, C5, C4 sizes',
      'Paper: 80gsm - 120gsm',
      'Colors: Full CMYK + Pantone'
    ],
    pricing: 'Starting from KSH 25 per set'
  },
  {
    id: 'catalogues',
    name: 'Catalogues & Reports',
    category: 'print',
    image: '/reports.jpg',
    description: 'Professional catalogues, annual reports, and corporate publications with perfect binding and high-quality finishes.',
    features: [
      'Perfect Binding Available',
      'Saddle Stitching Options',
      'Full Color Interior Pages',
      'Laminated Covers',
      'Various Page Counts',
      'Professional Layout Support'
    ],
    specifications: [
      'Sizes: A4, A5, Square formats',
      'Pages: 8 - 200+ pages',
      'Cover: 250gsm - 350gsm',
      'Interior: 90gsm - 150gsm'
    ],
    pricing: 'Starting from KSH 150 per catalogue'
  },
  {
    id: 'newsletters',
    name: 'Newsletters',
    category: 'print',
    image: '/newsletter.jpg',
    description: 'Engaging newsletters to keep your audience informed and connected with your brand, events, and updates.',
    features: [
      'Multiple Layout Options',
      'Full Color Printing',
      'Various Folding Styles',
      'Bulk Distribution Ready',
      'Regular Printing Schedules',
      'Content Design Support'
    ],
    specifications: [
      'Sizes: A4, A3, Tabloid',
      'Pages: 4 - 16 pages',
      'Paper: 80gsm - 120gsm',
      'Folding: Bi-fold, Tri-fold, Z-fold'
    ],
    pricing: 'Starting from KSH 35 per newsletter'
  },
  {
    id: 'office-books',
    name: 'Office Books',
    category: 'print',
    image: '/office-books.jpg',
    description: 'Custom office stationery including receipt books, invoice books, delivery notes, and other business forms.',
    features: [
      'Duplicate & Triplicate Copies',
      'Perforated Pages',
      'Sequential Numbering',
      'Custom Branding',
      'Various Binding Options',
      'Waterproof Options'
    ],
    specifications: [
      'Sizes: A4, A5, A6',
      'Pages: 50 - 200 sets',
      'Paper: NCR (No Carbon Required)',
      'Binding: Wire-O, Perfect'
    ],
    pricing: 'Starting from KSH 120 per book'
  },

  // Signage & Banners
  {
    id: 'rollup',
    name: 'Rollup Banners',
    category: 'signage',
    image: '/roll.jpg',
    description: 'Portable and professional rollup banners perfect for trade shows, events, retail displays, and promotional activities.',
    features: [
      'Lightweight Aluminum Base',
      'Easy Setup & Takedown',
      'High-Resolution Printing',
      'Durable Vinyl Material',
      'Retractable Mechanism',
      'Carrying Case Included'
    ],
    specifications: [
      'Standard Sizes: 80cm, 85cm, 100cm, 120cm wide',
      'Height: Up to 200cm',
      'Material: PVC Vinyl 440gsm',
      'Base: Aluminum with chrome feet'
    ],
    pricing: 'Starting from KSH 3,500 per banner'
  },
  {
    id: 'road',
    name: 'Road & Outdoor Signs',
    category: 'signage',
    image: '/road-signage1.jpg',
    description: 'Weather-resistant outdoor signage for roads, parking, directional signs, and permanent outdoor installations.',
    features: [
      'Weather Resistant Materials',
      'UV Protected Printing',
      'Reflective Options Available',
      'Custom Shapes & Sizes',
      'Mounting Hardware Included',
      'Long-lasting Durability'
    ],
    specifications: [
      'Materials: Aluminum, ACM, PVC',
      'Thickness: 3mm - 6mm',
      'Sizes: Custom dimensions',
      'Mounting: Posts, walls, stands'
    ],
    pricing: 'Starting from KSH 2,800 per sq meter'
  },
  {
    id: 'window',
    name: 'Window Signage',
    category: 'signage',
    image: '/window.jpg',
    description: 'Eye-catching window graphics, decals, and signage to attract customers and promote your business from storefront windows.',
    features: [
      'Removable & Permanent Options',
      'One-way Vision Available',
      'Custom Cut Shapes',
      'Full Color Graphics',
      'Easy Application',
      'Fade Resistant Inks'
    ],
    specifications: [
      'Materials: Vinyl, Perforated vinyl',
      'Sizes: Custom to window dimensions',
      'Adhesive: Removable or permanent',
      'Finish: Glossy, matt, frosted'
    ],
    pricing: 'Starting from KSH 800 per sq meter'
  },
  {
    id: '3d',
    name: '3D & Lightboxes',
    category: 'signage',
    image: '/3d-sign.jpg',
    description: 'Illuminated lightbox signs and dimensional 3D lettering for maximum visibility and professional brand presentation.',
    features: [
      'LED Illumination',
      'Dimensional Lettering',
      'Acrylic & Metal Options',
      'Energy Efficient LEDs',
      'Weather Resistant',
      'Remote Control Options'
    ],
    specifications: [
      'Light Source: LED strips/modules',
      'Materials: Acrylic, aluminum, stainless steel',
      'Thickness: 10mm - 50mm letters',
      'Power: 12V/24V LED systems'
    ],
    pricing: 'Starting from KSH 8,500 per sq meter'
  },
   {
    id: 'signs',
    name: '3D & Lightboxes',
    category: 'signage',
    image: '/3dsign.jpg',
    description: 'Illuminated lightbox signs and dimensional 3D lettering for maximum visibility and professional brand presentation.',
    features: [
      'LED Illumination',
      'Dimensional Lettering',
      'Acrylic & Metal Options',
      'Energy Efficient LEDs',
      'Weather Resistant',
      'Remote Control Options'
    ],
    specifications: [
      'Light Source: LED strips/modules',
      'Materials: Acrylic, aluminum, stainless steel',
      'Thickness: 10mm - 50mm letters',
      'Power: 12V/24V LED systems'
    ],
    pricing: 'Starting from KSH 8,500 per sq meter'
  },
  {
    id: 'posters',
    name: 'Wall Posters',
    category: 'signage',
    image: '/wall-posters.jpeg',
    description: 'Large format wall posters for advertising, decoration, events, and promotional campaigns with vibrant colors and sharp details.',
    features: [
      'Large Format Printing',
      'Vibrant Color Reproduction',
      'Various Paper Types',
      'Lamination Options',
      'Custom Sizes Available',
      'Indoor & Outdoor Options'
    ],
    specifications: [
      'Sizes: A0, A1, A2, A3, custom',
      'Materials: Photo paper, canvas, vinyl',
      'Resolution: Up to 1440dpi',
      'Finish: Glossy, matt, satin'
    ],
    pricing: 'Starting from KSH 650 per sq meter'
  },

  // Stickers & Labels
  {
    id: 'vinyl',
    name: 'Vinyl Stickers',
    category: 'stickers',
    image: '/images/products/vinyl-stickers.jpg',
    description: 'Durable vinyl stickers perfect for outdoor use, vehicle decals, promotional stickers, and long-lasting applications.',
    features: [
      'Weather Resistant',
      'UV Protected Inks',
      'Strong Adhesive',
      'Custom Shapes & Sizes',
      'Kiss-cut or Die-cut',
      'Lamination Available'
    ],
    specifications: [
      'Material: High-grade vinyl',
      'Thickness: 0.1mm - 0.2mm',
      'Adhesive: Permanent or removable',
      'Finish: Glossy, matt, transparent'
    ],
    pricing: 'Starting from KSH 25 per piece'
  },
  {
    id: 'labels',
    name: 'Product Labels',
    category: 'stickers',
    image: '/images/products/product-labels.jpg',
    description: 'Professional product labels for packaging, branding, ingredients, barcodes, and product information.',
    features: [
      'Food Safe Materials',
      'Barcode Compatible',
      'Various Adhesives',
      'Roll or Sheet Format',
      'Sequential Numbering',
      'Tamper Evident Options'
    ],
    specifications: [
      'Materials: Paper, vinyl, polyester',
      'Sizes: Custom to requirements',
      'Adhesive: Permanent, removable, repositionable',
      'Format: Rolls, sheets, individual'
    ],
    pricing: 'Starting from KSH 5 per label'
  },
  {
    id: 'can-tin',
    name: 'Can & Tin Labels',
    category: 'stickers',
    image: '/images/products/can-tin-labels.jpg',
    description: 'Specialized labels for metal containers, cans, and tins with strong adhesion and moisture resistance.',
    features: [
      'Metal Surface Adhesion',
      'Moisture Resistant',
      'Food Grade Materials',
      'Temperature Resistant',
      'Conformable to Curves',
      'High Tack Adhesive'
    ],
    specifications: [
      'Materials: Vinyl, polyester, paper',
      'Temperature range: -40°C to +150°C',
      'Adhesive: High-tack permanent',
      'Finish: Glossy, matt, clear'
    ],
    pricing: 'Starting from KSH 12 per label'
  },
  {
    id: 'id-tags',
    name: 'ID Tags',
    category: 'stickers',
    image: '/images/products/id-tags.jpg',
    description: 'Professional ID tags and badges for events, employees, visitors, and identification purposes with various attachment options.',
    features: [
      'Durable Materials',
      'Various Attachment Options',
      'Waterproof Versions',
      'QR Code Compatible',
      'Security Features',
      'Custom Shapes Available'
    ],
    specifications: [
      'Materials: PVC, paper, synthetic',
      'Sizes: Credit card, custom sizes',
      'Attachments: Lanyards, clips, pins',
      'Features: Magnetic strips, RFID options'
    ],
    pricing: 'Starting from KSH 35 per tag'
  },
  {
    id: 'adhesive',
    name: 'Adhesive Prints',
    category: 'stickers',
    image: '/images/products/adhesive-prints.jpg',
    description: 'Custom adhesive prints for any surface including walls, floors, vehicles, and equipment with permanent or removable options.',
    features: [
      'Surface Specific Adhesives',
      'Removable Options',
      'Contour Cutting',
      'Large Format Available',
      'Multi-surface Compatible',
      'Easy Application'
    ],
    specifications: [
      'Materials: Vinyl, polyester, paper',
      'Sizes: Small decals to large graphics',
      'Adhesive: Surface-specific formulations',
      'Application: Wet or dry'
    ],
    pricing: 'Starting from KSH 150 per sq meter'
  },

  // Promotional Items
  {
    id: 'mugs',
    name: 'Mugs & Bottles',
    category: 'promo',
    image: '/images/products/mugs-bottles.jpg',
    description: 'Custom branded mugs, water bottles, and drinkware perfect for corporate gifts, events, and promotional campaigns.',
    features: [
      'Full Color Printing',
      'Various Materials Available',
      'Dishwasher Safe Options',
      'Custom Packaging',
      'Bulk Order Discounts',
      'Fast Production Times'
    ],
    specifications: [
      'Mugs: Ceramic, stainless steel, plastic',
      'Bottles: Aluminum, stainless steel, glass',
      'Capacity: 200ml - 1000ml',
      'Printing: Sublimation, screen print, laser'
    ],
    pricing: 'Starting from KSH 280 per piece'
  },
  {
    id: 'pens',
    name: 'Branded Pens',
    category: 'promo',
    image: '/images/products/branded-pens.jpg',
    description: 'Custom branded pens including ballpoint, gel, and premium pens for corporate gifts and promotional giveaways.',
    features: [
      'Various Pen Types',
      'Multiple Color Options',
      'Laser Engraving Available',
      'Gift Box Packaging',
      'Bulk Ordering',
      'Quick Turnaround'
    ],
    specifications: [
      'Types: Ballpoint, gel, rollerball, fountain',
      'Materials: Plastic, metal, wood',
      'Colors: Wide range available',
      'Imprint: Screen print, laser, pad print'
    ],
    pricing: 'Starting from KSH 45 per pen'
  },
  {
    id: 'gifts',
    name: 'Corporate Gifts',
    category: 'promo',
    image: '/images/products/corporate-gifts.jpg',
    description: 'Premium corporate gifts including desk accessories, tech items, and executive gifts for clients and employees.',
    features: [
      'Premium Quality Items',
      'Custom Packaging',
      'Laser Engraving',
      'Gift Wrapping Services',
      'Bulk Discounts',
      'Corporate Catalogs'
    ],
    specifications: [
      'Categories: Tech, desk items, apparel, bags',
      'Customization: Embossing, engraving, printing',
      'Packaging: Gift boxes, bags, wrapping',
      'MOQ: Varies by item'
    ],
    pricing: 'Starting from KSH 350 per gift'
  },
  {
    id: 'tickets',
    name: 'Event Tickets',
    category: 'promo',
    image: '/images/products/event-tickets.jpg',
    description: 'Professional event tickets with security features, sequential numbering, and custom designs for concerts, conferences, and events.',
    features: [
      'Sequential Numbering',
      'Perforated Stubs',
      'Security Features',
      'Custom Designs',
      'Various Paper Stocks',
      'Barcode Integration'
    ],
    specifications: [
      'Sizes: Standard and custom',
      'Security: Watermarks, UV inks, holograms',
      'Numbering: Sequential, random',
      'Finishing: Perforation, lamination'
    ],
    pricing: 'Starting from KSH 18 per ticket'
  },
  {
    id: 'calendars',
    name: 'Calendars',
    category: 'promo',
    image: '/images/products/calendars.jpg',
    description: 'Custom branded calendars including wall, desk, and pocket calendars for year-round brand visibility and utility.',
    features: [
      'Multiple Calendar Types',
      'High-Quality Photography',
      'Custom Layouts',
      'Wire-O Binding',
      'Branded Holidays',
      'Bulk Production'
    ],
    specifications: [
      'Types: Wall, desk, pocket, magnetic',
      'Sizes: A4, A3, A5, custom',
      'Binding: Wire-O, saddle stitch, perfect',
      'Paper: 150gsm - 300gsm'
    ],
    pricing: 'Starting from KSH 280 per calendar'
  },
  {
    id: 'umbrellas',
    name: 'Umbrellas',
    category: 'promo',
    image: '/umbrella.jpeg',
    description: 'Custom branded umbrellas for promotional giveaways, corporate gifts, and outdoor events with full-color printing options.',
    features: [
      'Full Color Printing',
      'Various Sizes Available',
      'Automatic Open/Close',
      'UV Protection',
      'Wind Resistant',
      'Custom Packaging'
    ],
    specifications: [
      'Sizes: Compact, golf, beach umbrellas',
      'Printing: Sublimation, screen print',
      'Features: Auto open, windproof, UV coating',
      'Handle: Wood, plastic, rubber'
    ],
    pricing: 'Starting from KSH 850 per umbrella'
  },

  // Apparel & Branding

  {
    id: 'screen-printing',
    name: 'Screen Printing',
    category: 'apparel',
    image: '/images/products/screen-printing.jpg',
    description: 'High-quality screen printing for t-shirts, uniforms, and promotional apparel with vibrant colors and durability.',
    features: [
      'Vibrant Color Reproduction',
      'Durable Inks',
      'Water-based & Plastisol',
      'Large Format Capability',
      'Multiple Garment Types',
      'Bulk Order Efficiency'
    ],
    specifications: [
      'Print size: Up to A3',
      'Colors: Up to 6 colors',
      'Inks: Water-based, plastisol, discharge',
      'Garments: Cotton, polyester, blends'
    ],
    pricing: 'Starting from KSH 85 per piece'
  },
  {
    id: 'jackets',
    name: 'Reflective Jackets',
    category: 'apparel',
    image: '/images/products/reflective-jackets.jpg',
    description: 'High-visibility safety jackets with reflective strips and custom branding for construction, security, and industrial use.',
    features: [
      'High-Visibility Colors',
      'Reflective Tape Strips',
      'Custom Branding Options',
      'Various Sizes Available',
      'Durable Materials',
      'Safety Standard Compliant'
    ],
    specifications: [
      'Standards: ANSI/ISEA 107, EN ISO 20471',
      'Colors: Lime, orange, yellow',
      'Sizes: XS to 5XL',
      'Reflective tape: 2" silver strips'
    ],
    pricing: 'Starting from KSH 680 per jacket'
  },
  {
    id: 'bags',
    name: 'T-shirt Branding',
    category: 'apparel',
    image: '/shirt-branding.jpg',
    description: 'Custom branded shirts others inlcude bags, backpacks, laptop bags, and promotional bags with various printing options.',
    features: [
      'Multiple Bag Types',
      'Various Printing Methods',
      'Eco-Friendly Options',
      'Custom Sizes Available',
      'Bulk Order Discounts',
      'Quality Materials'
    ],
    specifications: [
      'Types: Tote, backpack, laptop, drawstring',
      'Materials: Canvas, polyester, cotton, non-woven',
      'Printing: Screen print, heat transfer, embroidery',
      'Colors: Wide range available'
    ],
    pricing: 'Starting from KSH 145 per bag'
  },
    {
    id: 'bags',
    name: 'T-shirt Branding',
    category: 'apparel',
    image: '/shirt1.jpg',
    description: 'Custom branded shirts others inlcude bags, backpacks, laptop bags, and promotional bags with various printing options.',
    features: [
      'Multiple Bag Types',
      'Various Printing Methods',
      'Eco-Friendly Options',
      'Custom Sizes Available',
      'Bulk Order Discounts',
      'Quality Materials'
    ],
    specifications: [
      'Types: Tote, backpack, laptop, drawstring',
      'Materials: Canvas, polyester, cotton, non-woven',
      'Printing: Screen print, heat transfer, embroidery',
      'Colors: Wide range available'
    ],
    pricing: 'Starting from KSH 145 per bag'
  },
    {
    id: 'bags',
    name: 'T-shirt Branding',
    category: 'apparel',
    image: '/shirt2.jpg',
    description: 'Custom branded shirts others inlcude bags, backpacks, laptop bags, and promotional bags with various printing options.',
    features: [
      'Multiple Bag Types',
      'Various Printing Methods',
      'Eco-Friendly Options',
      'Custom Sizes Available',
      'Bulk Order Discounts',
      'Quality Materials'
    ],
    specifications: [
      'Types: Tote, backpack, laptop, drawstring',
      'Materials: Canvas, polyester, cotton, non-woven',
      'Printing: Screen print, heat transfer, embroidery',
      'Colors: Wide range available'
    ],
    pricing: 'Starting from KSH 145 per bag'
  },
    {
    id: 't-shirts',
    name: 'T-shirt Branding',
    category: 'apparel',
    image: '/shirt3.jpg',
    description: 'Custom branded shirts others inlcude bags, backpacks, laptop bags, and promotional bags with various printing options.',
    features: [
      'Multiple Bag Types',
      'Various Printing Methods',
      'Eco-Friendly Options',
      'Custom Sizes Available',
      'Bulk Order Discounts',
      'Quality Materials'
    ],
    specifications: [
      'Types: Tote, backpack, laptop, drawstring',
      'Materials: Canvas, polyester, cotton, non-woven',
      'Printing: Screen print, heat transfer, embroidery',
      'Colors: Wide range available'
    ],
    pricing: 'Starting from KSH 145 per bag'
  },
  {
    id: 'vehicle',
    name: 'Vehicle Branding',
    category: 'apparel',
    image: '/vehicle-branding.jpg',
    description: 'Professional vehicle wraps, decals, and signage for cars, trucks, and fleet branding with high-quality vinyl graphics.',
    features: [
      'Full & Partial Wraps',
      'High-Quality Vinyl',
      'UV Resistant Inks',
      'Professional Installation',
      'Custom Designs',
      'Fleet Discounts'
    ],
    specifications: [
      'Materials: Cast vinyl, calendered vinyl',
      'Durability: 3-7 years outdoor',
      'Finish: Glossy, matt, textured',
      'Installation: Professional fitting included'
    ],
    pricing: 'Starting from KSH 15,000 per vehicle'
  }
];