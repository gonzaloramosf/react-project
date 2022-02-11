import { createContext, useContext, useEffect, useState } from "react";
export const CartContext = createContext([]);


export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    // const [error, setError] = useState(null);
    // const [isLoading, setIsLoading] = useState(false);
    
    const addItem = (item, quantityAdd) => {
        const newItem = {item, quantityAdd};
        console.log('se agrego ', newItem)
        setCart((prevState) => [...prevState, newItem]);
    }

    // useEffect (() => {
    // }, []);

    return (
        <CartContext.Provider value={{cart, addItem}}>
            { children } 
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);