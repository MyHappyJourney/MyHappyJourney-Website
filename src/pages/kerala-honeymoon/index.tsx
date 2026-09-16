import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const KeralaHoneymoonLandingPage = dynamic(
  () => import('../../landing-pages/kerala-honeymoon/KeralaHoneymoonLandingPage').then(mod => mod.KeralaHoneymoonLandingPage),
  { ssr: false }
);

export default function Page() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen bg-white" />;
  }

  return <KeralaHoneymoonLandingPage />;
}
