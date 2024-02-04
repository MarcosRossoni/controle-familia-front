import React, {useState} from 'react';
import CadastroContaCorrente from "../components/dialogs/CadastroContaCorrente.jsx";
import ButtonSpeeddial from "../components/buttons/ButtonSpeeddial.jsx";
import ListContasBancarias from "../components/ListContasBancarias.jsx";
import {Dialog} from "primereact/dialog";
import {Button} from "primereact/button";

const ContaBancaria = () => {
    const [visible, setVisible] = useState(false)
    const [reload, setReaload] = useState(false)
    const [itemsMenu, setItemsMenu] = useState([
        {
            label: 'Cadastrar Conta',
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

    const setHideDialog = (r, reload) => {
        setVisible(r)
        setReaload(reload)
    }

    return (
        <div className="relative" style={{height: ("88vh")}}>
            <CadastroContaCorrente visible={visible} setHideDialog={setHideDialog}/>
            <ListContasBancarias reload={reload}/>
            <ButtonSpeeddial itemsSpeed={itemsMenu}/>
        </div>

    );
};

export default ContaBancaria;