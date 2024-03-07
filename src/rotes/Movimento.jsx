import React, {useEffect, useState} from 'react';
import ButtonSpeeddial from "../components/buttons/ButtonSpeeddial.jsx";
import {Tag} from "primereact/tag";
import movimentoService from "../services/movimento.service.js";
import {DataScroller} from "primereact/datascroller";
import CadastroMovimento from "../components/dialogs/CadastroMovimento.jsx";

const Movimento = () => {
    const [listMovimentos, setListmovimentos] = useState([]);
    const [visible, setVisible] = useState(false);
    const [itemsMenu, setItemsMenu] = useState([
        {
            label: 'Cadastrar Movimento',
            icon: 'pi pi-plus',
            command: () => {
                setVisible(true)
            }
        },
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-trash',
            command: () => {
                toast.current.show({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'Upload',
            icon: 'pi pi-upload'
        },
    ]);

    const listarMovimento = () => {
        movimentoService.listarMovimentos()
            .then(function (response) {
                setListmovimentos(response.data)
            })
    }

    const formatNumber = (n) => {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(n)
    }

    const setHideDialog = (r) => {
        setVisible(r)
    }

    useEffect(() => {
        listarMovimento()
    }, []);

    const itemTemplate = (data) => {
        return (
            <div className="col-12">
                <div className="card flex justify-content-end pr-4 pt-1">

                </div>
                <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                    <div
                        className="flex flex-column lg:flex-row justify-content-between align-items-center xl:align-items-start lg:flex-1 gap-4">
                        <div className="flex flex-column align-items-center lg:align-items-start gap-3">
                            <div className="flex flex-row gap-5">
                                <div className="flex flex-row gap-1">
                                    <div className="font-bold text-700">Num Doc:</div>
                                    <div className="text-700">{data.idMovimento} - {data.nrParcela}</div>
                                </div>
                                <div className="flex flex-row gap-1">
                                    <div className="font-bold text-700">Data Vencimento:</div>
                                    <div className="text-700">{data.dtVencimento}</div>
                                </div>
                            </div>
                            <div className="flex flex-row gap-5">
                                <div className="flex flex-row gap-1">
                                    <div className="font-bold text-700">Descrição:</div>
                                    <div className="text-700">{data.dsDescricao}</div>
                                </div>
                            </div>
                            <div className="flex flex-row gap-5">
                                <div className="flex flex-row gap-1">
                                    <div className="font-bold text-700">Banco:</div>
                                    <div className="text-700">{data.dsBanco}</div>
                                </div>
                                <div className="flex flex-row gap-1">
                                    <div className="font-bold text-700">Titular:</div>
                                    <div className="text-700">{data.dsContaBancaria}</div>
                                </div>
                            </div>
                            <div className="flex flex-column gap-2">
                                <Tag value={data.dsCategoria} style={{background: `${data.dsCor}`}}></Tag>
                            </div>
                        </div>
                        <div
                            className="flex flex-row lg:flex-column align-items-center lg:align-items-end gap-4 lg:gap-2">
                            <span className="text-2xl font-semibold">{formatNumber(data.vlMovimento)}</span>
                            {/*<div className="col-12 text-right">*/}
                            {/*    <Button icon="pi pi-pencil" onClick={() => editarConta(data.idContaBancaria)}*/}
                            {/*            rounded text aria-label="Editar"/>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="relative" style={{height: ("88vh")}}>
            <div className="mt-2 shadow-5">
                <DataScroller value={listMovimentos} itemTemplate={itemTemplate} rows={5} inline
                              scrollHeight={`84.5vh`}
                              header="Lista Movimentos" className=""/>
            </div>
            <ButtonSpeeddial itemsSpeed={itemsMenu}/>
            {visible ? <CadastroMovimento visible={visible} setHideDialog={setHideDialog}/> : <></>}
        </div>
    );
};

export default Movimento;