import {useRef} from 'react';
import {Toast} from "primereact/toast";
import {Menu} from "primereact/menu";

const MenuBar = () => {
    const toast = useRef(null);
    const items = [
        {
            label: 'Documents',
            items: [
                {
                    label: 'Conta Banco',
                    icon: 'pi pi-plus',
                    url: '/conta-bancaria'
                },
                {
                    label: 'Search',
                    icon: 'pi pi-search'
                }
            ]
        },
        {
            label: 'Profile',
            items: [
                {
                    label: 'Settings',
                    icon: 'pi pi-cog'
                },
                {
                    label: 'Logout',
                    icon: 'pi pi-sign-out'
                }
            ]
        }
    ];

    return (
        <div className="card flex justify-content-center h-full py-2">
            <Toast ref={toast} />
            <Menu className="surface-ground" model={items} />
        </div>
    )
};

export default MenuBar;