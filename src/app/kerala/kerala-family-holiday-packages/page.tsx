import type { Metadata } from 'next';
import { KeralaFamilyLandingPage } from '../../kerala-family/KeralaFamilyLandingPage';

export const metadata: Metadata = {
  title: 'Kerala Family Tour Packages 2026 | Munnar, Thekkady & Alleppey Houseboat | MyHappyJourney',
  description:
    'Book handcrafted Kerala family holiday tour packages with private AC cab, kid-friendly deluxe resorts, private houseboat cruise, and dedicated tour coordinator.',
};

export default function KeralaFamilyHolidayPackagesPage() {
  return <KeralaFamilyLandingPage />;
}
