import type { Metadata } from 'next';
import { CochinLandingPage } from './CochinLandingPage';

export const metadata: Metadata = {
  title: 'Kerala Tour Packages from Cochin – Airport & Ernakulam Pickup | MyHappyJourney',
  description:
    'Book customized Kerala tour packages from Cochin (Kochi) with airport and Ernakulam station pickup included. Enjoy private AC car transfers, Munnar tea hills, and Alleppey houseboats from ₹15,499 per person.',
  alternates: {
    canonical: 'https://myhappyjourney.com/kerala/kerala-tour-packages-from/cochin',
  },
};

export default function CochinTourPackagesPage() {
  return (
    <>
      <link
        rel="canonical"
        href="https://myhappyjourney.com/kerala/kerala-tour-packages-from/cochin"
      />
      <CochinLandingPage />
    </>
  );
}
