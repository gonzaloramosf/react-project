import { useNavigate } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './Item.css';

const Item = ({item}) => {
    const navigate = useNavigate();

    return (
        <div>
            <h4> Nombre: {item.name}            </h4>
            <p> Descripcion: {item.description} </p>
            <p> Stock: <b>{item.stock}</b>      </p>
            <p> Precio: <b>{item.price}</b>    </p>
            <ItemCount initial={1} stock={item.stock}/>
            <button onClick={()=> navigate(`/products/${item.id}`)}> Ver detalles </button>
        </div>
    );
}

export default Item;