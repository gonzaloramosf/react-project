import { useNavigate, Link } from 'react-router-dom';
import {useCart} from '../../Context/CartContext';
import { useUser } from '../../Context/UserContext';
import './CartStyles.css'

const Cart = () => {
    const {cart, removeItem, clearCart, totalPrice} = useCart();
    const { user } = useUser();
    const navigate = useNavigate();

    if (cart.length === 0) {
        return (
            <div className='emptyCart'>
                <h2> Oops your Cart is empty! </h2>
                <span> Go <Link style={{color: "red"}} to='/'>Home</Link> to add Products </span>
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
                        <div className='productContainer'> 
                            <img src={require(`../images/${purchase.item.pictureUrl}`)} alt='Product'/>
                            <div className='buyProduct' key={purchase.item.id}>
                                <h3>{purchase.item.name}</h3>
                                <p>Quantity: {purchase.quantity}</p>
                            </div>
                            <div>
                                <button onClick={()=>removeItem(purchase.item.id)}> Remove </button>
                            </div>
                        </div>
                    )
                })}
                <h3 className='price'> Total: ${totalPrice} </h3>
            </div>

            <div className='buttons'>
                <button onClick={clearCart}> Empty cart </button>
                <button onClick={() => {user ? navigate('/cart/checkout') : navigate('/login')} }> To Checkout </button>
            </div>
        </section>
    );
};
export default Cart;