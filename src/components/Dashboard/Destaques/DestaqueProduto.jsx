import { useEffect, useState } from "react";
import ModalProduto from "../../CadastrarProduto/modalProduto";
import { getProductById } from "../../CadastrarProduto/Services/produtosService";

export default function DestaqueProduto({ produto }) {
  const [isVisible, setIsVisible] = useState(false);
  const [editProduto, setEditProduto] = useState({});

  const toggleModal = () => {
    setIsVisible(!isVisible);
  };

  const closeModal = () => {
    setIsVisible(false);
  };


    const pegaUmProduto = async () => {
      console.log(produto.id);
      const produtoPorId = await getProductById(produto.id);
      setEditProduto(produtoPorId);
    };
  
  return (
    <>
      <div className="destaqueProduto" onClick={toggleModal}>
        <div className="destaqueProduto__conteudo" onClick={() => pegaUmProduto()}>
          <img width={100} src={produto.imagemURL} alt={produto.nome}></img>
          <p className="destaqueProduto__nome">{produto.nome}</p>
          <p className="destaqueProduto__descricao">{produto.descricaoCurta}</p>
          <p className="destaqueProduto__preco">R${produto.preco}</p>
        </div>
        <div className="destaqueProduto__acoes">
          <button className="button">Detalhes</button>
        </div>
      </div>
      <ModalProduto onClose={closeModal} produto={editProduto} />
    </>
  );
}
