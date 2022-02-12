import { useEffect, useState } from "react";
import ItemDetail from './ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore } from "../../firebase";

export default function ItemDetailContainer() {
    const {itemId} = useParams();
    const [item, setItem] = useState();
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        setIsLoading(true);
        const dataBase = getFirestore();
        const itemsCollection = dataBase.collection('items');
        const requiredItem = itemsCollection.doc(itemId);

        requiredItem.get().then(response => {(!response.exists) ? console.log('product dont found') : setItem({...response.data(), id: response.id})})
                          .catch(error => {console.log('Error seraching required item ', error)})
                          .finally(() => setIsLoading(false)); 
    }, [itemId]);

    return (
        <div>
            { isLoading || !item ? <p> loading... </p> : <ItemDetail item={item}/> }
        </div>
    );
}