import React, { useEffect, useState } from "react";
import DestaqueProduto from "./DestaqueProduto";
import { getAllProducts } from "../../CadastrarProduto/Services/produtosService";

export default function DestaquesLista() {
  const [isloading, setIsLoading] = useState([]);

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
    getProdutos().then(() => {
      produtos.sort((a, b) => a.nome.localeCompare(b.nome));

      setIsLoading(false);
    });
  }, [produtos]);

  return (
    <div className="destaquesConjunto">
      {isloading ? (
        <div className="loading" />
      ) : (
        <>
          {" "}
          {produtos.map((produto) => (
            <DestaqueProduto key={produto.id} produto={produto} />
          ))}
        </>
      )}
    </div>
  );
}
