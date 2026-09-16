import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const KeralaFamilyLandingPage = dynamic(
  () => import('../../landing-pages/kerala-family/KeralaFamilyLandingPage').then(mod => mod.KeralaFamilyLandingPage),
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

  return <KeralaFamilyLandingPage />;
}
