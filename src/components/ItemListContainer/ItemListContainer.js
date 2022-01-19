import ItemCount from "../ItemCount/ItemCount";

export default function ItemListContainer({name, price, stock}) {
    function onAdd() {
        console.log('agregue al carrito');
    }

    return (
        <div>
            <h3> {name} </h3>
            <p> Precio: {price} </p>
            <p> Stock: {stock}</p>
            <ItemCount onAdd={onAdd} stock={stock} initial={1}/>
        </div>
    );
}