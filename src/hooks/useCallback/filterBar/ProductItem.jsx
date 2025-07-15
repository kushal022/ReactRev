import React from 'react';

const ProductItem = React.memo(({ product, isFavorite, toggleFavorite }) => {
  console.log('Rendering:', product.name);

  return (
    <li>
      {product.name} ({product.category}){' '}
      <button onClick={() => toggleFavorite(product.id)}>
        {isFavorite ? '★' : '☆'}
      </button>
    </li>
  );
});

export default ProductItem;
