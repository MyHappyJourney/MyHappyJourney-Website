import type { Metadata } from 'next';
import { KeralaLandingPage } from './KeralaLandingPage';

export const metadata: Metadata = {
  title: 'Kerala Tour Packages 2026 | Munnar, Alleppey Houseboat & Wayanad | MyHappyJourney',
  description:
    'Book customized Kerala tour packages with private AC cab, dedicated driver, deluxe houseboat cruise, and handpicked 3/4/5-star hotels. Instant free quote.',
};

export default function KeralaPage() {
  return <KeralaLandingPage />;
}
