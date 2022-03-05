import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../firebase";
import { useUser } from "../../Context/UserContext";

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
        <div>
            {
                isLoading || !order ? <p> loading... </p> :
                <div> 
                    <h1> Thanks {order.buyer.name}</h1>
                    <h2> Order details: {order.items.cart[0].item.name}</h2>
                    <p> Email: {user.email}</p>
                </div>
            }
        </div>
    );
}

export default PurchaseReceived;