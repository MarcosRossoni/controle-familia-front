import React, {useEffect} from 'react';
import {redirect, useNavigate} from "react-router-dom";

function Login(props) {

    let navigateFunction = useNavigate();
    useEffect(() => {
    }, [])

    return (
        <div>
            <h1>Login</h1>
        </div>
    );
}

export default Login;