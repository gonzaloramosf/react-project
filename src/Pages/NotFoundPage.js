import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div> 
            <h1> Error 404 </h1>
            <p> Peligro, se rompio el sistema </p>
            <Link to='/'> Home page </Link>
        </div>
    )
}

export default NotFoundPage;