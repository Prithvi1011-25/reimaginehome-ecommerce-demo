import { useCallback, useEffect, useRef } from 'react';
import { CatalogPage } from '../components/CatalogPage';
import {
  WIDGET_PUBLIC_KEY,
  WIDGET_SCRIPT_URL,
  buildScriptEmbedWidgetConfig,
  clearReihLoader,
  isWidgetPublicKeyConfigured,
  openReihEcommerce,
  waitForReihWidget,
  type CatalogProduct,
} from '../widgetConfig';

const WIDGET_SCRIPT_ID = 'reih-widget-script';

function setScriptEmbedConfig(): void {
  window.reihWidgetConfig = buildScriptEmbedWidgetConfig();
}

export function EcommerceEmbedPage() {
  const openingRef = useRef(false);

  useEffect(() => {
    if (!isWidgetPublicKeyConfigured()) {
      console.warn(
        '[ecommerce-embed] Public key not set. Add VITE_REIH_PUBLIC_KEY to `.env`, then restart `npm run dev`.',
      );
      return;
    }

    setScriptEmbedConfig();

    let script = document.getElementById(
      WIDGET_SCRIPT_ID,
    ) as HTMLScriptElement | null;

    const onScriptLoad = () => {
      setScriptEmbedConfig();
    };

    if (!script) {
      script = document.createElement('script');
      script.id = WIDGET_SCRIPT_ID;
      script.src = WIDGET_SCRIPT_URL;
      script.async = true;
      script.setAttribute('data-public-key', WIDGET_PUBLIC_KEY);
      script.addEventListener('load', onScriptLoad);
      script.onerror = () => {
        console.error('[ecommerce-embed] Widget script failed to load');
      };
      document.body.appendChild(script);
    } else if (!window.reihWidget?.open) {
      script.addEventListener('load', onScriptLoad);
    }

    return () => {
      script?.removeEventListener('load', onScriptLoad);
      window.reihWidget?.destroy?.();
      clearReihLoader();
    };
  }, []);

  const openWidget = useCallback(async (products?: CatalogProduct[]) => {
    if (!isWidgetPublicKeyConfigured()) return;
    if (openingRef.current) return;

    openingRef.current = true;
    try {
      setScriptEmbedConfig();
      const widget = await waitForReihWidget();
      widget.destroy();
      clearReihLoader();
      await openReihEcommerce(widget, products);
    } catch (error) {
      clearReihLoader();
      console.error('[ecommerce-embed] Widget open failed:', error);
    } finally {
      openingRef.current = false;
    }
  }, []);

  const handleOpenCatalog = useCallback(() => {
    void openWidget();
  }, [openWidget]);

  const handleVisualize = useCallback(
    (product: CatalogProduct) => {
      void openWidget([product]);
    },
    [openWidget],
  );

  const handleAddToCart = useCallback((product: CatalogProduct) => {
    console.log('[ecommerce-embed] Add to cart:', product.name);
  }, []);

  return (
    <CatalogPage
      onOpenCatalog={handleOpenCatalog}
      onVisualize={handleVisualize}
      onAddToCart={handleAddToCart}
    />
  );
}
