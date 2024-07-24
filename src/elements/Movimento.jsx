import {useEffect, useRef, useState} from 'react';
import ButtonSpeeddial from "../components/buttons/ButtonSpeeddial.jsx";
import {Tag} from "primereact/tag";
import movimentoService from "../services/movimento/movimento.service.js";
import CadastroMovimento from "../components/movimento/CadastroMovimento.jsx";
import {Button} from "primereact/button";
import CadastroCategoria from "../components/categoria/CadastroCategoria.jsx";
import {DataView} from "primereact/dataview";
import {Divider} from "primereact/divider";
import {OverlayPanel} from "primereact/overlaypanel";
import {Paginator} from "primereact/paginator";
import FilterMovimento from "../components/movimento/FilterMovimento.jsx";
import moment from "moment";
import {Image} from "primereact/image";

const Movimento = () => {
    const date = new Date();

    let op = useRef(null);
    const [listMovimentos, setListmovimentos] = useState([]);
    const [visible, setVisible] = useState(false);
    const [reload, setReaload] = useState(false)
    const [visibleCategoria, setVisibleCategoria] = useState(false);
    const [idMovimento, setIdMovimento] = useState(null);
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);
    const [totalItens, setTotalItens] = useState(0);
    const [pag, setPage] = useState(null);
    const [filter, setFilter] = useState({
        dtInicio: moment().startOf('month').format('YYYY-MM-DD'),
        dtFim: moment().endOf('month').format('YYYY-MM-DD'),
        fgTipoMovimento: null,
        idCategoria: null
    });

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

    const buscarMovimentoFilter = (pagina) => {
        let queryFilter = '';
        op.current.hide()
        if (filter.dtInicio !== null) {
            queryFilter = queryFilter + `&dtInicio=${filter.dtInicio}&dtFim=${filter.dtFim}`
        }
        if (filter.fgTipoMovimento !== null) {
            queryFilter = queryFilter + `&fgTipoMovimento=${filter.fgTipoMovimento}`
        }
        if (filter.idCategoria !== null) {
            queryFilter = queryFilter + `&idCategoria=${filter.idCategoria}`
        }
        listarMovimento(pagina, queryFilter)
    }

    const onPageChange = (event) => {
        setFirst(event.first);
        setRows(event.rows);
        listarMovimento(event.page, '')
    };

    const listarMovimento = (paginaAtual, queryFilter) => {
        setPage(paginaAtual)
        let query = `?currentPage=${paginaAtual}&pageSize=10${queryFilter}`
        movimentoService.listarMovimentos(query)
            .then(function (res) {
                setTotalItens(res.data.totalItens)
                setListmovimentos(res.data.data)
            })
    }

    useEffect(() => {
        if (!reload){
            buscarMovimentoFilter(0)
        } else {
            buscarMovimentoFilter(pag)
            setHideDialog()
        }
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
                            className="flex flex-row lg:flex-column align-items-center lg:align-items-end gap-2">
                            <span className="text-2xl white-space-nowrap font-semibold">{formatNumber(data.vlMovimento)}</span>
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
        <div style={{height: ("88vh")}}>
            <div>
                <div className="mt-2 shadow-5">
                    <div className="flex justify-content-between flex-wrap">
                        <div className="p-dataview-header p-4 font-semibold" data-pc-section="header">
                            Listagem Movimentos
                        </div>
                        <div className="align-content-center m-3" style={{cursor: "pointer"}} onClick={(e) => op.current.toggle(e)}>
                            <span className="pi pi-search"></span>
                        </div>
                        <OverlayPanel ref={op}>
                            <FilterMovimento filter={filter} buscarMovimento={buscarMovimentoFilter}/>
                        </OverlayPanel>
                    </div>
                    <Divider className="m-1"></Divider>
                    {listMovimentos.length > 0 ?
                        <DataView value={listMovimentos} itemTemplate={itemTemplate}></DataView> :
                        <div className="card flex justify-content-center flex-column align-content-center w-full">
                            <Image src="/sem_conta_cadastrada.jpg" alt="Image"
                                   width="500" className="mx-auto"/>
                            <label className="align-self-center">Não existe movimento cadastrado</label>
                        </div>
                    }
                    <Paginator first={first} rows={rows} totalRecords={totalItens} onPageChange={onPageChange}/>

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