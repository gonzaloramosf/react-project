import { useNavigate } from 'react-router-dom';
import ItemCount from "./ItemCount/ItemCount";

const ItemDetail = ( {item, onAdd, quantity} ) => {
    const navigate = useNavigate();

    return (
        <div key={item.id}>
            <img src="#" alt="imgagen del producto"/>
            <div>
                <h1>{item.name}</h1>
                <h3>{item.price}</h3>
                <p>{item.description}</p>
                <p> Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </p>
                <button> Agregar al carrito </button>
                <button onClick={()=> navigate(`/cart`)}> Ir al carrito </button>
                <ItemCount initial={1} stock={item.stock} onAdd={onAdd}/>
            </div>
        </div>
    )
}

export default ItemDetail;