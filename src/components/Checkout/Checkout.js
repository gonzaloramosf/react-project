import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {useCart} from '../../Context/CartContext';
import { getFirestore } from "../../firebase";

const Checkout = () => {
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
                               .catch((err) => console.log('error', err))
    }

    return (
        <div>
            <h1> Resumen de compra </h1>
            {cart.map((cart) => {
                return (
                    <div key={cart.item.id}>
                        <p>Nombre: {cart.item.id}</p>
                        <p>${cart.item.price * cart.quantity}</p>
                    </div>
                )
            })}
            <h2> Ingrese sus datos de facturacion </h2>
            <form onSubmit={handleSumbit}>
                <label htmlFor='name'> Nombre </label>
                <input type='text' id='name' name='name' placeholder='Nombre' 
                       value={name} onChange={e=>setName(e.target.value)}/>
                <label htmlFor='phone'> Celular </label>
                <input type='number' id='phone' name='phone' placeholder='Numero celular' 
                       value={phone} onChange={e=>setPhone(e.target.value)}/>

                <input type='submit' value='Finalizar compra' />
            </form>
        </div>
    )
}

export default Checkout;