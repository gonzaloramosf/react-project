import ItemCount from "../ItemCount/ItemCount";

export default function ItemListContainer({name, price, stock=7}) {


    function onAdd() {
                    
    }


    return (
        <div>
            <h3> {name} </h3>
            <p> Precio: {price} </p>
            <p> Stock: {stock}</p>
            <ItemCount/>
        </div>
    );
}