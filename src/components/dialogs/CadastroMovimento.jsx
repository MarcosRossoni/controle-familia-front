import React, {useState} from 'react';
import {Dialog} from "primereact/dialog";
import {Button} from "primereact/button";
import {InputText} from "primereact/inputtext";
import {InputNumber} from "primereact/inputnumber";
import {Calendar} from "primereact/calendar";
import {InputSwitch} from "primereact/inputswitch";
import {Dropdown} from "primereact/dropdown";
import '../styled/FormStyled.css';
import ContaBancariaAutoComplete from "../autocompletes/ContaBancariaAutoComplete.jsx";
import CategoriaAutoComplete from "../autocompletes/CategoriaAutoComplete.jsx";

const CadastroMovimento = ({visible, setHideDialog}) => {

    const [dsDescricao, setDsDescricao] = useState("")
    const [vlMovimento, setVlMovimento] = useState("")
    const [qtdParcelas, setQtdParcelas] = useState()
    const [dtVencimento, setDtVencimento] = useState()
    const [fgTipoMovimento, setFgTipoMovimento] = useState()
    const [fgConciliarAutomatico, setFgConciliarAutomatico] = useState()
    const [contaBancaria, setContaBancaria] = useState()
    const [categoria, setCategoria] = useState()

    const setVisible = (r) => {
        setHideDialog(r)
    }

    const setContaBancariaDTO = (conta) => {
        setContaBancaria(conta);
    }

    const setCategoriaDTO = (categoria) => {
        setCategoria(categoria)
    }

    const tipoMovimento = [
        { name: 'RECEITA', code: 0 },
        { name: 'DESPESA', code: 1 }
    ];

    const footerContent = (
        <div>
            <Button label="Cancelar" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" />
            <Button label="Salvar" type="submit" icon="pi pi-check" onClick={(e) => {
                console.log('clicou')
            }} autoFocus />
        </div>
    );
    return (
        <div>
            <Dialog header="Cadastro Movimento" visible={visible} style={{width: '50vw'}}
                    onHide={() => setVisible(false)} footer={footerContent}>
                <div className="card flex justify-content-end pr-4 pt-1">
                    <label className="pr-4 pt-1" style={{textAlign: "center"}}>Conciliar Automático</label>
                    <InputSwitch checked={fgConciliarAutomatico}
                                 onChange={(e) => setFgConciliarAutomatico(e.value)}/>
                </div>
                <div className="formgrid grid m-2 p-3">
                    <div className="field col-12">
                    <span className="p-float-label">
                        <InputText id="dsDescricao" value={dsDescricao}
                                   onChange={(e) => setDsDescricao(e.target.value)}
                                   className="text-base text-color surface-overlay p-2 border-1 border-solid
                                    surface-border border-round appearance-none outline-none focus:border-primary w-full"/>
                        <label htmlFor="dsDescricao">Descrição Movimento</label>
                    </span>
                    </div>
                    <div className="field col-12 mt-4">
                        <ContaBancariaAutoComplete contaBancariaDTO={setContaBancariaDTO}/>
                    </div>
                    <div className="field col-12 lg:col-6 mt-4">
                    <span className="p-float-label">
                        <InputNumber id="vlMovimento" value={vlMovimento}
                                     onValueChange={(e) => setVlMovimento(e.value)}
                                     useGrouping={false}
                                     className="text-base text-color surface-overlay border-1 border-solid surface-border
                                     border-round appearance-none outline-none focus:border-primary w-full input-number"
                                     inputClassName={'input-number'} minFractionDigits={2}/>
                        <label htmlFor="vlMovimento">Valor Movimento</label>
                    </span>
                    </div>
                    <div className="field col-12 lg:col-6 mt-4">
                    <span className="p-float-label">
                        <InputNumber id="qtdParcelas" value={qtdParcelas}
                                     onValueChange={(e) => setQtdParcelas(e.value)}
                                     useGrouping={false}
                                     className="text-base text-color surface-overlay border-1 border-solid surface-border
                                     border-round appearance-none outline-none focus:border-primary w-full input-number"
                                     inputClassName={'input-number'}/>
                        <label htmlFor="vlMovimento">Qtd Parcelas</label>
                    </span>
                    </div>
                    <div className="field col-12 lg:col-6 mt-4">
                        <span className="p-float-label">
                            <Dropdown value={fgTipoMovimento} onChange={(e) => setFgTipoMovimento(e.value)}
                                      options={tipoMovimento}
                                      optionLabel="name"
                                      className="text-base text-color surface-overlay border-1 border-solid surface-border
                                     border-round appearance-none outline-none focus:border-primary w-full dropdown-component
                                      dropdown-component"/>
                            <label htmlFor="fgTipoMovimento">Tipo Movimento</label>
                        </span>
                    </div>
                    <div className="field col-12 lg:col-6 mt-4">
                    <span className="p-float-label">
                        <Calendar id="dtVencimento" value={dtVencimento}
                                  onChange={(e) => setDtVencimento(e.target.value)} dateFormat="dd/mm/yy"
                                  className="text-base text-color surface-overlay border-1 border-solid
                                    surface-border border-round appearance-none outline-none focus:border-primary w-full
                                    input-date" inputClassName={'input-date'}/>
                        <label htmlFor="dtVencimento">Data Vencimento</label>
                    </span>
                    </div>
                    <div className="field col-12 mt-4">
                        <CategoriaAutoComplete contaBancariaDTO={setCategoriaDTO} tipoMovimento={fgTipoMovimento}/>
                    </div>
                </div>
            </Dialog>
        </div>
    );
};

export default CadastroMovimento;