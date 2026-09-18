import type { Metadata } from 'next';
import App from '../../App';

export const metadata: Metadata = {
  title: 'Cookie Policy | MyHappyJourney',
  description:
    'Read the Cookie Policy of MyHappyJourney. Learn how we use cookies and tracking technologies to improve, secure, and personalize your travel planning experience.',
};

export default function CookiePolicyPageRoute() {
  return <App />;
}
