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
        <img width={500} src={produto.imagemURL} alt={produto.nome}></img>
        <h3 className="destaqueProduto__nome">{produto.nome}</h3>
        <p className="destaqueProduto__preco">Preço: R${produto.preco}</p>
        <div className="destaqueProduto__acoes">
          <button className="button">Detalhes</button>
        </div>
      </div>
      <ModalProduto onClose={closeModal} produto={produto} />
    </div>
  );
}

