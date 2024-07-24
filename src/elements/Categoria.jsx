import {useEffect, useState} from 'react';
import {IoIosAdd} from "react-icons/io";
import ButtonSpeeddial from "../components/buttons/ButtonSpeeddial.jsx";
import {Button} from "primereact/button";
import {Tag} from "primereact/tag";
import categoriaService from "../services/categoria/categoria.service.js";
import '../components/styled/PaginatorStyled.css';
import {Paginator} from "primereact/paginator";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import CadastroCategoria from "../components/categoria/CadastroCategoria.jsx";
import {Image} from "primereact/image";

const Categoria = () => {
    const [visible, setVisible] = useState(false)
    const [reload, setReaload] = useState(false)
    const [idCategoria, setIdCategoria] = useState()
    const [listCategorias, setListCategorias] = useState([]);
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);
    const [totalItens, setTotalItens] = useState(0);
    const [pag, setPage] = useState(null);

    const [itemsMenu, setItemsMenu] = useState([
        {
            label: 'Cadastrar Conta',
            icon: <IoIosAdd style={{fontSize: '1.5rem'}}/>,
            command: () => {
                setIdCategoria(null)
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

    const setHideDialog = (r, reload) => {
        setVisible(r)
        setReaload(reload)
    }

    const onPageChange = (event) => {
        setFirst(event.first);
        setRows(event.rows);
        changeList(event.page)
    };

    const changeList = (paginaAtual) => {
        setPage(paginaAtual)
        let query = `?currentPage=${paginaAtual}&pageSize=10`
        categoriaService.listaPaginacaoCategoria(query)
            .then(function (res) {
                setTotalItens(res.data.totalItens)
                setListCategorias(res.data.data)
            })
    }

    const descricaoBodyTemplate = (categoria) => {
        return <Tag value={categoria.dsDescricao} style={{background: categoria.dsCor}}></Tag>;
    };

    const tipoBodyTemplate = (categoria) => {
        return categoria.fgTipo === 0 ? 'RECEITA' : 'DESPESA';
    };

    const tipoBodyTemplateEditar = (categoria) => {
        return <Button icon="pi pi-pencil" onClick={() => editarCategoria(categoria.idCategoria)}
                       rounded text aria-label="Editar"/>
    };

    const editarCategoria = (id) => {
        setIdCategoria(id)
        setVisible(true)
    }

    useEffect(() => {
        if (!reload){
            changeList(0)
        } else {
            changeList(pag)
            setHideDialog()
        }
    }, [reload]);

    return (
        <div className="relative" style={{height: ("88vh")}}>
            <div>
                {listCategorias.length > 0 ?
                    <div className="card mt-2 shadow-5">
                        <DataTable value={listCategorias} tableStyle={{minWidth: '50rem'}}>
                            <Column field="idCategoria" header="Código"></Column>
                            <Column field="dsDescricao" body={descricaoBodyTemplate} header="Nome"></Column>
                            <Column field="fgTipo" body={tipoBodyTemplate} header="Tipo"></Column>
                            <Column field="editar" body={tipoBodyTemplateEditar} header="Editar"></Column>
                        </DataTable>
                        <Paginator first={first} rows={rows} totalRecords={totalItens} onPageChange={onPageChange}/>
                        {visible ?
                            <CadastroCategoria visible={visible} setHideDialog={setHideDialog}
                                               idCategoria={idCategoria}/> : <></>}
                    </div> :
                    <div className="card flex justify-content-center flex-column align-content-center w-full">
                        <Image src="/sem_conta_cadastrada.jpg" alt="Image"
                               width="550" className="mx-auto"/>
                        <label className="align-self-center">Não existe categoria cadastrada</label>
                    </div>
                }
            </div>
            <ButtonSpeeddial itemsSpeed={itemsMenu}/>
        </div>
    );
};

export default Categoria;