'use client';

import React from 'react';
import { Sparkles, Video, Compass, MapPin, Heart, Clock } from 'lucide-react';

export function VideoTestimonials() {
  return (
    <section id="guest-testimonials" className="py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>REAL GUEST MEMORIES</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Guest Diaries &amp; <span className="text-[#0B3996]">Video</span> <span className="text-[#FF4B00]">Testimonials</span>
          </h2>
          
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            See the magic of Kerala through the eyes of our real travelers. From scenic tea gardens to peaceful houseboat backwaters, watch their genuine moments.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Main Active Testimonial Card */}
          <div className="lg:col-span-1 bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 flex flex-col group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="relative aspect-[9/16] bg-black w-full overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/5a-43upeBfo"
                title="MyHappyJourney Kerala Tour Testimonial"
                className="absolute inset-0 w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            
            <div className="p-6 flex flex-col justify-between flex-1 bg-slate-50/30">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-1 text-[11px] font-bold bg-blue-100 text-blue-700 rounded-full uppercase tracking-wider">
                    Featured Diary
                  </span>
                  <span className="flex items-center gap-1 text-slate-500 text-xs">
                    <Clock className="w-3 h-3" />
                    <span>0:35 min</span>
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-slate-800 line-clamp-2 leading-snug mb-2">
                  Our Magical Kerala Vacation Experience
                </h3>
              </div>
              
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-slate-900 text-sm">Siddharth &amp; Family</p>
                  <p className="text-xs text-slate-500">Munnar &amp; Alleppey Houseboat</p>
                </div>
                <div className="p-2 rounded-full bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition-colors">
                  <Video className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Second Active Testimonial Card */}
          <div className="lg:col-span-1 bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 flex flex-col group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="relative aspect-[9/16] bg-black w-full overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/MRrEy4Wssp4"
                title="MyHappyJourney Kerala Tour Testimonial - Video 2"
                className="absolute inset-0 w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            
            <div className="p-6 flex flex-col justify-between flex-1 bg-slate-50/30">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-1 text-[11px] font-bold bg-blue-100 text-blue-700 rounded-full uppercase tracking-wider">
                    Guest Story
                  </span>
                  <span className="flex items-center gap-1 text-slate-500 text-xs">
                    <Clock className="w-3 h-3" />
                    <span>Travel Reel</span>
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-slate-800 line-clamp-2 leading-snug mb-2">
                  Unforgettable Kerala Highlights &amp; Tea Gardens
                </h3>
              </div>
              
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-slate-900 text-sm">Kerala Explorer Diary</p>
                  <p className="text-xs text-slate-500">Munnar &amp; Wayanad Escape</p>
                </div>
                <div className="p-2 rounded-full bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition-colors">
                  <Video className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Placeholder Card 2 (Upcoming Video) */}
          <div className="bg-slate-50/40 rounded-2xl border-2 border-dashed border-slate-200/80 p-8 flex flex-col items-center justify-center text-center relative overflow-hidden group min-h-[350px]">
            <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/40 to-white/90 pointer-events-none" />
            
            <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-4 group-hover:scale-110 transition-transform">
              <Heart className="w-6 h-6" />
            </div>
            
            <h3 className="text-lg font-bold text-slate-700 mb-2 relative z-10">Romantic Kovalam Sunsets</h3>
            <p className="text-sm text-slate-500 max-w-xs mb-4 relative z-10">
              Honeymoon special segment filming complete. Pure paradise shots of private pool resorts and beachfront dinners arriving soon.
            </p>
            
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-100 text-xs font-bold uppercase tracking-wider relative z-10">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              Coming Soon
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}

export default VideoTestimonials;
