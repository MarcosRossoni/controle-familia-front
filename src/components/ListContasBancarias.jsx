import React, {useEffect, useState} from 'react';
import {Button} from "primereact/button";
import {DataScroller} from "primereact/datascroller";
import CadastroContaCorrente from "./dialogs/CadastroContaCorrente.jsx";
import {InputSwitch} from "primereact/inputswitch";
import contabancariaService from "../services/contabancaria.service.js";
import { Image } from 'primereact/image';
import "./styled/ListContasStyled.css"
import {FaMoneyBillTransfer, FaMoneyBillTrendUp} from "react-icons/fa6";
import {FaPiggyBank} from "react-icons/fa";

const ListContasBancarias = ({reload}) => {

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

    const tipoConta = [
        { name: 'CONTA CORRENTE', code: 0 },
        { name: 'CONTA POUPANÇA', code: 1 },
        { name: 'APLICAÇÃO', code: 2 }
    ];

    const setHideDialog = (r, reload) => {
        setVisible(r)
        setLoad(reload)
    }

    useEffect(() => {
        loadListContas()
        setHideDialog()
    }, [load])

    const ativarDesativarConta = (contaBancaria, fgAtiva) => {
        contaBancaria.fgAtiva = fgAtiva
        contabancariaService.alterarContaBancaria(contaBancaria).then(() => {
            loadListContas()
        })
    }

    const loadListContas = () => {
        contabancariaService.findListContas()
            .then(function (response) {
                setListContas(response.data)
            })
    }

    const verificarTipoConta = (code) => {
        let tipoContaList = tipoConta.find((item) => item.code === code);
        return tipoContaList.name
    }

    const itemTemplate = (data) => {
        console.log(data)
        return (
            <div className="col-12">
                <div className="card flex justify-content-end pr-4 pt-1">
                    <InputSwitch checked={data.fgAtiva} onChange={(e) => ativarDesativarConta(data, e.value)}/>
                </div>
                <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                    <div
                        className="flex flex-column lg:flex-row justify-content-between align-items-center xl:align-items-start lg:flex-1 gap-4">
                        <div className="flex flex-column align-items-center lg:align-items-start gap-3">
                            <div className="flex flex-column gap-1">
                                <div className="text-2xl font-bold text-900">{data.dsBanco}</div>
                                <div className="text-700">{data.dsDescricao}</div>
                            </div>
                            <div className="flex flex-column gap-2">
                                <span className="flex align-items-center gap-2">
                                    {data.fgContaBancaria === 0 ? <FaMoneyBillTransfer/> :
                                        data.fgContaBancaria === 1 ? <FaPiggyBank /> : <FaMoneyBillTrendUp />}
                                    <span className="font-semibold">{verificarTipoConta(data.fgContaBancaria)}</span>
                                </span>
                            </div>
                        </div>
                        <div
                            className="flex flex-row lg:flex-column align-items-center lg:align-items-end gap-4 lg:gap-2">
                            <span className="text-2xl font-semibold">{formatNumber(data.vlSaldoAtual)}</span>
                            <div className="col-12 text-right">
                                <Button icon="pi pi-pencil" onClick={() => editarConta(data.idContaBancaria)}
                                        rounded text aria-label="Editar"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div>
            {listContas.length > 0 ?
                <div className="mt-2 shadow-5">
                    <DataScroller value={listContas} itemTemplate={itemTemplate} rows={5} inline scrollHeight={`84.5vh`}
                                  header="Lista Contas Bancarias" className=""/>
                </div> :
                <div className="card flex justify-content-center flex-column align-content-center w-full">
                    <Image src="src/images/sem_conta_cadastrada.jpg" alt="Image"
                           width="550" className="mx-auto"/>
                    <label className="align-self-center">Não existe conta bancaria cadastrada</label>
                </div>
            }
            {visible ?
                <CadastroContaCorrente visible={visible} setHideDialog={setHideDialog} idConta={idConta}/> : <></>}
        </div>
    );
};

export default ListContasBancarias;