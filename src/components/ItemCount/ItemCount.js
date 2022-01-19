import React from "react";
import './ItemCount.css';
import {stock} from '../ItemListContainer/ItemListContainer';

export default function ItemCount({stock, initital, onAdd}) {
    
    const onAdd = () => {
        if (quantity >= ItemListContainer.stock) {
            setQuantity(quantity + 0)
        }
        else {
            setQuantity(quantity + 1)
        }
    };

    const remove = () => {
        if (quantity < 1) {
            setQuantity(quantity - 0)
        }
        else{
            setQuantity(quantity - 1)
        }
    };

    return (
        <div>
            <h3> Cantidad = {quantity} </h3>
            <button onClick={onAdd}>  + </button>
            <button onClick={remove}> - </button>
        </div>
    );
}