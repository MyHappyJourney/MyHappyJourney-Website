'use client';

import { useEffect } from 'react';
import { captureAttribution, getAttribution } from '../utils/attribution';
import { getOrCreateVisitorId } from '../utils/visitorId';

export function AttributionTracker() {
  useEffect(() => {
    try {
      captureAttribution();
    } catch {
      // never let this crash the page
    }

    let visitorId = '';
    try {
      visitorId = getOrCreateVisitorId();
    } catch {
      // never let this crash the page
    }

    try {
      const attr = getAttribution();
      fetch('/api/track-visitor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          visitor_id: visitorId,
          landing_page: attr.landing_page || '',
          referrer: attr.referrer || '',
          gclid: attr.gclid || '',
          fbclid: attr.fbclid || '',
          utm_source: attr.utm_source || '',
          utm_medium: attr.utm_medium || '',
          utm_campaign: attr.utm_campaign || '',
        }),
      }).catch(() => {
        // fail silently
      });
    } catch {
      // never let this crash the page
    }
  }, []);

  return null;
}

export default AttributionTracker;
