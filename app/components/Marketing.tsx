'use client';
import Image from 'next/image';

const MarketingCardsSection = () => {
  const cards = [
    {
      id: 1,
      title: "Ballpen Branding",
      description: "Custom branded pens for your business",
      image: "/ballpen-branding1.jpeg",
      category: "Corporate Branding"
    },
    {
      id: 2,
      title: "Bottle Branding",
      description: "Personalized water bottles with your logo",
      image: "/bottle-branding.jpeg",
      category: "Corporate Branding"
    },
    {
      id: 3,
      title: "Catalogue",
      description: "Detailed product or service listings",
      image: "/catalogue.jpeg",
      category: "Business Catalogue"
    },
    
    {
      id: 5,
      title: "Clock Branding",
      description: "Customized clocks with company logos",
      image: "/clock-branding.jpeg",
      category: "Corporate Gifts"
    },
    {
      id: 6,
      title: "Company Reports",
      description: "Professional business documentation",
      image: "/company-reports.jpeg",
      category: "Corporate Printing"
    },
    {
      id: 7,
      title: "Coupons",
      description: "Printed discount or promo vouchers",
      image: "/coupons.jpg",
      category: "Marketing Materials"
    },
    {
      id: 8,
      title: "Catalogs",
      description: "Product showcase in print format",
      image: "/catalogue.jpeg",
      category: "Business Catalogue"
    },
    {
      id: 9,
      title: "Diary & Notebooks Branding",
      description: "Branded diaries for promotional use",
      image: "/diary-branding1.jpeg",
      category: "Corporate Gifts"
    },
    {
      id: 10,
      title: "Event Tickets",
      description: "Printed passes for events and shows",
      image: "/event-tickets.jpg",
      category: "Event Printing"
    },
    {
      id: 11,
      title: "Flash & Keyholders",
      description: "Custom USBs and branded keychains",
      image: "/flash-keyholders2.jpeg",
      category: "Branded Accessories"
    },
    {
      id: 12,
      title: "Mug & Water Bottle Branding",
      description: "Drinkware printed with your logo",
      image: "/mugs.jpeg",
      category: "Corporate Gifts"
    },
    {
      id: 13,
      title: "Picture Frames",
      description: "Custom frames for office or gifts",
      image: "/picture-frame.jpeg",
      category: "Personalized Gifts"
    },
    {
      id: 14,
      title: "Umbrella Branding",
      description: "Rain gear with custom prints",
      image: "/umbrella.jpeg",
      category: "Outdoor Branding"
    },
    {
      id: 15,
      title: "Newsletters",
      description: "Printed updates for your audience",
      image: "/newsletter.jpg",
      category: "Publications"
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