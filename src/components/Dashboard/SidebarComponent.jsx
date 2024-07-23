import React from "react";
import "../../styles/Dashboard/sidebar.css";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../../components/Login/Services/loginService";
import { useState } from "react";

export default function SidebarComponent() {
  const [isHovered, setIsHovered] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // TODO: Mais pra frente, adicionar um botão para abrir e fechar o sidebar 
  // const toggleSidebar = () => {
  //   setIsSidebarOpen(!isSidebarOpen);
  // };

  const items = [
    { label: "Dashboard", icon: "pi pi-fw pi-home", url: "/dashboard" },
    { label: "Produtos", icon: "pi pi-fw pi-box", url: "/dashboard/produtos" }, // Certifique-se de que a URL esteja correta
    { label: "Pedidos", icon: "pi pi-fw pi-receipt", url: "/dashboard/pedidos" },
    { label: "Integração", icon: "pi pi-fw pi-slack", url: "/dashboard/integracao" }, // Certifique-se de que a URL esteja correta
    { label: "Fornecedores", icon: "pi pi-fw pi-truck", url: "fornecedores" },
    { label: "Vendedores", icon: "pi pi-fw pi-users", url: "/dashboard/vendedores" },

  ];

  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Erro ao sair:", error.message);
      });
  };

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
        <div className="backgroundMenuSidebar">
          <li
            onClick={() => handleLogout()}
            className="backgroundMenuSidebar__items"
          >
            <i className="pi pi-fw pi-sign-out" alt="" width={50} />
            <p>Sair</p>
          </li>
        </div>
      </aside>
    </>
  );
}
