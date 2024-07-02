import { Dialog } from "primereact/dialog";

export default function ModalPedidos({ isVisible, pedido, onClose }) {
    return (
        <Dialog
            blockScroll={true}
            draggable={false}
            visible={isVisible}
            style={{ width: "80vw", height: "100vh" }}
            modal={true}
            onHide={onClose}
        >
            <div>
                <img src="www.picsum.photos/500" alt="Imagem do Produto" />
                <p>Numero do pedido: </p>
                {/* <p>Numero do pedido: {pedido.id}</p> */}
                <p>Total do Pedido</p>
                <p>Situacão</p>
                <p>Data e Hora</p>
            </div>
            {/* <StatusPedidosCard pedido={pedido} /> */}
        </Dialog>
    );
}
