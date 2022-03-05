import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {useCart} from '../../Context/CartContext';
import { useUser } from '../../Context/UserContext';
import { getFirestore } from "../../firebase";

const Checkout = () => {
    const {user} = useUser();
    const {cart} = useCart();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const navigate = useNavigate();

    const total = (cart) => {
        let total = 0;
        cart.forEach((element) => {
        total += element.item.price * element.quantity;
        });
        return total;
    }

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
    }

    return (
        <div>
            <h2> Summary </h2>
            <p> You: {user.displayName || user.email} </p>
            {cart.map((cart) => {
                return (
                    <div key={cart.item.id}>
                        <p>Item id: {cart.item.id}</p>
                        <p>${cart.item.price * cart.quantity}</p>
                    </div>
                )
            })}
            <h3> Billing dates </h3>
            <form onSubmit={handleSumbit}>
                <label htmlFor='name'> Nombre </label>
                <input type='text' id='name' name='name' placeholder='Nombre' 
                       value={name} onChange={e=>setName(e.target.value)}/>
                <label htmlFor='phone'> Celular </label>
                <input type='number' id='phone' name='phone' placeholder='Numero celular' 
                       value={phone} onChange={e=>setPhone(e.target.value)}/>
                <input type='submit' value='Buy' />
            </form>
        </div>
    )
}

export default Checkout;