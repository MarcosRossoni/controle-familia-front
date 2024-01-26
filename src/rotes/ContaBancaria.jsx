import React from 'react';
import CadastroContaCorrente from "../components/CadastroContaCorrente.jsx";
import ButtonSpeeddial from "../components/buttons/ButtonSpeeddial.jsx";

const ContaBancaria = () => {
    return (
        <div className="relative" style={{height: ("88vh")}}>
            <CadastroContaCorrente/>
            <ButtonSpeeddial/>
        </div>

    );
};

export default ContaBancaria;