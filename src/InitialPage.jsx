import React from 'react';
import {PrimeReactProvider} from "primereact/api";

function InitialPage() {
    return (
        <div>
            <PrimeReactProvider>
                <h1>Teste</h1>
            </PrimeReactProvider>
        </div>
    );
}

export default InitialPage;