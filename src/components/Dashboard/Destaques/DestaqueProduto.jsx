import { Dialog } from "primereact/dialog";
import "../../../styles/Dashboard/Destaques/destaques.css";
import { useState } from "react";

export default function DestaqueProduto({ produto }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="destaquesConjunto">
      <div className="destaqueProduto" onClick={() => setIsVisible(true)}>
        <img width={100} src={produto.imagem}></img>
        <p>Preço de Custo: ${produto.precoCusto}</p>
        <p>Preço de Venda: ${produto.precoVenda}</p>
      </div>
      <Dialog draggable={false}
        visible={isVisible}
        onHide={() => {
          if (!isVisible) return;
          setIsVisible(false);
        }}
      >
        <img width={500} src={produto.imagem}></img>
        <p>Preço de Custo: ${produto.precoCusto}</p>
        <p>Preço de Venda: ${produto.precoVenda}</p>
      </Dialog>
    </div>
  );
}
