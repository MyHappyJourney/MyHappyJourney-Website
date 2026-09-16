import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const KeralaLandingPage = dynamic(
  () => import('../../landing-pages/kerala/KeralaLandingPage').then(mod => mod.KeralaLandingPage),
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

  return <KeralaLandingPage />;
}
