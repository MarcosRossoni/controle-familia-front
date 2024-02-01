import React, {useEffect, useState} from 'react';
import {Card} from "primereact/card";
import {InputText} from "primereact/inputtext";
import {InputNumber} from "primereact/inputnumber";
import {Button} from "primereact/button";
import {Password} from "primereact/password";
import './styled/FormStyled.css'
import pathBackend from "../axios/config.js";
import {Calendar} from "primereact/calendar";
import moment from "moment";
import CidadeAutoComplete from "./autocompletes/CidadeAutoComplete.jsx";

const CadastroUsuario = () => {
    const [dsNome, setDsNome] = useState("")
    const [dsEmail, setDsEmail] = useState("")
    const [dsTelefone, setDsTelefone] = useState("")
    const [dtNascimento, setDtNascimento] = useState()
    const [dsCpf, setDsCpf] = useState("")
    const [dsSenha, setDsSenha] = useState("")
    const [dsEndereco, setDsEndereco] = useState("")
    const [numPredial, setNumPredial] = useState()
    const [dsBairro, setDsBairro] = useState("")
    const [dsComplemento, setDsComplemento] = useState("")
    const [cidade,  setCidade] = useState({})

    const setCidadeDTO = (r) => {
        setCidade(r)
    }

    const createUsuario = async(e) => {
        e.preventDefault()

        const usuarioDTO = {
            dsNome: dsNome,
            dsEmail: dsEmail,
            dsTelefone: dsTelefone,
            dtNascimento: moment(dtNascimento).format('YYYY-MM-DD'),
            dsCpf: dsCpf,
            dsSenha: dsSenha,
            dsEndereco: dsEndereco,
            numPredial: numPredial,
            dsBairro: dsBairro,
            dsComplemento: dsComplemento,
            cidade: cidade
        }

        await pathBackend.post("/usuario", usuarioDTO)
            .then(function (response) {
                console.log(response)
            })
    }

    return (
        <div className="p-1 m-2">
            <Card title="Usuario" className="shadow-5">
                <form className="formgrid grid m-2"
                      onSubmit={(e) => createUsuario(e)}>
                    <div className="field col-12 mt-4">
                    <span className="p-float-label">
                        <InputText id="dsNome" value={dsNome}
                                   onChange={(e) => setDsNome(e.target.value)}
                                   className="text-base text-color surface-overlay p-2 border-1 border-solid
                                    surface-border border-round appearance-none outline-none focus:border-primary w-full"/>
                        <label htmlFor="dsNome" className="">Nome do Usuário</label>
                    </span>
                    </div>
                    <div className="field col-12 md:col-6 mt-4">
                    <span className="p-float-label">
                        <InputText id="email" value={dsEmail}
                                   onChange={(e) => setDsEmail(e.target.value)}
                                   className="text-base text-color surface-overlay p-2 border-1 border-solid
                                    surface-border border-round appearance-none outline-none focus:border-primary w-full"/>
                        <label htmlFor="email">E-mail</label>
                    </span>
                    </div>
                    <div className="field col-12 md:col-6 mt-4">
                    <span className="p-float-label">
                        <InputText id="telefone" value={dsTelefone}
                                   onChange={(e) => setDsTelefone(e.target.value)}
                                   className="text-base text-color surface-overlay p-2 border-1 border-solid
                                    surface-border border-round appearance-none outline-none focus:border-primary w-full"/>
                        <label htmlFor="telefone">Telefone</label>
                    </span>
                    </div>
                    <div className="field col-12 md:col-6 mt-4">
                    <span className="p-float-label">
                        <Calendar id="dtNascimento" value={dtNascimento}
                                  onChange={(e) => setDtNascimento(e.target.value)} dateFormat="dd/mm/yy"
                                  className="text-base text-color surface-overlay border-1 border-solid
                                    surface-border border-round appearance-none outline-none focus:border-primary w-full
                                    input-date" inputClassName={'input-date'}/>
                        <label htmlFor="dtNascimento">Data Nascimento</label>
                    </span>
                    </div>
                    <div className="field col-12 md:col-6 mt-4">
                    <span className="p-float-label">
                        <InputText id="cpf" value={dsCpf}
                                   onChange={(e) => setDsCpf(e.target.value)}
                                   className="text-base text-color surface-overlay p-2 border-1 border-solid
                                    surface-border border-round appearance-none outline-none focus:border-primary w-full"/>
                        <label htmlFor="cpf">CPF</label>
                    </span>
                    </div>
                    <div className="field col-12 md:col-6 mt-4">
                        <span className="p-float-label">
                        <Password id="senha" value={dsSenha}
                                  onChange={(e) => setDsSenha(e.target.value)}
                                  className="text-base text-color surface-overlay border-1 border-solid surface-border
                                     border-round appearance-none outline-none focus:border-primary w-full input-password"
                                  inputClassName={'w-full input-password'}/>
                            <label htmlFor="senha">Senha</label>
                        </span>
                    </div>
                    <div className="field col-12 md:col-6 mt-4">
                        <span className="p-float-label">
                        <InputText id="dsEndereco" value={dsEndereco}
                                   onChange={(e) => setDsEndereco(e.target.value)}
                                   className="text-base text-color surface-overlay p-2 border-1 border-solid
                                    surface-border border-round appearance-none outline-none focus:border-primary w-full"/>
                            <label htmlFor="dsEndereco">Endereço</label>
                        </span>
                    </div>
                    <div className="field col-12 md:col-6 mt-4">
                        <span className="p-float-label">
                        <InputNumber inputId="numPredial" value={numPredial}
                                     onValueChange={(e) => setNumPredial(e.value)}
                                     minFractionDigits={0}
                                     className="text-base text-color surface-overlay border-1 border-solid surface-border
                                     border-round appearance-none outline-none focus:border-primary w-full input-number"
                                     inputClassName={'input-number'}/>
                            <label htmlFor="numPredial">Numero Predial</label>
                        </span>
                    </div>
                    <div className="field col-12 md:col-6 mt-4">
                        <span className="p-float-label">
                        <InputText id="dsBairro" value={dsBairro}
                                   onChange={(e) => setDsBairro(e.target.value)}
                                   className="text-base text-color surface-overlay p-2 border-1 border-solid
                                    surface-border border-round appearance-none outline-none focus:border-primary w-full"/>
                            <label htmlFor="dsBairro">Bairro</label>
                        </span>
                    </div>
                    <div className="field col-12 md:col-6 mt-4">
                        <span className="p-float-label">
                        <InputText id="dsComplemento" value={dsComplemento}
                                   onChange={(e) => setDsComplemento(e.target.value)}
                                   className="text-base text-color surface-overlay p-2 border-1 border-solid
                                    surface-border border-round appearance-none outline-none focus:border-primary w-full"/>
                            <label htmlFor="dsComplemento">Complemento</label>
                        </span>
                    </div>
                    <div className="field col-12 md:col-6 mt-4">
                        <CidadeAutoComplete cidadeDTO={setCidadeDTO}/>
                    </div>

                    <div className="field col-12 text-right mt-2">
                        <Button type="submit" label="Salvar"/>
                    </div>
                </form>
            </Card>
        </div>
    );
};

export default CadastroUsuario;