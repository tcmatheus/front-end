import Ranking from "../components/Dashboard/Ranking/ranking";
import '../styles/pedidosPage.css'

export default function PedidosPage() {

  const userType = localStorage.getItem("userType");

  return (
    <section className="pedidos__container">
      <h1>Pedidos</h1>
      {userType === "Fornecedor" && (
        <>
          <Ranking />
        </>
      )}
    </section>
  );
}
