import { useNavigate } from 'react-router-dom';
import './Item.css';

const Item = ({item}) => {
    const navigate = useNavigate();

    return (
        <div>
            <h4> Nombre: {item.name}            </h4>
            <p> Descripcion: {item.description} </p>
            <p> Stock: <b>{item.stock}</b>      </p>
            <p> Precio: <b>{item.price}</b>    </p>
            {/* item.pictureUrl en firebase esta definido como string y el valor es =
            '../images/capsulaTres.jpg'  pero no aparece la imagen  */}
            {/* <img src={require(`${item.pictureUrl}`)} alt='img'/> */}
            <img src={require('../images/capsulaTres.jpg')} alt='capsula'/>
            <button onClick={()=> navigate(`/products/${item.id}`)}> Ver detalles </button>
        </div>
    );
}

export default Item;