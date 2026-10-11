'use client';

import React from 'react';
import {
  MapPin,
  Clock,
  ArrowRight,
  Car,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { PACKAGES } from '../../../../../data/tourData';

interface RouteCardData {
  pkgId: string;
  routeName: string;
  duration: string;
  price: string;
  pickup: string;
  drop: string;
  highlights: string[];
}

const COCHIN_ROUTES: RouteCardData[] = [
  {
    pkgId: 'pkg-4n5d',
    routeName: 'Cochin → Munnar → Thekkady → Alleppey → Cochin',
    duration: '4N/5D',
    price: '₹15,499',
    pickup: 'Cochin',
    drop: 'Cochin',
    highlights: [
      '2 Nights Munnar Hill Station & Tea Valleys',
      '1 Night Thekkady Wildlife & Spice Plantation',
      '1 Night Alleppey Deluxe Houseboat Backwater Cruise',
      'Return drop at Cochin Airport / Ernakulam Station',
    ],
  },
  {
    pkgId: 'pkg-5n6d',
    routeName: 'Cochin → Munnar → Alleppey → Kovalam → Trivandrum',
    duration: '5N/6D',
    price: '₹20,999',
    pickup: 'Cochin',
    drop: 'Trivandrum',
    highlights: [
      '2 Nights Munnar Hills & Waterfalls',
      '1 Night Alleppey Backwaters with All Meals',
      '2 Nights Kovalam Beach & Lighthouse',
      'Depart comfortably from Trivandrum Airport (TRV)',
    ],
  },
  {
    pkgId: 'pkg-6n7d',
    routeName: 'Cochin → Munnar → Thekkady → Alleppey → Kovalam → Trivandrum',
    duration: '6N/7D',
    price: '₹23,499',
    pickup: 'Cochin',
    drop: 'Trivandrum',
    highlights: [
      '2 Nights Munnar Misty Hills & Mattupetty Dam',
      '1 Night Thekkady Periyar Lake Boat Safari',
      '1 Night Alleppey Backwater Houseboat Cruise',
      '2 Nights Kovalam Beach & Poovar Island Day Trip',
    ],
  },
];

interface CochinRouteCardsProps {
  onGetQuote: (pkgId: string) => void;
}

export const CochinRouteCards: React.FC<CochinRouteCardsProps> = ({ onGetQuote }) => {
  return (
    <section id="cochin-routes-section" className="py-12 sm:py-16 bg-[#F6F7F6] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-[#EBF2FF] px-3.5 py-1 rounded-full border border-[#0B3996]/20 mb-2.5">
            <Sparkles className="w-3.5 h-3.5 text-[#FF4B00]" />
            <span className="text-[#0B3996] font-extrabold text-xs uppercase tracking-widest">
              POPULAR COCHIN DEPARTURES
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-gray-900 tracking-tight">
            Choose Your Cochin Starting Route
          </h2>
          <p className="text-xs sm:text-base text-gray-600 mt-2.5 max-w-2xl mx-auto">
            All routes include airport or railway station meet-and-greet in Cochin with private dedicated AC cab throughout your trip.
          </p>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {COCHIN_ROUTES.map((route) => {
            const pkg = PACKAGES.find((p) => p.id === route.pkgId);
            const routeImage = pkg?.image || '/images/HeroImgwebsite.jpg';

            return (
              <div
                key={route.pkgId}
                className="bg-white rounded-3xl overflow-hidden shadow-[0_10px_30px_-12px_rgba(0,0,0,0.08)] hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col justify-between group"
              >
                {/* Card Image + Duration Badge */}
                <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-200">
                  <img
                    src={routeImage}
                    alt={route.routeName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = '/images/HeroImgwebsite.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  <div className="absolute top-3.5 left-3.5">
                    <span className="bg-[#0B3996] text-white text-xs font-black px-3 py-1 rounded-full shadow-md">
                      {route.duration}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="flex items-center gap-1.5 text-xs text-amber-300 font-bold mb-1">
                      <Car className="w-3.5 h-3.5" />
                      <span>Private AC Cab Included</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-black leading-tight text-white drop-shadow-sm">
                      {route.routeName}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Clear Pickup / Drop Line */}
                    <div className="bg-[#EBF2FF]/60 border border-[#0B3996]/15 rounded-2xl p-3 mb-4 flex items-center justify-between text-xs sm:text-sm">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-[#0B3996] shrink-0" />
                        <span className="text-gray-600 font-medium">Pickup:</span>
                        <strong className="text-gray-900 font-extrabold">{route.pickup}</strong>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
                      <div className="flex items-center gap-1.5">
                        <span className="text-gray-600 font-medium">Drop:</span>
                        <strong className="text-gray-900 font-extrabold">{route.drop}</strong>
                      </div>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-2 mb-6">
                      {route.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-gray-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer with Price and Get Quote Button */}
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
                    <div>
                      <span className="block text-[11px] text-gray-500 uppercase font-bold tracking-wider">
                        Starting Price
                      </span>
                      <span className="text-base sm:text-lg font-black text-gray-900">
                        From <span className="text-[#0B3996] font-extrabold">{route.price}</span>
                      </span>
                      <span className="block text-[10px] text-gray-400 font-medium">
                        per person
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => onGetQuote(route.pkgId)}
                      className="bg-[#FF4B00] hover:bg-[#e04200] active:scale-95 text-white font-black text-xs sm:text-sm px-4 sm:px-5 py-3 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Get Quote</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CochinRouteCards;
