import Ranking from "../components/Dashboard/Ranking/ranking";
import StatusPedidosSection from "../components/Dashboard/StatusPedidos/statusPedidosSection";
import "../styles/pedidosPage.css";

export default function PedidosPage() {
  return (
    <section className="pedidos__container">
      <h1>Pedidos</h1>

      <>
        <StatusPedidosSection />
        <Ranking />
      </>
    </section>
  );
}
