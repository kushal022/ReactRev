import { createContext, useState } from "react";

// Create cart context:
export const CartContext = createContext(null);

// Create Cart provider:
 const  CartProvider = ({children})=>{
    const [cart, setCart] = useState([])
    const [btnText, setBtnText] = useState('Add To Cart')

    const addToCart = (product)=>{
        // console.log(product)
        const existItem = cart.find(item=>item.id===product.id);
        if(existItem)return
        setCart(prev=> [...prev,{...product,isExist:true}])
        
    }

    const removeFromCart = (id)=>{
        setCart(item => item.filter(p=>p.id!==id))
    }

    return(
        <CartContext.Provider value={{cart,addToCart,removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;