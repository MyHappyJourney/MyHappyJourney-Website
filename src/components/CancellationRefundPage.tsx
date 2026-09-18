'use client';

import React from 'react';
import { ArrowLeft, RefreshCw, Mail, Phone, MapPin, Calendar, CheckCircle, HelpCircle, FileText, AlertTriangle } from 'lucide-react';

interface CancellationRefundPageProps {
  onBackToHome?: () => void;
}

export const CancellationRefundPage: React.FC<CancellationRefundPageProps> = ({ onBackToHome }) => {
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
            Cancellation &amp; Refund Policy
          </h1>

          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-300 font-medium">
            <Calendar className="w-4 h-4 text-[#FF3B30]" />
            <span>Last Updated: 18 September 2026</span>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 p-6 sm:p-10 md:p-12 space-y-10">
          
          {/* Welcome Note */}
          <div className="flex gap-4 p-5 bg-red-50/50 rounded-xl border border-red-100/50">
            <RefreshCw className="w-6 h-6 text-[#FF3B30] shrink-0 mt-0.5 animate-spin-slow" />
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              At <strong className="text-slate-900 font-semibold">MyHappyJourney</strong>, we understand that travel plans can change due to personal circumstances, schedule modifications, airline or hotel policies, weather conditions, and other unforeseen situations.
            </p>
          </div>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            This Cancellation &amp; Refund Policy explains the general terms applicable to cancellations, modifications, and refunds for travel services booked through <strong className="text-slate-900 font-medium">MyHappyJourney</strong>.
          </p>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100 italic">
            Because travel services are supplied by third-party airlines, hotels, resorts, transport operators, and tour operators, the individual cancellation and refund conditions will vary depending on the specific service booked.
          </p>

          <hr className="border-slate-100" />

          {/* Policy Sections */}
          <div className="space-y-8 text-slate-700 text-sm sm:text-base leading-relaxed">
            
            {/* Section 1 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">1</span>
                Booking Confirmation
              </h2>
              <p>A booking is considered confirmed only after:</p>
              <ul className="pl-6 list-disc space-y-1 text-slate-600 text-sm">
                <li>Required booking information has been received;</li>
                <li>Applicable payment or advance payment has been received; and</li>
                <li>MyHappyJourney or the relevant travel supplier has confirmed the booking.</li>
              </ul>
              <p className="text-slate-500 text-xs sm:text-sm italic">
                A quotation or itinerary provided before confirmation does not by itself guarantee availability or pricing. Prices and availability may change until the booking is confirmed.
              </p>
            </div>

            {/* Section 2 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">2</span>
                Cancellation by the Customer
              </h2>
              <p>
                If you wish to cancel a confirmed booking, you should contact MyHappyJourney as soon as possible. Cancellation charges may apply depending on:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-600 pl-4 list-disc text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  <span>Date of cancellation &amp; Travel dates</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  <span>Hotel and resort cancellation policies</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  <span>Airline fare rules &amp; Transport terms</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  <span>Tour/activity supplier guidelines</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  <span>Peak season / holiday-period conditions</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  <span>Any non-refundable booking components</span>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">3</span>
                Non-Refundable Bookings
              </h2>
              <p>Certain travel services may be completely or partially non-refundable. These may include:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-6 list-disc text-slate-600 text-xs sm:text-sm">
                <li>Non-refundable/promotional hotel rates</li>
                <li>Special package rates</li>
                <li>Airline tickets with non-refundable fares</li>
                <li>Visa and visa-related service fees</li>
                <li>Travel insurance premiums</li>
                <li>Certain peak-period bookings</li>
                <li>Attraction and activity tickets</li>
                <li>Processing or service fees</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">4</span>
                Hotel and Accommodation Cancellations
              </h2>
              <p>
                Hotel, resort, houseboat, and other accommodation bookings are subject to the cancellation policy of the respective property or supplier. Depending on the booking terms, cancellation may result in: no cancellation charge, partial cancellation charges, one or more nights being charged, full booking amount being forfeited, or loss of the advance payment.
              </p>
            </div>

            {/* Section 5 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">5</span>
                Flight Cancellation and Changes
              </h2>
              <p>
                Flight bookings are subject to the fare rules and cancellation policies of the respective airline. Airline cancellation charges, fare differences, taxes, penalties and other applicable charges may be deducted before any eligible refund is processed. Some airline fares may be non-refundable.
              </p>
            </div>

            {/* Section 6 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">6</span>
                Changes or Amendments to Bookings
              </h2>
              <p>
                Requests to change travel dates, hotels, room categories, number of travellers, flights, transportation, or activities may result in additional charges. Changes are subject to availability and the terms of the relevant travel supplier.
              </p>
            </div>

            {/* Section 7 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">7</span>
                Cancellation by MyHappyJourney or Travel Supplier
              </h2>
              <p>
                In exceptional circumstances, MyHappyJourney or a travel supplier may need to cancel or modify a service (e.g., severe weather, government restrictions, or force majeure events). Where a supplier provides a refund, credit, or alternative arrangement, we will communicate the available options to the customer.
              </p>
            </div>

            {/* Section 8 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">8</span>
                Force Majeure
              </h2>
              <p>
                MyHappyJourney shall not be responsible for losses, cancellations, or additional expenses arising from events beyond our reasonable control, including but not limited to: natural disasters, floods, earthquakes, cyclones, epidemics or pandemics, war, terrorism, government restrictions, strikes, or severe weather.
              </p>
            </div>

            {/* Section 9 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">9</span>
                Refund Processing
              </h2>
              <p>
                Where a refund is approved, the refund amount will generally be calculated after deducting supplier cancellation charges, airline penalties, hotel cancellation charges, processing fees, and service fees. Refunds will normally be made to the original payment method.
              </p>
            </div>

            {/* Section 10 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">10</span>
                Refund Timelines
              </h2>
              <p>
                Once MyHappyJourney receives the refundable amount from the relevant supplier or booking partner and the refund is approved, we will initiate the eligible refund within a reasonable processing period. The final credit to your bank account or payment method may take additional time depending on the payment provider or financial institution.
              </p>
            </div>

            {/* Section 11 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">11</span>
                Service and Convenience Fees
              </h2>
              <p>
                MyHappyJourney may charge service, administrative, processing, or convenience fees for certain bookings or services. Unless otherwise stated in writing, such fees may be non-refundable once the requested service has been provided or the booking process has commenced.
              </p>
            </div>

            {/* Section 12 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">12</span>
                No-Show Policy
              </h2>
              <p>
                If a customer fails to use a booked travel service without cancelling it in accordance with the applicable cancellation terms, it may be treated as a <strong>no-show</strong>. No-show bookings are generally non-refundable.
              </p>
            </div>

            {/* Section 13 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">13</span>
                Early Departure
              </h2>
              <p>
                If a customer voluntarily leaves a hotel, tour, or travel package earlier than the confirmed itinerary, refunds for unused services are not guaranteed and depend entirely on the terms of the respective supplier.
              </p>
            </div>

            {/* Section 14 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">14</span>
                Promotional and Special Offers
              </h2>
              <p>
                Special offers, discounted packages, and promotional rates may have specific cancellation and refund conditions. The specific booking terms applicable to a confirmed booking will take precedence over general terms stated in this policy.
              </p>
            </div>

            {/* Section 15 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">15</span>
                Travel Documents and Customer Responsibility
              </h2>
              <p>
                Customers are responsible for providing accurate information and ensuring that they possess the required travel documents (valid passport, visa, identity documents, travel permits, or health certificates). Refunds resulting from a customer's failure to obtain required documentation are subject to standard cancellation rules.
              </p>
            </div>

            {/* Section 16 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">16</span>
                Incorrect Information Provided by Customer
              </h2>
              <p>
                Customers are responsible for checking the accuracy of information provided during booking (passenger names, dates of birth, travel dates, passport details). Corrections or changes may result in additional charges, depending on the relevant supplier's rules.
              </p>
            </div>

            {/* Section 17 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">17</span>
                How to Request a Cancellation or Refund
              </h2>
              <p>
                To request a cancellation or refund, please contact MyHappyJourney using our contact details below. Please include: Customer name, booking reference, travel dates, service booked, and reason for cancellation. Our team will review the booking and inform you of the applicable cancellation charges.
              </p>
            </div>

            {/* Section 18 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">18</span>
                Refund Disputes
              </h2>
              <p>
                If you believe a refund has been incorrectly calculated or have concerns regarding a cancellation, please contact us. We will review the booking, supplier terms, and payment records and respond within a reasonable period.
              </p>
            </div>

            {/* Section 19 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">19</span>
                Policy Changes
              </h2>
              <p>
                MyHappyJourney may update this Cancellation &amp; Refund Policy from time to time to reflect changes in our services, supplier policies, or business practices. The updated version will be published on this page with a revised "Last Updated" date.
              </p>
            </div>

            {/* Section 20 */}
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">20</span>
                Contact Us
              </h2>
              <p>If you have questions about our cancellation rules or wish to submit a refund claim, please reach us:</p>
              
              {/* Office Contact Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="p-5 border border-slate-100 rounded-xl bg-slate-50 space-y-3">
                  <h3 className="font-bold text-slate-900">Claims &amp; Cancellations</h3>
                  <div className="space-y-2 text-xs sm:text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-[#FF3B30]" />
                      <a href="mailto:Yashwant@myhappyjourney.com" className="hover:underline">Yashwant@myhappyjourney.com</a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#FF3B30]" />
                      <a href="tel:+918197417772" className="hover:underline">+91 8197417772</a>
                    </div>
                    <div className="flex items-start gap-2 pt-1">
                      <MapPin className="w-4 h-4 text-[#FF3B30] shrink-0 mt-0.5" />
                      <span>
                        3rd Floor, 18th Main Road,<br />
                        Kumaraswamy Layout 2nd Stage,<br />
                        Bengaluru, Karnataka – 560078, India.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-5 border border-slate-100 rounded-xl bg-slate-50 space-y-3">
                  <h3 className="font-bold text-slate-900">Support Desks</h3>
                  <div className="space-y-2 text-xs sm:text-sm text-slate-600">
                    <p className="text-xs text-slate-500">
                      Our customer service desks operate 24/7 to support on-tour guests with critical re-routings or flight disruptions:
                    </p>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-[#FF3B30]" />
                      <a href="mailto:Yashwant@myhappyjourney.com" className="hover:underline">Yashwant@myhappyjourney.com</a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#FF3B30]" />
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
                  <a href="/cookie-policy" className="hover:underline font-medium">Cookie Policy</a>
                  <span className="text-slate-300">•</span>
                  <a href="/terms-conditions" className="hover:underline font-medium">Terms &amp; Conditions</a>
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
