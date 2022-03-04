import './ItemListContainerStyles.css';
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getFirestore } from "../../firebase";
import ItemList from "./ItemList/ItemList";

export default function ItemListContainer() {
    const [items, setItems] = useState([]);
    const {categoryId} = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [category, setCategory] = useState();
    const navigate = useNavigate();

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

    const handleCategory = (e) => {
        const option = e.target.value;
        setCategory(option);
        console.log(category);
        // setCategory(e.target.value)
    }

    return (
        <section className='minHeight'>
            <div className='categories'>
                <select value='categories' onChange={(e) => handleCategory(e)}>
                    <option value={0}> Categories </option>
                    <option value={1}> Electronics </option>
                    <option value={2}> Accesories </option>
                    <option value={3}> Lifestyle </option>
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