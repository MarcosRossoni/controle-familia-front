import React, {useEffect} from 'react';
import {redirect} from "react-router-dom";

function Login(props) {
    useEffect(() => {
        redirect()
    })
    return (
        <div>Login</div>
    );
}

export default Login;