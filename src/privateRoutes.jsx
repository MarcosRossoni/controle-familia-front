import App from "./App.jsx";
import Home from "./elementrotes/Home.jsx";
import ContaBancaria from "./elementrotes/ContaBancaria.jsx";
import Usuario from "./elementrotes/Usuario.jsx";
import Movimento from "./elementrotes/Movimento.jsx";
import React from "react";

export default function privateRoutes() {
    return {
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/conta-bancaria",
                element: <ContaBancaria/>
            },
            {
                path: "/usuario",
                element: <Usuario/>
            },
            {
                path: "/movimento",
                element: <Movimento/>
            }
        ]
    };
}