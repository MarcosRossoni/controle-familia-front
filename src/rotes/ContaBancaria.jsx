import React from 'react';
import CadastroContaCorrente from "../components/CadastroContaCorrente.jsx";
import ButtonSpeeddial from "../components/buttons/ButtonSpeeddial.jsx";
import ListContasBancarias from "../components/ListContasBancarias.jsx";

const ContaBancaria = () => {
    return (
        <div className="relative" style={{height: ("88vh")}}>
            {/*<CadastroContaCorrente/>*/}
            <ListContasBancarias/>
            <ButtonSpeeddial/>
        </div>

    );
};

export default ContaBancaria;