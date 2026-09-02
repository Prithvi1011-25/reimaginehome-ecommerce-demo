import {
  WIDGET_DEV_API_BASE_URL,
  WIDGET_DEV_APP_URL,
  WIDGET_LANGUAGE,
  WIDGET_PROD_SCRIPT_URL,
  WIDGET_PUBLIC_KEY,
  WIDGET_SCRIPT_URL,
  isWidgetPublicKeyConfigured,
} from './widgetEnv';

export {
  WIDGET_DEV_API_BASE_URL,
  WIDGET_DEV_APP_URL,
  WIDGET_LANGUAGE,
  WIDGET_PROD_SCRIPT_URL,
  WIDGET_PUBLIC_KEY,
  WIDGET_SCRIPT_URL,
  isWidgetPublicKeyConfigured,
};

/** Host-page catalog item (from bulk upload CSV). */
export type CatalogProduct = {
  id: string;
  sku: string;
  name: string;
  price: number;
  currency?: string;
  image_url: string;
  category?: string;
  description?: string;
  product_url?: string;
};

/** Widget product — image URL string or object with metadata. */
export type WidgetProduct =
  | string
  | {
      image_url: string;
      name?: string;
      category?: string;
      price?: number;
      currency?: string;
      product_url?: string;
    };

export type ReihWidgetOpener = {
  open: (overrides?: Record<string, unknown>) => Promise<void>;
  close: () => void;
  destroy: () => void;
};

export const REIH_LOADER_ID = 'reih-host-loader';

export const CATALOG = {
  title: 'Featured furniture',
  subtitle: 'Visualize products in your room before you buy.',
};

export const DEMO_PRODUCTS: CatalogProduct[] = [
  {
    id: 'sofa-001',
    sku: 'SOFA-001',
    name: 'Oslo 3 Seater Sofa',
    price: 1299,
    currency: 'USD',
    category: 'Sofa',
    description: 'Oslo 3 seater sofa — clean lines and deep comfort for the living room.',
    image_url:
      'https://cdn.shopify.com/s/files/1/0853/1004/6458/files/photo-1555041469-a586c61ea9bc.jpg?v=1787307189',
  },
  {
    id: 'chair-014',
    sku: 'CHAIR-014',
    name: 'Ada Velvet Armchair',
    price: 449,
    currency: 'USD',
    category: 'Chair',
    description: 'Ada velvet armchair with soft upholstery and a sculptural silhouette.',
    image_url:
      'https://cdn.shopify.com/s/files/1/0853/1004/6458/files/photo-1567538096630-e0c55bd6374c.jpg?v=1787307190',
  },
  {
    id: 'table-008',
    sku: 'TABLE-008',
    name: 'Walnut Coffee Table',
    price: 620,
    currency: 'USD',
    category: 'Table',
    description: 'Walnut coffee table with warm grain and a low, lounge-friendly profile.',
    image_url:
      'https://cdn.shopify.com/s/files/1/0853/1004/6458/files/photo-1533090481720-856c6e3c1fdc.jpg?v=1787307192',
  },
  {
    id: 'lamp-002',
    sku: 'LAMP-002',
    name: 'Lumen Floor Lamp',
    price: 189,
    currency: 'USD',
    category: 'Lamp',
    description: 'Lumen floor lamp — adjustable arc light for reading nooks and sofas.',
    image_url:
      'https://cdn.shopify.com/s/files/1/0853/1004/6458/files/photo-1507473885765-e6ed057f782c.jpg?v=1787307191',
  },
  {
    id: 'modway-clearwater-sectional',
    sku: '69c6819ec4cd720002289ac4',
    name: 'Modway Clearwater Outdoor Sectional',
    price: 1479.75,
    currency: 'USD',
    category: 'Sofa',
    description: 'Modway Clearwater 4-piece outdoor patio sectional in teak wood.',
    image_url:
      'https://cdn.shopify.com/s/files/1/0853/1004/6458/files/shopping_c245f39e-6f37-4069-9256-a497c2d00b9d.webp?v=1785604089',
  },
  {
    id: 'hudson-valley-devon-lamp',
    sku: '69c6839dadd9bf000243e5cc',
    name: 'Hudson Valley Devon Table Lamp',
    price: 824,
    currency: 'USD',
    category: 'Lamp',
    description: 'Hudson Valley Lighting Devon table lamp with refined metal detailing.',
    image_url:
      'https://cdn.shopify.com/s/files/1/0853/1004/6458/files/shopping_420d34af-6329-45bd-927d-8fd1d4a5b692.webp?v=1785604075',
  },
  {
    id: 'safavieh-monterey-rug',
    sku: '69c68414a0a09c00022d34e4',
    name: 'Safavieh Monterey Shag Rug',
    price: 149.98,
    currency: 'USD',
    category: 'Rug',
    description: 'Safavieh Monterey shag rug — plush texture for bedrooms and living spaces.',
    image_url:
      'https://cdn.shopify.com/s/files/1/0853/1004/6458/files/shopping_3d630b58-3133-47bf-8ac4-ab7fc51e238b.webp?v=1785603951',
  },
  {
    id: 'ukiyo-wall-art',
    sku: '69c6839cadd9bf000243e5b8',
    name: 'Ukiyo Framed Wall Art Print',
    price: 1499,
    currency: 'USD',
    category: 'Wall Art',
    description: 'Ukiyo by Huda Hashim — 46.25" × 61.25" framed wall art print.',
    image_url:
      'https://cdn.shopify.com/s/files/1/0853/1004/6458/files/shopping_3188e5da-2ff0-4c91-b3f5-53660a5c60e7.webp?v=1785604085',
  },
  {
    id: 'millie-cabinet',
    sku: '69c6839eadd9bf000243e5d6',
    name: 'Millie Glass Door Cabinet',
    price: 4399,
    currency: 'USD',
    category: 'Cabinet',
    description: 'Millie panel and glass door cabinet in drifted matte black finish.',
    image_url:
      'https://cdn.shopify.com/s/files/1/0853/1004/6458/files/shopping_5bfcf480-c640-4596-b13c-0b21e0e8b8f0.webp?v=1785604053',
  },
  {
    id: 'monstera-plant',
    sku: '69c68413a0a09c00022d34e1',
    name: 'Monstera Artificial Plant',
    price: 49.02,
    currency: 'USD',
    category: 'Plant',
    description: 'Tall artificial monstera tree for indoor styling without maintenance.',
    image_url:
      'https://cdn.shopify.com/s/files/1/0853/1004/6458/files/shopping_ac8438c4-33b4-4850-906b-138b371668d7.jpg?v=1785603986',
  },
];

export function formatPrice(price: number, currency = 'USD'): string {
  const hasCents = !Number.isInteger(price);
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: hasCents ? 2 : 0,
    maximumFractionDigits: hasCents ? 2 : 0,
  }).format(price);
}

export function toWidgetProduct(product: CatalogProduct): WidgetProduct {
  return {
    image_url: product.image_url,
    name: product.name,
    category: product.category?.toLowerCase(),
    price: product.price,
    currency: product.currency ?? 'USD',
    product_url: product.product_url,
  };
}

export function clearReihLoader(): void {
  document.getElementById(REIH_LOADER_ID)?.remove();
}

const widgetCallbacks = {
  onComplete: (detail: unknown) => {
    console.log('[reih] onComplete:', detail);
  },
  onError: (err: unknown) => {
    console.error('[reih] onError:', err);
  },
  onClose: () => {
    console.log('[reih] onClose: widget closed');
  },
  onActionClick: (event: unknown) => {
    console.log('[reih] onActionClick:', event);
  },
};

/** Same CDN logo Otodom Staging passes into the widget. */
export function buildWidgetBranding() {
  return {
    logo: 'https://ecdn.styldod.com/assets/logo/6a2bca9bce2a355c2c13d058.svg',
  };
}

export function buildWidgetOptions() {
  return {
    language: WIDGET_LANGUAGE,
    branding: buildWidgetBranding(),
    ...widgetCallbacks,
  };
}

export function buildScriptEmbedWidgetConfig() {
  return buildWidgetOptions();
}

export async function openReihEcommerce(
  widget: ReihWidgetOpener,
  products?: CatalogProduct[],
): Promise<void> {
  clearReihLoader();

  const payload: Record<string, unknown> = {
    media: [],
    allow_upload: true,
    mode: 'ecommerce',
    ...buildWidgetOptions(),
  };

  if (products?.length) {
    payload.products = products.map(toWidgetProduct);
  }

  await widget.open(payload);
}

export function waitForReihWidget(
  timeoutMs = 30_000,
): Promise<NonNullable<Window['reihWidget']>> {
  const existing = window.reihWidget;
  if (existing && typeof existing.open === 'function') {
    return Promise.resolve(existing);
  }

  return new Promise((resolve, reject) => {
    const script = document.querySelector<HTMLScriptElement>(
      'script[src*="widget.js"]',
    );

    let settled = false;
    const finish = (widget: NonNullable<Window['reihWidget']>) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      clearInterval(poller);
      script?.removeEventListener('load', tryResolve);
      resolve(widget);
    };

    const tryResolve = () => {
      const widget = window.reihWidget;
      if (widget && typeof widget.open === 'function') {
        finish(widget);
      }
    };

    script?.addEventListener('load', tryResolve);
    const poller = window.setInterval(tryResolve, 50);

    const timer = window.setTimeout(() => {
      if (settled) return;
      settled = true;
      clearInterval(poller);
      script?.removeEventListener('load', tryResolve);
      reject(new Error('[reih] Widget script did not load in time'));
    }, timeoutMs);

    tryResolve();
  });
}
