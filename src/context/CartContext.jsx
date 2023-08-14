
import { createContext, useState } from 'react'

export const CartContext= createContext()


//children es a quien le estoy pasando la información
export const CartContextProvider = ({children}) => {
//cart es un array vacío de productos agregados    
    const [cart, setCart] = useState([])
    console.log(cart)

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)){
            setCart(prev => [...prev, {...item, quantity}])
        } else {
            console.error("already in cart")
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }
    
    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }



    return(
        //Value son los valores que el provider le pasa a sus hijos
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart}}>
            {children} {/*A quien le estoy pasando la información*/}
        </CartContext.Provider>


    )
}

export default CartContextProvider