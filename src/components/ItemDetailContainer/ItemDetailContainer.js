import { useEffect, useState } from "react";
import { getItemById } from "../ItemListContainer/Database";
import ItemDetail from './ItemDetail/ItemDetail'

export default function ItemDetailContainer() {
    const [items, setItems] = useState([]);

    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        setIsLoading(true);
        getItemById().then((result) => {setItems(result)})
                       .catch((error) => {console.log(error)})
                       .finally(()    => {setIsLoading(false)});
    }, [])

    return (
        <div>
            { isLoading ? <p> loading... </p> : <ItemDetail item={items}/> }
        </div>
    );
}