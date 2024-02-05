import React, {useEffect, useState} from 'react';
import {Card} from "primereact/card";
import pathBackend from "../axios/config.js";
import moment from "moment/moment.js";
import {Button} from "primereact/button";
import CadastroContaCorrente from "./dialogs/CadastroContaCorrente.jsx";

const CardContaBancaria = ({reload}) => {
    const [listContas, setListContas] = useState([])
    const [load, setLoad] = useState(reload)
    const [visible, setVisible] = useState(false)
    const [idConta, setIdConta] = useState()

    const formatNumber = (n) => {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(n)
    }

    const editarConta = (id) => {
        setIdConta(id)
        setVisible(true)
    }

    const setHideDialog = (r, reload) => {
        setVisible(r)
        setLoad(reload)
    }

    useEffect(() => {
        loadListContas()
        setHideDialog()
    }, [load])

    const loadListContas = () => {
        pathBackend.get("/conta-bancaria")
            .then(function (response) {
                console.log(response.data)
                setListContas(response.data)
                console.log(listContas)
            })
    }

    return (
        <div className="grid">
            {listContas.length > 0 ? listContas.map((conta) => (
                    <div key={conta.idContaBancaria} className="col-12 lg:col-6">
                        <Card title={conta.dsBanco} className="shadow-5 mb-2 ml-2 border-round">
                            <div className="grid">
                                <div className="col-12">
                                    <p>Descrição: {conta.dsDescricao}</p>
                                </div>
                                <div className="col-6">
                                    <p>Agencia: {conta.numAgencia}</p>
                                </div>
                                <div className="col-6">
                                    <p>Conta: {conta.numConta}</p>
                                </div>
                                <div className="col-6">
                                    <p>Saldo: {formatNumber(conta.vlSaldoAtual)}</p>
                                </div>
                                <div className="col-6">
                                    <p>Ultima Movimentação: {moment(conta.dtUltimaMovimentacao).format('DD/MM/YYYY')}</p>
                                </div>
                                <div className="col-12 text-right">
                                    <Button icon="pi pi-pencil" onClick={() => editarConta(conta.idContaBancaria)}
                                            rounded text aria-label="Editar"/>
                                </div>
                            </div>
                        </Card>
                    </div>
            )) : <div>Nenhuma conta cadastrada</div>}
            {visible ? <CadastroContaCorrente visible={visible} setHideDialog={setHideDialog} idConta={idConta}/> : <></>}
        </div>
    );
};

export default CardContaBancaria;