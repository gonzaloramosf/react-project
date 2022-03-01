import './AboutUsStyles.css';
import { useUser } from '../../Context/UserContext';

const AboutUs = () => {
    const {user, logOut, isLoading} = useUser();

    const handleClick = async () => {
        await logOut();
    }

    if (isLoading) {
        return <p> loading ..</p>
    }

    return (
        <section>
            <div className='aboutBanner'>
                <h1> About us </h1>
            </div>

            <div>
                <p> welcome {user.displayName || user.email}</p>
                <button onClick={handleClick}> log out </button>
            </div>
        </section>
    )
}

export default AboutUs;