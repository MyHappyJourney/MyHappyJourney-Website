const COOKIE_NAME = 'mhj_visitor_id';
const EXPIRY_DAYS = 730; // 2 years

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

function generateId(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).substring(2, 15)}`;
}

/**
 * Reads the existing 'mhj_visitor_id' cookie without creating a new one.
 * Returns the existing ID string, or '' if missing or during SSR.
 * Fails silently on error.
 */
export function getVisitorId(): string {
  try {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return '';
    }
    const val = getCookie(COOKIE_NAME);
    if (!val) {
      return '';
    }
    return decodeURIComponent(val).trim();
  } catch {
    return '';
  }
}

/**
 * Retrieves the existing visitor ID from the 'mhj_visitor_id' cookie,
 * or generates and sets a new persistent 2-year cookie if not found.
 * Never overwrites an existing visitor ID.
 * Returns the visitor ID string, or '' on error/SSR.
 */
export function getOrCreateVisitorId(): string {
  try {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return '';
    }

    const existingId = getVisitorId();
    if (existingId) {
      return existingId;
    }

    const newId = generateId();
    if (!newId) {
      return '';
    }

    const expiryDate = new Date();
    expiryDate.setTime(expiryDate.getTime() + EXPIRY_DAYS * 24 * 60 * 60 * 1000);
    const expires = '; expires=' + expiryDate.toUTCString();
    const maxAge = `; max-age=${EXPIRY_DAYS * 24 * 60 * 60}`;
    const cookieValue = encodeURIComponent(newId);

    document.cookie = `${COOKIE_NAME}=${cookieValue}${expires}${maxAge}; path=/; SameSite=Lax`;

    return newId;
  } catch {
    return '';
  }
}
