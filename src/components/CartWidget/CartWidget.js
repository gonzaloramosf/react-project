import './CartWidget.css';
import { BsCart3 } from "react-icons/bs";
import { useCart } from "../../Context/CartContext"
 
export default function CartWidget() {
    const {cart} = useCart();
    const CartNumbers = cart.reduce((total, item) => {
        return total + item.quantity
    }, 0)

    return(
        <div>
            <span> El {CartNumbers} </span>
            <BsCart3 className='cart'/>
        </div>
    );
}