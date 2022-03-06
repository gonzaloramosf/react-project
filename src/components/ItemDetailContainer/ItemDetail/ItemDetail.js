import { useNavigate } from 'react-router-dom';
import { useCart } from '../../../Context/CartContext';
import ItemCount from "./ItemCount/ItemCount";
import './ItemDetailStyles.css';

const ItemDetail = ( {item} ) => {
    const navigate = useNavigate();
    const { addItem } = useCart();

    const onAdd = ( quantity ) => {
        addItem(item, quantity);
    };

    return (
        <div className='itemDetail' key={item.id}>
            <div>
                <img src={require(`../../images/${item.pictureUrl}`)} alt="Product"/>
            </div>
            <div>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <h3>Stock: {item.stock}</h3>
                <h3>${item.price}</h3>
                <ItemCount initial={1} stock={item.stock} onAdd={onAdd}/>
                <button className='toCart' onClick={()=> navigate(`/cart`)}> To checkout </button>
            </div>
        </div>
    );
};
export default ItemDetail;