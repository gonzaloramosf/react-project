export default function ItemListContainer({name, price}) {
    return (
        <div>
            <h3> {name} </h3>
            <p> Precio: {price} </p>
        </div>
    );
  }