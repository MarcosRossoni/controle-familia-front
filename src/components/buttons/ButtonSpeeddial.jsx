import React, {useRef} from 'react';
import {Toast} from "primereact/toast";
import {SpeedDial} from "primereact/speeddial";

const ButtonSpeeddial = () => {
    const toast = useRef(null);
    const items = [
        {
            label: 'Add',
            icon: 'pi pi-pencil',
            command: () => {
                toast.current.show({ severity: 'info', summary: 'Add', detail: 'Data Added' });
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
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://react.dev/';
            }
        }
    ];

    return (
        <div className="card">
            <div style={{ position: 'relative', minHeight: '480px'}}>
                <Toast ref={toast} />
                <SpeedDial model={items} radius={120} type="quarter-circle" direction="up-left" style={{ right: 0, bottom: 0 }} />
            </div>
        </div>
    )
};

export default ButtonSpeeddial;