import type { Metadata } from 'next';
import { KeralaSeniorLandingPage } from './KeralaSeniorLandingPage';

export const metadata: Metadata = {
  title: 'Kerala Senior Citizen Tour Packages 2026 | Relaxed Pace & Caring Support | MyHappyJourney',
  description:
    'Book handcrafted Kerala senior citizen tour packages with leisurely paced itineraries, ground-floor deluxe rooms, wheelchair assistance, private AC cab, and dedicated tour coordinator.',
};

export default function KeralaSeniorPage() {
  return <KeralaSeniorLandingPage />;
}
