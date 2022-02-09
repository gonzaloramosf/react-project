import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getItemByCategory } from "../ItemListContainer/Database";


export default function () {
    const {catId} = useParams();
    const [items, setItems] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        getItemByCategory(catId).then((result) => {setItems(result[0])})
                           .catch((error) => {console.log(error)})
                           .finally(() => {setIsLoading(false)})
    },[catId])

    console.log(catId);

    return (
        <div>
            {/* <button onClick={()=> navigate(`/products/${catId}`)}> Nescafe </button> */}
        </div>
    )

}