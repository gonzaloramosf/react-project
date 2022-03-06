import {useState} from 'react';
import './ItemCount.css';

export default function ItemCount({stock, initial, onAdd}) {
    const [quantity, setQuantity] = useState(initial);

    const add = () => {
        if (quantity < stock) {
            setQuantity((prevState)=> prevState + 1);
        };
    };

    const remove = () => {
        if (quantity < 2) {
            setQuantity((prevState) => prevState - 0);
        }
        else {
            setQuantity((prevState) => prevState - 1);
        };
    };

    return (
        <div className='countContainer'>
            <h3> Quantity = {quantity} </h3>
            <button onClick={add}>  + </button>
            <button onClick={remove}> - </button>
            <button onClick={() => onAdd(quantity)}> Add to cart </button>
        </div>
    );
}