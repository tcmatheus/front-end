import React from "react";
import { Button } from "primereact/button";
import { Menu } from "primereact/menu";
import { Image } from "primereact/image";

import "../../styles/Dashboard/sidebar.css";
import { Link } from "react-router-dom";

export default function SidebarComponent() {
  const items = [
    { label: "Dashboard", icon: "pi pi-fw pi-home", url: "/dashboard" },
    { label: "Produtos", icon: "pi pi-fw pi-box", url: "produtos" },
    { label: "Pedidos", icon: "pi pi-fw pi-receipt", url: "pedidos" },
    {
      label: "Minha Integração",
      icon: "pi pi-fw pi-slack",
      url: "minhaIntegracao",
    },
    { label: "Comissões", icon: "pi pi-fw pi-dollar", url: "comissoes" },
    { label: "Vendedores", icon: "pi pi-fw pi-users", url: "vendedores" },
    { label: "Configuracões", icon: "pi pi-fw pi-cog", url: "configuracoes" },
    { label: "Ranking", icon: "pi pi-fw pi-sort-up-fill", url: "rankings" },
    { label: "Sair", icon: "pi pi-fw pi-sign-out", url: "/" },
  ];

  return (
    <aside className="custom-sidebar">
      <Image
        className="container-loginFields-logo"
        src="../assets/logos/logoSouDrop.png"
        alt="SouDrop Logo"
        width="100"
      />
      {items.map((el) => {
        return (
          <Link className="backgroundMenuSidebar" to={el.url}>
            <li className="backgroundMenuSidebar__items">
              <i className={el.icon} alt="" width={50} />
              <p>{el.label}</p>
            </li>
          </Link>
        );
      })}
    </aside>
  );
}
