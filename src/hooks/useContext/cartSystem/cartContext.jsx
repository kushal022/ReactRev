import { createContext, useState } from "react";

// Create cart context:
export const CartContext = createContext(null);

// Create Cart provider:
 const  CartProvider = ({children})=>{
    const [cart, setCart] = useState([])
    const [user, setUser] = useState(null)

    const login = (username)=>{
        setUser(username)
    }

    const logout = ()=>setUser(null)

    const addToCart = (product)=>{
        // console.log(product)
        const existItem = cart.find(item=>item.id===product.id);
        if(existItem)return
        setCart(prev=> [...prev,{...product,isExist:true}])
        
    }

    const removeFromCart = (id)=>{
        setCart(item => item.filter(p=>p.id!==id))
    }

    const values = {
        cart,
        addToCart,
        removeFromCart,
        user,
        login,
        logout
    }

    return(
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;