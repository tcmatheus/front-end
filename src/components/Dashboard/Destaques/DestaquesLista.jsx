import React, { useEffect, useState } from "react";
import DestaqueProduto from "./DestaqueProduto";
import ModalProduto from "../../CadastrarProduto/modalProduto";
import { getAllProducts } from "../../CadastrarProduto/Services/produtosService";

export default function DestaquesLista() {
  const [produtos, setProdutos] = useState([]);
  const [selectedProduto, setSelectedProduto] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isloading, setIsLoading] = useState([]);

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

  const handleProdutoClick = (produto) => {
    setSelectedProduto(produto);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedProduto(null);
  };

  return (
    <div className="destaquesConjunto">
      {isloading ? (
        <div className="loading" />
      ) : (
        <>
          {produtos.map((produto) => (
            <div onClick={() => handleProdutoClick(produto)}>
              <DestaqueProduto key={produto.id} produto={produto} />
            </div>
          ))}
        </>
      )}
      {isModalVisible && (
        <ModalProduto
          isVisible={isModalVisible}
          onClose={handleCloseModal}
          produto={selectedProduto}
        />
      )}
    </div>
  );
}
