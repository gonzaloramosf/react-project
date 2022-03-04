import './ProfileStyles.css';
import { useUser } from '../../Context/UserContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const {user, logOut, isLoading} = useUser();
    const navigate = useNavigate();

    const handleClick = async () => {
        await logOut();
        navigate('/')
    }

    if (isLoading) {
        return <p> loading ..</p>
    }

    return (
        <section>
            <div>
                <h2> Your Account </h2>
            </div>

            <div>
                <p> welcome {user.displayName || user.email}</p>
                <button onClick={handleClick}> log out </button>
            </div>
        </section>
    )
}

export default Profile;