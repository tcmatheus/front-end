import { useEffect, useState } from "react";
import StatusPedidosSection from "../components/Dashboard/StatusPedidos/statusPedidosSection";
import "../styles/pedidosPage.css";
import ModalPedidos from "../components/Dashboard/StatusPedidos/modalPedidos";
import { getPedidoById, getPedidos } from "./PagesService/pedidosService";
import { formatDate } from "../common/formatDate";

export default function PedidosPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPedido, setSelectedPedido] = useState(null);
  const [pedidos, setPedidos] = useState([]);

  // const [produto, setProduto] = useState(null);

  const handleClickModal = (pedido) => {
    setSelectedPedido(pedido);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPedido(null);
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

    
    // const pegaProduto = async () => {
    //     if (selectedPedido){
    //         const product = await getProdutoById(selectedPedido.itens[0].produto.id);
    //         setProduto(product.data);
    //     }
    // }


    fetchPedidos();
    // pegaProduto()
  }, []);

  return (
    <section className="pedidos__container">
      <h1>Pedidos</h1>
      <>
        <StatusPedidosSection />
        <div>
          {pedidos.map((pedido) => (
            <div key={pedido.numero} onClick={() => handleClickModal(pedido)}>
              {/* <p>{produto}</p> */}
              <p>Pedido: {pedido.numero}</p>
              <p>Data de Venda: {formatDate(pedido.data)}</p>
              <p>Data Prevista: {formatDate(pedido.dataPrevista)}</p>
              <p>Total do pedido: R$ {pedido.total}</p>
            </div>
          ))}
        </div>
        {selectedPedido && (
          <ModalPedidos
            pedido={selectedPedido}
            isVisible={isModalOpen}
            onClose={handleCloseModal}
          />
        )}
        {/* <Ranking /> */}
      </>
    </section>
  );
}
