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
    title: "Alleppey Backwaters Comfort Cruise",
    description:
      "Glide peacefully along calm, scenic canals on a 100% private deluxe houseboat with easy step-free boarding, ground-level bedrooms, attentive onboard staff, and fresh homestyle Kerala meals."
  },
  {
    icon: Mountain,
    title: "Misty Munnar at a Leisurely Pace",
    description:
      "Breathe in crisp mountain air and take in endless emerald tea hills without strenuous walking. Enjoy scenic drives, lakeside promenades with benches, and relaxing tea museum visits."
  },
  {
    icon: Leaf,
    title: "Periyar Wildlife from Seated Lake Safaris",
    description:
      "Experience Thekkady's rich flora and fauna comfortably from shaded boat seats on Periyar Lake, where wild elephants and deer come to drink, complemented by gentle spice garden walks."
  },
  {
    icon: Camera,
    title: "Kovalam & Varkala Serene Coastal Strolls",
    description:
      "Unwind by the tranquil Arabian Sea with flat beachside promenades, gentle sea breezes, and soothing sunset viewpoints designed for relaxed, unhurried evenings."
  },
  {
    icon: Shield,
    title: "Authentic Gentle Ayurveda & Wellness",
    description:
      "Recharge with traditional Ayurvedic therapies, herbal oil massages, and wellness treatments tailored specifically for joint health, vitality, and deep relaxation by certified practitioners."
  },
  {
    icon: Landmark,
    title: "Comfortable Heritage & Temple Darshans",
    description:
      "Explore rich history and sacred spiritual sites like Fort Kochi and Padmanabhaswamy Temple with coordinated senior darshan access, step-free pathways, and dedicated luggage assistance."
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
            6 Reasons Kerala Is Perfect For Senior Citizens
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
