'use client';

import { useEffect } from 'react';
import { captureAttribution } from '../utils/attribution';
import { getOrCreateVisitorId } from '../utils/visitorId';

export function AttributionTracker() {
  useEffect(() => {
    try {
      captureAttribution();
    } catch {
      // never let this crash the page
    }

    try {
      getOrCreateVisitorId();
    } catch {
      // never let this crash the page
    }
  }, []);

  return null;
}

export default AttributionTracker;
