import ItemCount from "../ItemCount/ItemCount";

export default function ItemListContainer({name, price, stock}) {
    return (
        <div>
            <h3> {name} </h3>
            <p> Precio: {price} </p>
            <p> Stock: {stock}</p>
            <ItemCount/>
        </div>
    );
}