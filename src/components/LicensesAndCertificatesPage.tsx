'use client';

import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  FileCheck,
  Download,
  Eye,
  X,
  ExternalLink,
  Award,
  Building,
} from 'lucide-react';
import { LICENSES, LicenseItem } from '../constants/licenses';

interface LicensesAndCertificatesPageProps {
  onBackToHome?: () => void;
}

export const LicensesAndCertificatesPage: React.FC<LicensesAndCertificatesPageProps> = ({
  onBackToHome,
}) => {
  const [selectedDoc, setSelectedDoc] = useState<LicenseItem | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedDoc(null);
      }
    };
    if (selectedDoc) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedDoc]);

  // Icon renderer helper
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileCheck':
        return <FileCheck className="w-7 h-7 stroke-[2]" />;
      case 'ShieldCheck':
      default:
        return <ShieldCheck className="w-7 h-7 stroke-[2]" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FBFBFD] text-[#1D1D1F] font-sans antialiased selection:bg-[#EBF2FF] selection:text-[#0B389D]">
      {/* 1. Refined Brand Blue Hero Banner (matching AboutUs / ContactUs style) */}
      <section className="relative bg-[#071F3D] text-white pt-16 pb-24 sm:pt-20 sm:pb-32 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_70%)] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto space-y-4">
          {/* Badge */}
          <div className="inline-block">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-slate-100 border border-white/15 tracking-wide">
              <ShieldCheck className="w-3.5 h-3.5 text-[#FF9900]" />
              Verified &amp; Certified
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.03em] text-white leading-[1.08]">
            Licenses &amp; Certifications
          </h1>

          {/* Intro Text */}
          <p className="text-base sm:text-lg text-slate-200/90 max-w-2xl mx-auto font-normal leading-relaxed pt-1">
            MyHappyJourney operates under all applicable Indian regulatory registrations. Below are our active certificates — click any document to view it in-page or download the official PDF.
          </p>

          {/* Breadcrumb back */}
          {onBackToHome && (
            <div className="pt-3">
              <button
                onClick={onBackToHome}
                className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-white/10 hover:bg-white/15 px-4 py-1.5 rounded-full backdrop-blur-md transition-all cursor-pointer border border-white/10"
              >
                <span>← Back to Home</span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 2. Responsive Card Grid (2 Columns Desktop, 1 Column Mobile) */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-14 sm:-mt-20 relative z-10 mb-16 sm:mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {LICENSES.map((license) => (
            <div
              key={license.id}
              className="bg-white rounded-3xl p-6 sm:p-8 md:p-9 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.08)] hover:shadow-xl transition-all duration-200 border border-gray-100 flex flex-col justify-between"
            >
              <div>
                {/* Header with Icon and Registration Pill */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-[#FFF8EE] text-[#FF9900] border border-[#FFE8CC] flex items-center justify-center shrink-0 shadow-xs">
                    {renderIcon(license.iconName)}
                  </div>
                  <span className="inline-flex items-center text-[11px] sm:text-xs font-mono font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200/80">
                    Reg No: {license.registrationNumber}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#1D1D1F] tracking-[-0.02em] mb-2 leading-snug">
                  {license.title}
                </h2>

                {/* Issuing Authority */}
                <p className="text-xs sm:text-sm font-semibold text-[#0B389D] mb-3 flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 shrink-0" />
                  <span>{license.issuingAuthority}</span>
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                  {license.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedDoc(license)}
                  className="bg-[#0B389D] hover:bg-[#082a75] text-white font-bold text-xs sm:text-sm px-4 py-3 rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Document</span>
                </button>

                <a
                  href={`/licenses/${license.fileName}`}
                  download={license.fileName}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm px-4 py-3 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer border border-slate-200"
                >
                  <Download className="w-4 h-4" />
                  <span>Download</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Verification Guarantee & Compliance Strip */}
        <div className="mt-10 sm:mt-12 bg-white rounded-3xl p-6 sm:p-8 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shrink-0">
              <Award className="w-6 h-6 stroke-[2]" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-[#1D1D1F]">
                100% Tax Compliant &amp; Government Recognized
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mt-0.5">
                All itineraries and bookings with MyHappyJourney are backed by official tax invoices with valid GST input credit and MSME enterprise certification.
              </p>
            </div>
          </div>
          <div className="shrink-0 w-full md:w-auto flex justify-end">
            <a
              href="mailto:enquiry@myhappyjourney.com"
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-[#0B389D] hover:text-[#082a75] bg-[#EBF2FF] hover:bg-[#DCE8FE] px-5 py-2.5 rounded-xl transition-colors"
            >
              <span>Need Corporate GST Invoice?</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </main>

      {/* 3. Document PDF Viewer Modal */}
      {selectedDoc && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedDoc(null)}
        >
          <div
            className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-5xl h-[88vh] flex flex-col overflow-hidden border border-slate-200 animate-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-5 py-4 sm:px-6 sm:py-4.5 border-b border-gray-100 flex items-center justify-between gap-4 bg-slate-50/80">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-slate-500 hidden sm:inline">
                    {selectedDoc.registrationNumber}
                  </span>
                  <span className="text-slate-300 hidden sm:inline">•</span>
                  <h3 className="text-base sm:text-lg font-extrabold text-[#1D1D1F] truncate">
                    {selectedDoc.title}
                  </h3>
                </div>
                <p className="text-xs text-gray-500 truncate mt-0.5">
                  {selectedDoc.issuingAuthority}
                </p>
              </div>

              {/* Header Actions: Download + Close */}
              <div className="flex items-center gap-2.5 shrink-0">
                <a
                  href={`/licenses/${selectedDoc.fileName}`}
                  download={selectedDoc.fileName}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold bg-[#0B389D] hover:bg-[#082a75] text-white px-3.5 py-2 rounded-xl transition-colors shadow-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Download</span>
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedDoc(null)}
                  className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200/80 rounded-full transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body: Embedded PDF iframe */}
            <div className="flex-1 w-full bg-slate-100 relative">
              <iframe
                src={`/licenses/${selectedDoc.fileName}`}
                className="w-full h-full border-0"
                title={selectedDoc.title}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LicensesAndCertificatesPage;
