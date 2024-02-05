import React from 'react';
import CardContaBancaria from "./CardContaBancaria.jsx";

const ListContasBancarias = ({reload}) => {

    return (
        <div className="mt-2">
            <CardContaBancaria reload={reload}/>
        </div>
    );
};

export default ListContasBancarias;