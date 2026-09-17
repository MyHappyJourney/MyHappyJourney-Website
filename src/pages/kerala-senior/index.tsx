import dynamic from 'next/dynamic';

const KeralaSeniorLandingPage = dynamic(
  () => import('../../landing-pages/kerala-senior/KeralaSeniorLandingPage').then(mod => mod.KeralaSeniorLandingPage)
);

export default function Page() {
  return <KeralaSeniorLandingPage />;
}

