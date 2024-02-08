import React, {useState} from 'react';
import ButtonSpeeddial from "../components/buttons/ButtonSpeeddial.jsx";

const Movimento = () => {
    const [itemsMenu, setItemsMenu] = useState([
        {
            label: 'Cadastrar Conta',
            icon: 'pi pi-plus',
            command: () => {
                console.log("add")
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
    return (
        <div className="relative" style={{height: ("88vh")}}>
            <ButtonSpeeddial itemsSpeed={itemsMenu}/>
        </div>
    );
};

export default Movimento;