import { useCart } from "../Context/CartContext";

const CartPage = () => {
    
    const {cart} = useCart();
    
    return (
        <div> 
            <h1> Cart </h1> 
            {cart.map((purchase) => {
                return (
                    <div>
                        <p>{purchase.item.name}</p>
                        <p>{purchase.quantityAdd}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default CartPage;