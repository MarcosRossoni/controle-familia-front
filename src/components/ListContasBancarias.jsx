import React from 'react';
import CardContaBancaria from "./CardContaBancaria.jsx";

const ListContasBancarias = ({reload}) => {

    return (
        <div className="field col-6">
            <CardContaBancaria reload={reload}/>
        </div>
    );
};

export default ListContasBancarias;