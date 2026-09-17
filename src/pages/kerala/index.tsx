import dynamic from 'next/dynamic';

const KeralaLandingPage = dynamic(
  () => import('../../landing-pages/kerala/KeralaLandingPage').then(mod => mod.KeralaLandingPage)
);

export default function Page() {
  return <KeralaLandingPage />;
}

