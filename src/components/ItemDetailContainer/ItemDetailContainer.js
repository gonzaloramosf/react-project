import { useEffect, useState } from "react";
import { getItemById } from "../ItemListContainer/Database";
import ItemDetail from './ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

export default function ItemDetailContainer() {
    const {itemId} = useParams();
    const [item, setItem] = useState();
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        setIsLoading(true);
        getItemById(itemId).then((result) => {setItem(result[0])})
                           .catch((error) => {console.log(error)})
                           .finally(()    => {setIsLoading(false)});
    }, [itemId])

    function onAdd(quantity) {
        console.log(quantity);
        <ItemDetail quantity={quantity}/>
    }

    return (
        <div>
            { isLoading ? <p> loading... </p> : <ItemDetail item={item} onAdd={onAdd}/> }
        </div>
    );
}