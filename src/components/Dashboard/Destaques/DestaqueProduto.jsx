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
    <>
      <div className="destaqueProduto" onClick={toggleModal}>
        <div className="destaqueProduto__conteudo">
          <img width={100} src={produto.imagemURL} alt={produto.nome}></img>
          <p className="destaqueProduto__nome">{produto.nome}</p>
          <p className="destaqueProduto__descricao">{produto.descricaoCurta}</p>
          <p className="destaqueProduto__preco">R${produto.preco}</p>
        </div>
        <div className="destaqueProduto__acoes">
          <button className="button">Detalhes</button>
        </div>
      </div>
      <ModalProduto onClose={closeModal} produto={produto} />
    </>
  );
}
