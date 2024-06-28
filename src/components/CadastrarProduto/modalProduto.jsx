import { Dialog } from "primereact/dialog";
import CadastrarProduto from "./cadastrarProduto";

export default function ModalProduto({ isVisible, onClose, produto }) {
  return (
    <Dialog
      blockScroll={true}
      draggable={false}
      visible={isVisible}
      style={{ width: "80vw", height: "100vh" }}
      onHide={onClose}
      modal={true}
    >
      <CadastrarProduto produto={produto}/>
    </Dialog>
  );
}
