import { useEffect, useState } from "react";
import { getItems } from "../ItemListContainer/Database";
import ItemDetail from './ItemDetail/ItemDetail'

export default function ItemListContainer() {
    const [items, setItems] = useState([]);

    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        setIsLoading(true);
        getItems().then((result) => {setItems(result)})
                  .catch((error) => {console.log(error)})
                  .finally(()    => {setIsLoading(false)});
    }, [])



    function onAdd() {
        console.log('agregue al carrito');
    }

    return (
        <div>
            { isLoading ? <p> loading... </p> : <ItemDetail items={items}/> }
        </div>
    );
}