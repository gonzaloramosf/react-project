import { useNavigate } from 'react-router-dom';
import {useCart} from '../../Context/CartContext';
import { useUser } from '../../Context/UserContext';
import './CartStyles.css'

const Cart = () => {
    const {cart, removeItem, clearCart, totalPrice} = useCart();
    const { user } = useUser();
    const navigate = useNavigate();

    if (cart.length === 0) {
        return (
            <div>
                <p> empty </p>
            </div>
        );
    };

    return (
        <section>
            <div className='cartTitle'>
                <h2> Cart </h2>
            </div> 
            <div className='buyList'> 
                {cart.map((purchase) => {
                    return (
                        <div key={purchase.item.id}>
                            <p>{purchase.item.name}</p>
                            <p>{purchase.quantity}</p>
                            <button onClick={()=>removeItem(purchase.item.id)}> Remove </button>
                        </div>
                    )
                })}
                <h3> Total: ${totalPrice} </h3>
            </div>

            <div className='buttons'>
                <button onClick={clearCart}> Empty cart </button>
                <button onClick={() => {user ? navigate('/cart/checkout') : navigate('/login')} }> Checkout </button>
            </div>
        </section>
    )

}

export default Cart;