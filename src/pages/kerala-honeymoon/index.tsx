import dynamic from 'next/dynamic';

const KeralaHoneymoonLandingPage = dynamic(
  () => import('../../landing-pages/kerala-honeymoon/KeralaHoneymoonLandingPage').then(mod => mod.KeralaHoneymoonLandingPage)
);

export default function Page() {
  return <KeralaHoneymoonLandingPage />;
}

