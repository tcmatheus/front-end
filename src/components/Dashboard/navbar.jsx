import "../../styles/Dashboard/navbar.css";

import { Avatar } from "primereact/avatar";
export default function Navbar() {
  const userType = localStorage.getItem("userType");

  return (
    <div className="navbar">
      <div className="navbar-container">
        <h1>Dashboard - {userType}</h1>
        <div className="navbar-profile">
          <i className="pi pi-bell"></i>
          <p>Lucas Almada</p>
          <Avatar icon="pi pi-user" shape="circle" size="large" />
        </div>
      </div>
    </div>
  );
}
