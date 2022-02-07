import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItems } from "./Database";
import ItemList from "./ItemList/ItemList";

export default function ItemListContainer() {
    const [items, setItems] = useState([]);
    const category = useParams();

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getItems(category).then((result) => {setItems(result[0])})
                  .catch((error) => {console.log(error)})
                  .finally(()    => {setIsLoading(false)});
    }, [category])

    return (
        <div>
            {
            /* 
                button Nescafe
                button Cabrales 
            */
            }
            { isLoading ? <p> loading... </p> : <ItemList items={items}/> }
        </div>
    );
}