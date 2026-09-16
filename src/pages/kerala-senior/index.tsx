import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const KeralaSeniorLandingPage = dynamic(
  () => import('../../landing-pages/kerala-senior/KeralaSeniorLandingPage').then(mod => mod.KeralaSeniorLandingPage),
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

  return <KeralaSeniorLandingPage />;
}
