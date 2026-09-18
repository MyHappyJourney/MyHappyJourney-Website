'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Phone, Sparkles, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { WhatsAppModal } from './WhatsAppModal';

interface ThankYouTemplateProps {
  HeaderComponent: React.ComponentType<{ onQuoteClick: () => void }>;
  FooterComponent: React.ComponentType;
  continueBrowsingUrl: string;
  themeColor: 'blue' | 'emerald' | 'rose' | 'amber';
  destinationName: string;
  whatsAppNumber: string;
  phoneCallNumber: string;
}

export const ThankYouTemplate: React.FC<ThankYouTemplateProps> = ({
  HeaderComponent,
  FooterComponent,
  continueBrowsingUrl,
  themeColor,
  destinationName,
  whatsAppNumber,
  phoneCallNumber,
}) => {
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);
  const [whatsAppDefaultMsg, setWhatsAppDefaultMsg] = useState<string | undefined>(undefined);

  // Set WhatsApp Custom default message
  useEffect(() => {
    setWhatsAppDefaultMsg(
      encodeURIComponent(
        `Hi MyHappyJourney, I just submitted an enquiry for ${destinationName} and would like to speed up my booking. Please connect me with a holiday expert.`
      )
    );
  }, [destinationName]);

  const handleWhatsAppClick = () => {
    setIsWhatsAppModalOpen(true);
  };

  // Color theme definitions
  const themeClasses = {
    blue: {
      accentText: 'text-[#0B3996]',
      accentBg: 'bg-[#EBF2FF]',
      borderFocus: 'border-[#0B3996]',
      buttonBg: 'bg-[#0B3996] hover:bg-[#092e7a]',
      gradient: 'from-blue-50/50 to-white',
      badgeBg: 'bg-blue-50 text-[#0B3996]',
    },
    emerald: {
      accentText: 'text-emerald-700',
      accentBg: 'bg-emerald-50',
      borderFocus: 'border-emerald-600',
      buttonBg: 'bg-emerald-600 hover:bg-emerald-700',
      gradient: 'from-emerald-50/40 to-white',
      badgeBg: 'bg-emerald-50 text-emerald-700',
    },
    rose: {
      accentText: 'text-rose-700',
      accentBg: 'bg-rose-50',
      borderFocus: 'border-rose-600',
      buttonBg: 'bg-rose-600 hover:bg-rose-700',
      gradient: 'from-rose-50/40 to-white',
      badgeBg: 'bg-rose-50 text-rose-700',
    },
    amber: {
      accentText: 'text-amber-800',
      accentBg: 'bg-amber-50',
      borderFocus: 'border-amber-600',
      buttonBg: 'bg-amber-600 hover:bg-amber-700',
      gradient: 'from-amber-50/40 to-white',
      badgeBg: 'bg-amber-50 text-amber-800',
    },
  }[themeColor];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between font-sans selection:bg-[#EBF2FF] selection:text-[#0B3996] tracking-tight antialiased">
      {/* 1. Header (Dynamic) */}
      <HeaderComponent onQuoteClick={() => (window.location.href = `${continueBrowsingUrl}?enquiry=true`)} />

      {/* 2. Main Content Area */}
      <main className={`flex-grow bg-gradient-to-b ${themeClasses.gradient} py-12 px-4 sm:px-6 lg:px-8`}>
        <div className="max-w-4xl mx-auto">
          
          {/* Main Card */}
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
            
            {/* Top Success Banner */}
            <div className="bg-slate-900 px-6 py-10 sm:py-12 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
              
              <motion.div
                initial={{ scale: 0, rotate: -30 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-emerald-900/30 mb-5 relative z-10"
              >
                <CheckCircle2 className="w-12 h-12 text-white" />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="text-2xl sm:text-4xl font-black tracking-tight"
              >
                Thank You!
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="text-slate-300 text-sm sm:text-base mt-2 max-w-lg mx-auto font-medium"
              >
                We've received your enquiry and our travel experts are already customizing your perfect {destinationName} package!
              </motion.p>
            </div>

            {/* Inner Content */}
            <div className="p-6 sm:p-10 space-y-8 sm:space-y-10">
              
              {/* Next Steps Grid */}
              <div>
                <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest mb-6 text-center sm:text-left">
                  What Happens Next?
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Step 1 */}
                  <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-2.5 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-[#0B3996] font-bold text-sm">
                      01
                    </div>
                    <div className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-blue-600" />
                      We Review In 10 Min
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Our destination specialists review your travel dates, guest count, hotel, and transport preferences.
                    </p>
                  </div>

                  {/* Step 2 */}
                  <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-2.5 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-sm">
                      02
                    </div>
                    <div className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                      <Phone className="w-4 h-4 text-emerald-600" />
                      Free Consultation
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      We contact you via call or WhatsApp to refine hotel options, inclusions, and special requests.
                    </p>
                  </div>

                  {/* Step 3 */}
                  <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-2.5 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700 font-bold text-sm">
                      03
                    </div>
                    <div className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-purple-600" />
                      Itinerary &amp; Booking
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Receive a tailored day-wise voucher. Confirm with a secure deposit and enjoy 100% transparent pricing.
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Instant Contact Box */}
              <div className="bg-[#FAF9F5] p-5 sm:p-6 rounded-2xl border border-[#F0ECE1] flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="space-y-1.5 text-center md:text-left">
                  <div className="inline-flex items-center gap-1.5 bg-yellow-100 text-yellow-800 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified Travel Partner
                  </div>
                  <h4 className="font-bold text-slate-900 text-base sm:text-lg">Want to get quotes even faster?</h4>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md">
                    Connect directly with our support team on WhatsApp or phone to receive instant customized Kerala packages.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch md:items-center gap-3 w-full md:w-auto shrink-0">
                  {/* WhatsApp Button */}
                  <button
                    onClick={handleWhatsAppClick}
                    className="flex items-center justify-center gap-2 px-5 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl font-bold text-sm shadow-sm transition-colors cursor-pointer"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-white" />
                    <span>WhatsApp Now</span>
                  </button>

                  {/* Call Button */}
                  <a
                    href={`tel:${phoneCallNumber}`}
                    className="flex items-center justify-center gap-2 px-5 py-3 bg-white hover:bg-slate-50 text-slate-800 rounded-xl font-bold text-sm border border-slate-200 shadow-xs transition-colors"
                  >
                    <Phone className="w-4 h-4 text-blue-600" />
                    <span>Call +91 8197417772</span>
                  </a>
                </div>
              </div>

              {/* Back to Home / Browse Button */}
              <div className="pt-2 text-center">
                <a
                  href={continueBrowsingUrl}
                  className={`inline-flex items-center gap-2 px-6 py-3.5 ${themeClasses.buttonBg} text-white font-bold text-sm rounded-xl shadow-md transition-all group`}
                >
                  <span>Continue Browsing</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

            </div>

          </div>

        </div>
      </main>

      {/* 3. Footer (Dynamic) */}
      <FooterComponent />

      {/* WhatsApp Modal Trigger */}
      <WhatsAppModal
        isOpen={isWhatsAppModalOpen}
        onClose={() => setIsWhatsAppModalOpen(false)}
        destinationTitle={destinationName}
        defaultMessage={whatsAppDefaultMsg}
      />
    </div>
  );
};
