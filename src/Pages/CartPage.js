import { useCart } from "../Context/CartContext";

const CartPage = () => {
    
    const {cart, removeItem, clearCart} = useCart();
    
    return (
        <div> 
            <h1> Cart </h1> 
            {cart.map((purchase) => {
                return (
                    <div key={purchase.item.id}>
                        <p>{purchase.item.name}</p>
                        <p>{purchase.quantity}</p>
                        <button onClick={()=>removeItem(purchase.item.id)}> eliminar </button>
                    </div>
                )
            })}
            <button onClick={clearCart}> vaciar carrito </button>
        </div>
    )
}

export default CartPage;