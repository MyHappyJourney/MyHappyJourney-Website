'use client';

import React, { useState, useEffect } from 'react';
import { Header } from '../../components/Header';
import { CochinHero } from './components/CochinHero';
import { TrustStrip } from '../../components/TrustStrip';
import { CochinRouteCards } from './components/CochinRouteCards';
import { CochinAirportTransfer } from './components/CochinAirportTransfer';
import { Itinerary } from '../../components/Itinerary';
import { InclusionsExclusions } from '../../components/InclusionsExclusions';
import { WhyBook } from '../../components/WhyBook';
import { ReadyToExploreBanner } from '../../components/ReadyToExploreBanner';
import { Reviews } from '../../components/Reviews';
import { VideoTestimonials } from '../../../../components/VideoTestimonials';
import { GroupDiscountBanner } from '../../components/GroupDiscountBanner';
import { FAQ } from '../../components/FAQ';
import { StickyMobileCTA } from '../../components/StickyMobileCTA';
import { Footer } from '../../components/Footer';
import { PackageItem } from '../../types';
import { PackageModal } from '../../components/PackageModal';
import { QuoteModal } from '../../components/QuoteModal';
import { Loader } from '../../components/Loader';
import { WhatsAppModal } from '../../../../components/WhatsAppModal';
import { FloatingWhatsApp } from '../../../../components/FloatingWhatsApp';

interface CochinLandingPageProps {
  onBackToHome?: () => void;
}

export const CochinLandingPage: React.FC<CochinLandingPageProps> = () => {
  const [selectedPackageForModal, setSelectedPackageForModal] = useState<PackageItem | null>(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);
  const [quotePackageId, setQuotePackageId] = useState<string>('pkg-4n5d');
  const [isInitialLoading, setIsInitialLoading] = useState<boolean>(false);

  // Global WhatsApp Chat Modal state
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState<boolean>(false);
  const [whatsAppDestination, setWhatsAppDestination] = useState<string>('Cochin Pickup Enquiry');
  const [whatsAppDefaultMsg, setWhatsAppDefaultMsg] = useState<string | undefined>(
    "Hi, I'm looking for a Kerala tour package with pickup from Cochin. Please share details."
  );

  useEffect(() => {
    const handleOpenWhatsApp = (e: any) => {
      const detail = e.detail || {};
      setWhatsAppDestination(detail.destination || 'Cochin Pickup Enquiry');
      setWhatsAppDefaultMsg(
        detail.defaultMessage ||
          "Hi, I'm looking for a Kerala tour package with pickup from Cochin. Please share details."
      );
      setIsWhatsAppModalOpen(true);
    };

    window.addEventListener('open-whatsapp-modal', handleOpenWhatsApp);
    return () => window.removeEventListener('open-whatsapp-modal', handleOpenWhatsApp);
  }, []);

  // Initial page load smooth transition
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  const openQuoteModal = (pkgId?: string) => {
    if (pkgId) {
      setQuotePackageId(pkgId);
    }
    setSelectedPackageForModal(null);
    setIsQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased selection:bg-[#EBF2FF] selection:text-[#0B3996] pb-[72px] md:pb-0 relative">
      {/* Preloader */}
      {isInitialLoading && (
        <div className="fixed inset-0 z-[100] bg-[#071739] flex flex-col items-center justify-center transition-opacity duration-500">
          <Loader
            title="Loading Cochin Tour Packages..."
            subtitle="MyHappyJourney • Since 2007"
          />
        </div>
      )}

      {/* Kerala Landing Page Header */}
      <Header
        onQuoteClick={() => openQuoteModal()}
        onPackageSelect={(pkgId) => openQuoteModal(pkgId)}
      />

      {/* Main Sections */}
      <main>
        {/* 1. Cochin Hero with Integrated Fast Enquiry Form */}
        <CochinHero
          onQuoteClick={() => openQuoteModal()}
          preselectedPackageId={quotePackageId}
        />

        {/* 2. Trust Strip */}
        <TrustStrip />

        {/* 3. Choose Your Cochin Starting Route */}
        <CochinRouteCards
          onGetQuote={(pkgId) => openQuoteModal(pkgId)}
        />

        {/* 4. Cochin Airport to Munnar & Alleppey Transfer Details */}
        <CochinAirportTransfer />

        {/* 5. 6N / 7D Tour Detailed Day-by-Day Itinerary */}
        <Itinerary />

        {/* 6. Reviews */}
        <Reviews />

        {/* 7. Package Inclusions & Exclusions */}
        <InclusionsExclusions />

        {/* 8. Why Book With MyHappyJourney */}
        <WhyBook />

        {/* 9. Flash Sale Parallax Banner */}
        <ReadyToExploreBanner onQuoteClick={() => openQuoteModal()} />

        {/* 10. Guest Diaries & Video Testimonials */}
        <VideoTestimonials />

        {/* 11. FAQs */}
        <FAQ />

        {/* 12. Bigger Group Parallax Discount Banner */}
        <GroupDiscountBanner />
      </main>

      {/* Kerala Footer */}
      <Footer onQuoteClick={() => openQuoteModal()} />

      {/* Fixed Bottom Mobile CTA Bar */}
      <StickyMobileCTA
        onQuoteClick={() => openQuoteModal()}
        destinationOverride="Cochin Pickup Enquiry"
        defaultMessageOverride="Hi, I'm looking for a Kerala tour package with pickup from Cochin. Please share details."
      />

      {/* Package Details Modal */}
      <PackageModal
        pkg={selectedPackageForModal}
        onClose={() => setSelectedPackageForModal(null)}
        onGetQuote={(pkg) => openQuoteModal(pkg.id)}
      />

      {/* Quote Request Modal Pop-up */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        preselectedPackageId={quotePackageId}
      />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp
        destinationOverride="Cochin Pickup Enquiry"
        defaultMessageOverride="Hi, I'm looking for a Kerala tour package with pickup from Cochin. Please share details."
      />

      {/* WhatsApp Chat Modal Popup */}
      <WhatsAppModal
        isOpen={isWhatsAppModalOpen}
        onClose={() => setIsWhatsAppModalOpen(false)}
        destinationTitle={whatsAppDestination}
        defaultMessage={whatsAppDefaultMsg}
      />
    </div>
  );
};

export default CochinLandingPage;
