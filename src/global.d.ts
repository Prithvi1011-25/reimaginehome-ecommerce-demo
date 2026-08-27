import type { WidgetProduct } from './widgetConfig';

declare global {
  interface Window {
    reihWidgetConfig?: {
      language?: string;
      onComplete?: (detail: unknown) => void;
      onError?: (err: unknown) => void;
      onClose?: () => void;
      onActionClick?: (event: unknown) => void;
    };
    reihWidget?: {
      open: (options?: {
        media?: Array<{ image_url: string; label?: string }>;
        mode?: string;
        allow_upload?: boolean;
        products?: WidgetProduct[];
        language?: string;
        onComplete?: (detail: unknown) => void;
        onError?: (err: unknown) => void;
        onClose?: () => void;
        onActionClick?: (event: unknown) => void;
      }) => Promise<void>;
      close: () => void;
      destroy: () => void;
    };
  }
}

export {};
