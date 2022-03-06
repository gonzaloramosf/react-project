import { useNavigate } from 'react-router-dom';
import './Item.css';

const Item = ({item}) => {
    const navigate = useNavigate();

    return (
        <div className='itemCard'>
            <img src={require(`../images/${item.pictureUrl}`)} alt='Product'/>
            <h4> {item.name} </h4>
            <p className='price'> <b>${item.price}</b> </p>
            <button onClick={()=> navigate(`/products/${item.id}`)}> View details </button>
        </div>
    );
}

export default Item;