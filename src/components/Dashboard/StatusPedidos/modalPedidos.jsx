import { Dialog } from "primereact/dialog";
import { useEffect, useState } from "react";
import { getPedidoById } from "../../../pages/PagesService/pedidosService";
import { formatDate } from "../../../common/formatDate";

export default function ModalPedidos({ isVisible, pedido, onClose }) {
  const [selectedPedido, setSelectedPedido] = useState(null);
 // const [produto, setProduto] = useState(null);

  useEffect(() => {
    const getUmPedido = async () => {
      if (pedido) {
        const pedidoVenda = await getPedidoById(pedido.id);
        setSelectedPedido(pedidoVenda.data);
      }
    };

    // const pegaProduto = async () => {
    //     if (selectedPedido){
    //         const product = await getPedidoById(selectedPedido.itens[0].produtoId);
    //         setProduto(product.data);
    //     }
    // }

    getUmPedido();
    // pegaProduto();
  }, [pedido]);

  return (
    <Dialog
      blockScroll={true}
      draggable={false}
      visible={isVisible}
      style={{ width: "80vw", height: "100vh" }}
      modal={true}
      onHide={onClose}
    >
      {selectedPedido && (
        <div>
          <p>Numero do pedido: {selectedPedido.numero}</p>
          <p>Produto: {selectedPedido.itens[0].descricao}</p>
          <p>Quantidade: {selectedPedido.itens[0].quantidade}</p>
          <p>Total do Pedido: R$ {selectedPedido.total}</p>
          <p>Data de Venda: {formatDate(selectedPedido.data)}</p>
          <p>Data Prevista: {formatDate(selectedPedido.dataPrevista)}</p>
        </div>
      )}
      {/* <StatusPedidosCard pedido={pedido} /> */}
    </Dialog>
  );


}
