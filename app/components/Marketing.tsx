'use client';
import Image from 'next/image';

const MarketingCardsSection = () => {
  // Sample card data - replace with your actual data
  const cards = [
    {
      id: 1,
      title: "Ballpen Branding",
      description: "Premium quality business cards with multiple finish options",
      image: "/ballpen-branding1.jpeg",
      category: "Digital Printing"
    },
    {
      id: 2,
      title: "Bottle Branding",
      description: "Eye-catching brochures for effective marketing campaigns",
      image: "/bottle-branding.jpeg",
      category: "Offset Printing"
    },
    {
      id: 3,
      title: "Catalogue",
      description: "Large format banners for events and promotions",
      image: "/catalogue.jpeg",
      category: "Business Catalogue"
    },
    {
      id: 4,
      title: "Flyers",
      description: "High-impact flyers to boost your promotional activities",
      image: "/api/placeholder/300/200",
      category: "Digital Printing"
    },
    {
      id: 5,
      title: "Clock Branding",
      description: "Vibrant posters that capture attention instantly",
      image: "/clock-branding.jpeg",
      category: "Offset Printing"
    },
    {
      id: 6,
      title: "Company Reports",
      description: "Custom printed t-shirts with premium quality materials",
      image: "/company-reports.jpeg",
      category: "Sublimation Printing"
    },
    {
      id: 7,
      title: "Coupons",
      description: "Personalized mugs perfect for corporate gifts",
      image: "/coupons.jpg",
      category: "Sublimation Printing"
    },
    {
      id: 8,
      title: "Catalogs",
      description: "Professional catalogs to showcase your products",
      image: "/catalogue.jpeg",
      category: "Offset Printing"
    },
    {
      id: 9,
      title: "Diary & Notebooks Branding",
      description: "Professional catalogs to showcase your products",
      image: "/diary-branding1.jpeg",
      category: "Offset Printing"
    },
    {
      id: 10,
      title: "Event Tickets",
      description: "Professional catalogs to showcase your products",
      image: "/event-tickets.jpg",
      category: "Offset Printing"
    },
    {
        id: 10,
        title: "Flash & Keyholders",
        description: "Professional catalogs to showcase your products",
        image: "/flash-keyholders2.jpeg",
        category: "Offset Printing"
    },
        {
      id: 10,
      title: "Mug & Water Bottle Branding",
      description: "Professional catalogs to showcase your products",
      image: "/mugs.jpeg",
      category: "Offset Printing"
    },
        {
      id: 10,
      title: "Picture Frames",
      description: "Professional catalogs to showcase your products",
      image: "/picture-frame.jpeg",
      category: "Offset Printing"
    },
         {
      id: 10,
      title: "Umbrella Branding",
      description: "Professional catalogs to showcase your products",
      image: "/umbrella.jpeg",
      category: "Offset Printing"
    },
     {
      id: 2,
      title: "Newsletters",
      description: "Eye-catching brochures for effective marketing campaigns",
      image: "/newsletter.jpg",
      category: "Offset Printing"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-4 tracking-tight">
            Marketing Materials & Promotional Items
          </h2>
          <p className="text-pink-600 text-lg font-medium">
            Digital Printing | Offset Printing | Sublimation Printing
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">
          {cards.map((card) => (
            <div key={card.id} className="group cursor-pointer">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                {/* Image */}
                <div className="aspect-[4/3] relative">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Content */}
                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-sm font-medium text-gray-900 group-hover:text-gray-600 transition-colors leading-tight">
                      {card.title}
                    </h3>
                    <span className="text-xs text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded-full ml-2 flex-shrink-0">
                      {card.category.split(' ')[0]}
                    </span>
                  </div>
                  <p className="text-gray-600 text-xs leading-relaxed line-clamp-2">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketingCardsSection;