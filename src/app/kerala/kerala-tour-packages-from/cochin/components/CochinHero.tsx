'use client';

import React, { useState, useEffect } from 'react';
import {
  Zap,
  Clock,
  Car,
  Hotel,
  Utensils,
  Star,
  MapPin,
  Plane,
} from 'lucide-react';
import { PACKAGES } from '../../../../../data/tourData';
import { KERALA_DURATION_OPTIONS } from '../../../../../constants/crm';
import { CrmLeadForm } from '../../../../../components/CrmLeadForm';

interface CochinHeroProps {
  onQuoteClick?: () => void;
  preselectedPackageId?: string;
}

export const CochinHero: React.FC<CochinHeroProps> = ({
  onQuoteClick,
  preselectedPackageId,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        const params = new URLSearchParams(window.location.search);
        const term = params.get('utm_term');
        if (term && term.trim()) {
          setSearchTerm(term.trim());
        }
      }
    } catch {
      // fail silently
    }
  }, []);

  const selectedPkg = PACKAGES.find((p) => p.id === preselectedPackageId);
  const selectedDuration = selectedPkg
    ? KERALA_DURATION_OPTIONS.find((d) => d.includes(`${selectedPkg.nights}N`)) ||
      KERALA_DURATION_OPTIONS[2]
    : KERALA_DURATION_OPTIONS[2];

  return (
    <section id="hero-section" className="relative bg-neutral-950 text-white overflow-hidden font-sans">
      {/* Background Hero Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/HeroImgwebsite.jpg"
          alt="Kerala Tour Packages from Cochin Airport and Ernakulam"
          className="w-full h-full object-cover object-center"
          fetchPriority="high"
          loading="eager"
          width={1400}
          height={788}
          referrerPolicy="no-referrer"
          onError={(e) => {
            e.currentTarget.src = '/images/hero-munnar-tea.jpg';
          }}
        />
        {/* Neutral gradient scrim for left-side text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-18">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Hero Value Proposition */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6 text-left">
            {/* Eyebrow / Kicker or Trust Pill */}
            <div className="flex flex-wrap items-center gap-2">
              {searchTerm ? (
                <div className="inline-flex items-center gap-1.5 bg-[#FF4B00]/90 backdrop-blur-md border border-[#FF4B00] rounded-full px-3.5 py-1 text-xs font-bold text-white shadow-xs">
                  <span>Showing results for: {searchTerm}</span>
                </div>
              ) : (
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3.5 py-1.5 text-xs font-semibold text-white shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Cochin Airport &amp; Ernakulam Railway Pickup Included</span>
                </div>
              )}
            </div>

            {/* Main Stable SEO Headline */}
            <div className="space-y-2.5">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                Kerala Tour Packages from Cochin – Airport &amp; Ernakulam Station Pickup Included
              </h1>
              <p className="text-base sm:text-lg text-gray-200 font-semibold leading-relaxed max-w-xl">
                Pickup from Cochin (Kochi) Airport or Ernakulam Station – Private AC Car Included
              </p>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-xl">
                Start your Kerala holiday seamlessly right as you land in Cochin (Kochi). Our dedicated driver greets you at Cochin International Airport (COK) or Ernakulam Junction/Town railway station with a clean, private air-conditioned vehicle for Munnar, Alleppey, and beyond.
              </p>
            </div>

            {/* Quick Value Points */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3 max-w-lg">
              <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#0B3996]/80 flex items-center justify-center shrink-0">
                  <Plane className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Airport Meet &amp; Greet</div>
                  <div className="text-[10px] text-gray-300">Cochin (COK) Arrivals</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#FF4B00]/80 flex items-center justify-center shrink-0">
                  <Car className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Private AC Cabs</div>
                  <div className="text-[10px] text-gray-300">Sedan / Innova / Ertiga</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-600/80 flex items-center justify-center shrink-0">
                  <Hotel className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Handpicked Resorts</div>
                  <div className="text-[10px] text-gray-300">3★ / 4★ + Houseboat</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-500/80 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Zero Waiting Time</div>
                  <div className="text-[10px] text-gray-300">Direct Munnar Transfer</div>
                </div>
              </div>
            </div>

            {/* Social Proof Rating */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <div className="bg-black/60 backdrop-blur-md border border-white/20 rounded-full px-3 py-1.5 flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <span className="text-white font-black text-sm">4.9</span>
                  <div className="flex items-center text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <span className="text-xs text-gray-300 font-medium border-l border-white/20 pl-2">
                  2,100+ Happy Travelers Picked Up from Kochi
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Form with Pickup Point field enabled */}
          <div className="lg:col-span-6 w-full">
            <div className="bg-white text-gray-900 rounded-3xl p-5 sm:p-7 shadow-2xl border border-gray-100 relative overflow-hidden">
              {/* Highlight ribbon */}
              <div className="absolute top-0 right-0 bg-[#0B3996] text-white text-[10px] sm:text-xs font-black px-3.5 py-1 rounded-bl-2xl uppercase tracking-wider flex items-center gap-1 shadow-xs">
                <Zap className="w-3 h-3 text-yellow-300 fill-yellow-300 animate-pulse" />
                <span>COCHIN PICKUP</span>
              </div>

              <CrmLeadForm
                destination="Kerala"
                instanceId="cochin-hero"
                showPickupPointField={true}
                defaultPickupPoint="Cochin Airport (COK)"
                durations={KERALA_DURATION_OPTIONS}
                selectedDuration={selectedDuration}
                formTitle="Get Your Free Cochin Tour Quote"
                formSubtitle="Airport / Station Pickup • Verified Resorts • 10-Min Callback"
                submitButtonText="Get Free Cochin Tour Quote"
                badgeText="Airport Pickup Included"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CochinHero;
