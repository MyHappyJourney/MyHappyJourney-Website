export interface AttributionData {
  gclid?: string;
  fbclid?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  referrer?: string;
  landing_page?: string;
  [key: string]: any;
}

const COOKIE_NAME = 'mhj_attribution';
const EXPIRY_DAYS = 90;

function getCookie(name: string): string | null {
  if (typeof document === 'undefined') {
    return null;
  }
  const nameEQ = `${name}=`;
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const c = cookies[i].trim();
    if (c.indexOf(nameEQ) === 0) {
      return c.substring(nameEQ.length);
    }
  }
  return null;
}

/**
 * Captures marketing attribution parameters and stores them in the mhj_attribution cookie.
 * Runs client-side only and preserves first-touch attribution (does not overwrite existing cookie).
 */
export function captureAttribution(): void {
  try {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }

    // Do nothing if cookie already exists (first-touch attribution)
    if (getCookie(COOKIE_NAME)) {
      return;
    }

    const params = new URLSearchParams(window.location.search);
    const attributionData: AttributionData = {};

    const trackingParams = [
      'gclid',
      'fbclid',
      'utm_source',
      'utm_medium',
      'utm_campaign',
      'utm_term',
      'utm_content',
    ] as const;

    for (const param of trackingParams) {
      const value = params.get(param);
      if (value) {
        attributionData[param] = value;
      }
    }

    // Capture referrer only if non-empty and not from the same site
    const referrer = document.referrer;
    if (referrer) {
      try {
        const referrerUrl = new URL(referrer);
        if (referrerUrl.hostname !== window.location.hostname) {
          attributionData.referrer = referrer;
        }
      } catch {
        if (!referrer.includes(window.location.hostname)) {
          attributionData.referrer = referrer;
        }
      }
    }

    // Capture landing page pathname
    if (window.location.pathname) {
      attributionData.landing_page = window.location.pathname;
    }

    // Store in cookie with 90-day expiry
    const expiryDate = new Date();
    expiryDate.setTime(expiryDate.getTime() + EXPIRY_DAYS * 24 * 60 * 60 * 1000);
    const expires = '; expires=' + expiryDate.toUTCString();
    const maxAge = `; max-age=${EXPIRY_DAYS * 24 * 60 * 60}`;
    const cookieValue = encodeURIComponent(JSON.stringify(attributionData));

    document.cookie = `${COOKIE_NAME}=${cookieValue}${expires}${maxAge}; path=/; SameSite=Lax`;
  } catch {
    // Fail silently without throwing errors
  }
}

/**
 * Reads and parses the mhj_attribution cookie.
 * Returns an object with the stored attribution data, or {} if missing or invalid.
 * Never throws an error.
 */
export function getAttribution(): AttributionData {
  try {
    if (typeof document === 'undefined') {
      return {};
    }

    const rawValue = getCookie(COOKIE_NAME);
    if (!rawValue) {
      return {};
    }

    const decoded = decodeURIComponent(rawValue);
    const parsed = JSON.parse(decoded);

    if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
      return parsed as AttributionData;
    }

    return {};
  } catch {
    return {};
  }
}
