import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../Context/UserContext";
import AlertError from '../AlertError/AlertError';

const Login = () => {
    const navigate = useNavigate();
    const {logIn, loginWithGoogle, passwordForgot} = useUser();
    const [error, setError] = useState();
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const handleChange = ({target: {name, value}}) => {
        setUser({...user, [name]: value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await logIn(user.email, user.password);
            navigate('/');
        } catch(error) {
            setError(error.message);
        } 
    };

    const handleGoogleLogin = async () => {
        try {
            await loginWithGoogle();
            navigate('/');
        }catch (error) {
            setError(error.message);
        }
    };

    const handleForgotPassword = async () => {
        if (!user.email) return setError('Por favor ingrese su email');
        try {
            await passwordForgot(user.email);
            // message we sent link to recover password
        }catch(error) {
            setError(error.message);
        };
    };

    return (
        <div>
            <h2> LogIn </h2>
            {error && <AlertError message={error}/>}
            <form onSubmit={handleSubmit}>
                <label htmlFor='email'> Email </label>
                <input type='email' name='email' placeholder="email@example.com" onChange={handleChange} />

                <label htmlFor='password'> Password </label>
                <input type='password' name='password' id="password" onChange={handleChange} />

                <button> Login </button>
                <a href="#!" style={{color:'blue'}} onClick={handleForgotPassword}>  Forgot password ?</a>
            </form>
            <button onClick={handleGoogleLogin}> Login with Google </button>
        </div>
    );
}

export default Login;