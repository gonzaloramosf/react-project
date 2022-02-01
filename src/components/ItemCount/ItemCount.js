import {useState} from 'react';
import './ItemCount.css';

export default function ItemCount({stock, initial, onAdd}) {
    const [quantity, setQuantity] = useState(initial);

    const add = () => {
        if (quantity < stock) {
            setQuantity((prevState)=> prevState + 1);
        }
    };

    const remove = () => {
        if (quantity < 1) {
            setQuantity((prevState) => prevState - 0)
        }
        else {
            setQuantity((prevState) => prevState - 1)
        }
    };


    // quantity llega como parametro a la function de Item
    // ahora hay que enviarle el valor a ItemDetail

    onAdd(quantity);

    return (
        <div>
            <h3> Cantidad = {quantity} </h3>
            <button onClick={add}>  + </button>
            <button onClick={remove}> - </button>
            <button onClick={() => quantity}> Agregar al carrito </button>
        </div>
    );
}