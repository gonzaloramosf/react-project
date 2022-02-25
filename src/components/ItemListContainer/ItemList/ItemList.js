import Item from "../../Item/Item";
import './ItemListStyles.css';

const ItemList = ({items}) => {
    return (
        <div className="itemsList">
            {
                items.map((item) => {
                    return <Item key={item.id} item={item}/>
                })
            }
        </div>
    );
}

export default ItemList;