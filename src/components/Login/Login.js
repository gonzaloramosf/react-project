import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useUser } from "../../Context/UserContext";
import AlertError from '../AlertError/AlertError';
import './LoginStyles.css';

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
        <div className="login">
            <div>
                <h2> Log In Crocodrile Id</h2>
                {error && <AlertError message={error}/>}
                <form onSubmit={handleSubmit}>
                    <input type='email' name='email' placeholder="Email address" onChange={handleChange} />

                    <input type='password' name='password' id="password" placeholder="Password" onChange={handleChange} />

                    <button> Login </button>
                    <span href="#!" className="forgotPass" onClick={handleForgotPassword}>  Forgot password ?</span>
                </form>
                <div>
                    <button onClick={handleGoogleLogin}> Login with Google </button>
                    <button> <Link to='/register'> Register </Link> </button>
                </div>
            </div>
        </div>
    );
};
export default Login;