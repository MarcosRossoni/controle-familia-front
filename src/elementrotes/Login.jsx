import React, {useEffect} from 'react';
import useAuth from "../context/useAuth.js";

function Login(props) {

    const { login } = useAuth();
    useEffect(() => {
    }, [])

    return (
        <div>
            <h1>Login</h1>
        </div>
    );
}

export default Login;