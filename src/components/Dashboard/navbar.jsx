import "../../styles/Dashboard/navbar.css";
import { useAuth } from "../../hooks/useAuth";

import { Avatar } from "primereact/avatar";
export default function Navbar() {
  const { user } = useAuth();

  return (
    <div className="navbar">
      <div className="navbar-container">
        <h1>Dashboard</h1>
        <div className="navbar-profile">
          <h2>Saldo: R$ 00,00</h2>
          <i className="pi pi-bell"></i>
          <p>{user && user.email ? user.email : 'Usuário Anônimo'}</p>
          <Avatar icon="pi pi-user" shape="circle" size="large" />
        </div>
      </div>
    </div>
  );
}
