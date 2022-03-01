import { useUser } from "../../Context/UserContext";
import { Link } from "react-router-dom";

const ProtectedRoute = ({children}) => {
    const {user, isLoading} = useUser();

    if (isLoading) return <p> loading ... </p>

    if(!user) return <Link to='/login' />

    return <> {children} </>
}
export default ProtectedRoute;