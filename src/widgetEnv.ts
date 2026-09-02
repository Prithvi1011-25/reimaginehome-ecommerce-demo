/**
 * Dev widget + API — same as Otodom Vue agentic / Vanilla script-embed demos.
 * Production CDN (widget.styldod.com) does NOT accept public_key or ecommerce mode.
 */
export const WIDGET_DEV_APP_URL =
  'https://reimaginehome-embed-widget-app-git-dev-styldod.vercel.app';

export const WIDGET_DEV_API_BASE_URL =
  'https://oetb78o6i5.execute-api.us-west-2.amazonaws.com/dev';

export const WIDGET_PROD_SCRIPT_URL = 'https://widget.styldod.com/widget.js';

/** Dev widget loader by default — supports ecommerce + allow_upload + public_key. */
export const WIDGET_SCRIPT_URL =
  import.meta.env.VITE_REIH_WIDGET_SCRIPT_URL ||
  `${WIDGET_DEV_APP_URL}/widget.js`;

/** Dev demo key — works against the dev session API above. */
export const WIDGET_PUBLIC_KEY =
  import.meta.env.VITE_REIH_PUBLIC_KEY || 'public_key';

export const WIDGET_LANGUAGE =
  import.meta.env.VITE_REIH_WIDGET_LANGUAGE || 'en-US';

const PLACEHOLDER_KEYS = new Set(['', 'your_public_key_here']);

export function isWidgetPublicKeyConfigured(): boolean {
  return !PLACEHOLDER_KEYS.has(WIDGET_PUBLIC_KEY.trim());
}
