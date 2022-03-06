import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../firebase";
import { useUser } from "../../Context/UserContext";
import CheckWidget from '../CheckWidget/CheckWidget';
import './PurchaseReceivedStyles.css'

const PurchaseReceived= () => {
    const {user} = useUser();
    const {orderId} = useParams();
    const [order, setOrder] = useState();
    const [isLoading, setIsLoading] = useState();

    useEffect(() => {
        setIsLoading(true)
        const db = getFirestore();
        db.collection('orders').doc(orderId)
                               .get().then(res => { setOrder({id: res.id, ...res.data()}) })
                               .finally(() => setIsLoading(false));
    }, [orderId]);
    console.log(order);

    return (
        <div className="purchaseReceivedContainer">
            {
                isLoading || !order ? <p> loading... </p> :
                <div className="purchaseReceived"> 
                    <h2> Thanks {order.buyer.name}!</h2>
                    <p> Order id: {order.id}</p>
                    <p> Email: {user.email}</p>
                    <CheckWidget/>
                </div>
            }
        </div>
    );
}

export default PurchaseReceived;