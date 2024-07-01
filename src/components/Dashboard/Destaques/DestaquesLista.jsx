import React, { useEffect, useState } from "react";
import DestaqueProduto from "./DestaqueProduto";
import {getAllProducts} from "../../CadastrarProduto/Services/produtosService";

export default function DestaquesLista() {

  const [produtos, setProdutos] = useState([]);

  const getProdutos = async () => {
    try {
      const response = await getAllProducts();
      setProdutos(response.data);
    } catch (error) {
      console.error("Erro ao obter produtos:", error);
    }
  };

  useEffect(() => {
    getProdutos();
  }, [produtos]);

  return (
    <div className="destaquesConjunto">
      <div className="scrollContainer">
        {produtos.map((produto) => (
          <DestaqueProduto key={produto.id} produto={produto} />
        ))}
      </div>
    </div>
  );
}
