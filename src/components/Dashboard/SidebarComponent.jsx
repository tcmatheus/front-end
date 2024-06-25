import React from "react";
import { Image } from "primereact/image";

import "../../styles/Dashboard/sidebar.css";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../../services/Login/loginService";

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
  ];

  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        navigate("/");  // Redireciona para a tela de login após o logout
      })
      .catch(error => {
        console.error("Erro ao sair:", error.message);
      });
  };

  return (
    <aside className="custom-sidebar">
      <Image
        className="container-loginFields-logo"
        src="../assets/logos/logoSouDrop.png"
        alt="SouDrop Logo"
        width="100"
      />
    
      {items.map((el) => (
        <Link
          className="backgroundMenuSidebar"
          to={el.url}
        >
          <li className="backgroundMenuSidebar__items">
            <i className={el.icon} alt="" width={50} />
            <p>{el.label}</p>
          </li>
        </Link>
      ))}
      <div className="backgroundMenuSidebar">
        <li onClick={() => handleLogout()} className="backgroundMenuSidebar__items">
          <i className="pi pi-fw pi-sign-out" alt="" width={50} />
          <p>Sair</p>
        </li>
      </div>
    </aside>
  );
}
