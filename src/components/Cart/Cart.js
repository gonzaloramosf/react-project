import { useNavigate } from 'react-router-dom';
import {useCart} from '../../Context/CartContext';

const Cart = () => {
    const {cart, removeItem, clearCart, totalPrice} = useCart();
    const navigate = useNavigate();


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
            <p> Price {totalPrice} </p>
            <button onClick={clearCart}> vaciar carrito </button>
            <button onClick={() => navigate('/cart/checkout')}> To Checkout </button>
        </div>
    )

}

export default Cart;