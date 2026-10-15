export interface LicenseItem {
  id: string;
  title: string;
  issuingAuthority: string;
  registrationNumber: string;
  description: string;
  fileName: string;
  iconName: string;
}

export const LICENSES: LicenseItem[] = [
  {
    id: 'gst-registration',
    title: 'GST Registration Certificate',
    issuingAuthority: 'Government of India · Central Board of Indirect Taxes and Customs',
    registrationNumber: '29ATVPK1059M2ZU',
    description: "GST registration certificate confirming MyHappyJourney is registered under India's Goods and Services Tax Act, 2017.",
    fileName: 'gst-registration-certificate.pdf',
    iconName: 'ShieldCheck',
  },
  {
    id: 'udyam-registration',
    title: 'Udyam (MSME) Registration Certificate',
    issuingAuthority: 'Ministry of Micro, Small and Medium Enterprises, Government of India',
    registrationNumber: 'UDYAM-KR-02-0112521',
    description: "Udyam registration certifying MyHappyJourney as a registered Micro enterprise under India's MSME Ministry, covering tour operator and travel agency services.",
    fileName: 'udyam-registration-certificate.pdf',
    iconName: 'FileCheck',
  },
  {
    id: 'nidhi-pledge',
    title: 'NIDHI Pledge — Safe & Honourable Tourism',
    issuingAuthority: 'Ministry of Tourism, Government of India',
    registrationNumber: 'EKA000542',
    description: 'Pledge for commitment towards Safe & Honourable Tourism and Sustainable Tourism, under the National Integrated Database of Hospitality Industry (NIDHI) initiative.',
    fileName: 'nidhi-pledge.pdf',
    iconName: 'ShieldCheck',
  },
];
