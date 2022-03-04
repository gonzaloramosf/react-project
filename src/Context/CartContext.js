import { createContext, useContext, useEffect, useState } from "react";
export const CartContext = createContext([]);


export const CartProvider = ({ children }) => {
    const localData = JSON.parse(localStorage.getItem('cart'));
    const [cart, setCart] = useState(localData);
    const [totalPrice, setTotalPrice] = useState();
    const[totalItems, setTotalItems] = useState(0);

    useEffect( () => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart] );

    useEffect(() =>{
        let totItems = 0;
        let price = 0;
        for(let cartItem of cart){
            totItems += cartItem.quantity;
            price += cartItem.quantity * cartItem.item.price;
        }
        setTotalItems(totItems);
        setTotalPrice(price);
    }, [cart])


    const addItem = (item, quantity) => {
        const itemIsInCart = cart.find((order) => order.item.id === item.id);
        if (itemIsInCart) {
            // add quantity to a item in cart
            const updateCart = cart.map((order) => {
                if (order.item.id === item.id){
                    return {...order, quantity: quantity + order.quantity};
                }
                else{
                    return order;
                }
            });
            setCart(updateCart);
        }
        else{
            // add new item to cart
            setCart((prevState)=> [...prevState, {item, quantity}]);
        }
        // const newItem = {item, quantity};
        // console.log('se agrego ', newItem)
        // setCart((prevState) => [...prevState, newItem]);
    }

    const removeItem = (id) => {
        setCart((prevState) => prevState.filter((element) => element.item.id !== id));
    }

    const clearCart = () => {
        setCart([]);
    }

    const totalAmountToPay = () => {
        
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, totalItems, totalAmountToPay, totalPrice}}>
            { children } 
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);