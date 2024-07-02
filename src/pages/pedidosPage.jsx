import { useEffect, useState } from "react";
import Ranking from "../components/Dashboard/Ranking/ranking";
import StatusPedidosSection from "../components/Dashboard/StatusPedidos/statusPedidosSection";
import "../styles/pedidosPage.css";
import ModalPedidos from "../components/Dashboard/StatusPedidos/modalPedidos";
import { getPedidos } from "./PagesService/pedidosService";

export default function PedidosPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pedidos, setPedidos] = useState([]);

  const handleClickModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchPedidos = async () => {
      try {
        const pedidosData = await getPedidos();
        setPedidos(pedidosData.data);

        
      } catch (error) {
        console.error("Erro ao obter pedidos:", error);
      }
    };

    fetchPedidos();
  }, []);

  return (
    <section className="pedidos__container">
      <h1>Pedidos</h1>
      <>
        <StatusPedidosSection />

        <div>
          {pedidos.map((el) => {
            return (
              <div>
                <p>{el.numero}</p>
                <p>Data: {el.data}</p>
                <p>Data Saída: {el.dataSaida}</p>
                <p>Data Prevista: {el.dataPrevista}</p>
                <p>Total: R$ {el.total}</p>
              </div>
            );
          })}
          <p></p>
        </div>
        <button onClick={handleClickModal}>CLICA</button>
        <div>
          <ModalPedidos isVisible={isModalOpen} onClose={handleCloseModal} />
        </div>
        {/* <Ranking /> */}
      </>
    </section>
  );
}
