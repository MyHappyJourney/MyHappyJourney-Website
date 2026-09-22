import React from 'react';
import { PackageItem } from '../types';
import { Zap } from 'lucide-react';

interface PackageCardProps {
  pkg: PackageItem;
  onViewDetails: (pkg: PackageItem) => void;
  onGetQuote: (pkg: PackageItem) => void;
}

export const PackageCard: React.FC<PackageCardProps> = ({ pkg, onViewDetails, onGetQuote }) => {

  return (
    <div
      className={`bg-white rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col h-full transition-all duration-300 shadow-sm hover:shadow-xl ${
        pkg.isPopular
          ? 'border-2 border-[#FF4B00] relative ring-2 ring-[#FF4B00]/15'
          : 'border border-gray-200'
      }`}
    >
      {/* Most Popular Choice Banner */}
      {pkg.isPopular && (
        <div className="bg-[#FF4B00] text-white text-xs sm:text-sm font-black uppercase tracking-wider text-center py-2 px-3 flex items-center justify-center gap-1.5">
          <span>★</span>
          <span>MOST POPULAR CHOICE</span>
        </div>
      )}

      {/* Card Image */}
      <div className="relative h-52 sm:h-56 overflow-hidden bg-gray-100 group">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          referrerPolicy="no-referrer"
          onError={(e) => {
            e.currentTarget.src =
              'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80';
          }}
        />

        {/* Top-Left Category Badge */}
        {pkg.categoryBadge && (
          <div className="absolute top-3 left-3 bg-gray-900/85 backdrop-blur-xs text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md z-10 uppercase tracking-wider">
            {pkg.categoryBadge}
          </div>
        )}

        {/* Top-Right Urgency Badge */}
        {pkg.urgencyBadge && (
          <div className="absolute top-3 right-3 bg-[#E53935] text-white text-[11px] font-black px-3 py-1 rounded-full shadow-md z-10 flex items-center gap-1">
            <span>🔥</span>
            <span>{pkg.urgencyBadge}</span>
          </div>
        )}

        {/* Bottom-Left Duration Badge */}
        <div className="absolute bottom-3 left-3 bg-[#0B3996] text-white text-xs font-black px-3.5 py-1.5 rounded-lg shadow-md uppercase tracking-wider">
          {pkg.durationBadge}
        </div>
      </div>

      {/* Card Content Area */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          {/* Package Title & Subtitle */}
          <div>
            <h3 className="font-extrabold text-xl sm:text-2xl text-gray-900 tracking-tight leading-snug">
              {pkg.title}
            </h3>
            {pkg.subtitle && (
              <p className="text-xs sm:text-sm font-semibold text-gray-500 mt-0.5">
                {pkg.subtitle}
              </p>
            )}
          </div>

          {/* Route Box */}
          <div className="bg-[#F6F7F8] p-3 rounded-xl border border-gray-100 flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-800">
            <span className="text-base leading-none">📍</span>
            <span className="leading-snug">{pkg.route}</span>
          </div>

          {/* Bullet Highlights */}
          <div className="space-y-2 pt-1 text-xs sm:text-sm text-gray-700">
            {pkg.highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <span className="text-blue-600 font-bold leading-tight">✓</span>
                <span className="leading-snug text-gray-700 font-medium">{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section: Custom Quote Strip & CTAs */}
        <div className="space-y-3 pt-2">
          {/* Custom Pricing Banner with View Itinerary */}
          <div className="bg-[#F8FAFC] p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border border-gray-200/80 flex items-center justify-between gap-3">
            <div className="flex flex-col">
              <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded w-fit border border-emerald-200/60 mb-1">
                BEST PRICE GUARANTEED
              </span>
              <span className="text-sm sm:text-base font-extrabold text-gray-900 tracking-tight">
                Get Custom Quote
              </span>
              <span className="text-[11px] font-medium text-gray-500">
                Tailored to your dates & hotel tier
              </span>
            </div>

            <button
              type="button"
              onClick={() => onViewDetails(pkg)}
              className="text-[#0B3996] hover:text-[#082a74] font-bold text-xs sm:text-sm hover:underline cursor-pointer flex items-center gap-1 shrink-0 bg-white px-3 py-2 rounded-lg border border-blue-100 shadow-2xs transition-all hover:shadow-xs"
              id={`view-itinerary-${pkg.id}`}
            >
              <span>View Itinerary</span>
              <span>→</span>
            </button>
          </div>

          {/* Action CTA: Get Quote in 10 Min */}
          <div className="pt-1">
             <button
               type="button"
               onClick={() => onGetQuote(pkg)}
               className="w-full h-11.5 sm:h-12 px-4 bg-[#FF4B00] hover:bg-[#e04200] active:scale-98 text-white font-black text-xs sm:text-sm rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer select-none"
               id={`get-quote-btn-${pkg.id}`}
             >
               <Zap className="w-4 h-4 fill-white text-white shrink-0" />
               <span className="whitespace-nowrap uppercase tracking-wide">GET QUOTE IN 10 MIN</span>
             </button>
           </div>
         </div>
       </div>
     </div>
   );
 };

// synchronized export

export default PackageCard;
