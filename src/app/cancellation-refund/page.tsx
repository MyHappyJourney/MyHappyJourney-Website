import type { Metadata } from 'next';
import App from '../../App';

export const metadata: Metadata = {
  title: 'Cancellation & Refund Policy | MyHappyJourney',
  description:
    'Read the Cancellation & Refund Policy of MyHappyJourney. Learn about terms applicable to cancellations, refunds, booking modifications, and timelines.',
};

export default function CancellationRefundPageRoute() {
  return <App />;
}
