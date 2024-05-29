import React from 'react';
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import { Image } from 'primereact/image';

import '../../styles/Dashboard/sidebar.css';

export default function SidebarComponent() {
    const items = [
        { label: 'Dashboard', icon: 'pi pi-fw pi-home', command: () => { window.location.hash = "/dashboard"; }},
        { label: 'Orders', icon: 'pi pi-fw pi-file', command: () => { window.location.hash = "/orders"; }},
        { label: 'Products', icon: 'pi pi-fw pi-list', command: () => { window.location.hash = "/products"; }},
        { label: 'Customers', icon: 'pi pi-fw pi-users', command: () => { window.location.hash = "/customers"; }},
        { label: 'Reports', icon: 'pi pi-fw pi-chart-bar', command: () => { window.location.hash = "/reports"; }},
        { label: 'Settings', icon: 'pi pi-fw pi-cog', command: () => { window.location.hash = "/settings"; }}
    ];

    return (
        <aside className="custom-sidebar">
            <Image className="container-loginFields-logo" src="../assets/logos/logoSouDrop.png" alt="SouDrop Logo" width="80" />
            <Menu model={items} />
        </aside>
    );
}
