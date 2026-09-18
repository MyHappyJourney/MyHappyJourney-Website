'use client';

import React from 'react';
import { ArrowLeft, Shield, Mail, Phone, MapPin, Calendar, CheckCircle, Lock } from 'lucide-react';

interface PrivacyPolicyPageProps {
  onBackToHome?: () => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onBackToHome }) => {
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
            Privacy Policy
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
          <div className="flex gap-4 p-5 bg-blue-50/50 rounded-xl border border-blue-100/50">
            <Shield className="w-6 h-6 text-[#0B389D] shrink-0 mt-0.5" />
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              At <strong className="text-slate-900 font-semibold">MyHappyJourney</strong>, we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, store, and protect your information when you visit our website, submit an enquiry, request a quotation, make a booking, or use our travel services.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Policy Sections */}
          <div className="space-y-8 text-slate-700 text-sm sm:text-base leading-relaxed">
            
            {/* Section 1 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">1</span>
                Information We Collect
              </h2>
              <p>We may collect information that you provide to us, including:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-4 sm:pl-6 list-disc text-slate-600">
                <li>Name</li>
                <li>Mobile number</li>
                <li>Email address</li>
                <li>City/location</li>
                <li>Travel dates</li>
                <li>Destination and package preferences</li>
                <li>Number of travellers</li>
                <li>Hotel and room preferences</li>
                <li>Passport and travel details (for bookings)</li>
                <li>Date of birth & gender (as required by carriers)</li>
                <li>Payment and transaction details</li>
                <li>Any other information voluntarily provided</li>
              </ul>
              <p className="text-slate-500 text-xs sm:text-sm italic">
                We may also automatically collect technical info, such as your IP address, browser type, device information, visited pages, and website usage metrics.
              </p>
            </div>

            {/* Section 2 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">2</span>
                How We Use Your Information
              </h2>
              <p>We may use your collected information to:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Respond to your enquiries',
                  'Prepare travel quotations',
                  'Arrange hotels, flights, transport & activities',
                  'Process and manage bookings',
                  'Communicate regarding enquiries or bookings',
                  'Provide timely customer support',
                  'Process safe payments and refunds',
                  'Improve our website and services',
                  'Prevent fraud and security misuse',
                  'Send travel offers & promo updates (where permitted)',
                  'Comply with legal & regulatory requirements',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-slate-600 text-sm">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">3</span>
                Sharing of Information
              </h2>
              <p>To provide high-quality, seamless travel services, we may share relevant details with trusted third parties, including:</p>
              <ul className="pl-6 list-disc space-y-1 text-slate-600">
                <li>Airlines, hotels, resorts, transport providers, and tour operators</li>
                <li>Destination management companies and visa service providers</li>
                <li>Secure payment gateways and CRM systems</li>
                <li>Government or regulatory authorities where legally required</li>
              </ul>
              <p className="bg-slate-50 p-3.5 rounded-lg border border-slate-100 text-slate-600 text-xs sm:text-sm">
                We share only the minimal information reasonably necessary to secure your bookings, complete transactions, or satisfy compliance rules.
              </p>
            </div>

            {/* Section 4 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">4</span>
                Payment Information
              </h2>
              <p>Payments are processed directly via secure, industry-leading third-party payment gateways.</p>
              <div className="flex gap-3 bg-amber-50/50 border border-amber-100/60 p-4 rounded-xl text-slate-700">
                <Lock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm">
                  <strong>Important Security Note:</strong> MyHappyJourney does not store complete credit card, debit card, or confidential banking credentials. All transactional flows are managed in compliance with strict banking standards by our certified payment providers.
                </p>
              </div>
            </div>

            {/* Section 5 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">5</span>
                Cookies
              </h2>
              <p>
                Our website employs cookies and similar tracking technologies to improve general functionality, recall your preferences, understand website traffic patterns, and measure promotional campaign performance. You can change cookie permissions through your web browser, although disabling them might impact website performance.
              </p>
            </div>

            {/* Section 6 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">6</span>
                Advertising and Analytics
              </h2>
              <p>
                We collaborate with analytical platforms such as Google Analytics, Google Ads, and Meta advertising platforms. These technologies process website engagement metrics in alignment with their own standalone privacy regulations.
              </p>
            </div>

            {/* Section 7 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">7</span>
                WhatsApp, Phone and Email Communications
              </h2>
              <p>
                When you initiate touch via WhatsApp, phone lines, email, or social profiles, we securely store details of the communications to administer your enquiry, deliver customer support, or coordinate booking logistics.
              </p>
            </div>

            {/* Section 8 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">8</span>
                Marketing Communications
              </h2>
              <p>
                Where permitted by legal norms and with your consent, we may send updates, exclusive holiday package alerts, destination highlights, or occasional newsletters. You can opt out at any point by hitting unsubscribe or contacting us directly.
              </p>
            </div>

            {/* Section 9 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">9</span>
                Data Security
              </h2>
              <p>
                We incorporate robust technical and organizational systems to secure your personal data against unauthorized reach, theft, misplacement, or changes. However, please remember that no web-based transfer or storage mechanism holds a 100% guarantee.
              </p>
            </div>

            {/* Section 10 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">10</span>
                Data Retention
              </h2>
              <p>
                We preserve personal information exclusively for durations needed to deliver booked travel services, maintain standard business transaction logs, handle disputes, and uphold strict compliance rules.
              </p>
            </div>

            {/* Section 11 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">11</span>
                Your Privacy Rights
              </h2>
              <p>In accordance with data protection rules, you maintain the legal right to:</p>
              <ul className="pl-6 list-disc space-y-1 text-slate-600">
                <li>Access details regarding your personal data records</li>
                <li>Demand corrections to any inaccurate, outdated info</li>
                <li>Request secure erasure of personal details</li>
                <li>Withdraw analytical or communication consent at any point</li>
              </ul>
            </div>

            {/* Section 12 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">12</span>
                Third-Party Websites
              </h2>
              <p>
                Our portals link out to external travel providers (e.g., airline, hotel, or payment gateways). MyHappyJourney does not govern and remains unanswerable for the privacy guidelines or safety systems of these third-party portals.
              </p>
            </div>

            {/* Section 13 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">13</span>
                Children's Privacy
              </h2>
              <p>
                We do not intentionally gather data from children without verifiable parental or legal guardian consent. If you believe a child has supplied details without approval, please contact our support desk.
              </p>
            </div>

            {/* Section 14 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">14</span>
                Changes to This Privacy Policy
              </h2>
              <p>
                We may periodically update this policy in line with service upgrades, technical changes, or legal updates. Any edits will instantly reflect on this URL with an updated "Last Updated" timestamp.
              </p>
            </div>

            {/* Section 15 */}
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">15</span>
                Contact Us
              </h2>
              <p>If you have any questions or requests regarding your personal info, please reach us:</p>
              
              {/* Office Contact Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="p-5 border border-slate-100 rounded-xl bg-slate-50 space-y-3">
                  <h3 className="font-bold text-slate-900">General Enquiries</h3>
                  <div className="space-y-2 text-xs sm:text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-[#0B389D]" />
                      <a href="mailto:Yashwant@myhappyjourney.com" className="hover:underline">Yashwant@myhappyjourney.com</a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#0B389D]" />
                      <a href="tel:+918197417772" className="hover:underline">+91 8197417772</a>
                    </div>
                    <div className="flex items-start gap-2 pt-1">
                      <MapPin className="w-4 h-4 text-[#0B389D] shrink-0 mt-0.5" />
                      <span>
                        3rd Floor, 18th Main Road,<br />
                        Kumaraswamy Layout 2nd Stage,<br />
                        Bengaluru, Karnataka – 560078, India.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-5 border border-slate-100 rounded-xl bg-slate-50 space-y-3">
                  <h3 className="font-bold text-slate-900">Privacy &amp; Data Rights</h3>
                  <div className="space-y-2 text-xs sm:text-sm text-slate-600">
                    <p className="text-xs text-slate-500">
                      Contact for requests relating to access, corrections, deletion, or consent withdrawal:
                    </p>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-[#0B389D]" />
                      <a href="mailto:Yashwant@myhappyjourney.com" className="hover:underline">Yashwant@myhappyjourney.com</a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#0B389D]" />
                      <a href="tel:+918197417772" className="hover:underline">+91 8197417772</a>
                    </div>
                  </div>
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
