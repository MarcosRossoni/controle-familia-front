import {createContext, useEffect, useState} from "react";
import pathBackend from "../../axios/config.js";
import {redirect} from "react-router-dom";

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState();

    useEffect(() => {
        const userToken = localStorage.getItem("user_token");

        if (userToken) {
            setUser(true)
        }
    }, []);

    const signin = (email, password) => {

        pathBackend.get(
            `/oauth/token?username=${email}&password=${password}&grant_type=password`
        ).then(function(res) {
            console.log(res)
            if (res.status === 200) {
                localStorage.setItem("user_token", JSON.stringify(res.data));
                setUser(true)
                window.location.href = "/";
            }
        });

        const hasUser = true;

        if (hasUser?.length) {
            if (hasUser[0].email === email && hasUser[0].password === password) {
                const token = Math.random().toString(36).substring(2);
                localStorage.setItem("user_token", JSON.stringify({email, token}));
                setUser({email, password});
                return;
            } else {
                return "E-mail ou senha incorretos";
            }
        } else {
            return "Usuário não cadastrado";
        }
    };

    const signup = (usuarioDTO) => {
        pathBackend.post(`/usuario`, usuarioDTO)
            .then(function (res) {
                console.log(res)
                if (res.status === 200) {
                    window.location.href = "/login";
                }
            });
    };

    const signout = () => {
        setUser(null);
        localStorage.removeItem("user_token");
    };

    return (
        <AuthContext.Provider
            value={{user, signed: !!user, signin, signup, signout}}
        >
            {children}
        </AuthContext.Provider>
    );
};