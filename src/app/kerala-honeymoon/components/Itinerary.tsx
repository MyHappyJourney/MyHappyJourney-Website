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
    title: "Private Houseboat Cruises",
    description:
      "Drift along serene palm-fringed backwaters aboard your private luxury houseboat. Enjoy intimate sunset deck views, candlelit dinners on the water, and freshly prepared Kerala delicacies."
  },
  {
    icon: Mountain,
    title: "Misty Munnar Hill Stays",
    description:
      "Wake up to rolling emerald tea plantations, crisp mountain mist, and breathtaking valley sunrises. Secluded treehouses and luxury resorts make Munnar the ultimate romantic haven."
  },
  {
    icon: Leaf,
    title: "Periyar Nature & Spice Walks",
    description:
      "Share peaceful hand-in-hand strolls through fragrant cardamom and cinnamon plantations, serene lake boat safaris in Thekkady, and tranquil wilderness escapes."
  },
  {
    icon: Camera,
    title: "Sunset Beaches & Clifftops",
    description:
      "Unwind on the golden crescent beaches of Kovalam and the dramatic red laterite cliffs of Varkala. Stroll the shoreline at dusk and enjoy intimate candlelit beachside dinners."
  },
  {
    icon: Shield,
    title: "Rejuvenating Couple's Ayurveda",
    description:
      "Indulge in authentic couple's Ayurvedic spa therapies and herbal oil massages designed to relax your senses and rejuvenate body and soul together."
  },
  {
    icon: Landmark,
    title: "Charming Heritage & Culture",
    description:
      "Wander through Fort Kochi's quaint colonial lanes, historic cafes, and dramatic Chinese fishing net silhouettes at twilight — a timeless backdrop for romantic memories."
  }
];

export const WhyKerala: React.FC = () => {
  return (
    <section id="itinerary-section" className="py-12 sm:py-16 lg:py-20 bg-[#F6F7F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-[#0B3996] font-bold text-xs sm:text-sm uppercase tracking-[0.2em] inline-block">
            HONEYMOON SPECIAL
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mt-2 tracking-tight">
            6 Reasons Kerala Is Perfect For Your Honeymoon
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

// synchronized export

export default WhyKerala;
