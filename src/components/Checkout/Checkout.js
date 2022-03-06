import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {useCart} from '../../Context/CartContext';
import { useUser } from '../../Context/UserContext';
import { getFirestore } from "../../firebase";
import './CheckoutStyles.css'

const Checkout = () => {
    const {user} = useUser();
    const {cart, totalPrice} = useCart();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const navigate = useNavigate();

    const total = (cart) => {
        let total = 0;
        cart.forEach((element) => {
        total += element.item.price * element.quantity;
        });
        return total;
    };

    const handleSumbit = (evt) => {
        evt.preventDefault();

        if (!name || !phone) {
            console.log('completa los campos');
            return false;
        }

        const newOrder = {
        buyer:{
            name,
            phone    
        }, 
        items:{
            cart
        },  
        total: total(cart)
        }

        console.log(newOrder);
        const db = getFirestore();
        db.collection('orders').add(newOrder)
                               .then((res) => {
                                   console.log('compra realizada', res.id)
                                   navigate(`/purchasereceived/${res.id}`)
                            })
                               .catch((err) => console.log('error', err));
    };

    return (
        <div className='checkoutContainer'>
            <div className='checkout'>
                <h2> Summary </h2>
                <p> Hi, {user.displayName || user.email} </p>
                <p> Buying email: {user.email} </p>
                {cart.map((cart) => {
                    return (
                        <div className='cartCheckout' key={cart.item.id}>
                            <div> 
                                <h3> Product: {cart.item.name}</h3>
                                <p>Id: {cart.item.id}</p>
                                <p>Price: ${cart.item.price * cart.quantity}</p>
                            </div>
                            <div> 
                                <img src={require(`../images/${cart.item.pictureUrl}`)} alt='Product'/>
                            </div>
                        </div>
                    )
                })}
                <h3 className='priceCheckout'> Total: ${totalPrice} </h3>
                <h2> Billing dates </h2>
                <form className='billingForm' onSubmit={handleSumbit}>
                    <input type='text' id='name' name='name' placeholder='Name' 
                        value={name} onChange={e=>setName(e.target.value)}/>
                    <input type='number' id='phone' name='phone' placeholder='Phone number' 
                        value={phone} onChange={e=>setPhone(e.target.value)}/>
                    <input type='submit' value='Buy Now' />
                </form>
            </div>
        </div>
    );
};
export default Checkout;