'use client';

import React from 'react';
import { ArrowLeft, Cookie, Mail, Phone, MapPin, Calendar, CheckCircle, ShieldAlert, Settings } from 'lucide-react';

interface CookiePolicyPageProps {
  onBackToHome?: () => void;
}

export const CookiePolicyPage: React.FC<CookiePolicyPageProps> = ({ onBackToHome }) => {
  const handleBack = () => {
    if (onBackToHome) {
      onBackToHome();
    } else {
      window.location.href = '/';
    }
  };

  return (
    <div className="min-h-screen bg-[#FBFBFD] text-[#1D1D1F] font-sans antialiased selection:bg-[#EBF2FF] selection:text-[#0B389D] pb-16 sm:pb-24">
      {/* Hero Header Banner */}
      <section className="relative bg-[#071F3D] text-white pt-16 pb-20 sm:pt-20 sm:pb-24 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_70%)] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto space-y-4">
          <button
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-slate-100 border border-white/10 tracking-wide transition-all mb-4"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Home
          </button>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Cookie Policy
          </h1>

          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-300 font-medium">
            <Calendar className="w-4 h-4 text-[#FF9900]" />
            <span>Last Updated: 18 September 2026</span>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 p-6 sm:p-10 md:p-12 space-y-10">
          
          {/* Welcome Note */}
          <div className="flex gap-4 p-5 bg-orange-50/50 rounded-xl border border-orange-100/50">
            <Cookie className="w-6 h-6 text-[#FF9900] shrink-0 mt-0.5 animate-bounce" />
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              At <strong className="text-slate-900 font-semibold">MyHappyJourney</strong>, we use cookies and similar technologies to provide a better, safer and more personalised experience when you browse our website, explore holiday packages, request travel quotations or contact our travel experts.
            </p>
          </div>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            This Cookie Policy explains what cookies are, how <strong className="text-slate-900 font-medium">MyHappyJourney</strong> uses cookies, how third-party services such as analytics and advertising platforms may use cookies, and how you can manage your cookie preferences.
          </p>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100 font-medium">
            MyHappyJourney provides domestic and international holiday packages, customised tours, travel planning, hotel bookings, transportation and travel assistance.
          </p>

          <hr className="border-slate-100" />

          {/* Policy Sections */}
          <div className="space-y-8 text-slate-700 text-sm sm:text-base leading-relaxed">
            
            {/* Section 1 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">1</span>
                What Are Cookies?
              </h2>
              <p>
                Cookies are small text files stored on your computer, smartphone, tablet or other internet-enabled device when you visit a website. They allow websites to recognise a device, remember preferences, understand website usage and provide certain functionality.
              </p>
              <p className="text-slate-500 text-xs sm:text-sm italic">
                We may also use similar technologies, including pixels, tags, web beacons, local storage and other tracking technologies.
              </p>
            </div>

            {/* Section 2 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">2</span>
                Why MyHappyJourney Uses Cookies
              </h2>
              <p>We may use cookies and similar technologies to:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Keep our travel website functioning properly',
                  'Improve website speed, security and performance',
                  'Remember your preferences',
                  'Understand how visitors use our holiday package pages',
                  'Measure enquiries and website conversions',
                  'Improve our travel packages and website content',
                  'Understand which marketing campaigns generate enquiries',
                  'Measure the performance of Google Ads campaigns',
                  'Provide more relevant travel advertising',
                  'Detect fraud, abuse and suspicious activity',
                  'Improve the overall customer experience'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-slate-600 text-sm">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3 */}
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">3</span>
                Types of Cookies We Use
              </h2>
              
              <div className="space-y-4">
                <div className="p-5 border border-slate-100 rounded-xl bg-slate-50 space-y-2">
                  <h3 className="font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-600" />
                    Essential Cookies
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Essential cookies are required for certain website functions. They may help us maintain website security, enable enquiry and contact forms, maintain basic website functionality, support navigation, protect against fraudulent activity, and maintain essential technical settings.
                  </p>
                  <p className="text-xs text-slate-400 italic">
                    Because these cookies are necessary for operation and security, they remain active even when optional cookies are disabled.
                  </p>
                </div>

                <div className="p-5 border border-slate-100 rounded-xl bg-slate-50 space-y-2">
                  <h3 className="font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-600" />
                    Analytics Cookies
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Analytics cookies help us understand how visitors interact with our website. For example, we analyse the number of visitors, popular travel destinations, package pages viewed, time spent, traffic sources, device profiles, and enquiry form interactions.
                  </p>
                  <p className="text-xs text-slate-400 italic">
                    We may use analytics services such as Google Analytics to continuously improve our customer experience.
                  </p>
                </div>

                <div className="p-5 border border-slate-100 rounded-xl bg-slate-50 space-y-2">
                  <h3 className="font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#FF9900]" />
                    Advertising Cookies
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    We use advertising technologies to measure and improve our digital marketing campaigns. These help us understand which advertisements generate visits, which campaigns generate enquiries, and whether a campaign results in a successful quotation request.
                  </p>
                </div>

                <div className="p-5 border border-slate-100 rounded-xl bg-slate-50 space-y-2">
                  <h3 className="font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-600" />
                    Functional Cookies
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Functional cookies allow our website to remember preferences and provide enhanced functionality (such as language preferences, previously selected options, and custom website settings).
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">4</span>
                Google Ads and Conversion Measurement
              </h2>
              <p>
                MyHappyJourney may use Google Ads to promote travel packages, destinations, holiday offers and travel services. Where implemented, Google advertising technologies may use cookies or similar identifiers to measure advertising performance and conversions.
              </p>
              <p className="text-xs text-slate-500 italic">
                For example, we may measure whether a visitor submitted a travel enquiry, requested a holiday quotation, clicked a phone or WhatsApp contact option, or interacted with a specific landing page.
              </p>
            </div>

            {/* Section 5 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">5</span>
                Google Analytics
              </h2>
              <p>
                We use Google Analytics to understand how visitors find and interact with the MyHappyJourney website. This includes monitoring website traffic volume, referral sources, device and browser specifications, approximate geographic locations, and session durations to improve website usability.
              </p>
            </div>

            {/* Section 6 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">6</span>
                Meta and Other Advertising Platforms
              </h2>
              <p>
                MyHappyJourney may use advertising and measurement technologies provided by Meta or other advertising platforms. These technologies help us understand website visits, advertising interactions, and conversions. These platforms process information according to their own privacy policies.
              </p>
            </div>

            {/* Section 7 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">7</span>
                Third-Party Cookies
              </h2>
              <p>
                Certain third-party services integrated into our website may place or access cookies or similar technologies. These may include Google, Meta, analytical providers, communication gateways, and travel technology partners.
              </p>
            </div>

            {/* Section 8 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">8</span>
                WhatsApp, Telephone and Communication Links
              </h2>
              <p>
                Our website provides links to contact us via WhatsApp, phone lines, and email. Interacting with these features can redirect you to third-party platforms which collect data pursuant to their standalone terms and policies.
              </p>
            </div>

            {/* Section 9 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">9</span>
                Managing Your Cookie Preferences
              </h2>
              <p>
                You can manage or disable cookies directly through your web browser's settings. This allows you to delete existing cookies, block future placements, or block third-party cookies specifically.
              </p>
              <div className="flex gap-3 bg-blue-50/50 border border-blue-100/50 p-4 rounded-xl text-slate-700 text-xs sm:text-sm">
                <Settings className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <p>
                  Please note that turning off essential cookies can impact website operations, safety checks, or prevent dynamic booking/enquiry modules from functioning properly.
                </p>
              </div>
            </div>

            {/* Section 10 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">10</span>
                Cookie Consent
              </h2>
              <p>
                Where required by applicable law, MyHappyJourney will request your consent before placing or using non-essential cookies and tracking technologies. You can withdraw or adjust preferences at any point.
              </p>
            </div>

            {/* Section 11 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">11</span>
                Personal Information and Cookies
              </h2>
              <p>
                Cookies themselves may not directly identify you. However, information collected through tracking technologies may sometimes be associated with information you provide to us (such as name, telephone, or enquiry specifics). To learn more, read our standalone <a href="/privacy-policy" className="text-blue-600 font-semibold hover:underline">Privacy Policy</a>.
              </p>
            </div>

            {/* Section 12 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">12</span>
                Travel Enquiries and Lead Generation
              </h2>
              <p>
                When you submit an enquiry, request a quotation, or connect with our travel team, we utilize details to prepare customised travel quotes, book hotel partners, structure flights, and coordinate transportation. Tracking analytics simply help us understand how you reached our booking portals.
              </p>
            </div>

            {/* Section 13 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">13</span>
                Data Security
              </h2>
              <p>
                We execute reliable security programs and technical barriers to keep analytical data safe. However, please remember that no web-based electronic transfer possesses an unconditional security guarantee.
              </p>
            </div>

            {/* Section 14 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">14</span>
                Changes to This Cookie Policy
              </h2>
              <p>
                We may periodically update this Cookie Policy to align with technical modifications, analytical tool upgrades, or regulatory guidelines. Revised updates are posted on this URL with an updated "Last Updated" timestamp.
              </p>
            </div>

            {/* Section 15 */}
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">15</span>
                Contact MyHappyJourney
              </h2>
              <p>If you have questions about our Cookie Policy or cookie tracking preferences, please contact us:</p>
              
              {/* Office Contact Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="p-5 border border-slate-100 rounded-xl bg-slate-50 space-y-3">
                  <h3 className="font-bold text-slate-900">General Enquiries</h3>
                  <div className="space-y-2 text-xs sm:text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-[#FF9900]" />
                      <a href="mailto:Yashwant@myhappyjourney.com" className="hover:underline">Yashwant@myhappyjourney.com</a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#FF9900]" />
                      <a href="tel:+918197417772" className="hover:underline">+91 8197417772</a>
                    </div>
                    <div className="flex items-start gap-2 pt-1">
                      <MapPin className="w-4 h-4 text-[#FF9900] shrink-0 mt-0.5" />
                      <span>
                        3rd Floor, 18th Main Road,<br />
                        Kumaraswamy Layout 2nd Stage,<br />
                        Bengaluru, Karnataka – 560078, India.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-5 border border-slate-100 rounded-xl bg-slate-50 space-y-3">
                  <h3 className="font-bold text-slate-900">Privacy &amp; Cookie Enquiries</h3>
                  <div className="space-y-2 text-xs sm:text-sm text-slate-600">
                    <p className="text-xs text-slate-500">
                      Contact for questions relating to privacy, cookies, personal information or consent:
                    </p>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-[#FF9900]" />
                      <a href="mailto:Yashwant@myhappyjourney.com" className="hover:underline">Yashwant@myhappyjourney.com</a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#FF9900]" />
                      <a href="tel:+918197417772" className="hover:underline">+91 8197417772</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Related Policies */}
              <div className="pt-4 space-y-2 border-t border-slate-100">
                <h4 className="font-semibold text-slate-900 text-sm">Related Policies &amp; Info</h4>
                <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-blue-600">
                  <a href="/privacy-policy" className="hover:underline font-medium">Privacy Policy</a>
                  <span className="text-slate-300">•</span>
                  <a href="/terms-conditions" className="hover:underline font-medium">Terms &amp; Conditions</a>
                  <span className="text-slate-300">•</span>
                  <a href="/cancellation-refund" className="hover:underline font-medium">Cancellation &amp; Refund Policy</a>
                  <span className="text-slate-300">•</span>
                  <a href="/contact-us" className="hover:underline font-medium">Contact Us</a>
                </div>
              </div>

            </div>

          </div>

          <hr className="border-slate-100" />

          {/* Footer Notice */}
          <div className="text-center pt-2 text-xs text-slate-400">
            © 2026 MyHappyJourney. All Rights Reserved.
          </div>

        </div>
      </div>
    </div>
  );
};
