import React from 'react'
import CartProvider from './cartContext'
import Product from './Product'
import Cart from './Cart'
import Home from './Home'
import Profile from './Profile'

const CartApp = () => {
  return (
    <CartProvider>
        <div>
            <Home/>
            {/* <Product/> */}
            <hr />
            <Profile/>
            {/* <Cart/> */}
        </div>
    </CartProvider>
  )
}

export default CartApp