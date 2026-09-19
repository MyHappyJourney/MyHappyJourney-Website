import type { Metadata } from 'next';
import { KeralaHoneymoonLandingPage } from '../../kerala-honeymoon/KeralaHoneymoonLandingPage';

export const metadata: Metadata = {
  title: 'Kerala Honeymoon Packages 2026 | Romantic Getaways & Houseboat | MyHappyJourney',
  description:
    'Book handcrafted Kerala honeymoon packages with private deluxe houseboat, candlelit dinner, flower bed decoration, romantic Munnar resorts, and private AC cab.',
};

export default function KeralaHoneymoonPackagesPage() {
  return <KeralaHoneymoonLandingPage />;
}
