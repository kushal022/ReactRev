import React, { useContext } from 'react'
import { CartContext } from './cartContext'

const Cart = () => {
    const {cart, removeFromCart} = useContext(CartContext);
    // {cart && console.log(cart)}
  return (
    <div>
        <h4>Cart</h4>
        <p>{cart.length===0?'Cart is empty':`Cart item ${cart.length}`}</p>
        <ol>
            {cart.length>0&& cart.map(item=>(
                <li key={item.id} >
                    <span>{item.name}</span>
                    <button onClick={()=>removeFromCart(item.id)} >Remove</button>
                </li>
            ))}
        </ol>
    </div>
  )
}

export default Cart