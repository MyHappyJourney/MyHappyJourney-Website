'use client';

import React from 'react';
import { Plane, Car, Clock, ShieldCheck, CheckCircle2, MapPin } from 'lucide-react';

export const CochinAirportTransfer: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-white font-sans border-t border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#071F3D] text-white rounded-3xl p-6 sm:p-10 md:p-12 relative overflow-hidden shadow-xl">
          {/* Subtle gradient pattern overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.1),_transparent_60%)] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 text-xs font-semibold text-emerald-300">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Zero Hidden Fees • 100% Inclusive</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
                Cochin Airport to Munnar &amp; Alleppey
              </h2>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                Traveling from Cochin International Airport (COK) to Munnar takes approximately <strong>4 hours</strong> by private AC car through scenic waterfall routes and rolling tea estates. Your dedicated chauffeur will be waiting directly at the arrivals gate with a personalized name card, ready to assist with your luggage.
              </p>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                <strong>Airport transfer is completely included</strong> as part of every package on this page. You never have to arrange separate taxis, haggle with airport prepaid counters, or worry about flight delays.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-200">
                <div className="flex items-center gap-2.5 bg-white/5 rounded-xl p-2.5 border border-white/10">
                  <Plane className="w-4 h-4 text-[#FF9900] shrink-0" />
                  <span>Flight tracking &amp; delayed pickup flexibility</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white/5 rounded-xl p-2.5 border border-white/10">
                  <Car className="w-4 h-4 text-[#FF9900] shrink-0" />
                  <span>Well-maintained AC Sedan / SUV with commercial permit</span>
                </div>
              </div>
            </div>

            {/* Right Highlights Box */}
            <div className="lg:col-span-5 w-full">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-white/15 space-y-4 text-left">
                <h3 className="text-base font-extrabold text-white flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#FF9900]" />
                  <span>Key Travel Durations from Cochin</span>
                </h3>

                <ul className="space-y-3 text-xs sm:text-sm">
                  <li className="flex items-start justify-between border-b border-white/10 pb-2.5">
                    <span className="text-slate-300 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#FF9900]" />
                      Cochin (COK) → Munnar
                    </span>
                    <strong className="text-white">~4 Hours (125 km)</strong>
                  </li>

                  <li className="flex items-start justify-between border-b border-white/10 pb-2.5">
                    <span className="text-slate-300 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#FF9900]" />
                      Cochin (COK) → Alleppey
                    </span>
                    <strong className="text-white">~2.5 Hours (85 km)</strong>
                  </li>

                  <li className="flex items-start justify-between border-b border-white/10 pb-2.5">
                    <span className="text-slate-300 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#FF9900]" />
                      Ernakulam Station → Munnar
                    </span>
                    <strong className="text-white">~4.5 Hours (130 km)</strong>
                  </li>

                  <li className="flex items-start justify-between pt-0.5">
                    <span className="text-slate-300 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      Tolls, Parking &amp; Driver Allowance
                    </span>
                    <strong className="text-emerald-300 font-bold">100% Included</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CochinAirportTransfer;
