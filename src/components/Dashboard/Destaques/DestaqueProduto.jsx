import "../../../styles/Dashboard/Destaques/destaques.css";
import { useState } from "react";
import ModalProduto from "../../CadastrarProduto/modalProduto";

export default function DestaqueProduto({ produto }) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleModal = () => {
    setIsVisible(!isVisible);
  };

  const closeModal = (e) => {
    if (e.target.classList.contains('modalBackdrop')) {
      toggleModal();
    }
  };

  return (
    <div className="destaquesConjunto">
      <div className="destaqueProduto" onClick={toggleModal}>
        <img width={100} src={produto.imagemURL}></img>
        <h3 className="destaqueProduto__nome">{produto.nome}</h3>
        <p className="destaqueProduto__nome">Preço: R${produto.preco}</p>
      </div>
      {isVisible && (
        <div className="modalBackdrop" onClick={closeModal}>
          <ModalProduto isVisible={isVisible} produto={produto} onClose={closeModal} />
        </div>
      )}
    </div>
  );
}
