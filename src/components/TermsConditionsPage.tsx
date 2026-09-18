'use client';

import React from 'react';
import { ArrowLeft, FileText, Calendar, Info, HelpCircle, Shield, CreditCard, ShieldAlert, CheckCircle2, AlertTriangle, Mail, Phone, MapPin } from 'lucide-react';

interface TermsConditionsPageProps {
  onBackToHome?: () => void;
  onNavigatePolicy?: (path: string) => void;
}

export const TermsConditionsPage: React.FC<TermsConditionsPageProps> = ({ onBackToHome, onNavigatePolicy }) => {
  const handleBack = () => {
    if (onBackToHome) {
      onBackToHome();
    } else {
      window.location.href = '/';
    }
  };

  const handleLinkClick = (path: string) => {
    if (onNavigatePolicy) {
      onNavigatePolicy(path);
    } else {
      window.location.href = path;
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
            Terms &amp; Booking Conditions
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
          <div className="flex gap-4 p-5 bg-blue-50/50 rounded-xl border border-blue-100/50">
            <Info className="w-6 h-6 text-[#0B389D] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-medium">
                Welcome to MyHappyJourney
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                These Terms &amp; Booking Conditions govern your use of the MyHappyJourney website and the purchase or booking of travel-related services through our platform.
              </p>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            By accessing our website, submitting an enquiry, requesting a quotation, making a payment or confirming a booking with MyHappyJourney, you acknowledge that you have read, understood and agreed to these Terms &amp; Booking Conditions.
          </p>

          <hr className="border-slate-100" />

          {/* Policy Sections */}
          <div className="space-y-10 text-slate-700 text-sm sm:text-base leading-relaxed">
            
            {/* Section 1 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">1</span>
                About MyHappyJourney
              </h2>
              <p>
                MyHappyJourney is a travel service provider offering domestic and international holiday packages, customised tours, hotel accommodation, transportation, sightseeing, activities and other travel-related services.
              </p>
              <p className="text-slate-500 text-xs sm:text-sm italic">
                Depending on the service, certain components of a booking may be provided by independent third-party suppliers such as airlines, hotels, resorts, houseboats, transport operators, tour operators, activity providers and destination management companies.
              </p>
            </div>

            {/* Section 2 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">2</span>
                Enquiries and Quotations
              </h2>
              <p>Travel quotations provided by MyHappyJourney may include:</p>
              <ul className="pl-6 list-disc space-y-1 text-slate-600 text-sm">
                <li>Accommodation</li>
                <li>Transportation</li>
                <li>Sightseeing</li>
                <li>Activities</li>
                <li>Meals</li>
                <li>Transfers</li>
                <li>Flights</li>
                <li>Other travel services specifically mentioned in the quotation</li>
              </ul>
              <p>
                Unless explicitly stated otherwise, a quotation is subject to availability and is not a confirmed booking. Prices, availability, hotel room categories, flight schedules and inclusions may change before confirmation.
              </p>
              <p className="text-slate-500 text-xs sm:text-sm italic">
                A quotation becomes a confirmed booking only after the required payment has been received and confirmation has been issued by MyHappyJourney or the relevant supplier.
              </p>
            </div>

            {/* Section 3 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">3</span>
                Booking Confirmation
              </h2>
              <p>A booking may require:</p>
              <ul className="pl-6 list-disc space-y-1 text-slate-600 text-sm">
                <li>Customer details &amp; Travel dates</li>
                <li>Number of travellers &amp; Passenger information</li>
                <li>Passport details where required</li>
                <li>Hotel preferences &amp; other parameters</li>
                <li>Advance payment or full payment, depending on the booking</li>
              </ul>
              <p>
                The booking confirmation issued by MyHappyJourney will specify the applicable services, dates, inclusions and other relevant conditions. Customers should carefully review the confirmation and immediately notify us of any errors.
              </p>
            </div>

            {/* Section 4 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">4</span>
                Prices and Taxes
              </h2>
              <p>Travel package prices may vary depending on:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-600 pl-4 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  <span>Travel dates &amp; Seasonality</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  <span>Hotel availability &amp; Room category</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  <span>Number of travellers &amp; Cab size</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  <span>Government taxes &amp; supplier pricing</span>
                </div>
              </div>
              <p>
                Unless specifically stated, prices may not include personal expenses, optional activities, additional meals, visa fees, travel insurance, tourism taxes or other charges not mentioned in the quotation.
              </p>
            </div>

            {/* Section 5 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">5</span>
                Payment Terms
              </h2>
              <p>
                Payment requirements may vary depending on the travel service and supplier. Customers may be required to pay:
              </p>
              <ul className="pl-6 list-disc space-y-1 text-slate-600 text-sm">
                <li>An advance amount to confirm a booking</li>
                <li>Partial payments according to an agreed schedule</li>
                <li>Full payment before travel</li>
                <li>Additional payment for amendments or upgrades</li>
              </ul>
              <p className="text-slate-500 text-xs sm:text-sm italic">
                A booking may not be considered confirmed until the required payment has been received and the booking confirmation has been issued.
              </p>
            </div>

            {/* Section 6 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">6</span>
                Payment Methods
              </h2>
              <p>
                MyHappyJourney may accept payments through available payment methods, including bank transfer, online payment gateways, UPI or other methods communicated by our team. Customers should retain payment receipts or transaction references for their records.
              </p>
            </div>

            {/* Section 7 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">7</span>
                Hotel and Accommodation
              </h2>
              <p>
                Hotel, resort, houseboat and accommodation bookings are subject to the terms and policies of the respective property or supplier.
              </p>
              <p>
                Room allocation, room category, bed configuration, extra beds, meals and other facilities will be based on the confirmed booking. Hotel check-in and check-out times are determined by the respective property. Early check-in and late check-out are subject to availability and may involve additional charges.
              </p>
            </div>

            {/* Section 8 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">8</span>
                Transportation
              </h2>
              <p>
                Transportation services are subject to vehicle availability and the terms communicated in the confirmed itinerary. Vehicle type may vary depending on:
              </p>
              <ul className="pl-6 list-disc space-y-1 text-slate-600 text-sm">
                <li>Number of passengers &amp; Luggage limits</li>
                <li>Route conditions &amp; local operating regulations</li>
                <li>Supplier arrangements</li>
              </ul>
              <p className="text-slate-500 text-xs sm:text-sm italic">
                Additional charges may apply for services outside the confirmed itinerary, including additional kilometres, additional hours, extra sightseeing or route changes.
              </p>
            </div>

            {/* Section 9 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">9</span>
                Flight Bookings
              </h2>
              <p>
                Flights are subject to the airline's fare rules, terms and conditions. Flight schedules, timings, aircraft, routes and seat availability may change due to circumstances determined by the airline.
              </p>
              <p>
                Passengers are responsible for complying with airline requirements relating to: check-in, baggage, identification, passport validity, visa requirements, boarding times, and other airline rules. MyHappyJourney is not responsible for airline schedule changes, delays, cancellations, denied boarding or baggage issues caused by the airline, subject to applicable law.
              </p>
            </div>

            {/* Section 10 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">10</span>
                Passport, Visa and Travel Documents
              </h2>
              <p>
                Customers are responsible for ensuring that they have all documents required for their journey. These may include:
              </p>
              <ul className="pl-6 list-disc space-y-1 text-slate-600 text-sm">
                <li>Valid passport (with at least 6 months validity)</li>
                <li>Appropriate visa &amp; entry permits</li>
                <li>Travel insurance &amp; transit visas</li>
                <li>Identification documents &amp; health documentation</li>
              </ul>
              <p>
                MyHappyJourney may assist with travel information or visa-related services where offered, but the final decision to issue a visa or permit rests with the relevant government authority. Customers should verify applicable entry requirements before travel.
              </p>
            </div>

            {/* Section 11 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">11</span>
                Customer Information
              </h2>
              <p>
                Customers are responsible for providing accurate information during the booking process. This includes: Passenger names (matching passport/ID), Date of birth, Gender, Contact information, and travel dates.
              </p>
              <p className="text-slate-500 text-xs sm:text-sm italic">
                Incorrect information may result in additional charges or inability to provide a particular service. Any correction fees charged by airlines, hotels or other suppliers may be payable by the customer.
              </p>
            </div>

            {/* Section 12 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">12</span>
                Changes to an Itinerary
              </h2>
              <p>
                Customers may request changes to a confirmed itinerary. Changes may include travel dates, hotels, room categories, flights, transportation, sightseeing, activities, number of travellers, or destinations.
              </p>
              <p>
                Changes are subject to availability and supplier terms. Additional charges may apply for amendments, including fare differences, hotel charges, transport charges and administrative or service fees.
              </p>
            </div>

            {/* Section 13 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">13</span>
                Cancellation and Refunds
              </h2>
              <p>
                Cancellation and refund conditions depend on the individual services included in the booking. Different suppliers may have different cancellation policies.
              </p>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-2">
                <p className="text-slate-700 text-sm font-semibold">
                  For detailed information regarding cancellation charges and refunds, please refer to our:
                </p>
                <button
                  onClick={() => handleLinkClick('/cancellation-refund')}
                  className="inline-flex items-center gap-1.5 text-sm text-[#FF3B30] hover:text-red-700 font-bold transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  Cancellation &amp; Refund Policy
                </button>
              </div>
              <p className="text-slate-500 text-xs sm:text-sm italic">
                Where a supplier does not provide a refund, MyHappyJourney may not be able to provide a refund for that component, subject to applicable law.
              </p>
            </div>

            {/* Section 14 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">14</span>
                No-Show
              </h2>
              <p>
                If a customer does not use a confirmed service without cancelling it according to the applicable cancellation terms, the booking may be treated as a no-show and no-show charges may apply. Examples include:
              </p>
              <ul className="pl-6 list-disc space-y-1 text-slate-600 text-sm">
                <li>Not checking into a hotel</li>
                <li>Not boarding a flight</li>
                <li>Not reporting for a scheduled transfer</li>
                <li>Not attending a booked activity or tour</li>
              </ul>
              <p>
                No-show bookings may be non-refundable depending on supplier terms.
              </p>
            </div>

            {/* Section 15 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">15</span>
                Itinerary Changes by Suppliers
              </h2>
              <p>
                Travel suppliers may occasionally change schedules, routes, hotel arrangements, transportation or activities due to operational or other circumstances.
              </p>
              <p>
                Where reasonably possible, MyHappyJourney will inform customers of significant changes and assist with available alternatives. Alternative arrangements may be subject to additional charges depending on the circumstances and supplier policies.
              </p>
            </div>

            {/* Section 16 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">16</span>
                Force Majeure
              </h2>
              <p>
                MyHappyJourney shall not be liable for failure, delay or modification of services caused by circumstances beyond reasonable control. Such circumstances may include: natural disasters, floods, earthquakes, cyclones, severe weather, pandemics, war, terrorism, civil unrest, government restrictions, strikes, airline/transport disruptions, closure of attractions, and other unforeseen events.
              </p>
              <p className="text-slate-500 text-xs sm:text-sm italic">
                In such situations, MyHappyJourney will make reasonable efforts to assist customers with available alternatives, rescheduling, credits or refunds offered by relevant suppliers.
              </p>
            </div>

            {/* Section 17 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">17</span>
                Travel Insurance
              </h2>
              <p>
                Customers are strongly encouraged to obtain appropriate travel insurance before travelling. Depending on the policy, travel insurance may provide protection against certain events such as: medical emergencies, trip cancellation/interruption, lost baggage, travel delays, and other covered risks.
              </p>
              <p className="text-slate-500 text-xs sm:text-sm italic">
                MyHappyJourney is not an insurer unless specifically stated otherwise.
              </p>
            </div>

            {/* Section 18 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">18</span>
                Personal Expenses
              </h2>
              <p>
                Unless expressly included in the confirmed itinerary, customers are responsible for personal expenses such as food/beverages outside the stated meal plan, laundry, room service, telephone charges, mini-bar expenses, tips and gratuities, shopping, optional activities, additional sightseeing, visa fees, and insurance.
              </p>
            </div>

            {/* Section 19 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">19</span>
                Sightseeing and Activities
              </h2>
              <p>
                Sightseeing and activities included in a package are subject to availability, operating schedules, weather conditions and local regulations. Certain attractions may close temporarily or change their operating hours.
              </p>
              <p>
                If an included activity becomes unavailable due to circumstances outside our reasonable control, MyHappyJourney will attempt to provide a suitable alternative where reasonably possible.
              </p>
            </div>

            {/* Section 20 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">20</span>
                Customer Conduct
              </h2>
              <p>
                Customers are expected to behave responsibly and comply with applicable laws, hotel rules, airline regulations, local regulations and instructions from service providers.
              </p>
              <p className="text-slate-500 text-xs sm:text-sm italic">
                MyHappyJourney reserves the right to discontinue assistance or services where a customer's behaviour creates a serious safety, security or legal concern. Any resulting costs or losses may be payable by the customer where permitted by law.
              </p>
            </div>

            {/* Section 21 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">21</span>
                Website Information
              </h2>
              <p>
                MyHappyJourney makes reasonable efforts to keep website information accurate and current. However, destination information, hotel facilities, prices, schedules and other travel information may change.
              </p>
              <p className="text-slate-500 text-xs sm:text-sm italic">
                Images displayed on the website may be for illustrative purposes and may not always represent the exact room, vehicle, facility or service provided. The confirmed booking documents will take precedence over general website descriptions where applicable.
              </p>
            </div>

            {/* Section 22 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">22</span>
                Third-Party Suppliers
              </h2>
              <p>
                MyHappyJourney may arrange services provided by independent third parties, including airlines, hotels, resorts, houseboats, transport companies, tour operators, activity providers, destination management companies, visa service providers, and payment providers.
              </p>
              <p>
                Such suppliers may have their own terms, conditions and cancellation policies. Customers agree to comply with the applicable terms of the suppliers providing their travel services.
              </p>
            </div>

            {/* Section 23 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">23</span>
                Website Use
              </h2>
              <p>You agree not to:</p>
              <ul className="pl-6 list-disc space-y-1 text-slate-600 text-sm">
                <li>Use the website for unlawful purposes</li>
                <li>Attempt to gain unauthorised access to website systems</li>
                <li>Interfere with website operation</li>
                <li>Submit false or misleading information</li>
                <li>Use automated systems to abuse or disrupt the website</li>
                <li>Copy or misuse website content without permission</li>
              </ul>
              <p>
                MyHappyJourney reserves the right to restrict or terminate access where misuse is identified.
              </p>
            </div>

            {/* Section 24 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">24</span>
                Intellectual Property
              </h2>
              <p>
                Unless otherwise stated, website content including text, photographs, graphics, logos, designs, videos and other materials is owned by or licensed to MyHappyJourney. Such content may not be reproduced, copied, modified, distributed or commercially used without prior written permission.
              </p>
            </div>

            {/* Section 25 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">25</span>
                Privacy
              </h2>
              <p>
                Personal information provided to MyHappyJourney is handled in accordance with our{' '}
                <button
                  onClick={() => handleLinkClick('/privacy-policy')}
                  className="text-[#0B389D] hover:underline font-bold"
                >
                  Privacy Policy
                </button>
                . For information about cookies and tracking technologies, please refer to our{' '}
                <button
                  onClick={() => handleLinkClick('/cookie-policy')}
                  className="text-[#0B389D] hover:underline font-bold"
                >
                  Cookie Policy
                </button>
                .
              </p>
            </div>

            {/* Section 26 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">26</span>
                Complaints and Customer Support
              </h2>
              <p>
                If you experience an issue during your trip, please contact MyHappyJourney as soon as reasonably possible so that we can attempt to assist you while the service is being provided.
              </p>
              <p>
                For post-travel complaints, please contact us with your booking reference, customer name, travel dates, details of the issue, and any relevant supporting documents or photographs, where applicable. We will review the matter and communicate with the relevant supplier where necessary.
              </p>
            </div>

            {/* Section 27 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">27</span>
                Limitation of Liability
              </h2>
              <p>
                MyHappyJourney will make reasonable efforts to arrange the travel services included in your confirmed booking. However, where services are provided by independent suppliers, MyHappyJourney is not responsible for circumstances caused by those suppliers or events beyond our reasonable control, except to the extent required by applicable law.
              </p>
              <p className="text-slate-500 text-xs sm:text-sm italic">
                Nothing in these Terms &amp; Booking Conditions is intended to exclude or limit any liability or consumer right that cannot legally be excluded or limited.
              </p>
            </div>

            {/* Section 28 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">28</span>
                Governing Law
              </h2>
              <p>
                These Terms &amp; Booking Conditions shall be governed by the applicable laws of India. Subject to applicable consumer protection and other mandatory laws, disputes shall be subject to the jurisdiction of the appropriate courts in <strong className="text-slate-900">Bengaluru, Karnataka, India</strong>.
              </p>
            </div>

            {/* Section 29 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">29</span>
                Changes to These Terms
              </h2>
              <p>
                MyHappyJourney may update these Terms &amp; Booking Conditions from time to time. The latest version will be published on this page with the applicable &quot;Last Updated&quot; date.
              </p>
              <p className="text-slate-500 text-xs sm:text-sm italic">
                The terms applicable to a confirmed booking may also include specific conditions communicated in the quotation, invoice, booking confirmation or supplier terms.
              </p>
            </div>

            {/* Section 30 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">30</span>
                Contact Us
              </h2>
              <p>
                For bookings, cancellations, amendments, complaints or questions regarding these Terms &amp; Booking Conditions, please contact:
              </p>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200/60 space-y-3 text-slate-600">
                <p className="font-bold text-slate-900 text-base">MyHappyJourney Private Limited</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="flex items-start gap-2.5">
                    <Mail className="w-4 h-4 text-[#FF3B30] shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm">
                      <p className="font-semibold text-slate-800">Email Us</p>
                      <a href="mailto:Yashwant@myhappyjourney.com" className="hover:underline text-slate-600">Yashwant@myhappyjourney.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2.5">
                    <Phone className="w-4 h-4 text-[#FF3B30] shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm">
                      <p className="font-semibold text-slate-800">Call Us</p>
                      <a href="tel:+918197417772" className="hover:underline text-slate-600">+91 8197417772</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#FF3B30] shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm">
                      <p className="font-semibold text-slate-800">Office Location</p>
                      <p className="text-slate-500 leading-tight">3rd Floor, 18th Main Road, Kumaraswamy Layout 2nd Stage, Bengaluru, Karnataka – 560078, India.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <hr className="border-slate-100" />

          {/* Related Policies Navigation Block */}
          <div className="pt-2 text-center">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Related Policies</h3>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs sm:text-sm text-slate-500">
              <button onClick={() => handleLinkClick('/privacy-policy')} className="hover:text-slate-800 font-medium hover:underline transition-colors">Privacy Policy</button>
              <span className="text-slate-300">•</span>
              <button onClick={() => handleLinkClick('/cookie-policy')} className="hover:text-slate-800 font-medium hover:underline transition-colors">Cookie Policy</button>
              <span className="text-slate-300">•</span>
              <button onClick={() => handleLinkClick('/cancellation-refund')} className="hover:text-slate-800 font-medium hover:underline transition-colors">Cancellation &amp; Refund Policy</button>
              <span className="text-slate-300">•</span>
              <button onClick={() => handleLinkClick('/contact-us')} className="hover:text-slate-800 font-medium hover:underline transition-colors">Contact Us</button>
            </div>
            
            <p className="text-xs text-slate-400 mt-10">
              &copy; 2026 MyHappyJourney. All Rights Reserved.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};
