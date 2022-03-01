import { useState } from "react";

const Login = () => {



    return (
        <div>
            <h2> login </h2>
            <form>
                <input type='email' name='email' id='email' />
                <input type='password' name='password' id='password' />
            </form>
        </div>
    )
}

export default Login;