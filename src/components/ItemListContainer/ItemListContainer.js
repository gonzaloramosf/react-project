import './ItemListContainerStyles.css';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { getItems } from "./Database";
import { getFirestore } from "../../firebase";
import ItemList from "./ItemList/ItemList";

export default function ItemListContainer() {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const {categoryId} = useParams();

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
                <select>
                    <option> Nescafe </option>
                    <option> Cabrales </option>
                </select>


                {/* <button onClick={() => navigate('/category/1')}> Nesacafe </button>
                <button onClick={() => navigate('/category/2')}> Cabrales </button> */}
            </div>
            <div className='itemsContainer'>
                {isLoading ? <p> loading... </p> : <ItemList items={items}/>}
            </div>
        </section>
    );
}