import { useNavigate } from 'react-router-dom';
import { useCart } from '../../../Context/CartContext';
import ItemCount from "./ItemCount/ItemCount";

const ItemDetail = ( {item} ) => {
    const navigate = useNavigate();

    function onAdd(quantity) {
        console.log(quantity);
    }

    const { cart, addItem } = useCart();

    const handleClick = () => {
        addItem(item)
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
                <button onClick={handleClick}> Ir al carrito </button>
            </div>
        </div>
    )
}

export default ItemDetail;