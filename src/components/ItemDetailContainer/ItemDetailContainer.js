import { useEffect, useState } from "react";
import { getItemById } from "../ItemListContainer/Database";
import ItemDetail from './ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

export default function ItemDetailContainer() {
    const {id} = useParams();
    const [items, setItems] = useState([]);

    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        setIsLoading(true);
        getItemById(id).then((result) => {setItems(result)})
                       .catch((error) => {console.log(error)})
                       .finally(()    => {setIsLoading(false)});
    }, [id])

    return (
        <div>
            { isLoading ? <p> loading... </p> : <ItemDetail item={items}/> }
        </div>
    );
}