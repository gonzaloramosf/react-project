import {useState} from 'react';
import './ItemCount.css';

export default function ItemCount({stock, initial, onAdd}) {
    const [quantity, setQuantity] = useState(initial);

    const add = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    };

    const remove = () => {
        if (quantity < 1) {
            setQuantity(quantity - 0)
        }
        else {
            setQuantity(quantity - 1)
        }
    };

    return (
        <div>
            <h3> Cantidad = {quantity} </h3>
            <button onClick={add}>  + </button>
            <button onClick={remove}> - </button>
        </div>
    );
}