import ItemCount from '../ItemCount/ItemCount';
import './Item.css';

const Item = ({item}) => {

    return (
        <div>
            <h4> Nombre: {item.name}            </h4>
            <p> Descripcion: {item.description} </p>
            <p> Stock: <b>{item.stock}</b>      </p>
            <p> Precio: <b>{item.price}</b>    </p>
            <ItemCount initial={1} stock={item.stock}/>
        </div>
    );
}

export default Item;