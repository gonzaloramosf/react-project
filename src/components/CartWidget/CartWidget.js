import './CartWidget.css';
import { BsCart3 } from "react-icons/bs";
import { useCart } from "../../Context/CartContext"
 
export default function CartWidget() {
    const {totalItems} = useCart();
    // const CartNumbers = cart.reduce((total, item) => {
    //     return total + item.quantity
    // }, 0)

    return(
        <div>
            <div id='cartNumberFlex'>
                {totalItems >= 1 ? <p> {totalItems} </p> : null}
                <BsCart3 size={24} className='cart'/>
            </div>
        </div>
    );
}