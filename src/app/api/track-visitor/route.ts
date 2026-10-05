import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const getClientIp = (req: NextRequest): string => {
  const forwardedFor = req.headers.get('x-forwarded-for');
  if (forwardedFor) {
    const firstIp = forwardedFor.split(',')[0]?.trim();
    if (firstIp) return firstIp;
  }
  const realIp = req.headers.get('x-real-ip');
  if (realIp && realIp.trim()) {
    return realIp.trim();
  }
  return '';
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const {
      visitor_id,
      landing_page,
      referrer,
      gclid,
      fbclid,
      utm_source,
      utm_medium,
      utm_campaign,
    } = body || {};

    if (!visitor_id || typeof visitor_id !== 'string' || !visitor_id.trim()) {
      return NextResponse.json({ ok: true });
    }

    const trimmedVisitorId = visitor_id.trim();
    const clientIp = getClientIp(req);
    const now = new Date().toISOString();

    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      console.error('Supabase credentials missing: SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY');
      return NextResponse.json({ ok: true });
    }

    const supabase = createClient(supabaseUrl, supabaseKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });

    let isExisting = false;
    try {
      const { data: existing } = await supabase
        .from('visitor_logs')
        .select('visitor_id')
        .eq('visitor_id', trimmedVisitorId)
        .maybeSingle();

      if (existing) {
        isExisting = true;
      }
    } catch {
      // Ignore check failure and proceed
    }

    const payload: Record<string, any> = {
      visitor_id: trimmedVisitorId,
      ip_address: clientIp || null,
      landing_page: typeof landing_page === 'string' && landing_page.trim() ? landing_page.trim() : null,
      referrer: typeof referrer === 'string' && referrer.trim() ? referrer.trim() : null,
      gclid: typeof gclid === 'string' && gclid.trim() ? gclid.trim() : null,
      fbclid: typeof fbclid === 'string' && fbclid.trim() ? fbclid.trim() : null,
      utm_source: typeof utm_source === 'string' && utm_source.trim() ? utm_source.trim() : null,
      utm_medium: typeof utm_medium === 'string' && utm_medium.trim() ? utm_medium.trim() : null,
      utm_campaign: typeof utm_campaign === 'string' && utm_campaign.trim() ? utm_campaign.trim() : null,
      last_seen_at: now,
    };

    if (!isExisting) {
      payload.first_seen_at = now;
    }

    const { error } = await supabase
      .from('visitor_logs')
      .upsert(payload, { onConflict: 'visitor_id' });

    if (error) {
      console.error('Error upserting visitor log to Supabase:', error);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Error in /api/track-visitor:', error);
    return NextResponse.json({ ok: true });
  }
}
