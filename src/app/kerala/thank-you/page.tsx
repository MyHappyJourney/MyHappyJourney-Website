'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  User,
  Mail,
  Phone,
  MapPin,
  Compass,
  Calendar,
  Clock,
  Users,
  Wallet,
  ClipboardCheck,
} from 'lucide-react';
import { ThankYouTemplate } from '../../../components/ThankYouTemplate';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { WHATSAPP_NUMBER, PHONE_NUMBER } from '../../../data/tourData';

/**
 * Helper to format date string to "15 December 2026"
 */
function formatTravelDate(dateStr: string | null | undefined): string | null {
  if (!dateStr || !dateStr.trim()) return null;
  const trimmed = dateStr.trim();
  const parts = trimmed.split('-');
  if (parts.length === 3) {
    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const day = parseInt(parts[2], 10);
    if (!isNaN(year) && !isNaN(month) && !isNaN(day)) {
      const date = new Date(year, month, day);
      if (!isNaN(date.getTime())) {
        return date.toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        });
      }
    }
  }
  const date = new Date(trimmed);
  if (!isNaN(date.getTime())) {
    return date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  }
  return trimmed;
}

/**
 * Helper to format travelers count e.g. "2 Adults, 1 Child"
 */
function formatTravelers(
  adultsStr: string | null | undefined,
  childrenStr: string | null | undefined
): string | null {
  const adults = adultsStr ? parseInt(adultsStr, 10) : NaN;
  const children = childrenStr ? parseInt(childrenStr, 10) : NaN;
  const parts: string[] = [];

  if (!isNaN(adults) && adults > 0) {
    parts.push(`${adults} ${adults === 1 ? 'Adult' : 'Adults'}`);
  }
  if (!isNaN(children) && children > 0) {
    parts.push(`${children} ${children === 1 ? 'Child' : 'Children'}`);
  }

  if (parts.length > 0) {
    return parts.join(', ');
  }
  if (!isNaN(adults)) {
    return `${adults} Adults`;
  }
  return null;
}

function KeralaThankYouContent() {
  const searchParams = useSearchParams();
  const packageParam = searchParams.get('package');
  const nameParam = searchParams.get('name');
  const emailParam = searchParams.get('email');
  const phoneParam = searchParams.get('phone');
  const cityParam = searchParams.get('city');
  const destinationParam = searchParams.get('destination');
  const fromDateParam = searchParams.get('from_date');
  const durationParam = searchParams.get('duration');
  const adultsParam = searchParams.get('adults');
  const childrenParam = searchParams.get('children');
  const budgetParam = searchParams.get('budget');

  // If packageParam is present, format dynamically; otherwise sensible generic fallback
  const destinationName =
    packageParam && packageParam.trim() ? packageParam.trim() : 'Kerala';

  const customMessage =
    packageParam && packageParam.trim()
      ? `Thank you! Your enquiry for ${packageParam.trim()} has been received.`
      : 'Thank you! Your enquiry has been received.';

  // Check if we have enquiry details to display gracefully
  const hasEnquiryDetails = Boolean(
    nameParam?.trim() || phoneParam?.trim() || emailParam?.trim()
  );

  const formattedDate = formatTravelDate(fromDateParam);
  const formattedTravelers = formatTravelers(adultsParam, childrenParam);
  const packageOrDestination =
    packageParam?.trim() || destinationParam?.trim() || 'Kerala Tour Package';

  return (
    <ThankYouTemplate
      HeaderComponent={Header}
      FooterComponent={Footer}
      continueBrowsingUrl="/kerala"
      themeColor="blue"
      destinationName={destinationName}
      customMessage={customMessage}
      whatsAppNumber={WHATSAPP_NUMBER}
      phoneCallNumber={PHONE_NUMBER}
    >
      {/* Enquiry Details Summary Card */}
      {hasEnquiryDetails && (
        <section
          id="enquiry-details-summary"
          className="rounded-2xl sm:rounded-3xl border border-blue-100 bg-gradient-to-br from-slate-50 via-white to-blue-50/40 p-5 sm:p-7 shadow-sm text-left font-sans"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-4 mb-5 border-b border-slate-200/80">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#0B3996] flex items-center justify-center text-white shrink-0 shadow-xs">
                <ClipboardCheck className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight">
                  Your Enquiry Details
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  Summary of your requested travel preferences
                </p>
              </div>
            </div>
            <span className="inline-flex items-center self-start sm:self-center px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200/70">
              Verified Submission
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-4">
            {/* Full Name */}
            {nameParam?.trim() && (
              <div className="bg-white rounded-xl p-3.5 border border-slate-200/70 shadow-2xs flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0B3996] flex items-center justify-center shrink-0">
                  <User className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Full Name
                  </p>
                  <p className="text-sm font-bold text-slate-900 truncate">
                    {nameParam.trim()}
                  </p>
                </div>
              </div>
            )}

            {/* Email */}
            {emailParam?.trim() && (
              <div className="bg-white rounded-xl p-3.5 border border-slate-200/70 shadow-2xs flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0B3996] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Email
                  </p>
                  <p className="text-sm font-bold text-slate-900 truncate">
                    {emailParam.trim()}
                  </p>
                </div>
              </div>
            )}

            {/* Phone */}
            {phoneParam?.trim() && (
              <div className="bg-white rounded-xl p-3.5 border border-slate-200/70 shadow-2xs flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0B3996] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Phone
                  </p>
                  <p className="text-sm font-bold text-slate-900 truncate">
                    {phoneParam.trim()}
                  </p>
                </div>
              </div>
            )}

            {/* Departure City */}
            {cityParam?.trim() && (
              <div className="bg-white rounded-xl p-3.5 border border-slate-200/70 shadow-2xs flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0B3996] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Departure City
                  </p>
                  <p className="text-sm font-bold text-slate-900 truncate">
                    {cityParam.trim()}
                  </p>
                </div>
              </div>
            )}

            {/* Package / Destination */}
            {packageOrDestination && (
              <div className="bg-white rounded-xl p-3.5 border border-slate-200/70 shadow-2xs flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0B3996] flex items-center justify-center shrink-0">
                  <Compass className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Package / Destination
                  </p>
                  <p className="text-sm font-bold text-slate-900 truncate">
                    {packageOrDestination}
                  </p>
                </div>
              </div>
            )}

            {/* Travel Date */}
            {formattedDate && (
              <div className="bg-white rounded-xl p-3.5 border border-slate-200/70 shadow-2xs flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0B3996] flex items-center justify-center shrink-0">
                  <Calendar className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Travel Date
                  </p>
                  <p className="text-sm font-bold text-slate-900 truncate">
                    {formattedDate}
                  </p>
                </div>
              </div>
            )}

            {/* Duration */}
            {durationParam?.trim() && (
              <div className="bg-white rounded-xl p-3.5 border border-slate-200/70 shadow-2xs flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0B3996] flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Duration
                  </p>
                  <p className="text-sm font-bold text-slate-900 truncate">
                    {durationParam.trim()}
                  </p>
                </div>
              </div>
            )}

            {/* Travelers */}
            {formattedTravelers && (
              <div className="bg-white rounded-xl p-3.5 border border-slate-200/70 shadow-2xs flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0B3996] flex items-center justify-center shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Travelers
                  </p>
                  <p className="text-sm font-bold text-slate-900 truncate">
                    {formattedTravelers}
                  </p>
                </div>
              </div>
            )}

            {/* Budget (only show if provided) */}
            {budgetParam?.trim() && (
              <div className="bg-white rounded-xl p-3.5 border border-slate-200/70 shadow-2xs flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0B3996] flex items-center justify-center shrink-0">
                  <Wallet className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Budget
                  </p>
                  <p className="text-sm font-bold text-slate-900 truncate">
                    {budgetParam.trim()}
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>
      )}
    </ThankYouTemplate>
  );
}

export default function KeralaThankYouPage() {
  return (
    <>
      <head>
        {/* GOOGLE ADS CONVERSION TRACKING GOES HERE - snippet from Ads team */}
      </head>
      <Suspense fallback={null}>
        <KeralaThankYouContent />
      </Suspense>
    </>
  );
}
