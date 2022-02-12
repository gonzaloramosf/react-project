import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { useNavigate } from "react-router-dom";

const ProductsPage = () => {
    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => navigate('/category/1')}> Nesacafe </button>
            <button onClick={() => navigate('/category/2')}> Cabrales </button>
            <ItemListContainer/>
        </div>
    )
}

export default ProductsPage;