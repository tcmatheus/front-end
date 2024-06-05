import '../../styles/Dashboard/navbar.css'

import {Avatar} from 'primereact/avatar'
import {primeIcons} from 'primereact/api'

export default function Navbar() {
return (
    <div className="navbar">
        <div className='navbar-container'>
            <h1>Visão Geral Vendedor</h1>
            <div className='navbar-profile'>
                <i className="pi pi-bell"></i>
                <p>Lucas Almada</p>
                <Avatar icon="pi pi-user" shape="circle" size="large"/>
            </div>
        </div>
    </div>
);
}