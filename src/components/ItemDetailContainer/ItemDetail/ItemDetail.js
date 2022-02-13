import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../../../Context/CartContext';
import ItemCount from "./ItemCount/ItemCount";

const ItemDetail = ( {item} ) => {
    const navigate = useNavigate();
    const { addItem } = useCart();
    const [isProductInCart, setIsProductInCart] = useState(false);

    const onAdd = ( quantity ) => {
        console.log(quantity);
        if (!isProductInCart){
            handleClick(quantity);
        }
        else {
            console.log('ya esta en el carrito, ir al carrito')
        }
    }

    const handleClick = (quantity) => {
        addItem(item, quantity);
        setIsProductInCart(true);
    }

    return (
        <div key={item.id}>
            <img src="#" alt="imgagen del producto"/>
            <div>
                <h1>{item.name}</h1>
                <h3>{item.price}</h3>
                <p>{item.description}</p>
                <p> Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </p>
                <ItemCount initial={1} stock={item.stock} onAdd={onAdd}/>
                <button onClick={()=> navigate(`/cart`)}> Ir al carrito </button>
            </div>
        </div>
    )
}

export default ItemDetail;