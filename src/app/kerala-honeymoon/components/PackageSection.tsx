import React from 'react';
import { PACKAGES } from '../data/tourData';
import { PackageCard } from './PackageCard';
import { PackageItem } from '../types';

interface PackageSectionProps {
  onViewDetails: (pkg: PackageItem) => void;
  onGetQuote: (pkg: PackageItem) => void;
}

export const PackageSection: React.FC<PackageSectionProps> = ({ onViewDetails, onGetQuote }) => {
  return (
    <section id="packages-section" className="py-12 sm:py-16 bg-[#F6F7F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-[#EBF2FF] px-3.5 py-1 rounded-full border border-[#0B3996]/20 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#FF4B00]" />
            <span className="text-[#0B3996] font-bold text-xs uppercase tracking-widest">
              POPULAR ITINERARIES • 6 HANDCRAFTED PACKAGES
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-gray-900 tracking-tight">
            CHOOSE YOUR KERALA HONEYMOON TOUR PACKAGES
          </h2>
          <p className="text-xs sm:text-base text-gray-600 mt-2">
            Handcrafted tour packages with private AC vehicle, handpicked hotels, and 24x7 local support.
          </p>
        </div>

        {/* Static 3-Column, 2-Row Grid (6 cards total) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {PACKAGES.map((pkg) => (
            <div key={pkg.id} className="h-full">
              <PackageCard
                pkg={pkg}
                onViewDetails={onViewDetails}
                onGetQuote={onGetQuote}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackageSection;
