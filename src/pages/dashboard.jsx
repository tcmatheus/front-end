import "../styles/Dashboard/dashboardPage.css";
import "../styles/Dashboard/card.css";
import "../styles/Dashboard/Destaques/destaques.css";

import DashboardVendedor from "../components/Dashboard/dashboardVendedor";
import DashboardFornecedor from "../components/Dashboard/dashboardFornecedor";

export default function DashboardPage() {

  const userType = localStorage.getItem("userType");

  return (
    <div className="dashboardContainer">
      {userType === "Vendedor" && <DashboardVendedor/>}
      {userType === "Fornecedor" && <DashboardFornecedor/>}
    </div>
  );
}
