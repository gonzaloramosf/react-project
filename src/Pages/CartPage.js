import { useCart } from "../Context/CartContext";

const CartPage = () => {
    
    const {cart} = useCart();
    
    return (

        <div> 
            <h1> Cart </h1> 
            {cart.map((purchase) => {
                return <div>{purchase.item.name}</div>
            })}
        
        
        </div>
    )
}

export default CartPage;