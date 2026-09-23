import React from 'react';
import { Compass, Mountain, Leaf, Camera, Shield, Landmark } from 'lucide-react';

interface ReasonItem {
  icon: React.ElementType;
  title: string;
  description: string;
}

const REASONS: ReasonItem[] = [
  {
    icon: Compass,
    title: "Alleppey Family Houseboat Stay",
    description:
      "Cruise scenic palm-fringed backwaters together on your 100% private deluxe houseboat. Enjoy child-safe sundecks, fresh family-style meals prepared by your private chef, and unforgettable sunset views."
  },
  {
    icon: Mountain,
    title: "Munnar Misty Tea Hills & Boating",
    description:
      "Cool mountain breezes, gentle tea garden strolls, and pedal boating on Mattupetty Lake. Kids will love the Echo Point shouts and wildlife spotting at Eravikulam National Park."
  },
  {
    icon: Leaf,
    title: "Periyar Wildlife & Elephant Encounters",
    description:
      "Thrilling boat safaris on Periyar Lake to spot wild elephants, gaur, and colorful birds. Families enjoy interactive spice garden walks and feeding gentle elephants in Thekkady."
  },
  {
    icon: Camera,
    title: "Kovalam & Poovar Island Beaches",
    description:
      "Safe, calm shallow waters at Lighthouse Beach and thrilling mangrove motorboat rides to Poovar Golden Sand Beach. Perfect for kids to build sandcastles while parents relax."
  },
  {
    icon: Shield,
    title: "Gentle Pacing & Dedicated Private Cab",
    description:
      "Travel comfortably with your own dedicated private AC vehicle and experienced family chauffeur. Custom breaks, flexible timings, and zero rush for kids and elderly parents."
  },
  {
    icon: Landmark,
    title: "Living Culture & Heritage Experiences",
    description:
      "Introduce your children to centuries of culture with colorful Kathakali performances, Kalaripayattu martial arts shows, and historic Chinese fishing nets in Fort Kochi."
  }
];

export const WhyKerala: React.FC = () => {
  return (
    <section id="itinerary-section" className="py-12 sm:py-16 lg:py-20 bg-[#F6F7F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-[#0B3996] font-bold text-xs sm:text-sm uppercase tracking-[0.2em] inline-block">
            WHY KERALA
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mt-2 tracking-tight">
            6 Reasons Kerala Is Perfect For Family Holidays
          </h2>
          {/* Orange Accent Pill Bar */}
          <div className="w-14 h-1.5 bg-[#FF7A00] rounded-full mx-auto mt-3.5" />
        </div>

        {/* 6 Reasons Cards Grid (3 Columns on Desktop, 2 on Tablet, 1 on Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {REASONS.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-start"
              >
                {/* Icon Container with Amber/Orange tint */}
                <div className="w-12 h-12 rounded-2xl bg-amber-50/90 border border-amber-100 flex items-center justify-center text-amber-500 mb-6 shrink-0">
                  <IconComponent className="w-6 h-6 stroke-[1.8]" />
                </div>

                {/* Card Title */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 tracking-tight">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

// Export as Itinerary as well for backwards compatibility
export const Itinerary = WhyKerala;
export default Itinerary;

// synchronized export
