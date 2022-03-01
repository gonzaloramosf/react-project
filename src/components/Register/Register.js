import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../Context/UserContext";
import AlertError from "../AlertError/AlertError";

const Register = () => {
    const navigate = useNavigate();
    const {signUp} = useUser();
    const [error, setError] = useState();
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const handleChange = ({target: {name, value}}) => {
        setUser({...user, [name]: value})
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await signUp(user.email, user.password);
            navigate('/');
        } catch(error) {
            setError(error.message);
        } 
    };

    return (
        <div>
            <h2> register </h2>
            {error && <AlertError message={error}/>}
            <form onSubmit={handleSubmit}>
                <label htmlFor='email'> Email </label>
                <input type='email' name='email' placeholder="email@example.com" onChange={handleChange} />

                <label htmlFor='password'> Password </label>
                <input type='password' name='password' id="password" onChange={handleChange} />

                <button> Register </button>
            </form>
        </div>
    )
}

export default Register;