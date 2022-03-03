import { useNavigate } from 'react-router-dom';
import {useCart} from '../../Context/CartContext';
import './CartStyles.css'

const Cart = () => {
    const {cart, removeItem, clearCart, totalPrice} = useCart();
    const navigate = useNavigate();


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
                <button onClick={() => navigate('/cart/checkout')}> Checkout </button>
            </div>
        </section>
    )

}

export default Cart;