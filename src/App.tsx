import React, { useState, useEffect } from 'react';
import type { PublicProduct, Product } from './types/product';
import { ProductForm } from './components/ProductForm';

export const App: React.FC = () => {
  const [products, setProducts] = useState<PublicProduct[]>([]);

  // PLANTED BUG #3: Network Failure (Mistyped API endpoint URL)
  useEffect(() => {
    fetch('https://api.example.com/productss') // <--- Mistyped URL (/productss instead of /products)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error('Failed to load products:', err));
  }, []);

  const handleAddProduct = (newProduct: Omit<Product, 'id'>) => {
    const createdProduct: PublicProduct = {
      ...newProduct,
      id: crypto.randomUUID(),
    };
    setProducts((prev) => [...prev, createdProduct]);
  };

  return (
    <div>
      <h1>Product Catalog</h1>
      <ProductForm onAddProduct={handleAddProduct} />
      
      <ul>
        {products?.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <p>{product.description?.trim() ?? 'No description available.'}</p>
          </li>
        )) ?? <p>No products found.</p>}
      </ul>
    </div>
  );
};