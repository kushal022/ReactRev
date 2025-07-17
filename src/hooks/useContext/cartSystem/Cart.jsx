import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "./cartContext";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const [price, setPrice] = useState(0);
  useEffect(() => {
    let sum = 0;
    cart.forEach((item) => (sum = sum + item.price));
    setPrice(sum);
  }, [cart]);
  return (
    <div>
      <h4>Cart</h4>
      <p>{cart.length === 0 ? "Cart is empty" : `Cart item ${cart.length}`}</p>
      <p>Total Price: ₹ {price}</p>
      <ol>
        {cart.length > 0 &&
          cart.map((item) => (
            <li key={item.id}>
              <div>
                <span>{item.name}</span>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
              <div>₹ {item.price}</div>
            </li>
          ))}
      </ol>
    </div>
  );
};

export default Cart;
