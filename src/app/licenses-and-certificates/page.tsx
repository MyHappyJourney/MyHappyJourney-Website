import type { Metadata } from 'next';
import App from '../../App';

export const metadata: Metadata = {
  title: 'Licenses & Certifications | MyHappyJourney',
  description:
    'View official government licenses, GST registration, and MSME Udyam certificates for MyHappyJourney. 100% verified and government registered tour operator in India.',
};

export default function LicensesAndCertificatesPageRoute() {
  return <App />;
}
