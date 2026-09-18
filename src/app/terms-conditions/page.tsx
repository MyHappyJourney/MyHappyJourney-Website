import type { Metadata } from 'next';
import App from '../../App';

export const metadata: Metadata = {
  title: 'Terms & Booking Conditions | MyHappyJourney',
  description:
    'Read the Terms & Booking Conditions of MyHappyJourney. Learn about terms applicable to enquiries, bookings, payment terms, and liability guidelines.',
};

export default function TermsConditionsPageRoute() {
  return <App />;
}
