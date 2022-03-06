import './CheckWidgetStyles.css';
import { BsCheckCircleFill } from "react-icons/bs";

 
export default function CartWidget() {
    return(
        <div>
            <div>
                <BsCheckCircleFill size={128} className='check'/>
            </div>
        </div>
    );
};