import {Toast} from "primereact/toast";
import {useRef} from "react";
import {MenuItem} from "primereact/menuitem";
import {Menu} from "primereact/menu";

const MenuBar = () => {
    const toast = useRef<Toast>(null);
    const items: MenuItem[] = [
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
        <div className="card flex justify-content-center h-full">
            <Toast ref={toast} />
            <Menu className="surface-ground" model={items} />
        </div>
    )
};

export default MenuBar;