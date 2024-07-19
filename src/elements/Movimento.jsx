import React, {useEffect, useState} from 'react';
import ButtonSpeeddial from "../components/buttons/ButtonSpeeddial.jsx";
import {Tag} from "primereact/tag";
import movimentoService from "../services/movimento/movimento.service.js";
import {DataScroller} from "primereact/datascroller";
import CadastroMovimento from "../components/movimento/CadastroMovimento.jsx";
import {Button} from "primereact/button";
import CadastroCategoria from "../components/categoria/CadastroCategoria.jsx";
import {Paginator} from "primereact/paginator";
import {DataView} from "primereact/dataview";

const Movimento = () => {
    const [listMovimentos, setListmovimentos] = useState([]);
    const [visible, setVisible] = useState(false);
    const [reload, setReaload] = useState(false)
    const [visibleCategoria, setVisibleCategoria] = useState(false);
    const [idMovimento, setIdMovimento] = useState(null);
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);
    const [itemsMenu, setItemsMenu] = useState([
        {
            label: 'Cadastrar Movimento',
            icon: 'pi pi-plus',
            command: () => {
                setVisible(true)
            }
        },
        {
            label: 'Cadastro Categoria',
            icon: 'pi pi-bookmark-fill',
            command: () => {
                setVisibleCategoria(true)
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
        }
    ]);

    const listarMovimento = () => {
        movimentoService.listarMovimentos()
            .then(function (response) {
                setListmovimentos(response.data)
            })
    }

    const onPageChange = (event) => {
        console.log(event)
        setFirst(event.first);
        setRows(event.rows);
    };

    const formatNumber = (n) => {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(n)
    }

    const setHideDialog = (r, reload) => {
        setVisible(r)
        setReaload(reload)
    }

    const setHideDialogCategoria = (r) => {
        setVisibleCategoria(r)
    }

    const editarMovimento = (id) => {
        setIdMovimento(id)
        setVisible(true)
    }

    useEffect(() => {
        listarMovimento()
    }, [reload]);

    const itemTemplate = (data) => {
        return (
            <div className="col-12">
                <div className="card flex justify-content-end pr-4 pt-1">

                </div>
                <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                    <div className="flex flex-column lg:flex-row justify-content-between align-items-center xl:align-items-start lg:flex-1 gap-4">
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
                            <div className="col-12 text-right">
                                <Button icon="pi pi-pencil" onClick={() => editarMovimento(data.idMovimento)}
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
            <div className="relative" style={{height: ("88vh")}}>
                <div className="mt-2 shadow-5">
                    <DataView value={listMovimentos} itemTemplate={itemTemplate} rows={rows} inline paginator
                              header="Lista Movimentos" className="">
                    </DataView>
                    {/*<Paginator first={first} rows={rows} totalRecords={120} onPageChange={onPageChange}/>*/}
                </div>
                {visible ? <CadastroMovimento visible={visible} setHideDialog={setHideDialog}
                                              idMovimento={idMovimento}/> : <></>}
                {visibleCategoria ?
                    <CadastroCategoria visible={visibleCategoria} setHideDialog={setHideDialogCategoria}/> : <></>}
            </div>
            <ButtonSpeeddial itemsSpeed={itemsMenu}/>
        </div>
    );
};

export default Movimento;