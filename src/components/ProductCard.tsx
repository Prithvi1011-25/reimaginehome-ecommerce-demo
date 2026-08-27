import type { CSSProperties } from 'react';
import { formatPrice, type CatalogProduct } from '../widgetConfig';
import { VisualizeButton } from './VisualizeButton';

type ProductCardProps = {
  product: CatalogProduct;
  onVisualize: (product: CatalogProduct) => void;
  onAddToCart: (product: CatalogProduct) => void;
  disabled?: boolean;
  style?: CSSProperties;
};

export function ProductCard({
  product,
  onVisualize,
  onAddToCart,
  disabled = false,
  style,
}: ProductCardProps) {
  return (
    <article className="product-card rise" style={style}>
      <div className="product-card__media">
        <img src={product.image_url} alt={product.name} loading="lazy" />
        {product.category ? (
          <span className="product-card__badge">{product.category}</span>
        ) : null}
      </div>

      <div className="product-card__body">
        <h3 className="product-card__name">{product.name}</h3>
        {product.description ? (
          <p className="product-card__description">{product.description}</p>
        ) : null}
        <p className="product-card__price">
          {formatPrice(product.price, product.currency)}
        </p>

        <div className="product-card__actions">
          <VisualizeButton
            variant="card"
            disabled={disabled}
            onClick={() => onVisualize(product)}
          />
          <button
            type="button"
            className="btn btn--secondary"
            disabled={disabled}
            onClick={() => onAddToCart(product)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
}
