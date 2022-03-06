import './ItemListContainerStyles.css';
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getFirestore } from "../../firebase";
import ItemList from "./ItemList/ItemList";

export default function ItemListContainer() {
    const [items, setItems] = useState([]);
    const {categoryId} = useParams();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const dataBase = getFirestore();
        let itemsCollection;
        
        if (categoryId) {
            itemsCollection = dataBase.collection('items')
                                      .where('category', '==', +categoryId);
        }
        else {
            itemsCollection = dataBase.collection('items');
        }


        const getItemsFromFirestore = async () => {
            try {
                const response = await itemsCollection.get();
                if(response.empty) {
                    console.log('no products found');
                }
                setItems(response.docs.map((doc) => ({...doc.data(), id: doc.id})));
            }
            catch(error){
                console.log('Error getting items list ', error)
            }
            finally {
                setIsLoading(false);
            };
        };
        getItemsFromFirestore();
    }, [categoryId])

    return (
        <section className='minHeight'>
            <div className='categories'>
                <span> Categories </span> 
                <ul>
                    <li> <Link className='categoryColor' to='/'> All </Link> </li>
                    <li> <Link className='categoryColor' to='/category/1'> Electronics </Link> </li>
                    <li> <Link className='categoryColor' to='/category/2'> Accesories </Link> </li>
                    <li> <Link className='categoryColor' to='/category/3'> Lifestyle </Link> </li>
                </ul>
            </div>
            <div className='itemsContainer'>
                {isLoading ? <p> loading... </p> : <ItemList items={items}/>}
            </div>
        </section>
    );
}