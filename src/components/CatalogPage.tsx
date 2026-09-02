import { ProductCard } from './ProductCard';
import { VisualizeButton } from './VisualizeButton';
import {
  CATALOG,
  DEMO_PRODUCTS,
  getDeployEnvLabel,
  isWidgetPublicKeyConfigured,
  type CatalogProduct,
} from '../widgetConfig';
import '../catalog.css';

type CatalogPageProps = {
  onOpenCatalog: () => void;
  onVisualize: (product: CatalogProduct) => void;
  onAddToCart: (product: CatalogProduct) => void;
};

export function CatalogPage({
  onOpenCatalog,
  onVisualize,
  onAddToCart,
}: CatalogPageProps) {
  const hasPublicKey = isWidgetPublicKeyConfigured();

  return (
    <div className="catalog-shell">
      <header className="catalog-hero rise">
        <div className="catalog-hero__inner">
          <p className="eyebrow">
            ReimagineHome · Ecommerce mode · {getDeployEnvLabel()}
          </p>
          <h1>Shop furniture, visualize before you buy</h1>
          <p className="catalog-hero__lead">{CATALOG.subtitle}</p>

          {!hasPublicKey ? (
            <p className="setup-notice" role="status">
              Add your ReimagineHome public key to <code>.env</code> — see{' '}
              <code>README.md</code> — then restart <code>npm run dev</code>.
            </p>
          ) : null}

          <VisualizeButton
            variant="hero"
            label="Open full catalog visualizer"
            disabled={!hasPublicKey}
            onClick={onOpenCatalog}
          />
        </div>
      </header>

      <main className="catalog wrap">
        <div className="catalog__head rise" style={{ animationDelay: '0.06s' }}>
          <h2>{CATALOG.title}</h2>
          <span className="count">{DEMO_PRODUCTS.length} items</span>
        </div>

        <section className="catalog__grid" aria-label="Product catalog">
          {DEMO_PRODUCTS.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              disabled={!hasPublicKey}
              style={{ animationDelay: `${0.08 + index * 0.03}s` }}
              onVisualize={onVisualize}
              onAddToCart={onAddToCart}
            />
          ))}
        </section>
      </main>

      <footer className="catalog-footer">
        <p>
          Powered by{' '}
          <a
            href="https://enterprise.styldod.com/documentation"
            target="_blank"
            rel="noreferrer"
          >
            ReimagineHome
          </a>
        </p>
      </footer>
    </div>
  );
}
