import Login from "./elementrotes/Login.jsx";
import useAuth from "./context/useAuth.js";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Fragment} from "react";
import Home from "./elementrotes/Home.jsx";
import ContaBancaria from "./elementrotes/ContaBancaria.jsx";
import Usuario from "./elementrotes/Usuario.jsx";
import Movimento from "./elementrotes/Movimento.jsx";

const Private = ({ Item }) => {
    const { signed } = useAuth();

    console.log(signed > 0)

    return signed > 0 ? <Item /> : <Login />;
};

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact path="/" element={<Private Item={Home} />} />
                    <Route exact path="/conta-bancaria" element={<Private Item={ContaBancaria} />} />
                    <Route exact path="/usuario" element={<Private Item={Usuario} />} />
                    <Route exact path="/movimento" element={<Private Item={Movimento} />} />
                    <Route path="/login" element={<Login />} />
                    <Route exact path="/signup" element={<h1>Sign up</h1>} />
                    <Route path="*" element={<Login />} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    );
};

export default RoutesApp;