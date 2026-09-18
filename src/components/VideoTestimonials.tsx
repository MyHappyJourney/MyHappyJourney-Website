'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Play, Sparkles, Award, Users } from 'lucide-react';

export const VideoTestimonials: React.FC = () => {
  return (
    <section id="video-testimonials" className="py-16 sm:py-24 bg-slate-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-50 border border-teal-200/50 rounded-full text-teal-800 text-xs sm:text-sm font-semibold tracking-wide mb-3">
            <Sparkles className="w-4 h-4 text-teal-600 animate-pulse" />
            <span>Customer Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Real Video Testimonials
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            See why thousands of families, seniors, and couples trust MyHappyJourney for their dream Kerala vacation.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main YouTube Short Embedded Player */}
          <div className="lg:col-span-6 flex justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-[340px] aspect-[9/16] bg-slate-950 rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl overflow-hidden border-8 border-slate-900 flex flex-col"
            >
              <iframe
                src="https://www.youtube.com/embed/5a-43upeBfo?autoplay=0&rel=0&modestbranding=1"
                title="MyHappyJourney Kerala Trip Video Testimonial"
                className="w-full h-full border-none rounded-lg sm:rounded-xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </motion.div>
          </div>

          {/* Customer Reviews Highlight & Statistics */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Witness the Happiness
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Our travelers love capturing their moments with us. This featured testimonial showcases the serene backwaters, beautiful resorts, and hassle-free private tour management we provide on every single journey.
              </p>
            </div>

            {/* Quick trust metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
              <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600 shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-slate-900 text-base sm:text-lg">5000+</div>
                  <div className="text-xs text-slate-500">Happy Travelers</div>
                </div>
              </div>

              <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600 shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-slate-900 text-base sm:text-lg">4.9/5</div>
                  <div className="text-xs text-slate-500">Google Rating</div>
                </div>
              </div>
            </div>

            {/* Call to Action description */}
            <div className="border-t border-slate-200/80 pt-6">
              <p className="text-xs sm:text-sm text-slate-500 italic">
                &ldquo;From cozy stays to custom pacing, everything was arranged to absolute perfection.&rdquo;
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default VideoTestimonials;
