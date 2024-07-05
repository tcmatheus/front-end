import { Dialog } from "primereact/dialog";
import { useEffect, useState } from "react";
import { getPedidoById } from "../../../pages/PagesService/pedidosService";
import { formatDate } from "../../../common/formatDate";
import "./ModalPedidos.css";

export default function ModalPedidos({ isVisible, pedido, onClose }) {
  const [selectedPedido, setSelectedPedido] = useState(null);

  useEffect(() => {
    const getUmPedido = async () => {
      if (pedido) {
        const pedidoVenda = await getPedidoById(pedido.id);
        setSelectedPedido(pedidoVenda.data);
      }
    };

    getUmPedido();
  }, [pedido]);

  return (
    <Dialog
      className="custom-modal"
      blockScroll={true}
      draggable={false}
      visible={isVisible}
      style={{ width: "80vw", height: "auto" }}
      modal={true}
      onHide={onClose}
    >
      {selectedPedido && (
        <div className="modal-content">
          <div className="modal-header">
            <h2>Número do pedido: {selectedPedido.numero}</h2>
            <h3>Data do Pedido: {formatDate(selectedPedido.data)}</h3>
            <h3>Total do Pedido: R$ {selectedPedido.total}</h3>
            <button onClick={onClose} className="close-button">X</button>
          </div>
          <div className="modal-body">
            {selectedPedido.itens.map((item, index) => (
              <div key={index} className="modal-item">
                <img src={item.produto.imagem} alt={item.produto.nome} />
                <div className="item-details">
                  <h3>{item.produto.nome}</h3>
                  <p>Vendas na última semana: {item.produto.vendas}</p>
                  <p>Popularidade: {item.produto.popularidade} ★</p>
                  <p>Preço de Compra: R$ {item.precoCompra}</p>
                  <p>Preço de Venda: R$ {item.precoVenda}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </Dialog>
  );
}
