import dynamic from 'next/dynamic';

const KeralaFamilyLandingPage = dynamic(
  () => import('../../landing-pages/kerala-family/KeralaFamilyLandingPage').then(mod => mod.KeralaFamilyLandingPage)
);

export default function Page() {
  return <KeralaFamilyLandingPage />;
}

