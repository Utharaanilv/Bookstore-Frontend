import { createContext, useContext, useEffect, useState } from "react";

const CartContext=createContext();
const CartProvider=({children})=>{
    const [cart,setcart]=useState([]);

    useEffect(() => {
      let existingCardItems= localStorage.getItem('cart')
      if(existingCardItems)setcart(JSON.parse(existingCardItems)) ;
    }, [])
    


    return(
        <CartContext.Provider value={[cart,setcart]}>
            {children}
        </CartContext.Provider>
    )


}

const useCart=()=>useContext(CartContext)
export {useCart,CartProvider}
