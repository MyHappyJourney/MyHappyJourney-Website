# Nested URL Structure — Standard Pattern

Every destination on this site follows this URL pattern for Google Ads campaign 
tracking. This must be followed exactly for every new destination added.

## Pattern

For a destination called `<destination>` (e.g. kerala, karnataka), create these 
nested routes under `/<destination>/`:

1. `/<destination>/<destination>-honeymoon-tour-packages/`
2. `/<destination>/<destination>-family-holiday-tour-packages/`
3. `/<destination>/<destination>-senior-citizen-tour-packages/`
4. `/<destination>/<destination>-group-tour-packages/`
5. `/<destination>/<destination>-luxury-holiday-tour-packages/`
6. `/<destination>/<destination>-school-college-tour-packages/`

## Content mapping rule

- If a dedicated landing page already exists for a category (e.g. a real 
  Honeymoon-specific page for that destination), the nested route renders 
  that exact same page component — do not duplicate content, just import 
  and render it at the new path.
- If no dedicated page exists yet for a category (e.g. Group Tours, Luxury, 
  School & College), the nested route renders the destination's GENERAL 
  landing page component instead, as a placeholder, until dedicated content 
  is built.

## Existing flat URLs

Any current flat URL for a destination (e.g. /kerala, /kerala-family) must 
NEVER be removed or redirected when adding the nested structure — both must 
work side by side, since old URLs may still be referenced by live or paused 
Google Ads campaigns.

## 301 Redirects for Old Nested URLs

To maintain backward compatibility with previous nested campaign links, 301 redirects
are configured in `next.config.js`:
- `/<destination>/<destination>-honeymoon-packages` → `/<destination>/<destination>-honeymoon-tour-packages`
- `/<destination>/<destination>-family-holiday-packages` → `/<destination>/<destination>-family-holiday-tour-packages`
- `/<destination>/<destination>-senior-citizen-tours` → `/<destination>/<destination>-senior-citizen-tour-packages`
- `/<destination>/<destination>-luxury-holiday-packages` → `/<destination>/<destination>-luxury-holiday-tour-packages`

## Thank-you page redirects

In src/components/CrmLeadForm.tsx's handleSubmit redirect logic, add a path 
check for each new nested URL:
- Routes reusing a dedicated page's content redirect to that page's existing 
  thank-you page (e.g. /kerala/kerala-honeymoon-tour-packages/ → /kerala-honeymoon/thank-you)
- Routes reusing the general landing page redirect to that destination's 
  general thank-you page (e.g. /kerala/kerala-group-tour-packages/ → /kerala/thank-you)

## Reference implementation

See the Kerala implementation for the exact pattern to replicate:
- Routes: src/app/kerala/kerala-honeymoon-tour-packages/page.tsx, 
  src/app/kerala/kerala-family-holiday-tour-packages/page.tsx, 
  src/app/kerala/kerala-senior-citizen-tour-packages/page.tsx, 
  src/app/kerala/kerala-group-tour-packages/page.tsx, 
  src/app/kerala/kerala-luxury-holiday-tour-packages/page.tsx, 
  src/app/kerala/kerala-school-college-tour-packages/page.tsx
- Redirect logic: src/components/CrmLeadForm.tsx (handleSubmit function, 
  the redirectUrl path-matching block)
