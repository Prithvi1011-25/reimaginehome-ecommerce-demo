export type ReihDeployEnv = 'dev' | 'stage' | 'prod';

/** Active deploy target — set via VITE_REIH_ENV or Vite mode (.env.stage). */
export const REIH_DEPLOY_ENV: ReihDeployEnv =
  import.meta.env.VITE_REIH_ENV === 'stage' ||
  import.meta.env.VITE_REIH_ENV === 'prod'
    ? import.meta.env.VITE_REIH_ENV
    : 'dev';

export const WIDGET_DEV_APP_URL =
  'https://reimaginehome-embed-widget-app-git-dev-styldod.vercel.app';

export const WIDGET_DEV_API_BASE_URL =
  'https://oetb78o6i5.execute-api.us-west-2.amazonaws.com/dev';

/** Stage CDN widget — session API is stage-ep-api.styldod.com (baked into widget.js). */
export const WIDGET_STAGE_APP_URL = 'https://stage-widget.styldod.com';

export const WIDGET_STAGE_API_BASE_URL = 'https://stage-ep-api.styldod.com';

export const WIDGET_PROD_SCRIPT_URL = 'https://widget.styldod.com/widget.js';

export const WIDGET_PROD_API_BASE_URL = 'https://ep-api.styldod.com';

const DEFAULT_WIDGET_SCRIPT_URL =
  REIH_DEPLOY_ENV === 'stage'
    ? `${WIDGET_STAGE_APP_URL}/widget.js`
    : `${WIDGET_DEV_APP_URL}/widget.js`;

/** Widget loader script URL — override with VITE_REIH_WIDGET_SCRIPT_URL if needed. */
export const WIDGET_SCRIPT_URL =
  import.meta.env.VITE_REIH_WIDGET_SCRIPT_URL || DEFAULT_WIDGET_SCRIPT_URL;

export const WIDGET_API_BASE_URL =
  import.meta.env.VITE_REIH_API_BASE_URL ||
  (REIH_DEPLOY_ENV === 'stage'
    ? WIDGET_STAGE_API_BASE_URL
    : WIDGET_DEV_API_BASE_URL);

/** Demo public key — same for dev and stage builds unless overridden. */
export const WIDGET_PUBLIC_KEY =
  import.meta.env.VITE_REIH_PUBLIC_KEY || 'public_key';

export const WIDGET_LANGUAGE =
  import.meta.env.VITE_REIH_WIDGET_LANGUAGE || 'en-US';

const PLACEHOLDER_KEYS = new Set(['', 'your_public_key_here']);

export function isWidgetPublicKeyConfigured(): boolean {
  return !PLACEHOLDER_KEYS.has(WIDGET_PUBLIC_KEY.trim());
}

export function getDeployEnvLabel(): string {
  if (REIH_DEPLOY_ENV === 'stage') return 'Stage';
  if (REIH_DEPLOY_ENV === 'prod') return 'Production';
  return 'Dev';
}
