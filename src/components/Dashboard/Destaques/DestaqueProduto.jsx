import "../../../styles/Dashboard/Destaques/destaques.css";
import { useState } from "react";
import ModalProduto from "../../CadastrarProduto/modalProduto";

export default function DestaqueProduto({ produto }) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="destaquesConjunto">
      <div className="destaqueProduto" onClick={() => setIsVisible(true)}>
        <img width={100} src={produto?.imagemURL}></img>
        <h3 className="destaqueProduto__nome">{produto.nome}</h3>
        <p className="destaqueProduto__nome">Preço: R${produto.preco}</p>
        <p className="destaqueProduto__nome">Preço: R${produto.descricaoCurta}</p>
        
        {/* <p className="destaqueProduto__custo">Preço de Custo: {produto.precoCusto}</p> */}
        {/* <p className="destaqueProduto__venda">Preço de Venda: {produto.precoVenda}</p> */}
      </div>
      <div onClick={() => setIsVisible(true)}>
        {isVisible === true && <ModalProduto isVisible={isVisible} produto={produto}/>}
      </div>
    </div>
  );
}
