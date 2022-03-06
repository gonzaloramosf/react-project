import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useUser } from "../../Context/UserContext";
import AlertError from "../AlertError/AlertError";
import './RegisterStyles.css';

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
        <div className="register">
            <div>
                <h2> Create Account </h2>
                {error && <AlertError message={error}/>}
                <form onSubmit={handleSubmit}>
                    <input type='email' name='email' placeholder="email@example.com" onChange={handleChange} />

                    <input type='password' name='password' id="password" placeholder="Password" onChange={handleChange} />

                    <button> Register </button>
                    <span> Already register ? </span>
                    <button> <Link to='/login'> Login </Link> </button>
                </form>
            </div>
        </div>
    )
}

export default Register;