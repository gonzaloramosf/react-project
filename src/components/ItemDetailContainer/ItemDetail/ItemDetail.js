import ProductDetailPage from "../../../Pages/ProductDetailPage";
import ItemCount from "../../ItemCount/ItemCount";

const ItemDetail = ( {item} ) => {

    return (
        <div key={item.id}>
            <img src="#" alt="imgagen del producto"/>
            <div>
                <h1>{item.title}</h1>
                <h3>{item.price}</h3>
                <p> Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </p>
            </div>
        </div>
    )
}

export default ItemDetail;