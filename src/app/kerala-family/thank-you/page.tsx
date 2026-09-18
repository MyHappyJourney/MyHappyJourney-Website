'use client';

import React from 'react';
import { ThankYouTemplate } from '../../../components/ThankYouTemplate';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { WHATSAPP_NUMBER, PHONE_NUMBER } from '../../../data/tourData';

export default function KeralaFamilyThankYouPage() {
  return (
    <>
      <head>
        {/* GOOGLE ADS CONVERSION TRACKING GOES HERE - snippet from Ads team */}
      </head>
      
      <ThankYouTemplate
        HeaderComponent={Header}
        FooterComponent={Footer}
        continueBrowsingUrl="/kerala-family"
        themeColor="emerald"
        destinationName="Kerala Family Tour"
        whatsAppNumber={WHATSAPP_NUMBER}
        phoneCallNumber={PHONE_NUMBER}
      />
    </>
  );
}
