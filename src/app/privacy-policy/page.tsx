import type { Metadata } from 'next';
import App from '../../App';

export const metadata: Metadata = {
  title: 'Privacy Policy | MyHappyJourney',
  description:
    'Read the privacy policy of MyHappyJourney. Learn how we collect, use, store, and protect your personal information when using our travel services.',
};

export default function PrivacyPolicyPageRoute() {
  return <App />;
}
