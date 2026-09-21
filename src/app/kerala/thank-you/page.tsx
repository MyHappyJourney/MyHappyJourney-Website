'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { ThankYouTemplate } from '../../../components/ThankYouTemplate';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { WHATSAPP_NUMBER, PHONE_NUMBER } from '../../../data/tourData';

function KeralaThankYouContent() {
  const searchParams = useSearchParams();
  const packageParam = searchParams.get('package');

  // If packageParam is present, format dynamically; otherwise sensible generic fallback
  const destinationName = packageParam && packageParam.trim()
    ? packageParam.trim()
    : 'Kerala';

  const customMessage = packageParam && packageParam.trim()
    ? `Thank you! Your enquiry for ${packageParam.trim()} has been received.`
    : 'Thank you! Your enquiry has been received.';

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
    />
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
