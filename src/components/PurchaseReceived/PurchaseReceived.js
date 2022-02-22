import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../firebase";

const PurchaseReceived= () => {
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
                    <h1> Gracias por su compra {order.buyer.name}</h1>
                    <h2> Detalles de su compra: {order.items.cart[0].item.name}</h2>
                </div>
            }
        </div>
    );
}

export default PurchaseReceived;