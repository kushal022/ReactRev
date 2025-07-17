import React, { useContext, useState } from 'react'
import { CartContext } from './cartContext'
import Product from './Product'

const Home = () => {
    const {user,logout,login}= useContext(CartContext)
    const [username,setUsername]= useState('')
  return (
     <div>
      <h4>Home</h4>
      {user ? (
        <>
          <p>Welcome, {user}</p>
          <button onClick={logout}>Logout</button>
          <Product/>
          
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={() => login(username)}>Login</button>
        </>
      )}
    </div>
  )
}

export default Home