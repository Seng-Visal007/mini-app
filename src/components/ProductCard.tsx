import React from 'react';
import type { PublicProduct } from '../types/product';

interface ProductCardProps {
  product: PublicProduct;
  onDelete?: (id: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onDelete }) => {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>Price: ${product.price.toFixed(2)}</p>
      {/* Optional chaining and nullish coalescing */}
      <p>{product?.description ?? 'No description provided.'}</p>
      {onDelete && (
        <button onClick={() => onDelete(product.id)}>Delete</button>
      )}
    </div>
  );
};