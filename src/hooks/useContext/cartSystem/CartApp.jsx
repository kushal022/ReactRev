import React from 'react'
import CartProvider from './cartContext'
import Product from './Product'
import Cart from './Cart'

const CartApp = () => {
  return (
    <CartProvider>
        <div>
            <Product/>
            <hr />
            <Cart/>
        </div>
    </CartProvider>
  )
}

export default CartApp