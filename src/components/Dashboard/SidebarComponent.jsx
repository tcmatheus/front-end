import React, { useState } from "react";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import { logout } from "../Login/Services/loginService";
import "../../styles/Dashboard/sidebar.css";

export default function SidebarComponent() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const items = [
    { label: "Dashboard", icon: "pi pi-fw pi-home", url: "/dashboard" },
    { label: "Produtos", icon: "pi pi-fw pi-box", url: "produtos" },
    { label: "Pedidos", icon: "pi pi-fw pi-receipt", url: "pedidos" },
    { label: "Integração", icon: "pi pi-fw pi-slack", url: "minhaIntegracao" },
    { label: "Comissões", icon: "pi pi-fw pi-dollar", url: "comissoes" },
    { label: "Vendedores", icon: "pi pi-fw pi-users", url: "vendedores" },
    { label: "Configurações", icon: "pi pi-fw pi-cog", url: "configuracoes" },
    { label: "Ranking", icon: "pi pi-fw pi-sort-up-fill", url: "rankings" },
    { label: "Sair", icon: "pi pi-fw pi-sign-out", url: "/" },
  ];

  const sidebarClass = isSidebarOpen || isHovered ? "open" : "closed";

  return (
    <>
      {/* TODO: Mais pra frente, adicionar um botão para abrir e fechar o sidebar */}
      {/* <Button
        icon={isSidebarOpen ? "pi pi-angle-left" : "pi pi-angle-right"}
        onClick={toggleSidebar}
        className={`toggle-sidebar-button ${sidebarClass} ${
          !isSidebarOpen && isHovered ? "hidden" : ""
        }`}
      /> */}
      <aside
        className={`custom-sidebar ${sidebarClass}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          className={`container-loginFields-logo ${sidebarClass}`}
          src="../assets/logos/logoSouDrop.png"
          alt="SouDrop Logo"
        />
        {items.map((el) => (
          <Link
            onClick={() => logout(el.label)}
            className="backgroundMenuSidebar"
            to={el.url}
            key={el.label}
          >
            <li className="backgroundMenuSidebar__items">
              <i className={el.icon} alt="" width={50} />
              <p>{el.label}</p>
            </li>
          </Link>
        ))}
      </aside>
    </>
  );
}
