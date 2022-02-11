import { createContext, useEffect, useState } from "react";
export const CartContext = createContext([]);


export const CartProvider = ({ children }) => {
    const [products, setProducts] = useState({});
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect (() => {

    }, []);

    return (
        <CartContext.Provider value={{products, error, isLoading}}>
            { children } 
        </CartContext.Provider>
    );
}