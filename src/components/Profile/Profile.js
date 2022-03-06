import './ProfileStyles.css';
import { useUser } from '../../Context/UserContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const {user, logOut, isLoading} = useUser();
    const navigate = useNavigate();

    const handleClick = async () => {
        await logOut();
        navigate('/');
    };

    if (isLoading) {
        return <p> loading ..</p>
    };

    return (
        <section className='profile'>
            <div>
                <h2> Your Account </h2>
            </div>

            <div>
                <img src={user.photoURL} alt='User profile'/>
                <p> Welcome {user.displayName || user.email} !</p>
                <p> Email: {user.email} </p>
                <button onClick={handleClick}> Log out </button>
            </div>
        </section>
    );
};

export default Profile;