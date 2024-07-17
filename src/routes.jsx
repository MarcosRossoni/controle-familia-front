import Login from "./elements/Login.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Fragment} from "react";
import Home from "./elements/Home.jsx";
import ContaBancaria from "./elements/ContaBancaria.jsx";
import Usuario from "./elements/Usuario.jsx";
import Movimento from "./elements/Movimento.jsx";
import GlobalTemplate from "./components/GlobalTemplate.jsx";
import useAuth from "./context/useAuth.js";
import CadastroUsuario from "./components/usuario/CadastroUsuario.jsx";
import Categoria from "./elements/Categoria.jsx";

const Private = ({Item}) => {
    const {signed} = useAuth();

    console.log(signed)

    return signed > 0 ? <GlobalTemplate Item={Item}/> : <Login/>;
};

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact path="/" element={<Private Item={Home}/>}/>
                    <Route exact path="/conta-bancaria" element={<Private Item={ContaBancaria}/>}/>
                    <Route exact path="/usuario" element={<Private Item={Usuario}/>}/>
                    <Route exact path="/movimento" element={<Private Item={Movimento}/>}/>
                    <Route exact path="/categoria" element={<Private Item={Categoria}/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route exact path="/signup" element={<CadastroUsuario/>}/>
                    <Route path="*" element={<Login/>}/>
                </Routes>
            </Fragment>
        </BrowserRouter>
    );
};

export default RoutesApp;