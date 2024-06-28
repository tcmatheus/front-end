import { useState } from "react";
import ModalProduto from "../../CadastrarProduto/modalProduto";

export default function DestaqueProduto({ produto }) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleModal = () => {
    setIsVisible(!isVisible);
  };

  const closeModal = () => {
    setIsVisible(false);
  };

  return (
    <div className="destaquesConjunto">
      <div className="destaqueProduto" onClick={toggleModal}>
        <img width={100} src={produto.imagemURL} alt={produto.nome}></img>
        <h3 className="destaqueProduto__nome">{produto.nome}</h3>
        <p className="destaqueProduto__nome">Preço: R${produto.preco}</p>
      </div>
      <ModalProduto isVisible={isVisible} onClose={closeModal} produto={produto} />
    </div>
  );
}
