import { useEffect, useState } from "react";
import ItemDetail from './ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore } from "../../firebase";
import './ItemDetailContainerStyles.css'

export default function ItemDetailContainer() {
    const {itemId} = useParams();
    const [item, setItem] = useState(undefined);
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        setIsLoading(true);
        const dataBase = getFirestore();
        const itemsCollection = dataBase.collection('items');
        const requiredItem = itemsCollection.doc(itemId);

        requiredItem.get().then(response => {(!response.exists) ? console.log('Product dont exist!') : setItem({...response.data(), id: response.id})})
                          .catch(error => {console.log('Error seraching required item ', error)})
                          .finally(() => setIsLoading(false)); 
    }, [itemId]);

    return (
        <div className="itemDetailContainer">
            { isLoading || !item ? <p> loading... </p> : <ItemDetail item={item}/> }
        </div>
    );
}