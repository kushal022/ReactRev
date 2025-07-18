import React from 'react';
import ProductItem from './ProductItem';

function ProductList({ products, favorites, toggleFavorite }) {
  return (
    <ul>
      {products.map(product => (
        <ProductItem
          key={product.id}
          product={product}
          isFavorite={favorites.includes(product.id)}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </ul>
  );
}

export default ProductList;
