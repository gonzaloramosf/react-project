import { createContext, useContext, useState } from "react";
export const CartContext = createContext([]);


export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    // const [error, setError] = useState(null);
    // const [isLoading, setIsLoading] = useState(false);
    
    const addItem = (item, quantity) => {
        const newItem = {item, quantity};
        console.log('se agrego ', newItem)
        setCart((prevState) => [...prevState, newItem]);
    }

    const removeItem = (id) => {
        setCart((prevState) => prevState.filter((element) => element.item.id !== id));
    }

    const clearCart = () => {
        setCart([]);
    }

    const totalAmountToPay = () => {
        // show total amount to pay
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart}}>
            { children } 
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);