import Ranking from "../components/Dashboard/Ranking/ranking";
import StatusPedidosSection from "../components/Dashboard/StatusPedidos/statusPedidosSection";
import "../styles/pedidosPage.css";

export default function PedidosPage() {
  const userType = localStorage.getItem("userType");

  return (
    <section className="pedidos__container">
      <h1>Pedidos</h1>
      {userType === "Fornecedor" && (
        <>
          <StatusPedidosSection />
          <Ranking />
        </>
      )}
    </section>
  );
}
