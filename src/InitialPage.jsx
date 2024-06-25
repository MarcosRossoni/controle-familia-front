import React from 'react';
import {PrimeReactProvider} from "primereact/api";
import Login from "./elementrotes/Login.jsx";

function InitialPage() {
    return (
        <div>
            <PrimeReactProvider>
                <Login/>
            </PrimeReactProvider>
        </div>
    );
}

export default InitialPage;