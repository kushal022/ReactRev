import React, { useContext } from "react";
import { CartContext } from "./cartContext";

let products = [
  { id: 1, price:129990, isExist: false, name: "iPhone" },
  { id: 2, price: 12999, isExist: false, name: "LAVA" },
  { id: 3, price: 18500, isExist: false, name: "Nothing CMF 2" },
  { id: 4, price: 13700, isExist: false, name: "Narzo Ultra 70" },
  { id: 5, price: 14999, isExist: false, name: "S23 Ultra" },
];

const Product = () => {
  const { addToCart, cart, removeFromCart } = useContext(CartContext);

  const handleAdd = (product) => {
    addToCart(product);
    products = products.map((item) =>
      item.id === product.id ? { ...item, isExist: true } : item
    );
  };

  const handleRemove = (product) => {
    removeFromCart(product.id);
    products = products.map((item) =>
      item.id === product.id ? { ...item, isExist: false } : item
    );
  };
  return (
    <div>
      <h5>Products</h5>
      <ol>
        {products.map((product) => (
          <li key={product.id}>
            <div>
              <span>{product.name}</span>
              {!product.isExist ? (
                <button onClick={() => handleAdd(product)}>Add to cart</button>
              ) : (
                <button onClick={() => handleRemove(product)}>Remove</button>
              )}
            </div>
            <div>₹ {product.price}</div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Product;
