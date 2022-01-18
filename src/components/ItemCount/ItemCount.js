import React from "react";
import './ItemCount.css'


export default function ItemCount() {

    const [quantity, setQuantity] = React.useState(0);

    const stock = 7;
    
    const onAdd = () => {
        if (quantity >= stock) {
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