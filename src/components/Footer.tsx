'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, X } from 'lucide-react';
import { Logo } from './Logo';
import { PHONE_NUMBER, WHATSAPP_NUMBER } from '../data/tourData';
import { DOMESTIC_DESTINATIONS, INTERNATIONAL_DESTINATIONS } from '../data/destinations';

interface FooterProps {
  onSelectDestination?: (destName: string) => void;
  onNavigate?: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectDestination, onNavigate }) => {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | 'cookies' | 'cancellation' | null>(null);

  const handleDestinationClick = (name: string) => {
    if (name.toLowerCase().includes('kerala') && onNavigate) {
      onNavigate('/kerala');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (onSelectDestination) {
      onSelectDestination(name);
    }
    const elem = document.getElementById('packages-section');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLinkClick = (pathOrId: string, isRoute: boolean = false) => {
    if (isRoute && onNavigate) {
      onNavigate(pathOrId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const elem = document.getElementById(pathOrId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <footer className="bg-[#071321] text-slate-300 pt-16 pb-24 md:pb-12 border-t border-slate-800/80 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14">
            
            {/* Column 1: Company Profile (5 Cols) */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-block bg-white px-3.5 py-1.5 rounded-2xl shadow-xs border border-white/20">
                <Logo size="sm" />
              </div>

              <p className="text-xs sm:text-[13px] text-slate-300/85 leading-relaxed max-w-md font-normal">
                Bespoke tour operator crafting transformative holidays across Incredible India and Southeast Asia since 2007. Over 150+ ground specialists and 5,000+ happy guests.
              </p>

              {/* Contact Information */}
              <div className="space-y-3 pt-2 text-xs sm:text-[13px]">
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
                >
                  <Phone className="w-4 h-4 text-[#FF9900] group-hover:scale-110 transition-transform shrink-0 stroke-[2]" />
                  <span className="font-medium tracking-wide">+91-8197417772</span>
                </a>

                <a
                  href="mailto:info@myhappyjourney.com"
                  className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
                >
                  <Mail className="w-4 h-4 text-[#FF9900] group-hover:scale-110 transition-transform shrink-0 stroke-[2]" />
                  <span className="font-medium">info@myhappyjourney.com</span>
                </a>

                <div className="flex items-start gap-3 text-slate-300/90">
                  <MapPin className="w-4 h-4 text-[#FF9900] shrink-0 mt-0.5 stroke-[2]" />
                  <span className="leading-relaxed">
                    3rd floor, 18th Main Rd, Kumaraswamy Layout 2nd Stage, Bengaluru, Karnataka 560078
                  </span>
                </div>
              </div>
            </div>

            {/* Column 2: Quick Links (3.5 Cols) */}
            <div className="lg:col-span-3">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                Company &amp; Services
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-[13px]">
                <li>
                  <button
                    onClick={() => handleLinkClick('/', true)}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleLinkClick('/about-us', true)}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleLinkClick('/packages', true)}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Tour Packages &amp; Itineraries
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleLinkClick('/reviews', true)}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Guest Reviews &amp; Testimonials
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleLinkClick('why-us-section')}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Why Choose MyHappyJourney
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleLinkClick('/contact-us', true)}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Contact Us &amp; Office
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate ? onNavigate('/privacy-policy') : setLegalModal('privacy')}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate ? onNavigate('/cookie-policy') : setLegalModal('cookies')}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Cookie Policy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate ? onNavigate('/cancellation-refund') : setLegalModal('cancellation')}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Cancellation &amp; Refund Policy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate ? onNavigate('/terms-conditions') : setLegalModal('terms')}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Terms &amp; Booking Conditions
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Featured Getaways (3.5 Cols) */}
            <div className="lg:col-span-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                Popular Tour Destinations
              </h4>
              <div className="flex flex-wrap gap-2">
                {DOMESTIC_DESTINATIONS.map((d) => (
                  <button
                    key={d.id}
                    onClick={() => handleDestinationClick(d.name)}
                    className="text-xs bg-slate-800/80 hover:bg-[#0B389D] text-slate-300 hover:text-white px-3 py-1.5 rounded-lg transition-colors border border-slate-700/60"
                  >
                    {d.name} Tour Packages
                  </button>
                ))}
                {INTERNATIONAL_DESTINATIONS.slice(0, 4).map((d) => (
                  <button
                    key={d.id}
                    onClick={() => handleDestinationClick(d.name)}
                    className="text-xs bg-slate-800/80 hover:bg-[#0B389D] text-slate-300 hover:text-white px-3 py-1.5 rounded-lg transition-colors border border-slate-700/60"
                  >
                    {d.name} Holidays
                  </button>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-xs font-bold text-[#FF9900] mb-1">
                  100% Tailor-Made Guarantee
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Every tour can be modified with personalized hotel upgrades, private cab types, and tailored sightseeing durations.
                </p>
              </div>
            </div>

          </div>

          {/* Bottom Divider */}
          <div className="border-t border-slate-800/80 pt-8 pb-4 text-center space-y-1.5">
            <p className="text-xs text-slate-400">
              © {new Date().getFullYear()} MyHappyJourney Private Limited. All rights reserved. Registered Indian Tour Operator Since 2007.
            </p>
            <p className="text-[11px] text-slate-500">
              Crafted for exceptional travel experiences across India and abroad.
            </p>
          </div>

        </div>
      </footer>

      {/* Modal for Privacy Policy / Cookie Policy / Terms & Conditions */}
      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
          <div className={`bg-white text-slate-800 ${legalModal === 'privacy' || legalModal === 'cookies' || legalModal === 'cancellation' ? 'max-w-3xl' : 'max-w-lg'} w-full rounded-2xl p-6 sm:p-8 shadow-2xl relative border border-slate-200 animate-in fade-in zoom-in-95 duration-150`}>
            <button
              onClick={() => setLegalModal(null)}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">
              {legalModal === 'privacy' ? 'Privacy Policy' : legalModal === 'cookies' ? 'Cookie Policy' : legalModal === 'cancellation' ? 'Cancellation & Refund Policy' : 'Terms & Conditions'}
            </h3>
            {(legalModal === 'privacy' || legalModal === 'cookies' || legalModal === 'cancellation') && (
              <p className="text-xs text-slate-500 mb-4">Last Updated: 18 September 2026</p>
            )}

            <div className="text-xs sm:text-sm text-slate-600 space-y-4 leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
              {legalModal === 'privacy' ? (
                <>
                  <p>
                    At <strong>MyHappyJourney</strong>, we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, store and protect your information when you visit our website, submit an enquiry, request a quotation, make a booking or use our travel services.
                  </p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">1. Information We Collect</h4>
                  <p>We may collect information that you provide to us, including: Name, mobile number, email address, city/location, travel dates, destination and package preferences, number of travellers, hotel and room preferences, passport and travel info, date of birth and gender (where required by carriers), payment details, and any voluntarily shared data.</p>
                  <p className="text-xs text-slate-500 italic">We also automatically gather server logging parameters: IP address, browser types, device profiles, visited URLs, and analytical usage metrics.</p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">2. How We Use Your Information</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Respond to your enquiries and prepare custom quotes.</li>
                    <li>Secure hotels, flights, transport, and tours.</li>
                    <li>Manage bookings, payments, refunds, and support inquiries.</li>
                    <li>Prevent fraud and comply with legal regulatory mandates.</li>
                  </ul>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">3. Sharing of Information</h4>
                  <p>To deliver booked services, we share necessary data with trusted suppliers (Airlines, Hotels, Cab Providers, DMC coordinators, CRM hosts, and payment gateways). We share only the minimal details required for bookings.</p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">4. Payment Information</h4>
                  <p>Payments are handled via secure third-party portals. MyHappyJourney does not store full credit card, debit card, or complete banking credentials on our local servers.</p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">5. Cookies</h4>
                  <p>Our website utilizes cookies to optimize navigation, preserve your select preferences, audit web traffic patterns, and deliver enhanced marketing campaigns. You may configure cookies via browser settings.</p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">6. Advertising and Analytics</h4>
                  <p>We use third-party platforms such as Google Analytics, Google Ads, and Meta marketing pixels. These services record user actions in accordance with their respective privacy codes.</p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">7. WhatsApp, Phone and Email Communications</h4>
                  <p>Communication details sent via WhatsApp, email, or telephone are securely retained to provide ongoing travel support, log CRM entries, and coordinate itinerary logistics.</p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">8. Marketing Communications</h4>
                  <p>With consent and where permitted, we may share updates, holiday packages, and news. You may opt out of communications at any time by clicking unsubscribe.</p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">9. Data Security</h4>
                  <p>We leverage advanced technical and organizational firewalls to safeguard data. However, please remember that no web storage or transfer flow can be guaranteed as 100% immune.</p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">10. Data Retention</h4>
                  <p>We retain personal information exclusively for as long as needed to fulfill bookings, comply with accounting rules, resolve disputes, and honor compliance rules.</p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">11. Your Privacy Rights</h4>
                  <p>Subject to guidelines, you hold rights to: Request correction/erasure of data, access personal logs, or withdraw processing consent. Reach us via contact details below to exercise rights.</p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">12. Third-Party Websites</h4>
                  <p>We are not responsible for the privacy structures of external links (Airlines, hotel partners, payment gateways). Please check their respective policies first.</p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">13. Children's Privacy</h4>
                  <p>Our travel systems do not knowingly process details of minors without appropriate parental or legal guardian coordination.</p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">14. Changes to This Privacy Policy</h4>
                  <p>We may periodically revise this policy. Updates become immediately active upon posting with a new "Last Updated" timestamp.</p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">15. Contact Us</h4>
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 space-y-1.5 text-xs sm:text-sm text-slate-600">
                    <p className="font-bold text-slate-900">MyHappyJourney Private Limited</p>
                    <p><strong>Email:</strong> Yashwant@myhappyjourney.com</p>
                    <p><strong>Phone:</strong> +91 8197417772</p>
                    <p><strong>Address:</strong> 3rd Floor, 18th Main Road, Kumaraswamy Layout 2nd Stage, Bengaluru, Karnataka – 560078, India.</p>
                  </div>
                </>
              ) : legalModal === 'cookies' ? (
                <>
                  <p>
                    At <strong>MyHappyJourney</strong>, we use cookies and similar technologies to provide a better, safer and more personalised experience when you browse our website, explore holiday packages, request travel quotations or contact our travel experts.
                  </p>
                  <p>
                    This Cookie Policy explains what cookies are, how <strong>MyHappyJourney</strong> uses cookies, how third-party services such as analytics and advertising platforms may use cookies, and how you can manage your cookie preferences.
                  </p>
                  <p>
                    MyHappyJourney provides domestic and international holiday packages, customised tours, travel planning, hotel bookings, transportation and travel assistance.
                  </p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">1. What Are Cookies?</h4>
                  <p>Cookies are small text files stored on your computer, smartphone, tablet or other internet-enabled device when you visit a website. They allow websites to recognise a device, remember preferences, understand website usage and provide certain functionality.</p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">2. Why MyHappyJourney Uses Cookies</h4>
                  <p>We use cookies to: keep our travel website functioning properly, improve website speed/performance, remember your preferences, understand how visitors interact with our holiday pages, measure enquiries and website conversions, understand campaign reach, and optimize Google Ads and Meta campaign setups.</p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">3. Types of Cookies We Use</h4>
                  <p><strong>Essential Cookies:</strong> Required for security, navigation, protecting against fraudulent activity, and maintaining enquiry or contact forms.</p>
                  <p><strong>Analytics Cookies:</strong> Help us study volume, pages viewed, approximate locations, and durations using services like Google Analytics.</p>
                  <p><strong>Advertising Cookies:</strong> Help measure conversion actions (quotes, bookings, WhatsApp clicks) triggered by Google Ads and Meta platforms.</p>
                  <p><strong>Functional Cookies:</strong> Allow our website to remember selected settings, preferences, or previously selected options.</p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">4. Google Ads and Conversion Measurement</h4>
                  <p>MyHappyJourney may use Google Ads to promote travel offers. Google identifiers measure whether user clicks led to key conversion milestones like submitting an enquiry form, requesting a travel quote, or clicking a WhatsApp chat link.</p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">5. Google Analytics</h4>
                  <p>We use Google Analytics to evaluate site volume, organic and paid referrals, device and browser settings, geographic origins, and page journeys to improve the customer planning interface.</p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">6. Meta and Other Advertising Platforms</h4>
                  <p>We utilize tracking codes from Meta or other social networks to evaluate advertising clicks and custom conversion results according to their independent privacy standards.</p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">7. Third-Party Cookies</h4>
                  <p>Selected third-party systems integrated across our website (such as Google Maps, social plug-ins, analytical modules, or live support providers) may place cookies subject to their standalone rules.</p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">8. WhatsApp, Telephone and Communication Links</h4>
                  <p>Interacting with external click links (WhatsApp APIs, email interfaces, phone portals) can transfer your session to third-party platforms governed by their own legal frameworks.</p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">9. Managing Your Cookie Preferences</h4>
                  <p>You can adjust, reject, or wipe existing cookies directly from your web browser. Note that rejecting essential cookies might disable standard security layers or impact contact forms.</p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">10. Cookie Consent</h4>
                  <p>Where legally required, we request explicit consent before deploying optional non-essential tracking cookies. You may toggle preferences at any time.</p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">11. Personal Information and Cookies</h4>
                  <p>Cookies do not normally identify you directly. However, tracking values can be connected with personal particulars you directly share. Read our Privacy Policy to understand more.</p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">12. Travel Enquiries and Lead Generation</h4>
                  <p>Details shared through quotes or bookings are strictly processed to draft customized itineraries, secure hotel reservations, and organize tours. Cookies simply evaluate campaign origin.</p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">13. Data Security</h4>
                  <p>We execute advanced technical blockades and encryption to defend database records, but note that no web-based electronic transfer holds an absolute guarantee.</p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">14. Changes to This Cookie Policy</h4>
                  <p>We update this Cookie Policy periodically to align with legal guidelines or website feature upgrades. Changes go live immediately upon posting with an updated "Last Updated" timestamp.</p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">15. Contact MyHappyJourney</h4>
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 space-y-1.5 text-xs sm:text-sm text-slate-600">
                    <p className="font-bold text-slate-900">MyHappyJourney Private Limited</p>
                    <p><strong>Email:</strong> Yashwant@myhappyjourney.com</p>
                    <p><strong>Phone:</strong> +91 8197417772</p>
                    <p><strong>Address:</strong> 3rd Floor, 18th Main Road, Kumaraswamy Layout 2nd Stage, Bengaluru, Karnataka – 560078, India.</p>
                  </div>
                </>
              ) : legalModal === 'cancellation' ? (
                <>
                  <p>
                    At <strong>MyHappyJourney</strong>, we understand that travel plans can change due to personal circumstances, changes in schedules, airline or hotel policies, weather conditions and other unforeseen situations.
                  </p>
                  <p>
                    This Cancellation &amp; Refund Policy explains the general terms applicable to cancellations, modifications and refunds for travel services booked through <strong>MyHappyJourney</strong>.
                  </p>
                  <p>
                    Because travel services are supplied by airlines, hotels, resorts, transport operators, tour operators and other third-party suppliers, the cancellation and refund conditions may vary depending on the service booked.
                  </p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">1. Booking Confirmation</h4>
                  <p>A booking is considered confirmed only after required booking information, applicable payment or advance payment has been received, and MyHappyJourney or the relevant travel supplier has confirmed the booking. Prices and availability may change until the booking is confirmed.</p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">2. Cancellation by the Customer</h4>
                  <p>If you wish to cancel a confirmed booking, you should contact MyHappyJourney as soon as possible. Cancellation charges may apply depending on the date of cancellation, travel date, hotel rules, airline fare policies, transport operator guidelines, and seasonal peaks.</p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">3. Non-Refundable Bookings</h4>
                  <p>Certain travel services may be completely or partially non-refundable. These may include promotional/special hotel rates, special package rates, airline tickets with non-refundable fares, visa fees, travel insurance premiums, and attraction/event tickets.</p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">4. Hotel and Accommodation Cancellations</h4>
                  <p>Hotel, resort, houseboat and other accommodation bookings are subject to the cancellation policy of the respective property or supplier.</p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">5. Flight Cancellation and Changes</h4>
                  <p>Flight bookings are subject to the fare rules and cancellation policies of the respective airline. Some fares may be entirely non-refundable.</p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">6. Changes or Amendments to Bookings</h4>
                  <p>Requests to change travel dates, hotels, room categories, number of travellers, flights, or packages may result in additional charges.</p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">7. Cancellation by MyHappyJourney or Travel Supplier</h4>
                  <p>In exceptional circumstances (severe weather, natural disasters, safety concerns), MyHappyJourney or a travel supplier may need to cancel or modify a service. Where a supplier provides a refund or credit, we will communicate the options to you.</p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">8. Force Majeure</h4>
                  <p>MyHappyJourney shall not be responsible for losses, cancellations or additional expenses arising from events beyond our reasonable control, including earthquakes, pandemics, civil unrest, or transport disruptions.</p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">9. Refund Processing</h4>
                  <p>Refunds are calculated after deducting supplier cancellation fees, penalties, and non-refundable processing charges. Approved refunds are normally credited to the original payment method.</p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">10. Refund Timelines</h4>
                  <p>Once MyHappyJourney receives the refundable amount from the relevant supplier and the refund is approved for processing, we will initiate the eligible refund within a reasonable processing period.</p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">11. Service and Convenience Fees</h4>
                  <p>Service, administrative, processing, or convenience fees charged by MyHappyJourney are non-refundable once the service has been provided or the booking process has commenced.</p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">12. No-Show Policy</h4>
                  <p>If a customer fails to use a booked travel service without cancelling it in accordance with the terms, it will be treated as a no-show and is non-refundable.</p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">13. Early Departure</h4>
                  <p>If you leave a hotel, tour, or package earlier than the confirmed itinerary, refunds for unused services are not guaranteed and depend entirely on supplier terms.</p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">14. Promotional and Special Offers</h4>
                  <p>Special offers, discounted packages, and promotional rates may have specific cancellation conditions that override general terms.</p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">15. Travel Documents and Customer Responsibility</h4>
                  <p>Customers are responsible for possessing valid travel documents (passport, visa, permits, vaccination documents). Refunds are not provided for issues arising from missing documentation.</p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">16. Incorrect Information Provided by Customer</h4>
                  <p>Customers must ensure passenger names, dates, and other parameters are correct. Modifications or corrections are subject to supplier charges.</p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">17. How to Request a Cancellation or Refund</h4>
                  <p>Contact MyHappyJourney via email at <strong>Yashwant@myhappyjourney.com</strong> or phone at <strong>+91 8197417772</strong> with your customer name, booking reference, and travel dates.</p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">18. Refund Disputes</h4>
                  <p>If you have concerns about a refund calculation, please reach out to us and our support team will review the payment and supplier logs.</p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">19. Policy Changes</h4>
                  <p>MyHappyJourney may update this Cancellation &amp; Refund Policy from time to time to reflect operational or regulatory amendments.</p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">20. Contact Us</h4>
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 space-y-1.5 text-xs sm:text-sm text-slate-600">
                    <p className="font-bold text-slate-900">MyHappyJourney Private Limited</p>
                    <p><strong>Email:</strong> Yashwant@myhappyjourney.com</p>
                    <p><strong>Phone:</strong> +91 8197417772</p>
                    <p><strong>Address:</strong> 3rd Floor, 18th Main Road, Kumaraswamy Layout 2nd Stage, Bengaluru, Karnataka – 560078, India.</p>
                  </div>
                </>
              ) : (
                <>
                  <p>
                    Welcome to <strong>MyHappyJourney</strong>. These Terms &amp; Booking Conditions govern your use of the MyHappyJourney website and the purchase or booking of travel-related services through our platform.
                  </p>
                  <p>
                    By accessing our website, submitting an enquiry, requesting a quotation, making a payment or confirming a booking with MyHappyJourney, you acknowledge that you have read, understood and agreed to these Terms &amp; Booking Conditions.
                  </p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">1. About MyHappyJourney</h4>
                  <p>MyHappyJourney is a travel service provider offering domestic and international holiday packages, customised tours, hotel accommodation, transportation, sightseeing, activities and other travel-related services.</p>
                  <p>Depending on the service, certain components of a booking may be provided by independent third-party suppliers such as airlines, hotels, resorts, houseboats, transport operators, tour operators, activity providers and destination management companies.</p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">2. Enquiries and Quotations</h4>
                  <p>Travel quotations provided by MyHappyJourney may include accommodation, transportation, sightseeing, activities, meals, transfers, flights, and other travel services specifically mentioned in the quotation.</p>
                  <p>Unless explicitly stated otherwise, a quotation is subject to availability and is not a confirmed booking. Prices, availability, hotel room categories, flight schedules and inclusions may change before confirmation.</p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">3. Booking Confirmation</h4>
                  <p>A booking may require customer details, travel dates, passenger details, advance or full payment. The booking confirmation issued by MyHappyJourney will specify the applicable services, dates, inclusions and conditions. Customers should carefully review and immediately notify us of any errors.</p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">4. Prices and Taxes</h4>
                  <p>Travel package prices may vary depending on travel dates, seasonality, hotel availability, room category, number of travellers, transportation requirements, airline fares, government taxes, supplier pricing, currency fluctuations, or peak periods.</p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">5. Payment Terms</h4>
                  <p>Payment requirements vary. Customers may be required to pay an advance amount to confirm, partial payments according to a schedule, and full payment before travel.</p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">6. Payment Methods</h4>
                  <p>MyHappyJourney may accept payments through bank transfer, online payment gateways, UPI or other methods communicated by our team.</p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">7. Hotel and Accommodation</h4>
                  <p>Accommodation bookings are subject to the terms of the respective property. Room allocation, room category, bed configuration, check-in/out times, and early/late check-out are determined by hotel policies.</p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">8. Transportation</h4>
                  <p>Transportation services are subject to vehicle availability and confirmed itinerary. Vehicle type varies based on passenger count and luggage. Additional charges apply for extra kilometres or hours outside the itinerary.</p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">9. Flight Bookings</h4>
                  <p>Flights are subject to airline fare rules and schedule changes. Passengers are responsible for complying with check-in, baggage, and boarding times.</p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">10. Passport, Visa and Travel Documents</h4>
                  <p>Customers are responsible for possessing valid travel documents, passports, entry visas, permits, travel insurance, and complying with entry rules.</p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">11. Customer Information</h4>
                  <p>Customers must provide accurate booking details. Corrections are subject to airline, hotel, or supplier penalty fees.</p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">12. Changes to an Itinerary</h4>
                  <p>Changes to confirmed itineraries are subject to availability and supplier terms, which may incur amendment or fare difference fees.</p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">13. Cancellation and Refunds</h4>
                  <p>Cancellation and refund conditions depend on the individual services. For detailed terms, please refer to our <strong>Cancellation &amp; Refund Policy</strong>.</p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">14. No-Show</h4>
                  <p>Failing to use a confirmed service without cancelling according to rules will be treated as a no-show, and is typically non-refundable.</p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">15. Itinerary Changes by Suppliers</h4>
                  <p>Suppliers may change schedules or services. MyHappyJourney will inform customers of significant changes and assist with alternatives.</p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">16. Force Majeure</h4>
                  <p>MyHappyJourney is not responsible for cancellations, delays, or changes caused by natural disasters, weather, pandemics, strikes, civil unrest, or other unforeseen events beyond control.</p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">17. Travel Insurance</h4>
                  <p>Customers are strongly encouraged to obtain appropriate travel insurance covering medical, cancellation, and baggage issues.</p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">18. Personal Expenses</h4>
                  <p>Unless expressly included, personal expenses (meals outside plan, room service, laundry, telephone, shopping, visa, etc.) are the customer's responsibility.</p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">19. Sightseeing and Activities</h4>
                  <p>Sightseeing and activities are subject to weather, operating schedules, and local regulations. We will attempt alternatives if any become unavailable.</p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">20. Customer Conduct</h4>
                  <p>Customers must comply with local laws and supplier policies. We reserve the right to discontinue service in case of safety, security, or legal concerns.</p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">21. Website Information</h4>
                  <p>We keep information accurate, but details can change. Images are illustrative. Confirmed booking papers take precedence over website text.</p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">22. Third-Party Suppliers</h4>
                  <p>Services are arranged through third parties (airlines, hotels, operators). Customers agree to comply with their respective terms.</p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">23. Website Use</h4>
                  <p>Users must not use the website for unlawful purposes, gain unauthorized system access, or submit false information.</p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">24. Intellectual Property</h4>
                  <p>All content is owned by or licensed to MyHappyJourney and may not be reproduced without prior written permission.</p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">25. Privacy and Cookies</h4>
                  <p>Information is processed according to our Privacy Policy and Cookie Policy.</p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">26. Complaints and Support</h4>
                  <p>Please contact us immediately during your trip for issues, or follow up post-travel with booking codes and details.</p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">27. Limitation of Liability</h4>
                  <p>We arrange travel but are not liable for supplier errors or circumstances beyond control, subject to consumer law limits.</p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">28. Governing Law</h4>
                  <p>Governed by Indian law. Disputes are subject to the courts in Bengaluru, Karnataka, India.</p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">29. Changes to These Terms</h4>
                  <p>We may update these terms. The latest version goes live immediately upon posting with its updated date.</p>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4">30. Contact Us</h4>
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 space-y-1.5 text-xs sm:text-sm text-slate-600">
                    <p className="font-bold text-slate-900">MyHappyJourney Private Limited</p>
                    <p><strong>Email:</strong> Yashwant@myhappyjourney.com</p>
                    <p><strong>Phone:</strong> +91 8197417772</p>
                    <p><strong>Address:</strong> 3rd Floor, 18th Main Road, Kumaraswamy Layout 2nd Stage, Bengaluru, Karnataka – 560078, India.</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
